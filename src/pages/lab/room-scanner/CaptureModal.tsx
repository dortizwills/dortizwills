import { useEffect, useRef, useState } from 'react';
import { cellFor, cellKey, relYaw, TOTAL_CELLS, WALL_SECTORS, type Cell } from './scanCoverage';
import type { ScanFrame } from './composeRoom';

export type CaptureResult = { mode: 'room' | 'object'; frames: ScanFrame[] };
type OrientCtor = { requestPermission?: () => Promise<string> };

export default function CaptureModal({ initialMode, onDone, onClose }: { initialMode: 'room' | 'object'; onDone: (r: CaptureResult) => void; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState(initialMode);
  const [err, setErr] = useState('');
  const [rec, setRec] = useState(false);
  const [sensor, setSensor] = useState<'unknown' | 'on' | 'off'>('unknown');
  const [frames, setFrames] = useState<ScanFrame[]>([]);
  const [now, setNow] = useState<{ yaw: number; cell: Cell } | null>(null);
  const orient = useRef<{ alpha: number; beta: number } | null>(null);
  const start = useRef<number | null>(null);
  const hist = useRef<number[]>([]);
  const taken = useRef(new Set<string>());

  useEffect(() => {
    let stream: MediaStream | undefined;
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 1280 } }, audio: false })
      .then((s) => { stream = s; if (video.current) { video.current.srcObject = s; video.current.play().catch(() => {}); } })
      .catch(() => setErr('Camera unavailable. Allow camera access in your browser settings, then reopen the scanner.'));
    const onO = (e: DeviceOrientationEvent) => {
      const heading = (e as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading;
      if (e.alpha == null && heading == null) return;
      orient.current = { alpha: heading != null ? 360 - heading : e.alpha!, beta: e.beta ?? 90 };
    };
    window.addEventListener('deviceorientation', onO);
    return () => { stream?.getTracks().forEach((t) => t.stop()); window.removeEventListener('deviceorientation', onO); };
  }, []);

  const grab = (cell: Cell) => {
    const v = video.current; if (!v || !v.videoWidth) return;
    const key = cellKey(cell); if (taken.current.has(key)) return; taken.current.add(key);
    const c = document.createElement('canvas'); c.width = 640; c.height = Math.round(640 * v.videoHeight / v.videoWidth);
    c.getContext('2d')!.drawImage(v, 0, 0, c.width, c.height);
    c.toBlob((b) => { if (b) setFrames((f) => [...f, { cell, file: new File([b], `${key}.jpg`, { type: 'image/jpeg' }), url: URL.createObjectURL(b) }]); }, 'image/jpeg', 0.85);
  };

  // Live mapping loop: capture a frame only when the phone is held steady on a direction not yet covered.
  useEffect(() => {
    if (!rec || sensor !== 'on') return;
    const id = window.setInterval(() => {
      const o = orient.current; if (!o) return;
      if (start.current == null) start.current = o.alpha;
      const yaw = relYaw(start.current, o.alpha);
      const cell = mode === 'object' ? { kind: 'wall' as const, index: Math.round(yaw / 30) % WALL_SECTORS } : cellFor(yaw, o.beta);
      setNow({ yaw, cell });
      const h = hist.current; h.push(yaw); if (h.length > 3) h.shift();
      const spread = h.length === 3 ? Math.max(...h) - Math.min(...h) : 99;
      if (spread < 6) grab(cell);
    }, 150);
    return () => clearInterval(id);
  }, [rec, sensor, mode]);

  const toggle = async () => {
    if (rec) { setRec(false); return; }
    let ok = sensor === 'on';
    if (sensor === 'unknown') {
      const D = (window as unknown as { DeviceOrientationEvent?: OrientCtor }).DeviceOrientationEvent;
      try { if (D?.requestPermission) ok = (await D.requestPermission()) === 'granted'; else ok = true; } catch { ok = false; }
      await new Promise((r) => setTimeout(r, 400));
      ok = ok && !!orient.current; setSensor(ok ? 'on' : 'off');
    }
    setRec(true);
  };
  // Without motion sensors (laptops), each shutter tap fills the next open direction.
  const manual = () => { const next = Array.from({ length: WALL_SECTORS }, (_, i) => ({ kind: 'wall' as const, index: i })).find((c) => !taken.current.has(cellKey(c))); if (next) grab(next); };

  const has = (k: string) => frames.some((f) => cellKey(f.cell) === k);
  const total = mode === 'room' ? TOTAL_CELLS : WALL_SECTORS;
  const coverage = Math.round((frames.length / total) * 100);
  const minFrames = mode === 'room' ? 3 : 1;
  const wedge = (i: number, r0: number, r1: number, n: number) => {
    const a0 = ((i - 0.5) * 360 / n - 90) * Math.PI / 180, a1 = ((i + 0.5) * 360 / n - 90) * Math.PI / 180;
    const p = (r: number, a: number) => `${50 + r * Math.cos(a)} ${50 + r * Math.sin(a)}`;
    return `M${p(r0, a0)} L${p(r1, a0)} A${r1} ${r1} 0 0 1 ${p(r1, a1)} L${p(r0, a1)} A${r0} ${r0} 0 0 0 ${p(r0, a0)}Z`;
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-foreground text-background" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex items-center gap-2 p-3">
        {(['room', 'object'] as const).map((m) => <button key={m} disabled={rec || frames.length > 0} onClick={() => setMode(m)} className={`rounded-full px-4 py-2 text-sm ${mode === m ? 'bg-background text-foreground' : 'border border-background/40'}`}>{m === 'room' ? 'Scan room' : 'Scan object'}</button>)}
        <button onClick={onClose} className="ml-auto rounded-full border border-background/40 px-4 py-2 text-sm">Cancel</button>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <video ref={video} playsInline muted autoPlay className="h-full w-full object-cover" />
        {now && has(cellKey(now.cell)) && <div className="pointer-events-none absolute inset-0 bg-primary/25" />}
        {err && <p className="absolute inset-x-4 top-4 rounded-xl bg-background p-3 text-sm text-foreground">{err}</p>}
        <div className="absolute right-3 top-3 w-32 rounded-2xl bg-foreground/70 p-2 text-center text-xs">
          <svg viewBox="0 0 100 100" className="w-full" aria-label="Live room coverage map">
            {Array.from({ length: WALL_SECTORS }, (_, i) => <path key={i} d={wedge(i, 30, 48, WALL_SECTORS)} className={has(`wall-${i}`) ? 'fill-primary' : 'fill-background/15'} stroke="currentColor" strokeOpacity={0.3} />)}
            {mode === 'room' && Array.from({ length: 4 }, (_, i) => <path key={i} d={wedge(i, 6, 26, 4)} transform={`rotate(45 50 50)`} className={has(`floor-${i}`) ? 'fill-primary' : 'fill-background/15'} stroke="currentColor" strokeOpacity={0.3} />)}
            {now && <line x1="50" y1="50" x2={50 + 48 * Math.sin(now.yaw * Math.PI / 180)} y2={50 - 48 * Math.cos(now.yaw * Math.PI / 180)} stroke="currentColor" strokeWidth="2" />}
          </svg>
          <div className="mt-1">{frames.length}/{total} areas · {coverage}%</div>
        </div>
        <p className="absolute inset-x-3 bottom-3 rounded-xl bg-foreground/60 p-2 text-center text-sm">
          {!rec ? (mode === 'room' ? 'Stand in the middle of the room. Tap start, then turn slowly in place. Tilt down to map the floor.' : 'Tap start, then circle the object slowly.')
            : sensor === 'off' ? 'Motion sensor unavailable — tap the camera button once per direction.'
            : now && has(cellKey(now.cell)) ? 'Mapped ✓ Keep turning to the next grey area.' : 'Hold steady… mapping this area.'}
        </p>
      </div>
      {frames.length > 0 && <div className="flex gap-1 overflow-x-auto p-2">{frames.map((f) => <img key={f.url} src={f.url} alt="Mapped area" className="h-12 w-16 shrink-0 rounded object-cover" />)}</div>}
      <div className="flex items-center justify-center gap-3 p-4">
        <button onClick={toggle} disabled={!!err} aria-label={rec ? 'Pause scan' : 'Start scan'} className={`h-16 w-16 rounded-full border-4 border-background ${rec ? 'bg-destructive' : 'bg-background/20'}`} />
        {rec && sensor === 'off' && <button onClick={manual} className="rounded-full border border-background px-4 py-3 text-sm">Capture</button>}
        <button disabled={frames.length < minFrames} onClick={() => { setRec(false); onDone({ mode, frames }); }} className="rounded-full bg-background px-6 py-3 text-sm text-foreground disabled:opacity-40">Complete scan</button>
      </div>
    </div>
  );
}
