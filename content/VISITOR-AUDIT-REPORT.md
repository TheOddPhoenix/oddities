# Oddites — comprehensive visitor and editorial update

Review date: 2026-10-29. Repository: TheOddPhoenix/oddities. Publication follows the existing GitHub Pages workflow.

## 1. Files and components

- `data.js`: revised descriptions, titles, operator actions, activities, warnings, relationships and backward-compatible `navigation` metadata. Historical research remains in `sources`, `editorial_review`, and `editorial_previous_history`.
- `app.js`: shared card renderer, verified-action filtering, encoded Google Maps directions, original category colors, map-marker consistency, product spelling and dialog behavior.
- `styles.css`: category tokens, coordinated purple visitor panel, accessible contrasts, responsive final directions action.
- `index.html`: Oddites product copy, cache version, social image, global Explore Map labels.
- `map-data.js`: sourced parent references; Bird Girl now uses Telfair Academy, with original historical anchor preserved separately.
- `content/visitor-audit.json`, `content/image-manifest.json`, `content/image-queue.jsonl`: audit trail and catalog/image queue reconciliation.
- `README.md`, `content/IMAGE-WORKFLOW.md`, `tests/audit.spec.cjs`: maintained documentation and checks.

## 2. Record counts and checklist reconciliation

All 103 existing stable IDs retained and descriptions revised. Six meaningful parent/corridor records added: Bonaventure, Linwood, Greenwood (Hot Springs), Evergreen (Oakland), Highway 115, San Luis Valley. Total: **109**.

The 110 numbered checklist items map to108 unique records because Wright Square/Hanging Square and Hoffa/Machus Red Fox each describe one existing subject/location. The additional San Luis Valley parent produces109 records. No padding records or unverified Cold War attraction were invented. See CHECKLIST.md and location-audit.csv.

## 3. Titles and historical descriptions

44 existing titles corrected; all103 existing short descriptions revised with varied openings. Expanded history uses revised grounded summaries or checked corrections; previous history is retained internally.

Notable factual changes: Bird Girl is at Telfair Academy; Baker Hospital No.1 and the surviving No.2/library are distinguished; Malco’s unsupported1880s vanishing-act story removed; Riverview’s mismatch corrected to Crested Butte/Jokerville; Kristal Reisinger retained; Fox Hollow region corrected to Westfield.

| Previous title | Revised title |
|---|---|
| The Clutter Family Home | Clutter Family Home |
| Eureka Springs | Eureka Springs, Arkansas |
| Bachelors Grove Cemetery | Bachelor’s Grove Cemetery |
| Aurora Cemetery UFO Legend | Aurora Cemetery |
| The Historic Joplin Hideout | Historic Joplin Hideout |
| Bonaventure Cemetery: Bird Girl History | Bird Girl Statue |
| Wichita State Plane Wreckage | Wichita State Plane Crash Site |
| Ludlow Massacre Memorial | Ludlow Massacre Monument |
| Linwood Cemetery: Kid Curry | Kid Curry Memorial |
| The Ambush Museum | Bonnie and Clyde Ambush Museum |
| The Arlington Resort Hotel | Arlington Resort Hotel & Spa |
| Greenwood Cemetery (Owney Madden) | Owney Madden Grave |
| The Malco Theatre | Historic Malco Theatre |
| The Blue Angel of Greenwood | Blue Angel of Greenwood Cemetery |
| Edinburgh 'Poor Farm' | Edinburgh Manor |
| Former Gacy House Site | Former John Wayne Gacy House Site |
| Bobby Franks Kidnap Site | Bobby Franks Kidnapping Site |
| The Cherry Mine Disaster Site | Cherry Mine Disaster Memorials |
| H.H. Holmes Hotel Site | H. H. Holmes Murder Castle Site |
| Mercer-Williams House | Mercer Williams House Museum |
| Former Moon River Brewing / City Hotel | Former Moon River Brewing Company / City Hotel |
| The Crestone Ziggurat | Crestone Ziggurat |
| Lane 6: San Luis Valley UFO Lore | County Lane 6 North — San Luis Valley UFO Lore |
| County Road T | County Road T — Crestone Route |
| The Tunnels of Gold Camp | Gold Camp Road Tunnels |
| Deadman Canyon | Dead Man’s Canyon — Highway 115 Lore |
| The Victor Hotel | Victor Hotel |
| Riverview Cemetery | Crested Butte Cemetery — Jokerville Memorial |
| The Lemp Mansion | Lemp Mansion |
| Point Pleasant Mothman Site | Point Pleasant Mothman Encounter Area |
| Elizabeth Short Case: Norton Avenue | Elizabeth Short (Black Dahlia) Case Site |
| The Cecil Hotel | Cecil Hotel |
| Donner Pass Survival Camp | Donner Party Survival Camp |
| Bodie Ghost Town | Bodie State Historic Park |
| Mountain Meadows Massacre | Mountain Meadows Massacre Site |
| Glastenbury: Bennington Triangle Lore | Glastenbury / Bennington Triangle |
| Maura Murray Case: Route 112 Area | Maura Murray Disappearance Site |
| Machus Red Fox Site: Jimmy Hoffa | Jimmy Hoffa Disappearance Site (Former Machus Red Fox Restaurant) |
| St. Augustine Lighthouse | St. Augustine Lighthouse & Maritime Museum |
| The Seattle Underground | Seattle Underground |
| Superstition Mountains (Lost Dutchman) | Superstition Mountains / Lost Dutchman’s Gold Mine Legend |
| Silver Plume: The Disappearances | Silver Plume Disappearances |
| Gilman: The Abandoned Mining Town | Gilman Ghost Town |
| The Battle of Los Angeles | Battle of Los Angeles (1942) |

## 4. Websites and booking actions

162 unique public URLs checked for HTTP status and redirects; 134 responded, 28 were unavailable or blocked to that client. Operator identity and activity checks are recorded separately in each entry’s evidence; HTTP200 alone was never treated as proof of ownership.

72 checked visitor actions retained, using Visit Website, Book a Stay, Explore Experiences, or View Stay on Airbnb. No affiliate links added.

Corrections include theMyrtles.com with direct ResNexus lodging, current Villisca murderhouse.com, Waverly’s new operator domain, correct Victor Hotel rather than Black Monarch, Lemp lodging and experience pages, and official Ohio Reformatory programs. The suspect Eastland website and non-resolving Mountain Meadows visitor link are not recommended. Legacy URLs can remain internal historical references.

## 5. Activities

72 distinct activity/stay descriptions added, including museum admission, self-guided visits, historical tours, film tours, ghost tours, investigations, lodging, and seasonal programs where checked. No prices, live inventory, or operating hours fabricated.

Ohio Reformatory lists historical/film and paranormal programs separately. Eastern State explicitly prohibits paranormal investigations; its festival is not represented as an investigation. Conjuring House has a website action and restoration notice but no bookable tour or stay.

## 6. Category colors and cards

Recovered original fills from pre-audit commit b0c95a3^: haunted #2e1a47; alien/cryptid #064e3b; historic #1c1917; cemetery #0c0a09; crime #450a0a; missing #854d0e. Shared styles apply to badges, filters, icons, card accents, map markers and footer categories. Off-white text preserves readable contrast. The brown visitor box is purple. Historical Sources tabs and inline location-map disclosures removed; sources remain internal. No empty activity or visitor sections.

## 7. Directions

Every expanded card has exactly one Get Directions action, last in the action group. Published visitor targets checked for 60 records. Other cards explicitly identify area or unconfirmed entrance references. Google Maps universal URLs use API1 and encoded destinations, allowing supported devices to choose browser/app behavior.

Historical map references remain independent. Alcatraz uses Pier33; Bird Girl uses Telfair Academy; Wichita uses Dry Gulch trailhead wording without asserting a dubious GPS entrance; Gilman uses nearby Minturn until a lawful overlook is confirmed. Private property no longer automatically suppresses directions. No invented coordinates or assurances about roadside parking.

## 8. Warnings and access

Location-specific notes cover Sand Creek’s unpaved approach, Bodie dirt/snow access, Gold Camp’s variable mountain-road sections, RMNP altitude/seasonal terrain, Centralia gases and collapse hazards, Superstition heat/water, Glastenbury remote hiking and closed tower, and private/restricted properties. No blanket4WD requirement imposed.

## 9. Connected records

Parent/child links preserve cemetery monuments and wider settings. The Point Pleasant museum/statue and encounter area remain distinct. Stable aliases and saved-list IDs are retained. No genuine existing record deleted.

## 10. San Luis Valley

Regional parent connects Snippy, County Lane6North, CountyRoadT, Crestone Ziggurat and Kristal Reisinger. Directions target the checked Colorado Welcome Center at610StateAve,Alamosa. Individual records retain their own history, access notes and directions. Ziggurat is public and categorized as an unusual spiritual/historical site, not proof of a UFO event.

## 11. Outstanding research

66 records have individually documented questions. See MANUAL-VERIFICATION.md. The brief’s unresolved viewpoint, parking and historical-identity questions have not been hidden or filled with fabricated details.

## 12. Validation and limitations

- JavaScript syntax checks and catalog/search/pagination/storage/relationship tests pass. Added checks cover destination encoding, source retention, verified visitor actions, parent links, original colors and restricted-property fallbacks.
- Browser checks: all seven category cards have exactly one final directions action, no Historical Sources panel and no horizontal overflow; save dialog closes correctly. Desktop and phone-size viewport checks cover layout and map/card return navigation.
- Real Android/iOS devices, physical driving routes, parking permissions, phone confirmations and booking purchases were not tested. Mobile viewport QA does not claim device-hardware testing.
- Automated transport failures are logged separately. No certificate bypass, false open/closed claim or blind website-identity acceptance.
- Earlier generation/publish usage-limit block was resolved before this audit; it is not a current blocker.

## Detailed location results

The complete per-location descriptions, navigation targets, actions, evidence and unresolved flags are in location-audit.csv, location-audit.json and the repository’s content/visitor-audit.json.
