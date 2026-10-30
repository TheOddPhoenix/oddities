# Oddities

Dark-tourism discovery site for The Odd Phoenix, hosted on GitHub Pages.

## Local preview and checks

Serve the repository root with a static HTTP server. Run:

```
node --check app.js
node --check data.js
node --check map-data.js
node tests/audit.spec.cjs
```

Also test map search, category filters, marker popups, related stops, account navigation, saved lists, keyboard dialogs, and narrow/wide layouts in a browser.

## Structure

- `data.js`: catalog stories, card pitches, explicit category tags, restrictions, and related-place suggestions.
- `map-data.js`: sourced map references with `place` or `area` precision. Area pins are approximate context locations, not entrances, trailheads, private addresses, or navigation instructions.
- `site-config.js`: public contact address and switchable tile-provider configuration. Never add credentials here.
- `app.js`: discovery, saved lists, accessible dialogs, local backups, map view, and relationship ranking.
- `styles.css`: original Outfit font, dark palette, skull/Lucide identity, and responsive layouts.
- `vendor/leaflet.js` / `vendor/leaflet.css`: Leaflet 1.9.4, BSD-2-Clause; see `vendor/LEAFLET-LICENSE.txt`.
- `content/IMAGE-WORKFLOW.md`: repeatable AI-illustration pipeline, prompts, manifest, approval and resizing tools.

## Map sources and provider

Place references come from Wikipedia/Wikidata; town and city area references are checked against the US Census Gazetteer. Matching ambiguities use area pins. The Marshall House is the Savannah location, not the similarly named Virginia house. Review every new map reference before publishing.

Leaflet draws the map; OpenStreetMap supplies the tiles with visible attribution. Tiles load only when the user opens the map. Searches filter the local catalog and do not call a geocoder. No device geolocation is requested. Do not bulk-download, prefetch, or offer offline downloads from the public OSM tile service. Preserve normal browser caching and Referer headers. The tile URL is configurable so the site can move to a production tile provider as traffic grows. See https://operations.osmfoundation.org/policies/tiles/ .

## Editorial structure

Cards explain why a place belongs in a dark-tourism guide. Practical guidance appears in Before You Go. Detail sections use Dark History & Lore and Related Oddities. Explicit related stops are prioritized, followed by nearby places and shared themes; limited variation applies within similarly ranked candidates.

Reviewed entries include primary or identified sources. Historical review remains ongoing across the catalog; do not present every original entry as fully fact-checked. Paranormal stories are labeled as lore or reported experiences. Every detail card offers directions to a checked visitor target or an explicitly approximate public geographic reference.

## Account and contact

The Account presentation is restored. Saved lists and visited status still use local storage under the existing `oddstops_collections` and `oddstops_visited` keys. Online signup, authentication, and cross-device sync require a separate backend integration and are not simulated here.

Set `siteConfig.contactEmail` to the owner's intended public address to activate mailto suggestions and contact. No address is inferred from a Git commit or personal account. The old GitHub-account notice has been removed.

## Assets and scale

Eureka Springs retains the owner's original AI illustration. Silver Plume has a newly generated, reviewed AI illustration in three WebP sizes, labeled in the detail pane. Other entries retain category artwork until their illustrations are approved. The image queue scales authoring; it does not automatically spend money, generate images, or publish unreviewed outputs.

For thousands of images, use object storage/CDN and a server-side generation/review queue. For substantial visitor traffic, use a tile provider with suitable capacity. Browser-only saved data must migrate carefully when real accounts are introduced.

## Location details and discovery refinements

The catalog now contains 109 locations. Category filters retain the original seven categories, with populated story subcategories and independent place-type and experience filters in both Explore and Map views. Booking actions use direct, non-affiliate links. Current verified hotel actions cover Crescent, Basin Park, Stanley, and Lizzie Borden; Joplin links to its existing Airbnb listing. The Conjuring House is included as restricted pending public tour availability. Battle of Los Angeles uses an approximate event-area reference.

Expanded cards keep historical sources internally and show activities, concise access notes, related records, visitor actions and one final Get Directions link. Close Details returns to the originating view; Back to Explore exits both map and card.

## Visitor editorial audit

All110 checklist items map to108 distinct records plus the SanLuisValley regionalparent:109 catalogentries. `content/visitor-audit.json` records evidence and open questions. `navigation` holds visitor destination strings separately from `map-data.js` historical/discovery anchors. `navigation.verified` means the published destination was checked, not that a route was driven or parking field-verified. Only actions explicitly checked by editorial review render. Category fill tokens were recovered from the original pre-audit history.
