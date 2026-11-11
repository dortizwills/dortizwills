import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Stage, Grid, Line, Html, useGLTF, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { Client, handle_file } from '@gradio/client';

// Hidden project: not linked from navigation.
const SAMPLE_GLB = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Sponza/glTF-Binary/Sponza.glb';
const FALLBACK_SAMPLE = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/ABeautifulGame/glTF-Binary/ABeautifulGame.glb';
const STORAGE_KEY = 'room-scanner-scans';

type Scan = { id: string; name: string; url: string; createdAt: string; thumb?: string; local?: boolean };

const loadScans = (): Scan[] => {
  try { return (JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Scan[]).filter(s => !s.local); } catch { return []; }
};

function Model({ url, wireframe, onPick }: { url: string; wireframe: boolean; onPick: (p: THREE.Vector3) => void }) {
  const { scene } = useGLTF(url);
  useEffect(() => {
    scene.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
      if (!m) return;
      (Array.isArray(m) ? m : [m]).forEach((mm) => { (mm as THREE.MeshStandardMaterial).wireframe = wireframe; });
    });
  }, [scene, wireframe]);
  return <primitive object={scene} onClick={(e: ThreeEvent<MouseEvent>) => { e.stopPropagation(); onPick(e.point.clone()); }} />;
}

function Viewer({ scan, onClose }: { scan: Scan; onClose: () => void }) {
  const [wire, setWire] = useState(false);
  const [grid, setGrid] = useState(true);
  const [measuring, setMeasuring] = useState(false);
  const [pts, setPts] = useState<THREE.Vector3[]>([]);
  const [camKey, setCamKey] = useState(0);
  const pick = (p: THREE.Vector3) => { if (!measuring) return; setPts((cur) => (cur.length >= 2 ? [p] : [...cur, p])); };
  const dist = pts.length === 2 ? pts[0].distanceTo(pts[1]) : null;
  const btn = (active: boolean) => `rounded-full border px-4 py-2 text-sm ${active ? 'bg-foreground text-background' : 'border-border bg-background text-foreground'}`;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        <strong className="mr-auto font-heading">{scan.name}</strong>
        <button className={btn(false)} onClick={() => setCamKey((k) => k + 1)}>Reset camera</button>
        <button className={btn(wire)} onClick={() => setWire(!wire)}>Wireframe</button>
        <button className={btn(grid)} onClick={() => setGrid(!grid)}>Grid</button>
        <button className={btn(measuring)} onClick={() => { setMeasuring(!measuring); setPts([]); }}>Measure</button>
        <button className={btn(false)} onClick={onClose}>Close</button>
      </div>
      {measuring && <p className="px-3 py-2 text-sm text-muted-foreground">{dist !== null ? `Distance: ${dist.toFixed(2)} units (relative scale)` : `Click ${2 - pts.length} point(s) on the model`}</p>}
      <div className="relative flex-1" data-scene-ready>
        <Canvas key={camKey} camera={{ position: [4, 3, 6], fov: 50 }}>
          <Environment><Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} /></Environment>
          <Suspense fallback={<Html center>Loading model…</Html>}>
            <Stage adjustCamera intensity={0.6} environment={null} shadows={false}>
              <Model url={scan.url} wireframe={wire} onPick={pick} />
            </Stage>
          </Suspense>
          {grid && <Grid infiniteGrid cellSize={0.5} sectionSize={2} fadeDistance={40} />}
          {pts.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[0.04]} /><meshBasicMaterial color="#e5484d" /></mesh>)}
          {pts.length === 2 && <Line points={pts} color="#e5484d" lineWidth={3} />}
          {pts.length === 2 && dist !== null && <Html position={pts[0].clone().lerp(pts[1], 0.5)} center><span className="rounded bg-foreground px-2 py-1 text-xs text-background">{dist.toFixed(2)}</span></Html>}
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </div>
  );
}

function AdSlot({ label }: { label: string }) {
  return <div className="my-6 rounded-xl border border-dashed border-border p-4 text-center text-xs uppercase tracking-wide text-muted-foreground">Advertisement · {label}</div>;
}

export default function RoomScanner() {
  const [tab, setTab] = useState<'scan' | 'studio'>('scan');
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [spaceId, setSpaceId] = useState('facebook/vggt');
  const [scans, setScans] = useState<Scan[]>(loadScans);
  const [open, setOpen] = useState<Scan | null>(null);
  const thumbs = useMemo(() => photos.map((f) => URL.createObjectURL(f)), [photos]);
  const sessionRef = useRef<Scan[]>([]);

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(scans.filter((s) => !s.local))); }, [scans]);

  const addScan = (s: Scan) => { setScans((c) => [s, ...c]); sessionRef.current.push(s); setTab('studio'); setOpen(s); };

  const generate = async () => {
    setBusy(true); setFailed(false); setStatus('Connecting to the free GPU space…');
    try {
      const client = await Client.connect(spaceId, {
        status_callback: (s: { status?: string; detail?: string }) => setStatus(`Space status: ${s.detail || s.status || 'working'}`),
      } as never);
      const api = await client.view_api();
      const endpoint = Object.keys(api.named_endpoints)[0];
      if (!endpoint) throw new Error('No endpoint found');
      setStatus(`In queue for ${endpoint}…`);
      const job = client.submit(endpoint, [photos.map((f) => handle_file(f))]);
      let glb: string | undefined;
      for await (const msg of job) {
        if (msg.type === 'status') setStatus(`Queue: ${msg.stage}${msg.position != null ? ` · position ${msg.position}` : ''}`);
        if (msg.type === 'data') {
          const find = (v: unknown): string | undefined => {
            if (!v) return;
            if (typeof v === 'string' && /\.(glb|gltf)/i.test(v)) return v;
            if (Array.isArray(v)) { for (const x of v) { const r = find(x); if (r) return r; } }
            if (typeof v === 'object') { const o = v as Record<string, unknown>; if (typeof o.url === 'string' && /\.(glb|gltf)/i.test(String(o.path || o.url))) return o.url; for (const x of Object.values(o)) { const r = find(x); if (r) return r; } }
          };
          glb = find(msg.data);
          break;
        }
      }
      if (!glb) throw new Error('No 3D file returned');
      addScan({ id: crypto.randomUUID(), name: `Room scan ${new Date().toLocaleDateString()}`, url: glb, createdAt: new Date().toISOString(), thumb: thumbs[0] });
      setStatus('Done');
    } catch (e) {
      console.error(e);
      setFailed(true);
      setStatus('The free GPU queue is busy or rate-limited right now. Try again in a few minutes, switch the space in settings, or load the sample room.');
    } finally { setBusy(false); }
  };

  const onGlb = (f?: File) => { if (!f) return; addScan({ id: crypto.randomUUID(), name: f.name, url: URL.createObjectURL(f), createdAt: new Date().toISOString(), local: true }); };
  const loadSample = () => addScan({ id: crypto.randomUUID(), name: 'Sample room', url: SAMPLE_GLB, createdAt: new Date().toISOString() });

  const tabBtn = (t: typeof tab, l: string) => <button onClick={() => setTab(t)} className={`rounded-full px-5 py-2 text-sm ${tab === t ? 'bg-foreground text-background' : 'border border-border'}`}>{l}</button>;

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 md:px-8">
      <h1 className="font-heading text-4xl font-semibold md:text-5xl">3D Room Scanner</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">Capture a room with photos or import a scan, then explore and measure it in 3D.</p>
      <div className="mt-6 flex gap-2">{tabBtn('scan', 'Scan & Reconstruct')}{tabBtn('studio', `Studio & Gallery (${scans.length})`)}</div>
      <AdSlot label="Top banner" />

      {tab === 'scan' ? (
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-6">
            <h2 className="font-heading text-xl font-semibold">Room photos</h2>
            <p className="mt-1 text-sm text-muted-foreground">Take or upload 3–8 overlapping photos.</p>
            <input className="mt-4 block w-full text-sm" type="file" accept="image/*" multiple capture="environment" onChange={(e) => setPhotos(Array.from(e.target.files || []).slice(0, 8))} />
            {thumbs.length > 0 && <div className="mt-4 grid grid-cols-4 gap-2">{thumbs.map((t) => <img key={t} src={t} alt="Room photo" className="aspect-square rounded-lg object-cover" />)}</div>}
            <button disabled={busy || photos.length < 3} onClick={generate} className="mt-4 rounded-full bg-foreground px-6 py-3 text-sm text-background disabled:opacity-40">{busy ? 'Generating…' : 'Generate 3D Room'}</button>
            {status && <div className="mt-4"><div className="h-1 overflow-hidden rounded bg-muted"><div className={`h-full bg-foreground ${busy ? 'w-1/2 animate-pulse' : 'w-full'}`} /></div><p className="mt-2 text-sm text-muted-foreground">{status}</p></div>}
            {failed && <button onClick={loadSample} className="mt-3 rounded-full border border-border px-5 py-2 text-sm">Load Sample 3D Room</button>}
            <details className="mt-4 text-sm"><summary className="cursor-pointer text-muted-foreground">Settings</summary>
              <select value={spaceId} onChange={(e) => setSpaceId(e.target.value)} className="mt-2 rounded border border-border bg-background p-2">
                <option value="facebook/vggt">facebook/vggt</option><option value="naver/MASt3R">naver/MASt3R</option>
              </select></details>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h2 className="font-heading text-xl font-semibold">Import a scan</h2>
            <p className="mt-1 text-sm text-muted-foreground">Already scanned with Scaniverse or Polycam? Upload the .glb file.</p>
            <input className="mt-4 block w-full text-sm" type="file" accept=".glb,.gltf" onChange={(e) => onGlb(e.target.files?.[0])} />
            <button onClick={loadSample} className="mt-4 rounded-full border border-border px-5 py-2 text-sm">Load Sample 3D Room</button>
          </div>
        </section>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scans.length === 0 && <p className="text-muted-foreground">No scans yet.</p>}
          {scans.map((s) => (
            <button key={s.id} onClick={() => setOpen(s)} className="overflow-hidden rounded-2xl border border-border text-left">
              <div className="flex aspect-video items-center justify-center bg-muted">{s.thumb ? <img src={s.thumb} alt="" className="h-full w-full object-cover" /> : <span className="text-sm text-muted-foreground">3D scan</span>}</div>
              <div className="p-3"><p className="font-medium">{s.name}</p><p className="text-xs text-muted-foreground">{new Date(s.createdAt).toLocaleString()}</p></div>
            </button>
          ))}
        </section>
      )}
      <AdSlot label="Bottom banner" />
      {open && <Viewer scan={open} onClose={() => setOpen(null)} />}
    </main>
  );
}
export { FALLBACK_SAMPLE };
