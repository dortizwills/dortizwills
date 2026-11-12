import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import RoomStudio from './room-scanner/RoomStudio';
import CaptureModal, { type CaptureResult } from './room-scanner/CaptureModal';
import type { CatalogItem } from './room-scanner/studioRules';
import { Client, handle_file } from '@gradio/client';

// Hidden project: not linked from navigation.
const SAMPLE_GLB = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Sponza/glTF-Binary/Sponza.glb';
const FALLBACK_SAMPLE = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/ABeautifulGame/glTF-Binary/ABeautifulGame.glb';
const STORAGE_KEY = 'room-scanner-scans';

type Scan = { id: string; name: string; url?: string; createdAt: string; thumb?: string; local?: boolean };

const loadScans = (): Scan[] => {
  try { return (JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Scan[]).filter(s => !s.local); } catch { return []; }
};

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
  const [capture, setCapture] = useState<'room' | 'object' | null>(null);
  const [myItems, setMyItems] = useState<CatalogItem[]>([]);
  const addObject = (name: string, extra: Partial<CatalogItem>) => setMyItems((c) => [...c, { key: crypto.randomUUID(), name, kind: 'scanned', size: [0.6, 0.6, 0.6], color: '#999', mount: 'floor', ...extra }]);
  const onCaptured = (r: CaptureResult) => {
    setCapture(null);
    if (r.mode === 'object') { addObject(`Scanned object ${myItems.length + 1}`, { texture: r.thumbs[0] }); if (!open) addScan({ id: crypto.randomUUID(), name: 'Room shell', createdAt: new Date().toISOString(), local: true }); return; }
    setPhotos(r.frames.slice(0, 8)); setTab('scan');
    setStatus('Live scan captured. Generating your 3D room from the keyframes…');
    setTimeout(() => generateFrom(r.frames.filter((_, i) => i % Math.ceil(r.frames.length / 8) === 0).slice(0, 8)), 0);
  };
  const thumbs = useMemo(() => photos.map((f) => URL.createObjectURL(f)), [photos]);
  const sessionRef = useRef<Scan[]>([]);

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(scans.filter((s) => !s.local))); }, [scans]);

  const addScan = (s: Scan) => { setScans((c) => [s, ...c]); sessionRef.current.push(s); setTab('studio'); setOpen(s); };

  const generate = () => generateFrom(photos);
  const generateFrom = async (files: File[]) => {
    setBusy(true); setFailed(false); setStatus('Connecting to the free GPU space…');
    try {
      const client = await Client.connect(spaceId, {
        status_callback: (s: { status?: string; detail?: string }) => setStatus(`Space status: ${s.detail || s.status || 'working'}`),
      } as never);
      const api = await client.view_api();
      const endpoint = Object.keys(api.named_endpoints)[0];
      if (!endpoint) throw new Error('No endpoint found');
      setStatus(`In queue for ${endpoint}…`);
      const job = client.submit(endpoint, [files.map((f) => handle_file(f))]);
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
      setStatus('The free GPU queue is busy or rate-limited right now. Try again, switch the space in settings, or open the room shell to start designing.');
    } finally { setBusy(false); }
  };

  const onGlb = (f?: File) => { if (!f) return; addScan({ id: crypto.randomUUID(), name: f.name, url: URL.createObjectURL(f), createdAt: new Date().toISOString(), local: true }); };
  const openShell = () => addScan({ id: crypto.randomUUID(), name: 'Room shell', createdAt: new Date().toISOString(), local: true });
  const loadSample = () => addScan({ id: crypto.randomUUID(), name: 'Sample room', url: SAMPLE_GLB, createdAt: new Date().toISOString() });

  const tabBtn = (t: typeof tab, l: string) => <button onClick={() => setTab(t)} className={`rounded-full px-5 py-2 text-sm ${tab === t ? 'bg-foreground text-background' : 'border border-border'}`}>{l}</button>;

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 md:px-8">
      <h1 className="font-heading text-4xl font-semibold md:text-5xl">3D Room Scanner</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">Scan a room, then furnish it, remodel walls and floors, and measure it in 3D.</p>
      <div className="mt-6 flex gap-2">{tabBtn('scan', 'Scan & Reconstruct')}{tabBtn('studio', `Studio & Gallery (${scans.length})`)}</div>
      <AdSlot label="Top banner" />

      {tab === 'scan' ? (
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-6 md:col-span-2">
            <h2 className="font-heading text-xl font-semibold">Live scan</h2>
            <p className="mt-1 text-sm text-muted-foreground">Record a walkthrough with your camera. Keyframes are captured every second and turned into a 3D room. Scan an object to drop it into your space.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={() => setCapture('room')} className="rounded-full bg-foreground px-6 py-3 text-sm text-background">Scan room</button>
              <button onClick={() => setCapture('object')} className="rounded-full border border-border px-6 py-3 text-sm">Scan object</button>
              <button onClick={openShell} className="rounded-full border border-border px-6 py-3 text-sm">Design in room shell</button>
            </div>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h2 className="font-heading text-xl font-semibold">Room photos</h2>
            <p className="mt-1 text-sm text-muted-foreground">Take or upload 3–8 overlapping photos.</p>
            <input className="mt-4 block w-full text-sm" type="file" accept="image/*" multiple capture="environment" onChange={(e) => setPhotos(Array.from(e.target.files || []).slice(0, 8))} />
            {thumbs.length > 0 && <div className="mt-4 grid grid-cols-4 gap-2">{thumbs.map((t) => <img key={t} src={t} alt="Room photo" className="aspect-square rounded-lg object-cover" />)}</div>}
            <button disabled={busy || photos.length < 3} onClick={generate} className="mt-4 rounded-full bg-foreground px-6 py-3 text-sm text-background disabled:opacity-40">{busy ? 'Generating…' : 'Generate 3D Room'}</button>
            {status && <div className="mt-4"><div className="h-1 overflow-hidden rounded bg-muted"><div className={`h-full bg-foreground ${busy ? 'w-1/2 animate-pulse' : 'w-full'}`} /></div><p className="mt-2 text-sm text-muted-foreground">{status}</p></div>}
            {failed && <button onClick={openShell} className="mt-3 mr-2 rounded-full bg-foreground px-5 py-2 text-sm text-background">Open room shell</button>}
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
      {open && <RoomStudio scanUrl={open.url} scanName={open.name} myItems={myItems} onClose={() => setOpen(null)} onScanObject={() => setCapture('object')} onAddObjectGlb={(f) => addObject(f.name.replace(/\.gl(b|tf)$/i, ''), { modelUrl: URL.createObjectURL(f), size: [0.8, 0.8, 0.8] })} />}
      {capture && <CaptureModal initialMode={capture} onDone={onCaptured} onClose={() => setCapture(null)} />}
    </main>
  );
}
export { FALLBACK_SAMPLE };
