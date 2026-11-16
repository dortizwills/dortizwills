import { useEffect, useRef, useState } from 'react';
import { Camera, Box, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoomStudio from './room-scanner/RoomStudio';
import FourCornerCapture from './room-scanner/FourCornerCapture';
import { canScanNatively, scanNativeRoom, type NativeRoom } from './room-scanner/nativeScanner';
import type { RoomDimensions } from './room-scanner/photoRoom';
import type { CatalogItem } from './room-scanner/studioRules';

type Scan = { id: string; name: string; url?: string; nativeRoom?: NativeRoom; dimensions?: RoomDimensions; referencePhotos?: string[] };

export default function RoomScanner() {
  const [scans, setScans] = useState<Scan[]>([]);
  const [open, setOpen] = useState<Scan | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [myItems, setMyItems] = useState<CatalogItem[]>([]);
  const urls = useRef<string[]>([]);
  const native = canScanNatively();
  useEffect(() => () => urls.current.forEach((url) => URL.revokeObjectURL(url)), []);
  const localUrl = (file: File) => { const url = URL.createObjectURL(file); urls.current.push(url); return url; };
  const addScan = (scan: Omit<Scan, 'id'>) => { const next = { ...scan, id: crypto.randomUUID() }; setScans((s) => [next, ...s]); setOpen(next); };
  const liveScan = async () => {
    setBusy(true); setStatus('');
    try {
      const nativeRoom = await scanNativeRoom();
      addScan({ name: nativeRoom.source === 'lidar-mesh' ? 'Live room mesh' : 'Live tracked points', nativeRoom });
    } catch (error) { setStatus(error instanceof Error ? error.message : 'The scan could not be completed.'); }
    finally { setBusy(false); }
  };
  return <main className="mx-auto max-w-[1600px] px-4 py-10 md:px-8">
    <h1 className="font-heading text-4xl font-semibold md:text-5xl">Room Scanner</h1>
    <section className="mt-6 border-t border-border py-6">
      <h2 className="font-heading text-xl font-semibold">Live spatial scan</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{native ? 'LiDAR phones capture surfaces. Other iPhones capture tracked spatial points; dense room reconstruction is not yet available on iPhone XS.' : 'Live spatial scanning requires the installed iPhone app. In this website, use four corner photos or import a room mesh.'}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button disabled={!native || busy} onClick={liveScan}><Camera />{busy ? 'Scanning…' : 'Start live scan'}</Button>
        <Button variant="outline" onClick={() => addScan({ name: 'Example room shell', dimensions: { width: 6, depth: 5, height: 2.7 } })}><Box />Open example shell</Button>
      </div>
      {status && <p role="alert" className="mt-3 text-sm text-destructive">{status}</p>}
    </section>
    <div className="grid gap-8 md:grid-cols-2">
      <FourCornerCapture onDone={(photos, dimensions) => addScan({ name: 'Four-photo measured room', dimensions, referencePhotos: photos.map(localUrl) })} />
      <section className="min-w-0 border-t border-border py-6">
        <h2 className="font-heading text-xl font-semibold">Import a room mesh</h2>
        <label className="mt-4 flex min-w-0 flex-wrap items-center gap-2 text-sm"><Upload className="h-4 w-4" />GLB file<input aria-label="Room GLB file" className="w-full min-w-0" type="file" accept=".glb" onChange={(e) => { const f = e.target.files?.[0]; if (f) addScan({ name: f.name, url: localUrl(f) }); }} /></label>
      </section>
    </div>
    {scans.length > 0 && <section className="border-t border-border py-6">
      <h2 className="font-heading text-xl font-semibold">This session</h2>
      <div className="mt-3 flex flex-wrap gap-2">{scans.map((s) => <Button key={s.id} variant="outline" onClick={() => setOpen(s)}>{s.name}</Button>)}</div>
      <p className="mt-3 text-xs text-muted-foreground">Rooms and uploads are held in this tab and are cleared on reload.</p>
    </section>}
    {open && <RoomStudio key={open.id} scanName={open.name} scanUrl={open.url} nativeRoom={open.nativeRoom} dimensions={open.dimensions} referencePhotos={open.referencePhotos} myItems={myItems} onClose={() => setOpen(null)} onScanObject={() => setStatus('Import an object GLB in the studio. Photo-only object reconstruction is not configured.')} onAddObjectGlb={(file) => setMyItems((items) => [...items, { key: crypto.randomUUID(), name: file.name, kind: 'scanned', size: [0.8, 0.8, 0.8], color: '', mount: 'floor', modelUrl: localUrl(file) }])} />}
  </main>;
}
