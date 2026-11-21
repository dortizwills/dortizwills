import { describe, it, expect } from 'vitest';
import { cellFor, relYaw } from './scanCoverage';
describe('scan coverage', () => {
  it('turning right 90° lands on the right wall sector 3', () => expect(cellFor(relYaw(100, 10), 90)).toEqual({ kind: 'wall', index: 3 }));
  it('tilting down maps to the floor', () => expect(cellFor(0, 20).kind).toBe('floor'));
  it('wraps heading past 360', () => expect(cellFor(relYaw(10, 20), 90)).toEqual({ kind: 'wall', index: 0 }));
});
