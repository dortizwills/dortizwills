# Current work

- [x] Use the supplied two-app picture for the Mobile App Portfolio card on Work.
- [x] Make the two-video Pitching & Developing area white on the homepage.
- [x] Restore both Hivey chart image addresses and verify their appearance in the preview.

## Room scanner direction

- [x] Choose native iPhone scanning plus portfolio viewer; prioritize real live scanning over website-only delivery.
- [x] Remove simulated mapping; add native ARKit tracking/mesh source and website capability detection.
- [ ] Complete and verify native live scanning on a physical iPhone (requires Mac/Xcode, signing and device access).
- [ ] Complete XS dense-mesh reconstruction using metric Core ML depth and validated TSDF fusion (model/fusion integration and XS device validation remain outstanding).
- [x] Add four-corner capture with measured room-shell fallback, explicitly not automatic reconstruction.
- [ ] Reconstruct actual geometry automatically from four corner photos (requires a validated reconstruction service; four views alone do not guarantee enough overlap).
- [x] Allow aspect-correct image uploads to be placed and moved on room surfaces; verified in browser on desktop and phone sizes.