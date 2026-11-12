import { useEffect, useRef, useState } from 'react';

export type CaptureResult = { mode: 'room' | 'object'; frames: File[]; thumbs: string[] };

const MAX_FRAMES = 20;

export default function CaptureModal({ initialMode, onDone, onClose }: { initialMode: 'room' | 'object'; onDone: (r: CaptureResult) => void; onClose: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState(initialMode);
  const [err, setErr] = useState('');
  const [rec, setRec] = useState(false);
  const [frames, setFrames] = useState<{ file: File; url: string }[]>([]);
  const timer = useRef<number>();

  useEffect(() => {
    let stream: MediaStream | undefined;
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 1280 } }, audio: false })
      .then((s) => { stream = s; if (video.current) { video.current.srcObject = s; video.current.play().catch(() => {}); } })
      .catch(() => setErr('Camera unavailable. Allow camera access, or use photo/video upload instead.'));
    return () => { stream?.getTracks().forEach((t) => t.stop()); clearInterval(timer.current); };
  }, []);

  const grab = () => {
    const v = video.current; if (!v || !v.videoWidth) return;
    const c = document.createElement('canvas'); c.width = 640; c.height = Math.round(640 * v.videoHeight / v.videoWidth);
    c.getContext('2d')!.drawImage(v, 0, 0, c.width, c.height);
    c.toBlob((b) => { if (!b) return; setFrames((f) => f.length >= MAX_FRAMES ? f : [...f, { file: new File([b], `frame-${f.length}.jpg`, { type: 'image/jpeg' }), url: URL.createObjectURL(b) }]); }, 'image/jpeg', 0.85);
  };
  const toggle = () => {
    if (rec) { clearInterval(timer.current); setRec(false); return; }
    setRec(true); grab(); timer.current = window.setInterval(grab, 1000);
  };
  useEffect(() => { if (frames.length >= MAX_FRAMES && rec) { clearInterval(timer.current); setRec(false); } }, [frames, rec]);
  const coverage = Math.round((frames.length / MAX_FRAMES) * 100);
  const minFrames = mode === 'room' ? 6 : 1;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-foreground text-background">
      <style>{`@keyframes rs-scan{from{top:0}to{top:100%}}`}</style>
      <div className="flex items-center gap-2 p-3">
        {(['room', 'object'] as const).map((m) => <button key={m} disabled={rec} onClick={() => setMode(m)} className={`rounded-full px-4 py-2 text-sm ${mode === m ? 'bg-background text-foreground' : 'border border-background/40'}`}>{m === 'room' ? 'Scan room' : 'Scan object'}</button>)}
        <button onClick={onClose} className="ml-auto rounded-full border border-background/40 px-4 py-2 text-sm">Cancel</button>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <video ref={video} playsInline muted className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(hsl(var(--background)/.5) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--background)/.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        {rec && <div className="pointer-events-none absolute inset-x-0 h-1 bg-background/80" style={{ animation: 'rs-scan 2s linear infinite' }} />}
        {mode === 'object' && <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-dashed border-background/80" />}
        {err && <p className="absolute inset-x-4 top-4 rounded-xl bg-background p-3 text-sm text-foreground">{err}</p>}
        <div className="absolute right-3 top-3 rounded-xl bg-foreground/70 px-3 py-2 text-xs">{frames.length} keyframes · {coverage}% coverage</div>
        <p className="absolute inset-x-0 bottom-3 text-center text-sm">{mode === 'room' ? 'Walk slowly around the room, pointing at walls, corners and floor.' : 'Circle the object slowly, keeping it inside the frame.'}</p>
      </div>
      {frames.length > 0 && <div className="flex gap-1 overflow-x-auto p-2">{frames.map((f) => <img key={f.url} src={f.url} alt="Captured keyframe" className="h-14 w-20 shrink-0 rounded object-cover" />)}</div>}
      <div className="flex items-center justify-center gap-3 p-4">
        <button onClick={toggle} disabled={!!err} aria-label={rec ? 'Pause scan' : 'Start scan'} className={`h-16 w-16 rounded-full border-4 border-background ${rec ? 'bg-destructive' : 'bg-background/20'}`} />
        <button disabled={rec || frames.length < minFrames} onClick={() => onDone({ mode, frames: frames.map((f) => f.file), thumbs: frames.map((f) => f.url) })} className="rounded-full bg-background px-6 py-3 text-sm text-foreground disabled:opacity-40">Complete scan</button>
      </div>
    </div>
  );
}
