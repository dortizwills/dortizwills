import { WALL_MAP, type Cell } from './scanCoverage';
import { ROOM } from './studioRules';

export type ScanFrame = { cell: Cell; url: string; file: File };
export type RoomTextures = Partial<Record<'floor' | 'wall-back' | 'wall-left' | 'wall-right', string>>;

const load = (src: string) => new Promise<HTMLImageElement>((r, j) => { const i = new Image(); i.onload = () => r(i); i.onerror = j; i.src = src; });
function cover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const s = Math.max(w / img.width, h / img.height); const sw = w / s, sh = h / s;
  ctx.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, x, y, w, h);
}

export async function composeRoom(frames: ScanFrame[]): Promise<RoomTextures> {
  const find = (k: Cell['kind'], i: number) => frames.find((f) => f.cell.kind === k && f.cell.index === i);
  const out: RoomTextures = {};
  for (const [id, sectors] of Object.entries(WALL_MAP) as [keyof typeof WALL_MAP, readonly number[]][]) {
    const shots = sectors.map((s) => find('wall', s));
    if (!shots.some(Boolean)) continue;
    const len = id === 'wall-back' ? ROOM.width : ROOM.depth;
    const c = document.createElement('canvas'); c.width = 1536; c.height = Math.round(1536 * ROOM.height / len);
    const ctx = c.getContext('2d')!; ctx.fillStyle = '#d9ddd5'; ctx.fillRect(0, 0, c.width, c.height);
    const sw = c.width / 3;
    for (let i = 0; i < 3; i++) { const f = shots[i]; if (f) cover(ctx, await load(f.url), i * sw, 0, sw, c.height); }
    out[id] = c.toDataURL('image/jpeg', 0.8);
  }
  const floors = [0, 1, 2, 3].map((i) => find('floor', i));
  if (floors.some(Boolean)) {
    const c = document.createElement('canvas'); c.width = 1024; c.height = Math.round(1024 * ROOM.depth / ROOM.width);
    const ctx = c.getContext('2d')!; ctx.fillStyle = '#c9b99a'; ctx.fillRect(0, 0, c.width, c.height);
    const slots = [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]]; // ahead, right, behind, left
    for (let i = 0; i < 4; i++) { const f = floors[i]; if (!f) continue; const [sx, sy] = slots[i]; cover(ctx, await load(f.url), sx * c.width / 2, sy * c.height / 2, c.width / 2, c.height / 2); }
    out.floor = c.toDataURL('image/jpeg', 0.8);
  }
  return out;
}
