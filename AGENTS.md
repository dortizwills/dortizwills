# Project decisions

- Keep portfolio project listing content in the shared Work data module, so page cards stay consistent with their case-study links.
- Store newly uploaded app imagery as Lovable Assets pointers, so the repository remains lightweight and served media stays durable.
- Proxy CDN asset paths in local development, so newly uploaded artwork renders in the local preview as it does when hosted.
- Resolve the Enterprise Checkout and Self-Service Onboarding chart asset pointers against the Lovable-hosted origin, so their images also work on external hosting without a CDN proxy.
- Use semantic CSS/Tailwind media-surface tokens for project artwork backgrounds, so white artwork areas can respect theming.- Build Hivey case studies from the shared case-study parts, one page component per study, so styling stays consistent and an auth gate can wrap each page later.

- Hidden lab projects live under /lab/* and are not linked from navigation, so they stay unlisted.
- Keep ARKit scanning in a Capacitor iOS plugin and the viewer in shared Three.js code; browsers cannot access native spatial APIs.
- Distinguish native triangle meshes, sparse tracking points, and measured photo-assisted shells; never present estimated or synthetic geometry as a completed scan.
- Render uploaded room images as aspect-correct planes positioned by surface raycasts, not textured furniture boxes.
- Keep training history in separate browser-storage keys from active training and archive immutable workout/check-off snapshots, so reviewing prior plans never changes the active plan.
