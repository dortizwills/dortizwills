const HOSTED_ASSET_ORIGIN = 'https://dortiz-wills.lovable.app';

/** Lovable media must use its hosted origin on sites without the asset proxy. */
export function assetUrl(url: string): string {
  return url.startsWith('/__l5e/assets-v1/')
    ? new URL(url, HOSTED_ASSET_ORIGIN).href
    : url;
}