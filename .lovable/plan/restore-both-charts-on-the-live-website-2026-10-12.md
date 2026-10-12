# Restore both charts on the live website

## Confirmed cause
Both pages use chart addresses beginning with `/__l5e/assets-v1/`. Those addresses are resolved against whichever website is open.

Checks confirmed that dortizwills.com returns HTML rather than an image for both addresses, while dortiz-wills.lovable.app returns the correct PNG files. The preview has a development-only proxy to Lovable, which explains why the charts work there but not on your separately hosted website. Publishing again alone will not fix this address mismatch.

## Proposed fix
- Keep the existing charts, wording, sizes, and placement unchanged.
- Point these two charts explicitly to their working Lovable-hosted image addresses so they also load from your live website.
- Do not replace the charts with SVGs or change other images as part of this fix.

## Technical details
- Update only the chart source expressions in `src/pages/hivey/EnterpriseCheckout.tsx` and `src/pages/hivey/SelfServiceOnboarding.tsx`, using the existing asset pointer paths resolved against `https://dortiz-wills.lovable.app`.
- Keep the existing asset pointers intact; no uploads or asset deletion are needed.
- Check both image responses and verify that both charts visibly render in their existing text columns in the preview.
- After the updated code reaches your external host, check both pages on dortizwills.com to confirm the images load there too. Until that deployment occurs, the live-site fix cannot be verified.