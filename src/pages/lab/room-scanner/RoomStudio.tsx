import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, ThreeEvent, useLoader } from '@react-three/fiber';
import { OrbitControls, TransformControls, Html, useGLTF, Environment, Lightformer, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { CATALOG, FINISHES, ROOM, snap, classify, type CatalogItem, type PlacedItem, type SurfaceId, type Vec3 } from './studioRules';

type Finish = (typeof FINISHES)['floor'][number];
type Mode = 'inspect' | 'furnish' | 'remodel';

function finishTexture(f: Finish, repeat: [number, number]) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d')!; g.fillStyle = f.color; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 2;
  if (f.pattern === 'planks') for (let y = 0; y < 256; y += 32) { g.strokeRect(((y / 32) % 2) * 80, y, 256, 32); g.beginPath(); g.moveTo(((y / 32) % 3) * 70 + 40, y); g.lineTo(((y / 32) % 3) * 70 + 40, y + 32); g.stroke(); }
  if (f.pattern === 'tile') for (let i = 0; i <= 256; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); }
  if (f.pattern === 'plain') for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.04})`; g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); t.colorSpace = THREE.SRGBColorSpace; return t;
}

type HitHandler = (e: ThreeEvent<MouseEvent>, surface?: SurfaceId) => void;

function Surface({ id, finish, position, rotation, size, selected, onHit }: { id: SurfaceId; finish: Finish; position: Vec3; rotation: Vec3; size: [number, number]; selected: boolean; onHit: HitHandler }) {
  const tex = useMemo(() => finishTexture(finish, [size[0] / 1.2, size[1] / 1.2]), [finish, size]);
  return (
    <mesh position={position} rotation={rotation} receiveShadow onClick={(e) => onHit(e, id)}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={tex} roughness={0.85} emissive={selected ? '#6E856F' : '#000'} emissiveIntensity={selected ? 0.25 : 0} />
    </mesh>
  );
}

function ScannedModel({ url, onHit }: { url: string; onHit: HitHandler }) {
  const { scene } = useGLTF(url);
  const obj = useMemo(() => {
    const s = scene.clone(); const box = new THREE.Box3().setFromObject(s); const size = box.getSize(new THREE.Vector3());
    const k = Math.min(ROOM.width / size.x, ROOM.depth / size.z, ROOM.height * 1.5 / size.y) || 1;
    s.scale.setScalar(k); const b2 = new THREE.Box3().setFromObject(s); const c = b2.getCenter(new THREE.Vector3());
    s.position.set(-c.x, -b2.min.y, -c.z); return s;
  }, [scene]);
  return <primitive object={obj} onClick={(e: ThreeEvent<MouseEvent>) => onHit(e)} />;
}

function ItemModel({ url, size }: { url: string; size: Vec3 }) {
  const { scene } = useGLTF(url);
  const obj = useMemo(() => {
    const s = scene.clone(); const box = new THREE.Box3().setFromObject(s); const sz = box.getSize(new THREE.Vector3());
    s.scale.setScalar(Math.min(size[0] / sz.x, size[1] / sz.y, size[2] / sz.z) || 1);
    const b = new THREE.Box3().setFromObject(s); const c = b.getCenter(new THREE.Vector3()); s.position.sub(c); return s;
  }, [scene, size]);
  return <primitive object={obj} />;
}

function TexturedBox({ size, texture }: { size: Vec3; texture: string }) {
  const t = useLoader(THREE.TextureLoader, texture); t.colorSpace = THREE.SRGBColorSpace;
  return <mesh castShadow><boxGeometry args={size} /><meshStandardMaterial map={t} roughness={0.7} /></mesh>;
}

function Item({ item, selected, onSelect }: { item: PlacedItem; selected: boolean; onSelect: () => void }) {
  const [w, h, d] = item.size;
  const body = item.modelUrl ? <ItemModel url={item.modelUrl} size={item.size} />
    : item.texture ? <TexturedBox size={item.size} texture={item.texture} />
    : item.key === 'doorway' ? (<group><mesh><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#1c1d1a" /></mesh>
        {[-1, 1].map((s) => <mesh key={s} position={[s * (w / 2 + 0.04), 0, 0.02]}><boxGeometry args={[0.08, h, d + 0.04]} /><meshStandardMaterial color="#f2efe8" /></mesh>)}
        <mesh position={[0, h / 2 + 0.04, 0.02]}><boxGeometry args={[w + 0.16, 0.08, d + 0.04]} /><meshStandardMaterial color="#f2efe8" /></mesh></group>)
    : item.key === 'niche' ? (<group><mesh><boxGeometry args={[w, h, d]} /><meshStandardMaterial color="#3b3a36" /></mesh>
        <mesh position={[0, 0, 0.01]}><boxGeometry args={[w - 0.04, 0.02, d + 0.02]} /><meshStandardMaterial color="#d8d2c4" /></mesh></group>)
    : item.kind === 'cabinetry' ? (<group><mesh castShadow><boxGeometry args={item.size} /><meshStandardMaterial color={item.color} roughness={0.6} /></mesh>
        {[-1, 1].map((s) => <mesh key={s} position={[s * w / 4, 0, d / 2 + 0.005]}><boxGeometry args={[w / 2 - 0.05, h - 0.06, 0.01]} /><meshStandardMaterial color="#f7f5f0" /></mesh>)}</group>)
    : (<mesh castShadow><boxGeometry args={item.size} /><meshStandardMaterial color={item.color} roughness={0.7} /></mesh>);
  return (
    <group onClick={(e) => { e.stopPropagation(); onSelect(); }}>
      {body}
      {selected && <mesh><boxGeometry args={[w + 0.06, h + 0.06, d + 0.06]} /><meshBasicMaterial color="#6E856F" wireframe /></mesh>}
    </group>
  );
}

export type StudioProps = { scanUrl?: string; scanName: string; myItems: CatalogItem[]; onClose: () => void; onScanObject: () => void; onAddObjectGlb: (f: File) => void };

export default function RoomStudio({ scanUrl, scanName, myItems, onClose, onScanObject, onAddObjectGlb }: StudioProps) {
  const [mode, setMode] = useState<Mode>('furnish');
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [pending, setPending] = useState<CatalogItem | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [surface, setSurface] = useState<SurfaceId | null>(null);
  const [finishes, setFinishes] = useState<Record<SurfaceId, Finish>>({ floor: FINISHES.floor[0], 'wall-back': FINISHES.wall[0], 'wall-left': FINISHES.wall[0], 'wall-right': FINISHES.wall[0] });
  const [measure, setMeasure] = useState<THREE.Vector3[]>([]);
  const [msg, setMsg] = useState('Pick an item, then click the floor or a wall to place it.');
  const groupRefs = useRef<Record<string, THREE.Group | null>>({});
  const [, force] = useState(0);
  useEffect(() => { const t = setTimeout(() => force(1), 50); return () => clearTimeout(t); }, [selected]);

  const onHit: HitHandler = (e, sid) => {
    e.stopPropagation();
    const n = e.face ? e.face.normal.clone().transformDirection(e.object.matrixWorld) : new THREE.Vector3(0, 1, 0);
    const normal: Vec3 = [n.x, n.y, n.z]; const point: Vec3 = [e.point.x, e.point.y, e.point.z];
    if (mode === 'inspect') { setMeasure((m) => (m.length >= 2 ? [e.point.clone()] : [...m, e.point.clone()])); return; }
    if (mode === 'remodel' && !pending) { if (sid) { setSurface(sid); setMsg(`Selected ${sid.replace('-', ' ')}. Choose a finish or a home service.`); } else setMsg('Finishes apply to the room shell surfaces.'); return; }
    if (!pending) { setSelected(null); return; }
    const r = snap(pending, point, normal);
    if (!r) { setMsg(pending.mount === 'floor' ? `${pending.name} goes on the floor (${classify(normal)} clicked).` : `${pending.name} mounts on a wall — click a wall.`); return; }
    const id = crypto.randomUUID();
    setItems((c) => [...c, { id, key: pending.key, name: pending.name, kind: pending.kind, size: pending.size, color: pending.color, texture: pending.texture, modelUrl: pending.modelUrl, mount: pending.mount, ...r }]);
    setSelected(id); setPending(null); setMsg(`${pending.name} placed. Drag the arrows to move it.`);
  };

  const sel = items.find((i) => i.id === selected);
  const update = (id: string, p: Partial<PlacedItem>) => setItems((c) => c.map((i) => (i.id === id ? { ...i, ...p } : i)));
  const dist = measure.length === 2 ? measure[0].distanceTo(measure[1]) : null;
  const btn = (a: boolean) => `rounded-full border px-4 py-2 text-sm ${a ? 'border-foreground bg-foreground text-background' : 'border-border bg-background'}`;
  const { width: W, depth: D, height: H } = ROOM;
  const list = (arr: CatalogItem[]) => arr.map((c) => <button key={c.key} onClick={() => { setPending(c); setSelected(null); setMsg(`Click ${c.mount === 'floor' ? 'the floor' : 'a wall'} to place the ${c.name.toLowerCase()}.`); }} className={btn(pending?.key === c.key)}>{c.name}</button>);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        <strong className="mr-auto font-heading">{scanName}</strong>
        {(['inspect', 'furnish', 'remodel'] as Mode[]).map((m) => <button key={m} className={btn(mode === m)} onClick={() => { setMode(m); setPending(null); setMeasure([]); }}>{m === 'inspect' ? 'Inspect & Measure' : m === 'furnish' ? 'Furnish' : 'Remodel'}</button>)}
        <button className={btn(false)} onClick={onClose}>Close</button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="relative min-h-[50vh] flex-1" data-scene-ready>
          <Canvas shadows camera={{ position: [4.5, 3.6, 5.5], fov: 50 }} onPointerMissed={() => setSelected(null)}>
            <color attach="background" args={['#eef0ec']} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 6, 4]} intensity={1.2} castShadow />
            <Environment><Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} /><Lightformer intensity={1} color="#dfe8dc" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} /></Environment>
            {scanUrl ? (
              <Suspense fallback={<Html center>Loading scan…</Html>}><ScannedModel url={scanUrl} onHit={onHit} /></Suspense>
            ) : (
              <group>
                <Surface id="floor" finish={finishes.floor} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} size={[W, D]} selected={surface === 'floor'} onHit={onHit} />
                <Surface id="wall-back" finish={finishes['wall-back']} position={[0, H / 2, -D / 2]} rotation={[0, 0, 0]} size={[W, H]} selected={surface === 'wall-back'} onHit={onHit} />
                <Surface id="wall-left" finish={finishes['wall-left']} position={[-W / 2, H / 2, 0]} rotation={[0, Math.PI / 2, 0]} size={[D, H]} selected={surface === 'wall-left'} onHit={onHit} />
                <Surface id="wall-right" finish={finishes['wall-right']} position={[W / 2, H / 2, 0]} rotation={[0, -Math.PI / 2, 0]} size={[D, H]} selected={surface === 'wall-right'} onHit={onHit} />
              </group>
            )}
            <Grid position={[0, -0.001, 0]} infiniteGrid cellSize={0.5} sectionSize={2} fadeDistance={30} cellColor="#cfd4cb" sectionColor="#b5bcb1" />
            <Suspense fallback={null}>
              {items.map((it) => (
                <group key={it.id} ref={(g) => { groupRefs.current[it.id] = g; }} position={it.position} rotation={[0, it.rotationY, 0]}>
                  <Item item={it} selected={selected === it.id} onSelect={() => { if (mode !== 'inspect') setSelected(it.id); }} />
                </group>
              ))}
            </Suspense>
            {sel && groupRefs.current[sel.id] && (
              <TransformControls object={groupRefs.current[sel.id]!} mode="translate" showY={sel.mount === 'wall'} size={0.7}
                onMouseUp={() => { const g = groupRefs.current[sel.id]; if (g) update(sel.id, { position: [g.position.x, g.position.y, g.position.z] }); }} />
            )}
            {measure.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[0.04]} /><meshBasicMaterial color="#e5484d" /></mesh>)}
            {dist !== null && <Html position={measure[0].clone().lerp(measure[1], 0.5)} center><span className="whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background">{scanUrl ? `${dist.toFixed(2)} units` : `${dist.toFixed(2)} m · ${(dist * 3.281).toFixed(1)} ft`}</span></Html>}
            <OrbitControls makeDefault target={[0, 1, 0]} maxPolarAngle={Math.PI / 2.05} />
          </Canvas>
        </div>
        <aside className="w-full shrink-0 overflow-y-auto border-t border-border p-4 md:w-80 md:border-l md:border-t-0">
          <p className="text-sm text-muted-foreground">{mode === 'inspect' ? (dist !== null ? 'Click again to start a new measurement.' : 'Click two points to measure.') : msg}</p>
          {mode === 'furnish' && (<>
            <h3 className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide">Furniture</h3>
            <div className="mt-2 flex flex-wrap gap-2">{list(CATALOG.filter((c) => c.kind === 'furniture'))}</div>
            <h3 className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide">My scanned items</h3>
            <div className="mt-2 flex flex-wrap gap-2">{myItems.length ? list(myItems) : <span className="text-sm text-muted-foreground">None yet.</span>}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className={btn(false)} onClick={onScanObject}>Scan an object</button>
              <label className={`${btn(false)} cursor-pointer`}>Import object .glb<input hidden type="file" accept=".glb,.gltf" onChange={(e) => e.target.files?.[0] && onAddObjectGlb(e.target.files[0])} /></label>
            </div>
          </>)}
          {mode === 'remodel' && (<>
            <h3 className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide">Home services</h3>
            <div className="mt-2 flex flex-wrap gap-2">{list(CATALOG.filter((c) => c.kind !== 'furniture'))}</div>
            {surface && !scanUrl && (<>
              <h3 className="mt-5 font-heading text-sm font-semibold uppercase tracking-wide">Finish · {surface.replace('-', ' ')}</h3>
              <div className="mt-2 flex flex-wrap gap-2">{FINISHES[surface === 'floor' ? 'floor' : 'wall'].map((f) => (
                <button key={f.key} className={btn(finishes[surface].key === f.key)} onClick={() => setFinishes((c) => ({ ...c, [surface]: f }))}>
                  <span className="mr-2 inline-block h-3 w-3 rounded-full border border-border align-middle" style={{ background: f.color }} />{f.name}</button>))}</div>
            </>)}
          </>)}
          {sel && mode !== 'inspect' && (
            <div className="mt-6 rounded-2xl border border-border p-4">
              <p className="font-medium">{sel.name}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className={btn(false)} onClick={() => update(sel.id, { rotationY: sel.rotationY + Math.PI / 2 })}>Rotate 90°</button>
                <button className={btn(false)} onClick={() => { setItems((c) => c.filter((i) => i.id !== sel.id)); setSelected(null); }}>Delete</button>
              </div>
            </div>
          )}
          <p className="mt-6 text-xs text-muted-foreground">{scanUrl ? 'Scan scale is relative; measurements are in model units.' : 'Room shell: 6 × 5 m, 2.7 m ceiling.'}</p>
        </aside>
      </div>
    </div>
  );
}
