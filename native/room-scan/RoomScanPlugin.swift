import ARKit
import Capacitor
import SceneKit
import UIKit
import AVFoundation

// Register this instance in the iOS bridge; no native methods are called by the website.
@objc(RoomScanPlugin)
public class RoomScanPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "RoomScanPlugin"
    public let jsName = "RoomScan"
    public let pluginMethods = [CAPPluginMethod(name: "scan", returnType: CAPPluginReturnPromise)]

    @objc func scan(_ call: CAPPluginCall) {
        guard ARWorldTrackingConfiguration.isSupported else {
            call.reject("ARKit world tracking is not supported on this device."); return
        }
        AVCaptureDevice.requestAccess(for: .video) { granted in
            DispatchQueue.main.async {
                guard granted else { call.reject("Camera permission is required."); return }
                guard let presenter = self.bridge?.viewController else { call.reject("Scanner unavailable."); return }
                let scanner = RoomScanViewController()
                scanner.modalPresentationStyle = .fullScreen
                scanner.complete = { result in call.resolve(result) }
                scanner.cancel = { call.reject("Scan cancelled.") }
                presenter.present(scanner, animated: true)
            }
        }
    }
}

final class RoomScanViewController: UIViewController, ARSessionDelegate {
    private let sceneView = ARSCNView()
    private let status = UILabel()
    private var meshAnchors: [UUID: ARMeshAnchor] = [:]
    private var points: [UInt64: SIMD3<Float>] = [:]
    private var cloudNode = SCNNode()
    private var lastUpdate: TimeInterval = 0
    private let hasMesh = ARWorldTrackingConfiguration.supportsSceneReconstruction(.mesh)
    var complete: (([String: Any]) -> Void)?
    var cancel: (() -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        sceneView.frame = view.bounds
        sceneView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.addSubview(sceneView)
        sceneView.session.delegate = self
        sceneView.automaticallyUpdatesLighting = true
        sceneView.scene.rootNode.addChildNode(cloudNode)
        status.numberOfLines = 0; status.textColor = .white; status.backgroundColor = .black.withAlphaComponent(0.7)
        status.textAlignment = .center
        status.text = hasMesh ? "Move around the room. Green surfaces are reconstructed." : "Move around the room. Green points are tracked features, not reconstructed walls."
        let finish = UIButton(type: .system); finish.setTitle("Finish", for: .normal)
        finish.addTarget(self, action: #selector(finishScan), for: .touchUpInside)
        let close = UIButton(type: .system); close.setTitle("Cancel", for: .normal)
        close.addTarget(self, action: #selector(cancelScan), for: .touchUpInside)
        let bar = UIStackView(arrangedSubviews: [close, finish]); bar.distribution = .fillEqually
        bar.backgroundColor = .systemBackground
        for child in [status, bar] { child.translatesAutoresizingMaskIntoConstraints = false; view.addSubview(child) }
        NSLayoutConstraint.activate([
            status.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor), status.leadingAnchor.constraint(equalTo: view.leadingAnchor), status.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            bar.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor), bar.leadingAnchor.constraint(equalTo: view.leadingAnchor), bar.trailingAnchor.constraint(equalTo: view.trailingAnchor), bar.heightAnchor.constraint(equalToConstant: 60)
        ])
        let config = ARWorldTrackingConfiguration()
        config.worldAlignment = .gravity
        if hasMesh { config.sceneReconstruction = .mesh; sceneView.debugOptions.insert(.showSceneUnderstanding) }
        sceneView.session.run(config)
    }

    override func viewWillDisappear(_ animated: Bool) { super.viewWillDisappear(animated); sceneView.session.pause() }
    func session(_ session: ARSession, didAdd anchors: [ARAnchor]) { updateMeshes(anchors) }
    func session(_ session: ARSession, didUpdate anchors: [ARAnchor]) { updateMeshes(anchors) }
    func session(_ session: ARSession, didRemove anchors: [ARAnchor]) { for anchor in anchors { meshAnchors.removeValue(forKey: anchor.identifier) } }
    private func updateMeshes(_ anchors: [ARAnchor]) { for case let anchor as ARMeshAnchor in anchors { meshAnchors[anchor.identifier] = anchor } }

    func session(_ session: ARSession, didUpdate frame: ARFrame) {
        guard frame.timestamp - lastUpdate > 0.3 else { return }; lastUpdate = frame.timestamp
        if !hasMesh, let features = frame.rawFeaturePoints {
            for i in features.points.indices { if points.count < 30000 || points[features.identifiers[i]] != nil { points[features.identifiers[i]] = features.points[i] } }
            let vertices = points.values.map { SCNVector3($0.x, $0.y, $0.z) }
            let source = SCNGeometrySource(vertices: vertices)
            let element = SCNGeometryElement(indices: Array(0..<Int32(vertices.count)), primitiveType: .point)
            element.pointSize = 4; element.minimumPointScreenSpaceRadius = 2; element.maximumPointScreenSpaceRadius = 5
            let geometry = SCNGeometry(sources: [source], elements: [element])
            geometry.firstMaterial?.diffuse.contents = UIColor.systemGreen
            geometry.firstMaterial?.lightingModel = .constant
            DispatchQueue.main.async { self.cloudNode.geometry = geometry }
        }
        let tracked: Bool
        if case .normal = frame.camera.trackingState { tracked = true } else { tracked = false }
        DispatchQueue.main.async {
            self.status.text = tracked ? (self.hasMesh ? "\(self.meshAnchors.count) mesh sections · keep moving" : "\(self.points.count) tracked points · XS surface fusion not installed") : "Tracking limited. Move slowly toward a well-lit, textured area."
        }
    }

    func session(_ session: ARSession, didFailWithError error: Error) { DispatchQueue.main.async { self.status.text = error.localizedDescription } }
    @objc private func cancelScan() { sceneView.session.pause(); dismiss(animated: true) { self.cancel?() } }
    @objc private func finishScan() {
        sceneView.session.pause()
        var positions: [Float] = []; var indices: [Int] = []
        for anchor in meshAnchors.values {
            let geometry = anchor.geometry; let base = positions.count / 3
            for i in 0..<geometry.vertices.count {
                let address = geometry.vertices.buffer.contents().advanced(by: geometry.vertices.offset + i * geometry.vertices.stride)
                let vertex = address.assumingMemoryBound(to: SIMD3<Float>.self).pointee
                let world = anchor.transform * SIMD4<Float>(vertex.x, vertex.y, vertex.z, 1)
                positions += [world.x, world.y, world.z]
            }
            let faces = geometry.faces
            for i in 0..<(faces.count * faces.indexCountPerPrimitive) {
                let address = faces.buffer.contents().advanced(by: i * faces.bytesPerIndex)
                let index = faces.bytesPerIndex == 2 ? Int(address.assumingMemoryBound(to: UInt16.self).pointee) : Int(address.assumingMemoryBound(to: UInt32.self).pointee)
                indices.append(base + index)
            }
        }
        let sparse = points.values.flatMap { [$0.x, $0.y, $0.z] }
        guard !positions.isEmpty || !sparse.isEmpty else { status.text = "No geometry captured. Continue moving before finishing."; let config = ARWorldTrackingConfiguration(); if hasMesh { config.sceneReconstruction = .mesh }; sceneView.session.run(config); return }
        let result: [String: Any] = ["positions": positions, "indices": indices, "points": sparse, "source": positions.isEmpty ? "arkit-points" : "lidar-mesh"]
        dismiss(animated: true) { self.complete?(result) }
    }
}