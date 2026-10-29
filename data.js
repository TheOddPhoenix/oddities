/* Oddities catalog; individual source reviews are recorded per entry. */
const locationAliases = {"the-last-resort-bar-wuornos": "last-resort", "clutter-family-farm": "clutter-house", "winchester-mystery-house": "winchester-mystery-house-hist", "marfa-lights-viewing": "marfa-lights-main", "hoffa": "jimmy-hoffa-red-fox", "crescent": "crescent-hotel-eureka"};
const trips = [
  {
    "id": "last-resort",
    "title": "The Last Resort Bar",
    "state": "FL",
    "region": "Port Orange, FL",
    "category": "crime",
    "desc": "A Florida biker bar woven into the final chapter of the Aileen Wuornos murder case.",
    "related": [],
    "tags": [
      "crime"
    ],
    "history": "The Last Resort Bar in Port Orange appears in accounts of Aileen Wuornos’s final days before her arrest. Its connection to the case has made it a point of interest for visitors following Florida’s true-crime history.",
    "know_before": [
      "The Last Resort Bar is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "clutter-house",
    "title": "The Clutter Family Home",
    "state": "KS",
    "region": "Holcomb, KS",
    "category": "crime",
    "desc": "A quiet Kansas farmhouse at the center of the murders that inspired Truman Capote’s In Cold Blood.",
    "related": [],
    "tags": [
      "crime"
    ],
    "disclaimers": [
      "Private property. View from public road only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "restricted": true,
    "history": "The 1959 murders of the Clutter family changed the American psyche and led Truman Capote to write his masterpiece.",
    "know_before": [
      "Private property. View from public road only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "sloss",
    "title": "Sloss Furnaces",
    "state": "AL",
    "region": "Birmingham, AL",
    "category": "haunted",
    "desc": "A towering ironworks where the harsh realities of industrial labor mingle with tales of a haunted night shift.",
    "related": [],
    "tags": [
      "haunted"
    ],
    "history": "Operating from 1882 to 1971, this industrial giant was known for brutal working conditions.",
    "know_before": [
      "Sloss Furnaces is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "eureka",
    "title": "Eureka Springs",
    "state": "AR",
    "region": "Carroll County, AR",
    "category": "historic",
    "desc": "A Victorian mountain town of winding streets, haunted hotels, and the shadow of a notorious medical fraud.",
    "related": [
      "crescent-hotel-eureka",
      "basin-park-hotel",
      "arlington-hotel-capone"
    ],
    "tags": [
      "historic",
      "haunted",
      "crime"
    ],
    "image": "images/eureka.webp",
    "history": "Eureka Springs grew around its springs in the late nineteenth century, attracting visitors in search of restoration and escape. Its grand hotels also hold darker stories: the Crescent became Norman Baker’s fraudulent cancer clinic in 1937, while the Basin Park Hotel has its own history and ghost-tour traditions. The town makes a natural starting point for exploring both hotels and the folklore woven through its winding streets.",
    "know_before": [
      "Eureka Springs is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "AI-generated illustration",
    "themes": [
      "hotels",
      "medical-history"
    ],
    "sources": [
      {
        "label": "Crescent Hotel: history",
        "url": "https://crescent-hotel.com/about/history/"
      },
      {
        "label": "Basin Park Hotel: history",
        "url": "https://basinpark.com/about/history/"
      }
    ],
    "reviewed": "2026-10-29",
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore",
      "haunted": "Haunted Places",
      "crime": "Crime Locations"
    }
  },
  {
    "id": "skunk-ape-headquarters",
    "title": "Skunk Ape Research Headquarters",
    "state": "FL",
    "region": "Ochopee, FL",
    "category": "cryptid",
    "desc": "Deep in the Everglades, Florida’s foul-smelling answer to Bigfoot has a headquarters of its own.",
    "related": [],
    "tags": [
      "cryptid"
    ],
    "history": "Florida’s Skunk Ape is a creature of regional folklore, often described as a large, foul-smelling figure in the Everglades. The headquarters celebrates sightings and stories; they do not establish the creature’s existence.",
    "know_before": [
      "Skunk Ape Research Headquarters is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cryptids"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "cryptid": "Famous Encounter Sites"
    }
  },
  {
    "id": "bachelor-grove",
    "title": "Bachelors Grove Cemetery",
    "state": "IL",
    "region": "Midlothian, IL",
    "category": "cemetery",
    "desc": "A secluded graveyard where phantom figures and the famous “Madonna” photograph fuel enduring ghost stories.",
    "related": [],
    "tags": [
      "cemetery",
      "haunted"
    ],
    "history": "Bachelors Grove is a historic cemetery whose reputation has grown through stories of phantom vehicles, unexplained figures, and a widely circulated photograph known as the Madonna of Bachelors Grove. These accounts belong to the cemetery’s ghost lore; they do not establish supernatural activity.",
    "know_before": [
      "Bachelors Grove Cemetery is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore",
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "point-pleasant-mothman-statue",
    "title": "Mothman Statue & Museum",
    "state": "WV",
    "region": "Point Pleasant, WV",
    "category": "cryptid",
    "desc": "A red-eyed winged creature became a town’s enduring legend—and inspired this unusual monument and museum.",
    "related": [],
    "tags": [
      "cryptid"
    ],
    "history": "Reports of a winged, red-eyed figure near Point Pleasant in the 1960s developed into the Mothman legend. The statue and museum explore that folklore and its place in the town’s identity. The nearby TNT area is another stop connected to the reported sightings.",
    "know_before": [
      "Mothman Statue & Museum is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cryptids"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "cryptid": "Winged Creatures"
    }
  },
  {
    "id": "aurora-ufo-grave",
    "title": "Aurora Cemetery UFO Legend",
    "state": "TX",
    "region": "Aurora, TX",
    "category": "alien",
    "desc": "An alleged 1897 airship crash left a Texas cemetery with a legend of an otherworldly burial.",
    "related": [],
    "tags": [
      "alien",
      "cemetery"
    ],
    "history": "An 1897 newspaper story described an alleged airship crash in Aurora and a burial in the local cemetery. The account became a lasting piece of UFO folklore. The story is a legend, not proof of an extraterrestrial crash or burial.",
    "know_before": [
      "Aurora Cemetery UFO Legend is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries",
      "ufo-lore"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "alien": "Alleged Crashes & Landings",
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "winchester-mystery-house-hist",
    "title": "Winchester Mystery House",
    "state": "CA",
    "region": "San Jose, CA",
    "category": "historic",
    "desc": "A labyrinthine Victorian mansion where Sarah Winchester’s architectural legacy meets generations of ghost stories.",
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
    "reviewed": "2026-10-29",
    "know_before": [
      "Winchester Mystery House is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "historic": "Dark History & Lore",
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.winchestermysteryhouse.com"
      }
    ]
  },
  {
    "id": "marfa-lights-main",
    "title": "Marfa Lights Viewing Area",
    "state": "TX",
    "region": "Marfa, TX",
    "category": "alien",
    "desc": "Elusive lights on a West Texas horizon have inspired explanations ranging from ordinary optics to the otherworldly.",
    "related": [],
    "tags": [
      "alien"
    ],
    "history": "Observers have long reported distant lights near Marfa, with stories describing glowing points that seem to shift or disappear. Interpretations range from ordinary optical effects to supernatural explanations. The viewing area allows visitors to experience the landscape behind the enduring legend.",
    "know_before": [
      "Marfa Lights Viewing Area is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "ufo-lore"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
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
    "desc": "An imposing federal supermax prison whose extreme isolation has made it one of America’s most notorious institutions.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Federal Property. No Trespassing.",
      "No public access to facility.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited.",
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "crime": "Crime Locations"
    }
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
    "related": [],
    "know_before": [
      "The Joplin Hideout is a private vacation rental. Check the Airbnb listing for availability, booking terms, and guest rules. A location listing does not grant entry; do not disturb guests or enter without a reservation."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Outlaws & Organized Crime"
    },
    "actions": [
      {
        "kind": "stay",
        "label": "View Stay on Airbnb",
        "url": "https://www.airbnb.com/rooms/855978867173917336"
      }
    ]
  },
  {
    "id": "sand-creek-massacre-site",
    "title": "Sand Creek Massacre National Historic Site",
    "state": "CO",
    "region": "Eads",
    "category": "historic",
    "desc": "A quiet Colorado prairie bears the memory of the Cheyenne and Arapaho people killed in the 1864 Sand Creek Massacre.",
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
    "reviewed": "2026-10-29",
    "know_before": [
      "Sand Creek Massacre National Historic Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "bird-girl-bonaventure",
    "title": "Bonaventure Cemetery: Bird Girl History",
    "state": "GA",
    "region": "Savannah",
    "category": "historic",
    "desc": "A cemetery photograph turned the Bird Girl sculpture into an icon of Savannah’s gothic mystique.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "The Bird Girl sculpture has been relocated from the cemetery. Check its current exhibition location before visiting."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
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
    "related": [],
    "know_before": [
      "Extremely steep hike.",
      "High altitude (10,800ft).",
      "Treat wreckage as a cemetery.",
      "Do not rely on informal routes. Confirm lawful trail access and current conditions with the land manager.",
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Disasters & Accidents"
    }
  },
  {
    "id": "ludlow-massacre-site",
    "title": "Ludlow Massacre Memorial",
    "state": "CO",
    "region": "Ludlow",
    "category": "historic",
    "desc": "A memorial preserves the memory of the families caught in Colorado’s deadly 1914 labor conflict.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Ludlow Massacre Memorial is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
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
    "desc": "A former frontier post holds the painful history of the Northern Cheyenne’s 1879 breakout and its aftermath.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Fort Robinson is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://outdoornebraska.gov/fortrobinson/"
      }
    ]
  },
  {
    "id": "kid-curry-grave-linwood",
    "title": "Linwood Cemetery: Kid Curry",
    "state": "CO",
    "region": "Glenwood Springs",
    "category": "crime",
    "desc": "An outlaw’s disputed legacy follows a mountain cemetery linked to Harvey Logan, better known as Kid Curry.",
    "tags": [
      "crime",
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Linwood Cemetery: Kid Curry is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries",
      "outlaws"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "crime": "Crime Locations",
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "jesse-james-home-museum",
    "title": "Jesse James Home",
    "state": "MO",
    "region": "St. Joseph",
    "category": "crime",
    "desc": "The former home where Jesse James’s outlaw life ended with a gunshot in 1882.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Jesse James Home is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "outlaws"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "bonnie-clyde-ambush-site",
    "title": "Bonnie and Clyde Ambush Marker",
    "state": "LA",
    "region": "Gibsland",
    "category": "crime",
    "desc": "A rural Louisiana roadside marks the violent end of Bonnie Parker and Clyde Barrow’s crime spree.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Bonnie and Clyde Ambush Marker is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "outlaws"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Organized Crime"
    }
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
    "related": [],
    "know_before": [
      "The Ambush Museum is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "outlaws"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
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
      "haunted",
      "historic",
      "crime"
    ],
    "related": [
      "eureka",
      "basin-park-hotel",
      "stanley-hotel"
    ],
    "know_before": [
      "1886 Crescent Hotel & Spa is an operating hotel. Check its website for current reservations, tour schedules, accessibility, and visitor policies. Guest rooms and other private areas require permission or a reservation."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels",
      "medical-history"
    ],
    "history": "The Crescent opened in 1886 as a luxury hotel overlooking Eureka Springs. In 1937, Norman Baker converted it into a clinic that promoted an unproven cancer treatment. His mail-fraud conviction ended that chapter. Today, the restored hotel’s ghost tours mix its documented past with accounts of unexplained experiences.",
    "sources": [
      {
        "label": "Crescent Hotel: history",
        "url": "https://crescent-hotel.com/about/history/"
      }
    ],
    "reviewed": "2026-10-29",
    "place_type": "Hotel",
    "actions": [
      {
        "kind": "stay",
        "label": "Book a Room",
        "url": "https://crescent-hotel.com/"
      },
      {
        "kind": "tour",
        "label": "Book a Tour",
        "url": "https://www.americasmosthauntedhotel.com/ghost-tours/tickets-tours/"
      }
    ],
    "subcategories": {
      "haunted": "Haunted Hotels & Stays",
      "historic": "Medical Abuse",
      "crime": "Crime Locations"
    }
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
    "desc": "A hillside hotel in the heart of Eureka Springs, where historic corridors are steeped in ghost lore.",
    "tags": [
      "crime",
      "haunted",
      "historic"
    ],
    "related": [
      "eureka",
      "crescent-hotel-eureka",
      "stanley-hotel"
    ],
    "know_before": [
      "The Basin Park Hotel is an operating hotel. Check its website for current reservations, tour schedules, accessibility, and visitor policies. Guest rooms and other private areas require permission or a reservation."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "history": "The Basin Park Hotel opened in 1905 beside Basin Spring Park in downtown Eureka Springs. Its steep hillside setting and long hospitality history form the backdrop to local ghost stories. The operator now offers paranormal-investigation experiences, presenting the hotel’s reported hauntings as part of its visitor storytelling.",
    "sources": [
      {
        "label": "Basin Park Hotel: history",
        "url": "https://basinpark.com/about/history/"
      },
      {
        "label": "Basin Park Hotel: visitor experiences",
        "url": "https://basinpark.com/"
      }
    ],
    "reviewed": "2026-10-29",
    "place_type": "Hotel",
    "actions": [
      {
        "kind": "stay",
        "label": "Book a Room",
        "url": "https://basinpark.com/"
      },
      {
        "kind": "investigation",
        "label": "Book an Investigation",
        "url": "https://basinpark.com/things-to-do/paranormal-investigation/"
      }
    ],
    "subcategories": {
      "crime": "Crime Locations",
      "haunted": "Haunted Hotels & Stays",
      "historic": "Dark History & Lore"
    }
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
    "desc": "A grand resort hotel recalls Hot Springs’ gambling heyday and its reputation as a gangster retreat.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "The Arlington Resort Hotel is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Hotel",
    "subcategories": {
      "crime": "Outlaws & Organized Crime"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.arlingtonhotel.com"
      }
    ]
  },
  {
    "id": "ohio-club-hot-springs",
    "title": "The Ohio Club",
    "state": "AR",
    "region": "Hot Springs",
    "category": "crime",
    "desc": "Behind a historic bar’s doors lies the memory of Hot Springs’ gambling dens and underworld visitors.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "The Ohio Club is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "gangster-museum-america",
    "title": "The Gangster Museum of America",
    "state": "AR",
    "region": "Hot Springs",
    "category": "crime",
    "desc": "Hot Springs’ hidden gambling empire and notorious visitors take center stage in this underworld history museum.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "The Gangster Museum of America is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "greenwood-cemetery-madden",
    "title": "Greenwood Cemetery (Owney Madden)",
    "state": "AR",
    "region": "Hot Springs",
    "category": "cemetery",
    "desc": "A Hot Springs cemetery holds the final resting place of gangster Owney Madden.",
    "tags": [
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Greenwood Cemetery (Owney Madden) is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "fordyce-bathhouse",
    "title": "Fordyce Bathhouse",
    "state": "AR",
    "region": "Hot Springs",
    "category": "historic",
    "desc": "An ornate bathhouse preserves the medical promises and unusual rituals of America’s historic spa culture.",
    "tags": [
      "historic",
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Fordyce Bathhouse is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels",
      "medical-history"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore",
      "haunted": "Haunted Places"
    }
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
    "related": [],
    "know_before": [
      "The Malco Theatre is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels",
      "disappearances"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    }
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
    "related": [],
    "know_before": [
      "The Baker Institute Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "medical-history"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Medical Fraud"
    }
  },
  {
    "id": "blue-angel-muscatine",
    "title": "The Blue Angel of Greenwood",
    "state": "IA",
    "region": "Muscatine",
    "category": "cemetery",
    "desc": "A weathered cemetery angel watches over Muscatine, surrounded by ominous local legends.",
    "tags": [
      "cemetery",
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Blue Angel of Greenwood is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "cemetery": "Cemetery Lore",
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "tipton-cow-war",
    "title": "Iowa Cow War History",
    "state": "IA",
    "region": "Tipton",
    "category": "crime",
    "desc": "A bitter 1931 battle over cattle testing turned rural Iowa into the setting for an extraordinary civil conflict.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Iowa Cow War History is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "edinburgh-poor-farm",
    "title": "Edinburgh 'Poor Farm'",
    "state": "IA",
    "region": "Monticello",
    "category": "haunted",
    "desc": "The legacy of institutional life and unsettling local lore lingers around this former county poor farm.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Edinburgh 'Poor Farm' is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "black-angel-iowa-city",
    "title": "The Black Angel of Oakland Cemetery",
    "state": "IA",
    "region": "Iowa City",
    "category": "cemetery",
    "desc": "A darkened bronze angel stands at the heart of Iowa City’s most persistent cemetery legends.",
    "tags": [
      "cemetery",
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Black Angel of Oakland Cemetery is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore",
      "haunted": "Haunted Places"
    }
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
    "desc": "An Iowa home still carries the mystery of the eight people murdered there in 1912.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Villisca Axe Murder House is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Crime Locations"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.villiscaiowa.com"
      }
    ]
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
    "desc": "An ordinary residential lot marks the former home at the center of John Wayne Gacy’s crimes.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Private residence. View from public sidewalk only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited.",
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Serial Crime"
    }
  },
  {
    "id": "bobby-franks-kidnap-site",
    "title": "Bobby Franks Kidnap Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "A Chicago street recalls the 1924 kidnapping that led to the infamous Leopold and Loeb case.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Bobby Franks Kidnap Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Kidnappings"
    }
  },
  {
    "id": "cherry-mine-disaster",
    "title": "The Cherry Mine Disaster Site",
    "state": "IL",
    "region": "Cherry",
    "category": "historic",
    "desc": "A mining town remembers the devastating underground fire of 1909 and the lives lost in its aftermath.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "The Cherry Mine Disaster Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "mining"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Disasters & Accidents"
    }
  },
  {
    "id": "st-valentines-massacre",
    "title": "St. Valentine's Day Massacre Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "A former Chicago garage site recalls the killings that became a defining image of the Prohibition-era underworld.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "St. Valentine's Day Massacre Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Outlaws & Organized Crime"
    }
  },
  {
    "id": "eastland-disaster-site",
    "title": "SS Eastland Disaster Site",
    "state": "IL",
    "region": "Chicago",
    "category": "historic",
    "desc": "Along the Chicago River lies the memory of the SS Eastland’s catastrophic 1915 capsizing.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "SS Eastland Disaster Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Disasters & Accidents"
    }
  },
  {
    "id": "holmes-murder-castle",
    "title": "H.H. Holmes Hotel Site",
    "state": "IL",
    "region": "Chicago",
    "category": "crime",
    "desc": "The former site of H.H. Holmes’s hotel remains entangled in a mix of documented crime and sensational “Murder Castle” legends.",
    "tags": [
      "crime",
      "historic"
    ],
    "related": [],
    "know_before": [
      "H.H. Holmes Hotel Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations",
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "little-gracie-watson-grave",
    "title": "Little Gracie Watson Memorial",
    "state": "GA",
    "region": "Savannah",
    "category": "cemetery",
    "desc": "A lifelike statue of a young girl became one of Savannah’s best-known cemetery monuments and ghost stories.",
    "tags": [
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Little Gracie Watson Memorial is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries",
      "memorials"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "mercer-williams-house",
    "title": "Mercer-Williams House",
    "state": "GA",
    "region": "Savannah",
    "category": "crime",
    "desc": "An elegant Savannah house sits at the center of the Danny Hansford case and the story behind Midnight in the Garden of Good and Evil.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Mercer-Williams House is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "marshall-house-savannah",
    "title": "The Marshall House",
    "state": "GA",
    "region": "Savannah",
    "category": "haunted",
    "desc": "Civil War hospital history and reports of restless spirits haunt the reputation of this Savannah hotel.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Marshall House is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels",
      "medical-history"
    ],
    "place_type": "Hotel",
    "subcategories": {
      "haunted": "Haunted Hotels & Stays"
    }
  },
  {
    "id": "wright-square-hanging",
    "title": "Wright Square (The Hanging Square)",
    "state": "GA",
    "region": "Savannah",
    "category": "historic",
    "desc": "A colonial Savannah square carries the memory of early executions and the folklore that grew around them.",
    "tags": [
      "historic",
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Wright Square (The Hanging Square) is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore",
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "moon-river-brewing",
    "title": "Former Moon River Brewing / City Hotel",
    "state": "GA",
    "region": "Savannah",
    "category": "haunted",
    "desc": "The old City Hotel building has become a landmark of Savannah’s ghost lore and reported shadowy encounters.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The listing refers to the former City Hotel building. Confirm current business operations and public access."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "colonial-park-cemetery",
    "title": "Colonial Park Cemetery",
    "state": "GA",
    "region": "Savannah",
    "category": "cemetery",
    "desc": "Weathered graves preserve the memory of early Savannah and the epidemics that shaped the city.",
    "tags": [
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Colonial Park Cemetery is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "snippy-horse-site",
    "title": "Snippy the Horse Case Area",
    "state": "CO",
    "region": "Alamosa",
    "category": "alien",
    "desc": "A horse’s mysterious death in 1967 helped turn the San Luis Valley into a focal point for UFO speculation.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "alien"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "ufo-lore"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
  },
  {
    "id": "crestone-ziggurat-vortex",
    "title": "The Crestone Ziggurat",
    "state": "CO",
    "region": "Crestone",
    "category": "alien",
    "desc": "A stepped tower rises from the San Luis Valley amid stories of spiritual energy and unexplained skies.",
    "tags": [
      "alien"
    ],
    "related": [],
    "know_before": [
      "The Crestone Ziggurat is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
  },
  {
    "id": "san-luis-valley-lane-6",
    "title": "Lane 6: San Luis Valley UFO Lore",
    "state": "CO",
    "region": "Hooper",
    "category": "alien",
    "desc": "A remote valley road has become part of Colorado’s folklore of unexplained lights and close encounters.",
    "tags": [
      "alien"
    ],
    "related": [],
    "know_before": [
      "Lane 6: San Luis Valley UFO Lore is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "ufo-lore"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
  },
  {
    "id": "the-t-road",
    "title": "County Road T",
    "state": "CO",
    "region": "Crestone",
    "category": "alien",
    "desc": "Long, open skies frame a San Luis Valley road where strange-object sightings have entered local lore.",
    "tags": [
      "alien"
    ],
    "related": [],
    "know_before": [
      "County Road T is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
  },
  {
    "id": "kristal-reisinger-site",
    "title": "Kristal Reisinger Disappearance Area",
    "state": "CO",
    "region": "Crestone",
    "category": "crime",
    "desc": "Kristal Reisinger vanished from Crestone in 2016, leaving unanswered questions in a remote Colorado community.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Kristal Reisinger Disappearance Area is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "disappearances"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations",
      "missing": "Unresolved Disappearances"
    }
  },
  {
    "id": "gold-camp-road-tunnels",
    "title": "The Tunnels of Gold Camp",
    "state": "CO",
    "region": "Colorado Springs",
    "category": "haunted",
    "safety_rating": "Caution",
    "desc": "Old railway tunnels cut through the mountains, carrying a reputation for ghostly encounters and eerie echoes.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "emma-crawford-mountain",
    "title": "Emma Crawford's Red Mountain",
    "state": "CO",
    "region": "Manitou Springs",
    "category": "haunted",
    "desc": "A mountain burial and the story of a coffin’s descent became part of Manitou Springs’ enduring folklore.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Emma Crawford's Red Mountain is an outdoor location; confirm public access, seasonal closures, and the appropriate entrance before setting out. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Outdoor Location",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "deadman-canyon-espinosa",
    "title": "Deadman Canyon",
    "state": "CO",
    "region": "Hwy 115",
    "category": "crime",
    "desc": "A Colorado canyon carries the dark memory of the Espinosa brothers’ nineteenth-century killing spree.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Deadman Canyon is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "victor-hotel-morgue",
    "title": "The Victor Hotel",
    "state": "CO",
    "region": "Victor",
    "category": "haunted",
    "desc": "A mining-era hotel’s reputation blends the hardships of a gold-rush town with tales of lingering spirits.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Victor Hotel is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels",
      "mining"
    ],
    "place_type": "Hotel",
    "subcategories": {
      "haunted": "Haunted Hotels & Stays"
    }
  },
  {
    "id": "riverview-cemetery-mine",
    "title": "Riverview Cemetery",
    "state": "CO",
    "region": "Crested Butte",
    "category": "historic",
    "desc": "A mountain cemetery preserves the memory of miners lost in Crested Butte’s 1884 disaster.",
    "tags": [
      "historic",
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Riverview Cemetery is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "mining",
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "historic": "Dark History & Lore",
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "sin-city-tunnels",
    "title": "Old Colorado City Tunnel Lore",
    "state": "CO",
    "region": "Old Colorado City",
    "category": "crime",
    "desc": "Stories of hidden passageways recall Old Colorado City’s saloons, brothels, and Prohibition-era intrigue.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "colorado-state-pen-museum",
    "title": "Museum of Colorado Prisons",
    "state": "CO",
    "region": "Cañon City",
    "category": "historic",
    "desc": "Colorado’s prison history unfolds through artifacts, confinement, and the legacy of capital punishment.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Museum of Colorado Prisons is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "historic": "Prison History"
    }
  },
  {
    "id": "rmnp-disappearances",
    "title": "Rocky Mountain National Park",
    "state": "CO",
    "region": "Estes Park",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "Beyond the mountain scenery lie unresolved disappearances, including the 2019 vanishing of hiker James Pruitt.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Check current weather, altitude, trail closures, and official park conditions. Carry appropriate supplies and share your itinerary."
    ],
    "image_kind": "Category artwork",
    "history": "Rocky Mountain National Park’s backcountry is the setting of unresolved missing-person cases. The National Park Service lists James Pruitt, who left Glacier Gorge on February 28, 2019, among its cold cases. Extensive searches have not resolved his disappearance.",
    "sources": [
      {
        "label": "National Park Service: cold cases",
        "url": "https://www.nps.gov/orgs/1563/cold-cases.htm"
      }
    ],
    "reviewed": "2026-10-29",
    "themes": [
      "disappearances"
    ],
    "place_type": "Outdoor Location",
    "subcategories": {
      "historic": "Dark History & Lore",
      "missing": "Unresolved Disappearances"
    }
  },
  {
    "id": "stanley-hotel",
    "title": "The Stanley Hotel",
    "state": "CO",
    "region": "Estes Park",
    "category": "haunted",
    "desc": "An isolated mountain hotel helped inspire The Shining and became a landmark of American ghost lore.",
    "tags": [
      "haunted"
    ],
    "related": [
      "crescent-hotel-eureka",
      "basin-park-hotel",
      "lemp-mansion"
    ],
    "know_before": [
      "The Stanley Hotel is an operating hotel. Check its website for current reservations, tour schedules, accessibility, and visitor policies. Guest rooms and other private areas require permission or a reservation."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "history": "The Stanley opened in 1909 in Estes Park. Its place in Stephen King’s The Shining mythology helped make it a landmark for dark-tourism travelers. Today the operator offers historical, ghost, and Shining-focused tours, bringing together the building’s history, literary connections, and reported paranormal experiences.",
    "sources": [
      {
        "label": "The Stanley Hotel: tours",
        "url": "https://www.stanleyhotel.com/tours/"
      }
    ],
    "reviewed": "2026-10-29",
    "place_type": "Hotel",
    "actions": [
      {
        "kind": "stay",
        "label": "Book a Room",
        "url": "https://www.stanleyhotel.com/"
      },
      {
        "kind": "tour",
        "label": "Book a Tour",
        "url": "https://www.stanleyhotel.com/tours/"
      }
    ],
    "subcategories": {
      "haunted": "Haunted Hotels & Stays"
    }
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
    "desc": "A former prison’s imposing walls hold the memory of harsh confinement and a devastating 1954 riot.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Missouri State Penitentiary is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "crime": "Crime Locations"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://missouripentours.com"
      }
    ]
  },
  {
    "id": "lemp-mansion",
    "title": "The Lemp Mansion",
    "state": "MO",
    "region": "St. Louis",
    "category": "haunted",
    "desc": "A brewing dynasty’s mansion carries a troubled family history and generations of ghost stories.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Lemp Mansion is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "haunted": "Haunted Places"
    }
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
    "desc": "A vast former psychiatric hospital reveals the difficult history of institutional care beneath its haunted reputation.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Trans-Allegheny Lunatic Asylum is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "medical-history"
    ],
    "place_type": "Hospital & Institution",
    "subcategories": {
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://trans-alleghenylunaticasylum.com"
      }
    ]
  },
  {
    "id": "wv-pen-moundsville",
    "title": "West Virginia Penitentiary",
    "state": "WV",
    "region": "Moundsville",
    "category": "haunted",
    "desc": "A fortress-like former prison draws visitors into a history of confinement, violence, and enduring ghost lore.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "West Virginia Penitentiary is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "point-pleasant-mothman",
    "title": "Point Pleasant Mothman Site",
    "state": "WV",
    "region": "Point Pleasant",
    "category": "cryptid",
    "desc": "Abandoned wartime bunkers form the eerie landscape behind Point Pleasant’s legendary Mothman sightings.",
    "tags": [
      "cryptid"
    ],
    "related": [],
    "know_before": [
      "Point Pleasant Mothman Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cryptids"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "cryptid": "Winged Creatures"
    }
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
    "desc": "A former tuberculosis hospital’s medical history lives alongside some of America’s best-known ghost-tour lore.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Waverly Hills Sanatorium is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "medical-history"
    ],
    "place_type": "Hospital & Institution",
    "subcategories": {
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.therealwaverlyhills.com"
      }
    ]
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
    "desc": "Towering cellblocks preserve a prison’s troubled history beneath its familiar role in The Shawshank Redemption.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Ohio State Reformatory is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.mrps.org"
      }
    ]
  },
  {
    "id": "brushy-mountain-pen",
    "title": "Brushy Mountain State Penitentiary",
    "state": "TN",
    "region": "Petros",
    "category": "crime",
    "desc": "A Tennessee prison’s stone walls hold the intertwined histories of coal labor, incarceration, and a notorious escape.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Brushy Mountain State Penitentiary is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "old-idaho-pen",
    "title": "Old Idaho Penitentiary",
    "state": "ID",
    "region": "Boise",
    "category": "historic",
    "desc": "A former territorial prison preserves the stories of its inmates, punishment, and execution grounds.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Old Idaho Penitentiary is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "historic": "Prison History"
    }
  },
  {
    "id": "eastern-state-pen",
    "title": "Eastern State Penitentiary",
    "state": "PA",
    "region": "Philadelphia",
    "category": "historic",
    "desc": "High stone walls surround the Philadelphia prison that helped define—and expose the costs of—solitary confinement.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Eastern State Penitentiary is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "prisons"
    ],
    "place_type": "Prison",
    "subcategories": {
      "historic": "Prison History"
    },
    "notorious_inmates": [
      {
        "name": "Al Capone",
        "context": "Capone was imprisoned at Eastern State; the historic site discusses his confinement in its audio tour.",
        "url": "https://easternstate.org/uploads/media/ESP_English_Audio_Tour_Transcript_HTML2.htm"
      }
    ]
  },
  {
    "id": "centralia-mine-fire",
    "title": "Centralia Mine Fire",
    "state": "PA",
    "region": "Centralia",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "An underground mine fire turned a Pennsylvania town into an enduring symbol of abandonment.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "mining"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Disasters & Accidents"
    }
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
    "desc": "A Fall River home remains at the center of the unsolved 1892 murders of Andrew and Abby Borden.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Lizzie Borden House is an operating bed-and-breakfast and historic house attraction. Check its website for current reservations, tour schedules, accessibility, and visitor policies. Guest rooms and other private areas require permission or a reservation."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House & B&B",
    "actions": [
      {
        "kind": "stay",
        "label": "Book a Room",
        "url": "https://lizzie-borden.com/"
      },
      {
        "kind": "tour",
        "label": "Book a Tour",
        "url": "https://lizzie-borden.com/hello/"
      }
    ],
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "salem-witch-memorial",
    "title": "Salem Witch Trials Memorial",
    "state": "MA",
    "region": "Salem",
    "category": "historic",
    "desc": "Stone memorials honor the people executed during the Salem witch trials and the fear that condemned them.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Salem Witch Trials Memorial is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Witch Trials"
    }
  },
  {
    "id": "danvers-state-hospital",
    "title": "Former Danvers State Hospital",
    "state": "MA",
    "region": "Danvers",
    "category": "haunted",
    "desc": "The remains of a once-vast psychiatric hospital recall the shadowed history of institutional treatment.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "medical-history"
    ],
    "place_type": "Hospital & Institution",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "alcatraz-island",
    "title": "Alcatraz Island",
    "state": "CA",
    "region": "San Francisco",
    "category": "crime",
    "desc": "An island fortress holds stories of notorious inmates, attempted escapes, and a defining Native American occupation.",
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
    "reviewed": "2026-10-29",
    "know_before": [
      "Alcatraz Island is a historic prison site; public access depends on the site’s current visitor arrangements. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Prison",
    "subcategories": {
      "crime": "Crime Locations"
    },
    "notorious_inmates": [
      {
        "name": "Al Capone",
        "context": "The Chicago organized-crime figure served time at Alcatraz.",
        "url": "https://www.nps.gov/alca/learn/historyculture/people.htm"
      },
      {
        "name": "Robert Stroud",
        "context": "Known as the “Birdman of Alcatraz,” Stroud was held in the island’s cellhouse and hospital.",
        "url": "https://www.nps.gov/places/000/alcatraz-cellhouse.htm"
      }
    ]
  },
  {
    "id": "black-dahlia-dump-site",
    "title": "Elizabeth Short Case: Norton Avenue",
    "state": "CA",
    "region": "Los Angeles",
    "category": "crime",
    "desc": "A Los Angeles neighborhood marks the discovery site in the unsolved 1947 murder of Elizabeth Short.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "cecil-hotel",
    "title": "The Cecil Hotel",
    "state": "CA",
    "region": "Los Angeles",
    "category": "crime",
    "desc": "A downtown Los Angeles hotel’s troubled history became the subject of notorious criminal cases and unsettling modern folklore.",
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "The Cecil Hotel is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Hotel",
    "subcategories": {
      "crime": "Crime Locations"
    }
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
    "desc": "A secluded residential area marks the former setting of the 1969 Tate murders.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Private road. View from public streets only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited.",
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations"
    }
  },
  {
    "id": "golden-gate-bridge",
    "title": "Golden Gate Bridge",
    "state": "CA",
    "region": "San Francisco",
    "category": "historic",
    "desc": "An iconic bridge carries a complex human history of loss, rescue, and remembrance alongside its engineering legacy.",
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
    "reviewed": "2026-10-29",
    "know_before": [
      "Golden Gate Bridge is an outdoor location; confirm public access, seasonal closures, and the appropriate entrance before setting out. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Outdoor Location",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "donner-pass-campsite",
    "title": "Donner Pass Survival Camp",
    "state": "CA",
    "region": "Truckee",
    "category": "historic",
    "desc": "A Sierra Nevada winter trapped the Donner Party in a survival ordeal that became part of American history.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Donner Pass Survival Camp is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "jonestown-memorial",
    "title": "Jonestown Memorial at Evergreen Cemetery",
    "state": "CA",
    "region": "Oakland",
    "category": "historic",
    "desc": "A cemetery memorial remembers those who died in the 1978 Jonestown tragedy.",
    "tags": [
      "historic",
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Jonestown Memorial at Evergreen Cemetery is a cemetery; respect burial areas and any services in progress. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries",
      "memorials"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "historic": "Dark History & Lore",
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "bodie-ghost-town",
    "title": "Bodie Ghost Town",
    "state": "CA",
    "region": "Bridgeport",
    "category": "historic",
    "desc": "Empty streets and weathered buildings preserve the harsh realities and lingering legends of a gold-rush town.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Bodie Ghost Town is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "mining"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "mountain-meadows-massacre",
    "title": "Mountain Meadows Massacre",
    "state": "UT",
    "region": "St. George",
    "category": "historic",
    "desc": "A remote Utah landscape holds the memory of emigrant families killed in the 1857 Mountain Meadows Massacre.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Mountain Meadows Massacre is an outdoor location; confirm public access, seasonal closures, and the appropriate entrance before setting out. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Outdoor Location",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
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
    "desc": "A secluded Utah ranch sits at the center of decades of paranormal claims, strange encounters, and speculation.",
    "restricted": true,
    "tags": [
      "alien"
    ],
    "related": [],
    "know_before": [
      "Heavily guarded private property. Do not cross the gate.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited.",
      "Terrain or access warrants extra planning. Confirm conditions with the responsible operator or land manager."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Famous Sightings"
    }
  },
  {
    "id": "wounded-knee-massacre",
    "title": "Wounded Knee Massacre Site",
    "state": "SD",
    "region": "Pine Ridge",
    "category": "historic",
    "desc": "A place of remembrance marks the killing of Lakota people at Wounded Knee in 1890.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "Wounded Knee Massacre Site is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "memorials"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "bennington-triangle",
    "title": "Glastenbury: Bennington Triangle Lore",
    "state": "VT",
    "region": "Glastenbury",
    "category": "historic",
    "desc": "A remote Vermont mountain landscape became the backdrop for a series of disappearances and later supernatural speculation.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Glastenbury: Bennington Triangle Lore is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "disappearances"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore",
      "missing": "Unresolved Disappearances"
    }
  },
  {
    "id": "maura-murray-route-112",
    "title": "Maura Murray Case: Route 112 Area",
    "state": "NH",
    "region": "Woodsville",
    "category": "crime",
    "desc": "Maura Murray vanished after a car crash on Route 112 in 2004, leaving a mystery that remains unresolved.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Respect residents and private property. Do not stop where roadside parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "disappearances"
    ],
    "history": "On February 9, 2004, Maura Murray’s car left Route 112 in Haverhill, New Hampshire. When police arrived, she was no longer at the scene. The FBI continues to list her as missing. Her disappearance has inspired years of investigation and public interest, but her whereabouts remain unknown.",
    "sources": [
      {
        "label": "FBI: Maura Murray",
        "url": "https://www.fbi.gov/wanted/vicap/missing-persons/maura-murray---haverhill-new-hampshire"
      }
    ],
    "reviewed": "2026-10-29",
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Crime Locations",
      "missing": "Unresolved Disappearances"
    }
  },
  {
    "id": "jimmy-hoffa-red-fox",
    "title": "Machus Red Fox Site: Jimmy Hoffa",
    "state": "MI",
    "region": "Bloomfield Township",
    "category": "crime",
    "desc": "A former restaurant’s parking lot marks the last-known setting of Jimmy Hoffa’s 1975 disappearance.",
    "tags": [
      "crime",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Machus Red Fox Site: Jimmy Hoffa is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "disappearances"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Organized Crime",
      "missing": "Unresolved Disappearances"
    }
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
    "desc": "A secluded estate became the center of the Herb Baumeister investigation and a continuing effort to identify victims.",
    "restricted": true,
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Private Property.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Serial Crime"
    }
  },
  {
    "id": "wuornos-dump-site",
    "title": "Richard Mallory Case Area",
    "state": "FL",
    "region": "Volusia County",
    "category": "crime",
    "desc": "A Volusia County woodland became a key location in the Richard Mallory murder investigation.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "crime": "Serial Crime"
    }
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
    "desc": "A coastal lighthouse’s maritime history mingles with tales of children’s spirits and unexplained footsteps.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "St. Augustine Lighthouse is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.staugustinelighthouse.org"
      }
    ]
  },
  {
    "id": "st-louis-cemetery-one",
    "title": "St. Louis Cemetery No. 1",
    "state": "LA",
    "region": "New Orleans",
    "category": "cemetery",
    "desc": "Above-ground tombs and the legacy of Marie Laveau give this New Orleans cemetery its enduring mystique.",
    "tags": [
      "cemetery"
    ],
    "related": [],
    "know_before": [
      "Confirm current guided-entry and reservation requirements with the cemetery operator."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "cemeteries"
    ],
    "place_type": "Cemetery",
    "subcategories": {
      "cemetery": "Cemetery Lore"
    }
  },
  {
    "id": "lalaurie-mansion",
    "title": "LaLaurie Mansion",
    "state": "LA",
    "region": "New Orleans",
    "category": "haunted",
    "desc": "An imposing New Orleans mansion carries the memory of the abuse of enslaved people exposed by an 1834 fire.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "restricted": true,
    "disclaimers": [
      "Private residence. Do not enter or approach the property."
    ],
    "know_before": [
      "Private residence. Do not enter or approach the property."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "haunted": "Haunted Places"
    }
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
    "desc": "A Louisiana plantation’s difficult history is intertwined with generations of ghost stories and mirror lore.",
    "tags": [
      "haunted"
    ],
    "related": [],
    "know_before": [
      "The Myrtles Plantation is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic House",
    "subcategories": {
      "haunted": "Haunted Places"
    },
    "actions": [
      {
        "kind": "website",
        "label": "Visit Website",
        "url": "https://www.myrtlesplantation.com"
      }
    ]
  },
  {
    "id": "seattle-underground",
    "title": "The Seattle Underground",
    "state": "WA",
    "region": "Seattle",
    "category": "historic",
    "desc": "Buried storefronts preserve a shadowy layer of Seattle’s nineteenth-century streets and rebuilding history.",
    "tags": [
      "historic"
    ],
    "related": [],
    "know_before": [
      "The Seattle Underground is a historic location; confirm which areas are open to visitors before arriving. Check local access rules, hours, accessibility, and any admission or reservation requirements."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "ted-bundy-issaquah",
    "title": "Taylor Mountain Case Area",
    "state": "WA",
    "region": "Issaquah",
    "category": "crime",
    "desc": "A wooded Washington landscape became a key recovery area in the investigation into Ted Bundy’s victims.",
    "restricted": true,
    "disclaimers": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "tags": [
      "crime"
    ],
    "related": [],
    "know_before": [
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [],
    "place_type": "Outdoor Location",
    "subcategories": {
      "crime": "Serial Crime"
    }
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
    "desc": "A waterfront home’s real 1974 murders gave rise to one of America’s most disputed haunting stories.",
    "restricted": true,
    "tags": [
      "crime",
      "haunted"
    ],
    "related": [],
    "know_before": [
      "Private Residence. View from the street only.",
      "Public entry is not established. Do not enter private or restricted land, approach residences, or stop where parking is prohibited."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "hotels"
    ],
    "place_type": "Historic House",
    "subcategories": {
      "crime": "Crime Locations",
      "haunted": "Haunted Places"
    }
  },
  {
    "id": "lost-dutchman-mine",
    "title": "Superstition Mountains (Lost Dutchman)",
    "state": "AZ",
    "region": "Apache Junction",
    "category": "historic",
    "safety_rating": "Caution",
    "desc": "A mysterious desert mountain range where a legendary lost gold mine and stories of vanished treasure seekers fuel enduring intrigue.",
    "tags": [
      "historic",
      "missing"
    ],
    "related": [],
    "know_before": [
      "Desert heat, limited water, and rugged terrain require planning. Use designated routes and check current land-manager guidance."
    ],
    "image_kind": "Category artwork",
    "themes": [
      "disappearances",
      "mining"
    ],
    "place_type": "Outdoor Location",
    "subcategories": {
      "historic": "Dark History & Lore",
      "missing": "Unresolved Disappearances"
    }
  },
  {
    "id": "silver-plume-disappearances",
    "title": "Silver Plume: The Disappearances",
    "state": "CO",
    "region": "Silver Plume",
    "category": "missing",
    "tags": [
      "missing",
      "historic"
    ],
    "desc": "A writer investigating another man’s disappearance vanished himself, leaving a Colorado mining town with a haunting unresolved mystery.",
    "history": "Tom Young and his dog disappeared from Silver Plume in September 1987. Their remains were found in July 1988, and Young’s death was ruled a suicide. Keith Reinhard later rented the same shop and worked on a novel inspired by Young’s story. On August 7, 1988, Reinhard set out toward Pendleton Mountain and disappeared. His case remains unresolved; speculation that the cases were connected has not been established.",
    "sources": [
      {
        "label": "Unsolved Mysteries: Keith Reinhard",
        "url": "https://unsolved.com/gallery/keith-reinhard/"
      },
      {
        "label": "The Charley Project: Keith R. Reinhard",
        "url": "https://charleyproject.org/case/keith-r-reinhard"
      }
    ],
    "reviewed": "2026-10-29",
    "know_before": [
      "The town is a historical context location, not a marked crime-scene tour. Respect private businesses and residents. Mountain terrain around Silver Plume can be steep and exposed; this entry is not a trail guide."
    ],
    "themes": [
      "disappearances",
      "mining"
    ],
    "related": [
      "bennington-triangle",
      "maura-murray-route-112",
      "kristal-reisinger-site"
    ],
    "image_kind": "AI-generated illustration",
    "image": "images/silver-plume-disappearances.webp",
    "image_sizes": [
      400,
      800,
      1200
    ],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "missing": "Unresolved Disappearances",
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "gilman-colorado",
    "title": "Gilman: The Abandoned Mining Town",
    "state": "CO",
    "region": "Gilman",
    "category": "historic",
    "tags": [
      "historic"
    ],
    "themes": [
      "mining"
    ],
    "restricted": true,
    "desc": "An abandoned mountainside company town preserves the shadow of Colorado’s mining boom and the environmental legacy it left behind.",
    "history": "Gilman was a company town tied to the Eagle Mine. After the mine closed in 1984, the remaining workers left. The abandoned town became part of a federal cleanup site. The EPA removed the town’s operable unit from the National Priorities List in 2021, while access restrictions and other institutional controls remained in place.",
    "know_before": [
      "Restricted site. Do not enter the town, buildings, mine workings, or fenced areas.",
      "Cleanup status does not grant public access. EPA controls include access restrictions and signage to deter trespassing."
    ],
    "disclaimers": [
      "Restricted site. No public entry."
    ],
    "sources": [
      {
        "label": "EPA: Gilman cleanup and access controls",
        "url": "https://www.epa.gov/newsreleases/epa-deletes-portion-eagle-mine-superfund-site-national-priorities-list"
      }
    ],
    "reviewed": "2026-10-29",
    "related": [
      "centralia-mine-fire",
      "bodie-ghost-town",
      "silver-plume-disappearances"
    ],
    "image_kind": "Category artwork",
    "place_type": "Historic Site & Area",
    "subcategories": {
      "historic": "Dark History & Lore"
    }
  },
  {
    "id": "battle-of-los-angeles",
    "title": "The Battle of Los Angeles",
    "state": "CA",
    "region": "Los Angeles area, CA",
    "category": "alien",
    "tags": [
      "alien",
      "historic"
    ],
    "desc": "A wartime sky filled with searchlights and anti-aircraft fire became one of America’s most debated aerial mysteries.",
    "history": "On the night of February 24–25, 1942, Los Angeles defenses fired an anti-aircraft barrage in response to a suspected attack. The Navy’s historical account describes fire directed at Japanese aircraft that were not there. The event later entered UFO lore; the documented barrage does not establish an extraterrestrial encounter. This entry represents the wider Los Angeles event area, rather than a single offshore crash or landing site.",
    "know_before": [
      "This was an event over a broad urban area, not a single attraction or confirmed UFO site. Choose public historical sites and verify their visitor hours separately."
    ],
    "sources": [
      {
        "label": "US Naval History and Heritage Command — attacks on the mainland",
        "url": "https://www.history.navy.mil/content/history/nhhc/about-us/leadership/director/directors-corner/h-grams/h-gram-010/h-010-6.html"
      }
    ],
    "reviewed": "2026-10-29",
    "related": [],
    "themes": [],
    "place_type": "Historic Site & Area",
    "subcategories": {
      "alien": "Military Encounters",
      "historic": "Wartime History"
    }
  },
  {
    "id": "conjuring-house",
    "title": "The Conjuring House",
    "state": "RI",
    "region": "Harrisville, Burrillville, RI",
    "category": "haunted",
    "tags": [
      "haunted"
    ],
    "desc": "A Rhode Island farmhouse where the Perron family’s reported experiences inspired The Conjuring.",
    "history": "The Old Arnold Estate became widely known through the Perron family’s accounts of unexplained experiences during the 1970s and the film inspired by those accounts. Its current preservation website describes restoration work and plans for future guided tours. The family’s paranormal accounts belong to the house’s reported history; the film is a dramatization.",
    "know_before": [
      "Private property under restoration. The property’s website currently describes tours as planned, rather than open for booking. Do not arrive expecting admission, enter the grounds, or disturb residents. Check official updates before planning a visit."
    ],
    "disclaimers": [
      "Private property; public admission and reservations are not currently confirmed."
    ],
    "restricted": true,
    "sources": [
      {
        "label": "The Conjuring House — preservation and visitor updates",
        "url": "https://www.conjuringhouseofficial.com/"
      }
    ],
    "reviewed": "2026-10-29",
    "related": [
      "lizzie-borden-house"
    ],
    "themes": [],
    "place_type": "Historic House",
    "subcategories": {
      "haunted": "Haunted Places"
    }
  }
];
