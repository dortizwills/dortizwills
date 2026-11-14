// Plain rules for the Room Studio: no React or three.js imports.
export type Vec3 = [number, number, number];
export type Kind = 'furniture' | 'cabinetry' | 'opening' | 'scanned';
export type CatalogItem = { key: string; name: string; kind: Kind; size: Vec3; color: string; mount: 'floor' | 'wall'; wallY?: number; texture?: string; modelUrl?: string };
export type PlacedItem = { id: string; key: string; name: string; kind: Kind; size: Vec3; color: string; texture?: string; modelUrl?: string; position: Vec3; rotationY: number; mount: 'floor' | 'wall' };
export type SurfaceId = 'floor' | 'wall-back' | 'wall-left' | 'wall-right';

export const ROOM = { width: 6, depth: 5, height: 2.7 };

export const CATALOG: CatalogItem[] = [
  { key: 'chair', name: 'Chair', kind: 'furniture', size: [0.5, 0.9, 0.5], color: '#8a6f55', mount: 'floor' },
  { key: 'desk', name: 'Desk', kind: 'furniture', size: [1.4, 0.75, 0.7], color: '#b89a74', mount: 'floor' },
  { key: 'table', name: 'Table', kind: 'furniture', size: [1.6, 0.75, 0.9], color: '#9c7a57', mount: 'floor' },
  { key: 'upper-cab', name: 'Upper cabinet', kind: 'cabinetry', size: [0.9, 0.75, 0.35], color: '#e9e6df', mount: 'wall', wallY: 1.85 },
  { key: 'lower-cab', name: 'Lower cabinet', kind: 'cabinetry', size: [0.9, 0.9, 0.6], color: '#e9e6df', mount: 'wall', wallY: 0.45 },
  { key: 'niche', name: 'Recessed niche', kind: 'cabinetry', size: [0.6, 0.9, 0.04], color: '#3b3a36', mount: 'wall', wallY: 1.3 },
  { key: 'doorway', name: 'New doorway', kind: 'opening', size: [0.9, 2.1, 0.06], color: '#222320', mount: 'wall', wallY: 1.05 },
];

export const FINISHES: Record<'floor' | 'wall', { key: string; name: string; color: string; pattern: 'plain' | 'planks' | 'tile' }[]> = {
  floor: [
    { key: 'oak', name: 'Light oak', color: '#c8a77e', pattern: 'planks' },
    { key: 'tile', name: 'Stone tile', color: '#d6d3cc', pattern: 'tile' },
    { key: 'concrete', name: 'Concrete', color: '#a7a8a3', pattern: 'plain' },
  ],
  wall: [
    { key: 'linen', name: 'Linen paint', color: '#ece8df', pattern: 'plain' },
    { key: 'subway', name: 'Subway tile', color: '#f4f4f1', pattern: 'tile' },
    { key: 'olive', name: 'Olive paint', color: '#7d8a6a', pattern: 'plain' },
  ],
};

/** Classify a surface hit by its world normal. */
export function classify(normal: Vec3): 'floor' | 'wall' | 'other' {
  if (normal[1] > 0.7) return 'floor';
  if (Math.abs(normal[1]) < 0.3) return 'wall';
  return 'other';
}

/** Where an item sits when dropped at a hit point with a surface normal. */
export function snap(item: Pick<CatalogItem, 'size' | 'mount' | 'wallY' | 'kind'>, point: Vec3, normal: Vec3): { position: Vec3; rotationY: number } | null {
  const surface = classify(normal);
  if (item.mount === 'floor') {
    if (surface !== 'floor') return null;
    return { position: [point[0], point[1] + item.size[1] / 2, point[2]], rotationY: 0 };
  }
  if (surface !== 'wall') return null;
  const len = Math.hypot(normal[0], normal[2]) || 1;
  const nx = normal[0] / len, nz = normal[2] / len;
  const out = item.size[2] / 2;
  const y = item.wallY ?? point[1];
  return { position: [point[0] + nx * out, y, point[2] + nz * out], rotationY: Math.atan2(nx, nz) };
}
