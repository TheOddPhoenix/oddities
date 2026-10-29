/* Curated catalog. See README for review policy. */
const locationAliases = {"the-last-resort-bar-wuornos":"last-resort","clutter-family-farm":"clutter-house","winchester-mystery-house":"winchester-mystery-house-hist","marfa-lights-viewing":"marfa-lights-main","hoffa":"jimmy-hoffa-red-fox","crescent":"crescent-hotel-eureka"};
const trips = [
  {
    "id": "last-resort",
    "title": "The Last Resort Bar",
    "state": "FL",
    "region": "Port Orange, FL",
    "category": "crime",
    "desc": "A Port Orange bar associated with the Aileen Wuornos case.",
    "related": [],
    "tags": [
      "crime"
    ]
  },
  {
    "id": "clutter-house",
    "title": "The Clutter Family Home",
    "state": "KS",
    "region": "Holcomb, KS",
    "category": "crime",
    "desc": "The private home associated with the 1959 Clutter family murders and Truman Capote’s In Cold Blood.",
    "related": [],
    "tags": [
      "crime"
    ],
    "disclaimers": [
      "Private property. View from public road only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "restricted": true
  },
  {
    "id": "sloss",
    "title": "Sloss Furnaces",
    "state": "AL",
    "region": "Birmingham, AL",
    "category": "haunted",
    "desc": "A preserved industrial landmark with a history of iron production and local ghost stories.",
    "related": [],
    "tags": [
      "haunted"
    ]
  },
  {
    "id": "eureka",
    "title": "Eureka Springs",
    "state": "AR",
    "region": "Carroll County, AR",
    "category": "historic",
    "desc": "A hillside Arkansas town known for its springs, Victorian architecture, and local legends.",
    "related": [
      "crescent-hotel-eureka"
    ],
    "tags": [
      "historic"
    ],
    "image": "images/eureka.webp"
  },
  {
    "id": "skunk-ape-headquarters",
    "title": "Skunk Ape Research Headquarters",
    "state": "FL",
    "region": "Ochopee, FL",
    "category": "cryptid",
    "desc": "An Everglades attraction dedicated to stories of Florida’s legendary Skunk Ape.",
    "related": [],
    "tags": [
      "cryptid"
    ]
  },
  {
    "id": "bachelor-grove",
    "title": "Bachelors Grove Cemetery",
    "state": "IL",
    "region": "Midlothian, IL",
    "category": "cemetery",
    "desc": "A historic Illinois cemetery associated with local ghost stories.",
    "related": [],
    "tags": [
      "cemetery",
      "haunted"
    ]
  },
  {
    "id": "point-pleasant-mothman-statue",
    "title": "Mothman Statue & Museum",
    "state": "WV",
    "region": "Point Pleasant, WV",
    "category": "cryptid",
    "desc": "A statue and museum exploring Point Pleasant’s Mothman folklore.",
    "related": [],
    "tags": [
      "cryptid"
    ]
  },
  {
    "id": "aurora-ufo-grave",
    "title": "Aurora Cemetery UFO Legend",
    "state": "TX",
    "region": "Aurora, TX",
    "category": "alien",
    "desc": "A cemetery associated with a local legend about an alleged 1897 airship crash.",
    "related": [],
    "tags": [
      "alien"
    ]
  },
  {
    "id": "winchester-mystery-house-hist",
    "title": "Winchester Mystery House",
    "state": "CA",
    "region": "San Jose, CA",
    "category": "historic",
    "desc": "Sarah Winchester’s San Jose mansion, known for its unusual architecture and ghost lore.",
    "related": [],
    "tags": [
      "historic",
      "haunted"
    ],
    "booking": {
      "url": "https://www.winchestermysteryhouse.com",
      "type": "Tours"
    },
    "sources": [
      {
        "label": "Winchester Mystery House",
        "url": "https://winchestermysteryhouse.com/"
      }
    ],
    "history": "The house offers tours exploring Sarah Winchester’s mansion and its unusual architecture. Ghost stories are part of its visitor storytelling; they are not evidence of supernatural activity.",
    "reviewed": "2026-10-29"
  },
  {
    "id": "marfa-lights-main",
    "title": "Marfa Lights Viewing Area",
    "state": "TX",
    "region": "Marfa, TX",
    "category": "alien",
    "desc": "A public viewing area associated with reports of distant lights on the Texas horizon.",
    "related": [],
    "tags": [
      "alien"
    ]
  },
  {
    "id": "adx-florence-supermax",
    "title": "ADX Florence",
    "state": "CO",
    "region": "Florence",
    "category": "crime",
    "safety_rating": "High Caution",
    "disclaimers": [
      "Federal Property. No Trespassing.",
      "No public access to facility.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "An active federal prison with no public visitor attraction. Do not approach the facility.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "bonnie-clyde-joplin-hideout",
    "title": "The Historic Joplin Hideout",
    "state": "MO",
    "region": "Joplin",
    "category": "crime",
    "booking": {
      "url": "https://www.airbnb.com/rooms/855978867173917336",
      "type": "Airbnb"
    },
    "desc": "The garage apartment where the Barrow Gang's 1933 shootout occurred.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "sand-creek-massacre-site",
    "title": "Sand Creek Massacre National Historic Site",
    "state": "CO",
    "region": "Eads",
    "category": "historic",
    "desc": "A place of remembrance for the Cheyenne and Arapaho people killed at Sand Creek in 1864.",
    "tags": [
      "historic"
    ],
    "related": [],
    "sources": [
      {
        "label": "National Park Service",
        "url": "https://www.nps.gov/sand/index.htm"
      }
    ],
    "history": "On November 29, 1864, Cheyenne and Arapaho people encamped along Big Sandy Creek were attacked. The National Historic Site preserves their memory and interprets the events and their lasting consequences.",
    "reviewed": "2026-10-29"
  },
  {
    "id": "bird-girl-bonaventure",
    "title": "Bonaventure Cemetery: Bird Girl History",
    "state": "GA",
    "region": "Savannah",
    "category": "historic",
    "desc": "The cemetery associated with the famous Bird Girl photograph. The sculpture has been relocated; check its current exhibition location.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "wichita-state-crash-site",
    "title": "Wichita State Plane Wreckage",
    "state": "CO",
    "region": "Silver Plume",
    "category": "historic",
    "safety_rating": "Caution",
    "disclaimers": [
      "Extremely steep hike.",
      "High altitude (10,800ft).",
      "Treat wreckage as a cemetery.",
      "Do not rely on informal routes. Confirm lawful trail access and current conditions with the land manager."
    ],
    "desc": "The preserved debris field of the 1970 aviation disaster that killed 31 people.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "ludlow-massacre-site",
    "title": "Ludlow Massacre Memorial",
    "state": "CO",
    "region": "Ludlow",
    "category": "historic",
    "desc": "A memorial to people killed during the 1914 Colorado labor conflict.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "fort-robinson-outbreak",
    "title": "Fort Robinson",
    "state": "NE",
    "region": "Crawford",
    "category": "historic",
    "booking": {
      "url": "https://outdoornebraska.gov/fortrobinson/",
      "type": "State Park & History"
    },
    "desc": "A Nebraska historic site connected to the 1879 Northern Cheyenne breakout and its tragic aftermath.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "kid-curry-grave-linwood",
    "title": "Linwood Cemetery: Kid Curry",
    "state": "CO",
    "region": "Glenwood Springs",
    "category": "crime",
    "desc": "A historic cemetery associated with the burial of outlaw Harvey Logan, known as Kid Curry.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "jesse-james-home-museum",
    "title": "Jesse James Home",
    "state": "MO",
    "region": "St. Joseph",
    "category": "crime",
    "desc": "A museum in the former home of Jesse James, interpreting his life and death.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "bonnie-clyde-ambush-site",
    "title": "Bonnie and Clyde Ambush Marker",
    "state": "LA",
    "region": "Gibsland",
    "category": "crime",
    "desc": "A roadside marker associated with the 1934 ambush of Bonnie Parker and Clyde Barrow.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "ambush-museum-gibsland",
    "title": "The Ambush Museum",
    "state": "LA",
    "region": "Gibsland",
    "category": "crime",
    "desc": "A Gibsland museum exploring the history of Bonnie Parker, Clyde Barrow, and the 1934 ambush.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "crescent-hotel-eureka",
    "title": "1886 Crescent Hotel & Spa",
    "state": "AR",
    "region": "Eureka Springs",
    "category": "haunted",
    "booking": {
      "url": "https://crescent-hotel.com",
      "phone": "855-725-5720",
      "type": "Hotel & Tours"
    },
    "desc": "A grand hotel that served as a fraudulent cancer hospital under Norman Baker in the 1930s.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "basin-park-hotel",
    "title": "The Basin Park Hotel",
    "state": "AR",
    "region": "Eureka Springs",
    "category": "crime",
    "booking": {
      "url": "https://basinpark.com",
      "phone": "877-456-9679",
      "type": "Hotel & Tours"
    },
    "desc": "A historic hotel in downtown Eureka Springs, associated with local stories and legends.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "arlington-hotel-capone",
    "title": "The Arlington Resort Hotel",
    "state": "AR",
    "region": "Hot Springs",
    "category": "crime",
    "booking": {
      "url": "https://www.arlingtonhotel.com",
      "phone": "501-623-7771",
      "type": "Hotel"
    },
    "desc": "A historic Hot Springs hotel associated with the city’s resort and organized-crime history.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "ohio-club-hot-springs",
    "title": "The Ohio Club",
    "state": "AR",
    "region": "Hot Springs",
    "category": "crime",
    "desc": "A historic Hot Springs bar associated with the city’s gambling era.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "gangster-museum-america",
    "title": "The Gangster Museum of America",
    "state": "AR",
    "region": "Hot Springs",
    "category": "crime",
    "desc": "A Hot Springs museum exploring the city’s gambling and organized-crime history.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "greenwood-cemetery-madden",
    "title": "Greenwood Cemetery (Owney Madden)",
    "state": "AR",
    "region": "Hot Springs",
    "category": "cemetery",
    "desc": "A Hot Springs cemetery associated with the burial of Owney Madden.",
    "tags": [
      "cemetery"
    ],
    "related": []
  },
  {
    "id": "fordyce-bathhouse",
    "title": "Fordyce Bathhouse",
    "state": "AR",
    "region": "Hot Springs",
    "category": "historic",
    "desc": "A historic Bathhouse Row building associated with Hot Springs’ bathing culture and local legends.",
    "tags": [
      "historic",
      "haunted"
    ],
    "related": []
  },
  {
    "id": "malco-theatre-hot-springs",
    "title": "The Malco Theatre",
    "state": "AR",
    "region": "Hot Springs",
    "category": "haunted",
    "desc": "A former vaudeville house where a woman allegedly vanished during an 1880s magic act.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "baker-institute-muscatine",
    "title": "The Baker Institute Site",
    "state": "IA",
    "region": "Muscatine",
    "category": "crime",
    "desc": "The site of Norman Baker's first fraudulent 'Cancer Hospital'.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "blue-angel-muscatine",
    "title": "The Blue Angel of Greenwood",
    "state": "IA",
    "region": "Muscatine",
    "category": "cemetery",
    "desc": "A Greenwood Cemetery monument associated with Muscatine’s local ghost lore.",
    "tags": [
      "cemetery",
      "haunted"
    ],
    "related": []
  },
  {
    "id": "tipton-cow-war",
    "title": "Iowa Cow War History",
    "state": "IA",
    "region": "Tipton",
    "category": "crime",
    "desc": "An area associated with the 1931 conflict over compulsory cattle tuberculosis testing.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "edinburgh-poor-farm",
    "title": "Edinburgh 'Poor Farm'",
    "state": "IA",
    "region": "Monticello",
    "category": "haunted",
    "desc": "A former county poor farm associated with institutional history and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "black-angel-iowa-city",
    "title": "The Black Angel of Oakland Cemetery",
    "state": "IA",
    "region": "Iowa City",
    "category": "cemetery",
    "desc": "A bronze cemetery monument associated with local supernatural legends.",
    "tags": [
      "cemetery",
      "haunted"
    ],
    "related": []
  },
  {
    "id": "villisca-axe-house",
    "title": "Villisca Axe Murder House",
    "state": "IA",
    "region": "Villisca",
    "category": "crime",
    "booking": {
      "url": "https://www.villiscaiowa.com",
      "phone": "847-977-5601",
      "type": "Tours & Overnight"
    },
    "desc": "The Iowa home associated with the unsolved 1912 murders of eight people.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "gacy-house-site",
    "title": "Former Gacy House Site",
    "state": "IL",
    "region": "Norwood Park",
    "category": "crime",
    "safety_rating": "Caution",
    "disclaimers": [
      "Private residence. View from public sidewalk only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "A private residential site associated with the John Wayne Gacy case. It is not a public attraction.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "bobby-franks-kidnap-site",
    "title": "Bobby Franks Kidnap Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "A Chicago neighborhood associated with the 1924 abduction and murder of Bobby Franks.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "cherry-mine-disaster",
    "title": "The Cherry Mine Disaster Site",
    "state": "IL",
    "region": "Cherry",
    "category": "historic",
    "desc": "A place associated with the 1909 Cherry Mine disaster and remembrance of the miners who died.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "st-valentines-massacre",
    "title": "St. Valentine's Day Massacre Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "The Chicago location associated with the 1929 St. Valentine’s Day Massacre.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "eastland-disaster-site",
    "title": "SS Eastland Disaster Site",
    "state": "IL",
    "region": "Chicago",
    "category": "historic",
    "desc": "A Chicago River location associated with the 1915 SS Eastland disaster and its victims.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "holmes-murder-castle",
    "title": "H.H. Holmes Hotel Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "The Chicago site associated with H.H. Holmes’s former hotel. Many popular accounts mix documented events with disputed stories.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "little-gracie-watson-grave",
    "title": "Little Gracie Watson Memorial",
    "state": "GA",
    "region": "Savannah",
    "category": "cemetery",
    "desc": "A funerary monument in Savannah’s Bonaventure Cemetery, also associated with local folklore.",
    "tags": [
      "cemetery"
    ],
    "related": []
  },
  {
    "id": "mercer-williams-house",
    "title": "Mercer-Williams House",
    "state": "GA",
    "region": "Savannah",
    "category": "crime",
    "desc": "A historic Savannah house associated with architecture, preservation, and the Danny Hansford case.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "marshall-house-savannah",
    "title": "The Marshall House",
    "state": "GA",
    "region": "Savannah",
    "category": "haunted",
    "desc": "A Savannah hotel with Civil War history and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "wright-square-hanging",
    "title": "Wright Square (The Hanging Square)",
    "state": "GA",
    "region": "Savannah",
    "category": "historic",
    "desc": "A historic Savannah square associated with early colonial history and local folklore.",
    "tags": [
      "historic",
      "haunted"
    ],
    "related": []
  },
  {
    "id": "moon-river-brewing",
    "title": "Former Moon River Brewing / City Hotel",
    "state": "GA",
    "region": "Savannah",
    "category": "haunted",
    "desc": "The former City Hotel building associated with Savannah ghost stories. Confirm current business operations before planning a visit.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "colonial-park-cemetery",
    "title": "Colonial Park Cemetery",
    "state": "GA",
    "region": "Savannah",
    "category": "cemetery",
    "desc": "A historic Savannah cemetery connected to the city’s early history and epidemic burials.",
    "tags": [
      "cemetery"
    ],
    "related": []
  },
  {
    "id": "snippy-horse-site",
    "title": "Snippy the Horse Case Area",
    "state": "CO",
    "region": "Alamosa",
    "category": "alien",
    "desc": "The Alamosa area associated with reports about a horse’s death in 1967 and later UFO speculation.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "alien"
    ],
    "related": []
  },
  {
    "id": "crestone-ziggurat-vortex",
    "title": "The Crestone Ziggurat",
    "state": "CO",
    "region": "Crestone",
    "category": "alien",
    "desc": "A stepped tower associated with local spiritual traditions and UFO folklore; supernatural claims are unverified.",
    "tags": [
      "alien"
    ],
    "related": []
  },
  {
    "id": "san-luis-valley-lane-6",
    "title": "Lane 6: San Luis Valley UFO Lore",
    "state": "CO",
    "region": "Hooper",
    "category": "alien",
    "desc": "A road associated with local reports of unusual lights. UFO interpretations are unverified.",
    "tags": [
      "alien"
    ],
    "related": []
  },
  {
    "id": "the-t-road",
    "title": "County Road T",
    "state": "CO",
    "region": "Crestone",
    "category": "alien",
    "desc": "A San Luis Valley road associated with local reports of unusual objects in the sky.",
    "tags": [
      "alien"
    ],
    "related": []
  },
  {
    "id": "kristal-reisinger-site",
    "title": "Kristal Reisinger Disappearance Area",
    "state": "CO",
    "region": "Crestone",
    "category": "crime",
    "desc": "The Colorado community associated with Kristal Reisinger’s 2016 disappearance. Respect residents and the search for answers.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": []
  },
  {
    "id": "gold-camp-road-tunnels",
    "title": "The Tunnels of Gold Camp",
    "state": "CO",
    "region": "Colorado Springs",
    "category": "haunted",
    "safety_rating": "Caution",
    "desc": "Historic Colorado tunnels associated with railway history and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "emma-crawford-mountain",
    "title": "Emma Crawford's Red Mountain",
    "state": "CO",
    "region": "Manitou Springs",
    "category": "haunted",
    "desc": "The Manitou Springs peak associated with Emma Crawford’s burial and the story behind a local commemorative tradition.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "deadman-canyon-espinosa",
    "title": "Deadman Canyon",
    "state": "CO",
    "region": "Hwy 115",
    "category": "crime",
    "desc": "A Colorado area associated with the Espinosa brothers’ nineteenth-century crimes.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "victor-hotel-morgue",
    "title": "The Victor Hotel",
    "state": "CO",
    "region": "Victor",
    "category": "haunted",
    "desc": "A historic Colorado hotel associated with local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "riverview-cemetery-mine",
    "title": "Riverview Cemetery",
    "state": "CO",
    "region": "Crested Butte",
    "category": "historic",
    "desc": "A Crested Butte cemetery associated with victims of the 1884 mine disaster.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "sin-city-tunnels",
    "title": "Old Colorado City Tunnel Lore",
    "state": "CO",
    "region": "Old Colorado City",
    "category": "crime",
    "desc": "Stories of underground passages form part of Old Colorado City’s local history and folklore. Public access is not established.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "colorado-state-pen-museum",
    "title": "Museum of Colorado Prisons",
    "state": "CO",
    "region": "Cañon City",
    "category": "historic",
    "desc": "A museum in Cañon City exploring Colorado’s prison history.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "rmnp-disappearances",
    "title": "Rocky Mountain National Park",
    "state": "CO",
    "region": "Estes Park",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "A mountain park with extensive hiking terrain. Plan for weather, altitude, and official trail conditions.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": []
  },
  {
    "id": "stanley-hotel",
    "title": "The Stanley Hotel",
    "state": "CO",
    "region": "Estes Park",
    "category": "haunted",
    "desc": "The historic, isolated resort that inspired Stephen King's 'The Shining'.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "missouri-state-pen-jeff-city",
    "title": "Missouri State Penitentiary",
    "state": "MO",
    "region": "Jefferson City",
    "category": "crime",
    "booking": {
      "url": "https://missouripentours.com",
      "type": "Tours"
    },
    "desc": "A former Jefferson City prison associated with Missouri incarceration history and the 1954 riot.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "lemp-mansion",
    "title": "The Lemp Mansion",
    "state": "MO",
    "region": "St. Louis",
    "category": "haunted",
    "desc": "A historic St. Louis mansion associated with the Lemp brewing family and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "trans-allegheny-asylum",
    "title": "Trans-Allegheny Lunatic Asylum",
    "state": "WV",
    "region": "Weston",
    "category": "haunted",
    "booking": {
      "url": "https://trans-alleghenylunaticasylum.com",
      "type": "Tours"
    },
    "desc": "A former psychiatric hospital interpreted through architectural, institutional, and medical history tours.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "wv-pen-moundsville",
    "title": "West Virginia Penitentiary",
    "state": "WV",
    "region": "Moundsville",
    "category": "haunted",
    "desc": "A former prison offering historical interpretation and associated with local ghost lore.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "point-pleasant-mothman",
    "title": "Point Pleasant Mothman Site",
    "state": "WV",
    "region": "Point Pleasant",
    "category": "cryptid",
    "desc": "The Point Pleasant TNT area associated with reported 1966 sightings that became part of Mothman folklore.",
    "tags": [
      "cryptid"
    ],
    "related": []
  },
  {
    "id": "waverly-hills-sanatorium",
    "title": "Waverly Hills Sanatorium",
    "state": "KY",
    "region": "Louisville",
    "category": "haunted",
    "booking": {
      "url": "https://www.therealwaverlyhills.com",
      "type": "Tours"
    },
    "desc": "A former tuberculosis hospital known for its medical history and ghost-tour traditions.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "ohio-state-reformatory",
    "title": "Ohio State Reformatory",
    "state": "OH",
    "region": "Mansfield",
    "category": "haunted",
    "booking": {
      "url": "https://www.mrps.org",
      "type": "Tours"
    },
    "desc": "A historic prison and filming location for The Shawshank Redemption.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "brushy-mountain-pen",
    "title": "Brushy Mountain State Penitentiary",
    "state": "TN",
    "region": "Petros",
    "category": "crime",
    "desc": "A former Tennessee prison with a history tied to coal mining and incarceration.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "old-idaho-pen",
    "title": "Old Idaho Penitentiary",
    "state": "ID",
    "region": "Boise",
    "category": "historic",
    "desc": "A former Idaho prison interpreting incarceration, daily life, and executions.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "eastern-state-pen",
    "title": "Eastern State Penitentiary",
    "state": "PA",
    "region": "Philadelphia",
    "category": "historic",
    "desc": "A historic Philadelphia prison associated with the development of solitary confinement.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "centralia-mine-fire",
    "title": "Centralia Mine Fire",
    "state": "PA",
    "region": "Centralia",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "A town abandoned due to an underground coal fire that has been burning since 1962.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "lizzie-borden-house",
    "title": "Lizzie Borden House",
    "state": "MA",
    "region": "Fall River",
    "category": "crime",
    "booking": {
      "url": "https://lizzie-borden.com",
      "type": "Tours & Overnight"
    },
    "desc": "The Fall River home associated with the 1892 murders of Andrew and Abby Borden.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "salem-witch-memorial",
    "title": "Salem Witch Trials Memorial",
    "state": "MA",
    "region": "Salem",
    "category": "historic",
    "desc": "A memorial honoring people executed during the 1692 witch trials. The memorial is distinct from the execution site.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "danvers-state-hospital",
    "title": "Former Danvers State Hospital",
    "state": "MA",
    "region": "Danvers",
    "category": "haunted",
    "desc": "A former psychiatric hospital site that has been redeveloped. Confirm public access and respect residents.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "alcatraz-island",
    "title": "Alcatraz Island",
    "state": "CA",
    "region": "San Francisco",
    "category": "crime",
    "desc": "A former island prison with military, incarceration, and Native American civil-rights history.",
    "tags": [
      "crime"
    ],
    "related": [],
    "sources": [
      {
        "label": "National Park Service",
        "url": "https://www.nps.gov/alca/index.htm"
      }
    ],
    "history": "Alcatraz served as a fort, military prison, and federal penitentiary. Its history also includes the 19-month occupation by Indians of All Tribes beginning in 1969.",
    "reviewed": "2026-10-29"
  },
  {
    "id": "black-dahlia-dump-site",
    "title": "Elizabeth Short Memorial Context",
    "state": "CA",
    "region": "Los Angeles",
    "category": "crime",
    "desc": "The Los Angeles neighborhood associated with the 1947 discovery of Elizabeth Short’s remains. This is a residential area, not a visitor attraction.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "cecil-hotel",
    "title": "The Cecil Hotel",
    "state": "CA",
    "region": "Los Angeles",
    "category": "crime",
    "desc": "A Los Angeles hotel associated with twentieth-century social history and widely publicized criminal cases.",
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "cielo-drive-manson",
    "title": "Cielo Drive Historical Site",
    "state": "CA",
    "region": "Beverly Hills",
    "category": "crime",
    "safety_rating": "Caution",
    "disclaimers": [
      "Private road. View from public streets only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "A private residential area associated with the 1969 Tate murders. It is not open for public visits.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "golden-gate-bridge",
    "title": "Golden Gate Bridge",
    "state": "CA",
    "region": "San Francisco",
    "category": "historic",
    "desc": "A San Francisco landmark with visitor exhibits exploring its engineering and history.",
    "tags": [
      "historic"
    ],
    "related": [],
    "sources": [
      {
        "label": "Golden Gate Bridge visitor information",
        "url": "https://www.goldengate.org/bridge/visiting-the-bridge/"
      }
    ],
    "history": "The bridge’s visitor area includes exhibits about its construction, engineering, and history. Use the bridge authority’s current information when planning pedestrian or bicycle access.",
    "reviewed": "2026-10-29"
  },
  {
    "id": "donner-pass-campsite",
    "title": "Donner Pass Survival Camp",
    "state": "CA",
    "region": "Truckee",
    "category": "historic",
    "desc": "The Sierra Nevada area associated with the Donner Party’s 1846–47 winter survival ordeal.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "jonestown-memorial",
    "title": "Jonestown Memorial at Evergreen Cemetery",
    "state": "CA",
    "region": "Oakland",
    "category": "historic",
    "desc": "A place of remembrance for victims of the 1978 Jonestown tragedy.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "bodie-ghost-town",
    "title": "Bodie Ghost Town",
    "state": "CA",
    "region": "Bridgeport",
    "category": "historic",
    "desc": "A preserved California gold-rush town known for its surviving buildings and mining history.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "mountain-meadows-massacre",
    "title": "Mountain Meadows Massacre",
    "state": "UT",
    "region": "St. George",
    "category": "historic",
    "desc": "A Utah memorial landscape associated with the 1857 massacre of members of an emigrant wagon train.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "skinwalker-ranch-gate",
    "title": "Skinwalker Ranch",
    "state": "UT",
    "region": "Ballard",
    "category": "alien",
    "safety_rating": "High Caution",
    "disclaimers": [
      "Heavily guarded private property. Do not cross the gate.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "Private property associated with paranormal media and local lore. The gate is not a public attraction.",
    "restricted": true,
    "tags": [
      "alien"
    ],
    "related": []
  },
  {
    "id": "wounded-knee-massacre",
    "title": "Wounded Knee Massacre Site",
    "state": "SD",
    "region": "Pine Ridge",
    "category": "historic",
    "desc": "A place of remembrance for Lakota people killed by the U.S. Army at Wounded Knee in 1890.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "bennington-triangle",
    "title": "Glastenbury: Bennington Triangle Lore",
    "state": "VT",
    "region": "Glastenbury",
    "category": "historic",
    "desc": "A Vermont area associated with disappearance accounts and later supernatural folklore.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": []
  },
  {
    "id": "maura-murray-route-112",
    "title": "Maura Murray Case: Route 112 Area",
    "state": "NH",
    "region": "Woodsville",
    "category": "crime",
    "desc": "The New Hampshire area associated with Maura Murray’s 2004 disappearance. Respect local residents and the ongoing search for answers.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": []
  },
  {
    "id": "jimmy-hoffa-red-fox",
    "title": "Machus Red Fox Site: Jimmy Hoffa",
    "state": "MI",
    "region": "Bloomfield Township",
    "category": "crime",
    "desc": "The former restaurant site associated with Jimmy Hoffa’s 1975 disappearance.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": []
  },
  {
    "id": "fox-hollow-farm",
    "title": "Fox Hollow Farm",
    "state": "IN",
    "region": "Carmel",
    "category": "crime",
    "disclaimers": [
      "Private Property.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "Private property associated with the Herb Baumeister investigation and efforts to identify victims.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "wuornos-dump-site",
    "title": "Richard Mallory Case Area",
    "state": "FL",
    "region": "Volusia County",
    "category": "crime",
    "desc": "The Volusia County area associated with the Richard Mallory murder case. This entry is historical context, not a recommended stop.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "st-augustine-lighthouse",
    "title": "St. Augustine Lighthouse",
    "state": "FL",
    "region": "St. Augustine",
    "category": "haunted",
    "booking": {
      "url": "https://www.staugustinelighthouse.org",
      "phone": "904-829-0745",
      "type": "Tours"
    },
    "desc": "A historic lighthouse and museum associated with maritime history and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "st-louis-cemetery-one",
    "title": "St. Louis Cemetery No. 1",
    "state": "LA",
    "region": "New Orleans",
    "category": "cemetery",
    "desc": "A historic New Orleans cemetery associated with the burial of Marie Laveau. Confirm guided-entry requirements with the operator.",
    "tags": [
      "cemetery"
    ],
    "related": []
  },
  {
    "id": "lalaurie-mansion",
    "title": "LaLaurie Mansion",
    "state": "LA",
    "region": "New Orleans",
    "category": "haunted",
    "desc": "A private New Orleans residence associated with the 1834 discovery of abuse of enslaved people. It is not open for public entry.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "restricted": true,
    "disclaimers": [
      "Private residence. Do not enter or approach the property."
    ]
  },
  {
    "id": "myrtles-plantation-hist",
    "title": "The Myrtles Plantation",
    "state": "LA",
    "region": "St. Francisville",
    "category": "haunted",
    "booking": {
      "url": "https://www.myrtlesplantation.com",
      "phone": "225-635-6277",
      "type": "Hotel"
    },
    "desc": "A historic Louisiana property associated with plantation history and local ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": []
  },
  {
    "id": "seattle-underground",
    "title": "The Seattle Underground",
    "state": "WA",
    "region": "Seattle",
    "category": "historic",
    "desc": "A subterranean network of abandoned 19th-century storefronts buried after the Great Fire.",
    "tags": [
      "historic"
    ],
    "related": []
  },
  {
    "id": "ted-bundy-issaquah",
    "title": "Taylor Mountain Case Area",
    "state": "WA",
    "region": "Issaquah",
    "category": "crime",
    "desc": "The Washington area associated with victims of Ted Bundy. Treat it as a place of remembrance, not a sightseeing stop.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "amityville-horror-house",
    "title": "Amityville House",
    "state": "NY",
    "region": "Amityville",
    "category": "crime",
    "disclaimers": [
      "Private Residence. View from the street only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "desc": "A private residence associated with the 1974 DeFeo murders and later disputed paranormal stories.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": []
  },
  {
    "id": "lost-dutchman-mine",
    "title": "Superstition Mountains (Lost Dutchman)",
    "state": "AZ",
    "region": "Apache Junction",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "The Superstition Mountains are associated with lost-mine legends. Mountain travel requires careful planning.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": []
  }
];
