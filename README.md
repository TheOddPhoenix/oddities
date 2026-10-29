# Oddities

Static, dependency-free travel discovery site hosted on GitHub Pages.

## Run locally

Serve this directory with any static HTTP server, for example `python -m http.server 8765`.

## Structure

- `index.html`: accessible page structure and metadata
- `styles.css`: responsive styling; no runtime CSS compiler or third-party font requests
- `app.js`: search, filters, native dialogs, shareable hash links, device-local lists
- `data.js`: canonical catalog, explicit category tags, legacy ID aliases
- `images/eureka.webp`: optimized original image; other cards use decorative CSS artwork

## Content policy

Paranormal accounts are folklore, not verified scientific findings. Source-reviewed entries include sources and a review date. Other catalog summaries explicitly await full source review; do not treat them as checked travel instructions. Operator links are provided separately and do not imply a completed source review. No current hours, prices, safety guarantees, or precise map coordinates are invented. Private/restricted entries omit map calls to action. Check with the operator before travel.

The four initial source-reviewed entries are Sand Creek, Alcatraz, Winchester Mystery House, and Golden Gate Bridge (2026-10-29). Remaining entries still need individual historical and visitor-access research.

## Saved data

Existing `oddstops_collections` and `oddstops_visited` browser keys remain supported. Legacy IDs migrate to canonical records when loaded. Lists use text rendering and prototype-free objects; malformed storage is handled without stopping the app. Export/import provides a portable JSON backup. No backend account, tracking, or cross-device sync is implied.

## Publishing

GitHub Pages serves the root of `main`. Before publishing, run `node --check app.js`, `node --check data.js`, and `node tests/audit.spec.cjs` for catalog/search/storage regression checks. Also test native dialogs, saved lists, and narrow/wide layouts in a browser.
