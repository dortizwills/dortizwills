// Plain TS: maps phone heading/tilt to coverage cells and room surfaces.
export const WALL_SECTORS = 12; // 30° each, centered on 0°, 30°, …
export const FLOOR_SECTORS = 4;
export const FLOOR_PITCH = 45; // beta below this = camera aimed at floor

export type Cell = { kind: 'wall' | 'floor'; index: number };

export const relYaw = (startAlpha: number, alpha: number) => (((startAlpha - alpha) % 360) + 360) % 360;

export function cellFor(yaw: number, beta: number): Cell {
  if (beta < FLOOR_PITCH) return { kind: 'floor', index: Math.floor(yaw / 90) % FLOOR_SECTORS };
  return { kind: 'wall', index: Math.round(yaw / 30) % WALL_SECTORS };
}
export const cellKey = (c: Cell) => `${c.kind}-${c.index}`;

// Wall sectors (left→right on the wall texture) for each room surface. Front wall sectors (5–7) aren't drawn: the camera looks in from there.
export const WALL_MAP = { 'wall-back': [11, 0, 1], 'wall-right': [2, 3, 4], 'wall-left': [8, 9, 10] } as const;
export const TOTAL_CELLS = WALL_SECTORS + FLOOR_SECTORS;
