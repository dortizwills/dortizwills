import { describe, expect, it } from 'vitest';
import { assetUrl } from './assetUrl';

describe('host-independent asset URLs', () => {
  it('resolves CDN image and PDF pointers to their serving host', () => {
    for (const filename of ['finish.png', 'course.pdf']) {
      expect(assetUrl(`/__l5e/assets-v1/example/${filename}`)).toBe(
        `https://dortiz-wills.lovable.app/__l5e/assets-v1/example/${filename}`,
      );
    }
  });

  it('preserves public files and already absolute media URLs', () => {
    for (const url of ['/lovable-uploads/photo.png', 'https://example.com/photo.png', '']) {
      expect(assetUrl(url)).toBe(url);
    }
  });
});