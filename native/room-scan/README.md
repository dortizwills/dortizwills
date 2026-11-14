# Native room scanning: current delivery boundary

The website cannot use ARKit, TrueDepth, Core ML or Apple's LiDAR scene reconstruction. This Capacitor iOS extension supplies real ARKit tracking and live spatial feedback, not a compass-based imitation.

## Implemented source, not device-verified

- LiDAR iPhones: native `ARWorldTrackingConfiguration.sceneReconstruction = .mesh`, live mesh overlay, and world-space triangle geometry returned to the shared Three.js viewer.
- iPhone XS: rear-camera 6DoF ARKit tracking and a live sparse feature-point display. Finish returns a point cloud, explicitly labeled as such. **It does not yet reconstruct dense walls on XS.** Sparse tracking points must not be passed off as reconstructed surfaces.
- Browser: exactly four corner photographs plus user-measured room dimensions create an assisted room shell. Photos stay reference views rather than being arbitrarily stretched across walls. This is not automatic photo reconstruction.

## Build on a Mac

1. Update the local checkout from the connected repository; run `npm install`, `npm run build`, `npx cap add ios`, and `npx cap sync`.
2. Add both Swift files in this directory to the iOS App target in Xcode. Set the main storyboard bridge controller class to `RoomBridgeViewController` (module: App).
3. Add `NSCameraUsageDescription` to App/Info.plist: “Use the camera to map your room.”
4. Set iOS deployment target to at least 15.0 and choose a valid signing team. Open with `npx cap open ios` and run on a physical phone. Camera scanning is not a simulator verification.
5. The Capacitor preview server is for development only. Remove `server` from `capacitor.config.ts` for bundled release builds. Android may use the website fallback; this plugin is iOS-only.
6. After every update, rebuild web assets and run `npx cap sync`. Do not place secret keys in the mobile bundle.

## Remaining XS depth/fusion work

This is a research and on-device validation boundary, not a complete Scaniverse pipeline:

1. ARKit synchronized RGB, intrinsics and world camera poses (implemented tracking foundation).
2. Integrate a compatible **metric** Core ML checkpoint with validated XS performance, conversion, memory and deployment requirements. Ordinary Depth Anything V2 Small returns relative depth; do not treat values as meters. Small weights are Apache-2.0; larger variants have different licenses. Apple's published conversion does not provide XS benchmarks.
3. Validate depth scale and temporal consistency against measured rooms before feeding camera/depth/poses to a vetted TSDF integration engine. Open3D's documented reconstruction is not a turnkey native iOS plugin; StandardCyborg targets front-facing TrueDepth, not rear room depth. InfiniTAM's older TrueDepth iOS forks need current Xcode and license review.
4. Add actual incremental mesh preview and mesh export only when fusion runs successfully. Never generate a synthetic box on failure.

No model or TSDF implementation is bundled, so the XS dense-mesh flow is **blocked on this integration and a physical-device test**, not claimed complete. No cloud reconstruction service has been configured or billed.

## Sources

- https://github.com/StandardCyborg/StandardCyborgCocoa
- https://developer.apple.com/documentation/arkit/arframe/rawfeaturepoints
- https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/scenereconstruction
- https://huggingface.co/apple/coreml-depth-anything-v2-small
- https://github.com/DepthAnything/Depth-Anything-V2/tree/main/metric_depth
- https://www.open3d.org/docs/latest/tutorial/t_reconstruction_system/integration.html
- https://github.com/neycyanshi/InfiniTAM_ios
- https://capacitorjs.com/docs/ios
- https://lovable.dev/blog/2025-02-03-how-to-build-a-mobile-app-with-lovable