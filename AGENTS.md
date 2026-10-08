# Project decisions

- Keep portfolio project listing content in the shared Work data module, so page cards stay consistent with their case-study links.
- Store newly uploaded app imagery as Lovable Assets pointers, so the repository remains lightweight and served media stays durable.
- Proxy CDN asset paths in local development, so newly uploaded artwork renders in the local preview as it does when hosted.
- Use semantic CSS/Tailwind media-surface tokens for project artwork backgrounds, so white artwork areas can respect theming.- Build Hivey case studies from the shared case-study parts, one page component per study, so styling stays consistent and an auth gate can wrap each page later.
