import { describe, it, expect } from 'vitest';
import { readyForPhotoRoom, imageSize, CORNERS } from './photoRoom';
const photo = { name: 'room.jpg' } as File;
describe('four-corner fallback', () => {
  it('requires exactly four photos, one per corner', () => {
    expect(CORNERS).toHaveLength(4);
    expect(readyForPhotoRoom([photo, photo, photo, photo], { width: 6, depth: 5, height: 2.7 })).toBe(true);
    expect(readyForPhotoRoom([photo, photo, photo], { width: 6, depth: 5, height: 2.7 })).toBe(false);
    expect(readyForPhotoRoom([photo, photo, photo, null], { width: 6, depth: 5, height: 2.7 })).toBe(false);
    expect(readyForPhotoRoom([photo, photo, photo, photo, photo], { width: 6, depth: 5, height: 2.7 })).toBe(false);
  });
  it('requires positive measured dimensions instead of inventing room size', () => {
    expect(readyForPhotoRoom([photo, photo, photo, photo], { width: 0, depth: 5, height: 2.7 })).toBe(false);
  });
  it('preserves uploaded image proportions in the room', () => {
    expect(imageSize(1200, 600)).toEqual([1, 0.5, 0.01]);
    expect(imageSize(600, 1200)).toEqual([1, 2, 0.01]);
  });
});