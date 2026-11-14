import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CORNERS, readyForPhotoRoom, type RoomDimensions } from './photoRoom';

export default function FourCornerCapture({ onDone }: { onDone: (photos: File[], dimensions: RoomDimensions) => void }) {
  const [photos, setPhotos] = useState<(File | null)[]>([null, null, null, null]);
  const [urls, setUrls] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState<RoomDimensions>({ width: 0, depth: 0, height: 0 });
  useEffect(() => {
    const next = photos.map((f) => f ? URL.createObjectURL(f) : ''); setUrls(next);
    return () => next.forEach((url) => { if (url) URL.revokeObjectURL(url); });
  }, [photos]);
  return <section className="border-t border-border py-6">
    <h2 className="font-heading text-xl font-semibold">Four corner photos</h2>
    <p className="mt-2 text-sm text-muted-foreground">One photo from each corner facing the opposite corner. This fallback creates a measured room shell, not an automatic scan.</p>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {CORNERS.map((corner, i) => <label key={corner} className="relative flex aspect-[4/3] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border border-border bg-muted p-3 text-center">
        {urls[i] ? <img src={urls[i]} alt={`Corner ${i + 1}: ${corner}`} className="absolute inset-0 h-full w-full object-cover" /> : <Camera className="mb-2 h-6 w-6" />}
        <span className="relative rounded bg-background/90 p-1 text-xs">{i + 1}. {corner}</span>
        <input aria-label={`Corner ${i + 1} photo`} type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => { const file = e.target.files?.[0]; if (file?.type.startsWith('image/')) setPhotos((p) => p.map((f, idx) => idx === i ? file : f)); }} />
      </label>)}
    </div>
    <div className="mt-4 grid grid-cols-3 gap-3">
      {(['width', 'depth', 'height'] as const).map((key) => <label key={key} className="text-sm capitalize">{key} (m)<Input aria-label={`${key} in meters`} type="number" min="0.1" step="0.1" value={dimensions[key] || ''} onChange={(e) => setDimensions((d) => ({ ...d, [key]: Number(e.target.value) }))} className="mt-1" /></label>)}
    </div>
    <Button className="mt-4" disabled={!readyForPhotoRoom(photos, dimensions)} onClick={() => onDone(photos.filter((f): f is File => f !== null), dimensions)}>Open measured room</Button>
  </section>;
}