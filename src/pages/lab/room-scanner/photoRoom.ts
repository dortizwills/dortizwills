export const CORNERS = ['Front left → back right', 'Front right → back left', 'Back right → front left', 'Back left → front right'] as const;
export type RoomDimensions = { width: number; depth: number; height: number };
export function readyForPhotoRoom(photos: (File | null)[], dimensions: RoomDimensions): boolean {
  return photos.length === 4 && photos.every(Boolean) && Object.values(dimensions).every((v) => Number.isFinite(v) && v > 0);
}
export function imageSize(width: number, height: number): [number, number, number] {
  if (width <= 0 || height <= 0) throw new Error('Invalid image dimensions');
  return [1, height / width, 0.01];
}