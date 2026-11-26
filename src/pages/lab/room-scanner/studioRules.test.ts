import { describe, it, expect } from 'vitest';
import { snap, CATALOG } from './studioRules';
const get = (k: string) => CATALOG.find((c) => c.key === k)!;
describe('snap', () => {
  it('furniture rests on the floor', () => {
    expect(snap(get('desk'), [1, 0, 1], [0, 1, 0])!.position[1]).toBeCloseTo(0.375);
  });
  it('furniture cannot go on a wall', () => { expect(snap(get('chair'), [0, 1, -2.5], [0, 0, 1])).toBeNull(); });
  it('doorway sits flush on the wall with its bottom at the floor', () => {
    const r = snap(get('doorway'), [0, 1.7, -2.5], [0, 0, 1])!;
    expect(r.position[1] - 2.1 / 2).toBeCloseTo(0);
    expect(r.position[2]).toBeCloseTo(-2.47);
  });
});
