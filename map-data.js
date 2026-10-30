/* Geographic references: US Census Gazetteer and Wikipedia/Wikidata. Area pins are not entrances. */
const mapLocations = {
  "last-resort": {
    "lat": 29.113444,
    "lng": -81.013223,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Port Orange city, FL",
    "reviewed": "2026-10-29"
  },
  "clutter-house": {
    "lat": 37.985983,
    "lng": -100.993619,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Holcomb city, KS",
    "reviewed": "2026-10-29"
  },
  "sloss": {
    "lat": 33.520656,
    "lng": -86.791306,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Sloss_Furnaces",
    "label": "Sloss Furnaces",
    "reviewed": "2026-10-29"
  },
  "eureka": {
    "lat": 36.410556,
    "lng": -93.745,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Eureka_Springs%2C_Arkansas",
    "label": "Eureka Springs, Arkansas",
    "reviewed": "2026-10-29"
  },
  "skunk-ape-headquarters": {
    "lat": 25.901389,
    "lng": -81.303333,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Ochopee%2C_Florida",
    "label": "Ochopee, Florida",
    "reviewed": "2026-10-29"
  },
  "bachelor-grove": {
    "lat": 41.630833,
    "lng": -87.770833,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bachelor%27s_Grove_Cemetery",
    "label": "Bachelor's Grove Cemetery",
    "reviewed": "2026-10-29"
  },
  "point-pleasant-mothman-statue": {
    "lat": 38.850227,
    "lng": -82.131978,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Point Pleasant city, WV",
    "reviewed": "2026-10-29"
  },
  "aurora-ufo-grave": {
    "lat": 33.055942,
    "lng": -97.509615,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Aurora city, TX",
    "reviewed": "2026-10-29"
  },
  "winchester-mystery-house-hist": {
    "lat": 37.318361,
    "lng": -121.950761,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Winchester_Mystery_House",
    "label": "Winchester Mystery House",
    "reviewed": "2026-10-29"
  },
  "marfa-lights-main": {
    "lat": 30.311944,
    "lng": -104.024722,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Marfa_lights",
    "label": "Marfa lights",
    "reviewed": "2026-10-29"
  },
  "adx-florence-supermax": {
    "lat": 38.379615,
    "lng": -105.10023,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Florence city, CO",
    "reviewed": "2026-10-29"
  },
  "bonnie-clyde-joplin-hideout": {
    "lat": 37.051656,
    "lng": -94.516716,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bonnie_%26_Clyde_Garage_Apartment",
    "label": "Bonnie & Clyde Garage Apartment",
    "reviewed": "2026-10-29"
  },
  "sand-creek-massacre-site": {
    "lat": 38.540833,
    "lng": -102.528611,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Sand_Creek_Massacre_National_Historic_Site",
    "label": "Sand Creek Massacre National Historic Site",
    "reviewed": "2026-10-29"
  },
  "bird-girl-bonaventure": {
    "lat": 32.07889,
    "lng": -81.09528,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Telfair_Academy",
    "label": "Telfair Academy — current Bird Girl museum location",
    "reviewed": "2026-10-29"
  },
  "wichita-state-crash-site": {
    "lat": 39.693333,
    "lng": -105.8825,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Wichita_State_University_football_team_plane_crash",
    "label": "Wichita State University football team plane crash",
    "reviewed": "2026-10-29"
  },
  "ludlow-massacre-site": {
    "lat": 37.339167,
    "lng": -104.583889,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Ludlow_Massacre",
    "label": "Ludlow Massacre",
    "reviewed": "2026-10-29"
  },
  "fort-robinson-outbreak": {
    "lat": 42.681,
    "lng": -103.497,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Fort_Robinson",
    "label": "Fort Robinson",
    "reviewed": "2026-10-29"
  },
  "kid-curry-grave-linwood": {
    "lat": 39.547132,
    "lng": -107.342556,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Glenwood Springs city, CO",
    "reviewed": "2026-10-29"
  },
  "jesse-james-home-museum": {
    "lat": 39.755497,
    "lng": -94.845139,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Jesse_James_Home_Museum",
    "label": "Jesse James Home Museum",
    "reviewed": "2026-10-29"
  },
  "bonnie-clyde-ambush-site": {
    "lat": 32.540236,
    "lng": -93.055298,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Gibsland town, LA",
    "reviewed": "2026-10-29"
  },
  "ambush-museum-gibsland": {
    "lat": 32.540236,
    "lng": -93.055298,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Gibsland town, LA",
    "reviewed": "2026-10-29"
  },
  "crescent-hotel-eureka": {
    "lat": 36.4083,
    "lng": -93.7374,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Crescent_Hotel_%28Eureka_Springs%2C_Arkansas%29",
    "label": "Crescent Hotel (Eureka Springs, Arkansas)",
    "reviewed": "2026-10-29"
  },
  "basin-park-hotel": {
    "lat": 36.410774,
    "lng": -93.744904,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Eureka Springs city, AR",
    "reviewed": "2026-10-29"
  },
  "arlington-hotel-capone": {
    "lat": 34.516667,
    "lng": -93.053056,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Arlington_Hotel_%28Hot_Springs_National_Park%29",
    "label": "Arlington Hotel (Hot Springs National Park)",
    "reviewed": "2026-10-29"
  },
  "ohio-club-hot-springs": {
    "lat": 34.489442,
    "lng": -93.050254,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Hot Springs city, AR",
    "reviewed": "2026-10-29"
  },
  "gangster-museum-america": {
    "lat": 34.489442,
    "lng": -93.050254,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Hot Springs city, AR",
    "reviewed": "2026-10-29"
  },
  "greenwood-cemetery-madden": {
    "lat": 34.489442,
    "lng": -93.050254,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Hot Springs city, AR",
    "reviewed": "2026-10-29"
  },
  "fordyce-bathhouse": {
    "lat": 34.513611,
    "lng": -93.053611,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bathhouse_Row",
    "label": "Bathhouse Row",
    "reviewed": "2026-10-29"
  },
  "malco-theatre-hot-springs": {
    "lat": 34.510556,
    "lng": -93.054167,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Malco_Theatre",
    "label": "Malco Theatre",
    "reviewed": "2026-10-29"
  },
  "baker-institute-muscatine": {
    "lat": 41.419058,
    "lng": -91.067946,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Muscatine city, IA",
    "reviewed": "2026-10-29"
  },
  "blue-angel-muscatine": {
    "lat": 41.419058,
    "lng": -91.067946,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Muscatine city, IA",
    "reviewed": "2026-10-29"
  },
  "tipton-cow-war": {
    "lat": 41.770121,
    "lng": -91.128281,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Tipton city, IA",
    "reviewed": "2026-10-29"
  },
  "edinburgh-poor-farm": {
    "lat": 42.230425,
    "lng": -91.185925,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Monticello city, IA",
    "reviewed": "2026-10-29"
  },
  "black-angel-iowa-city": {
    "lat": 41.67,
    "lng": -91.52,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Oakland_Cemetery_%28Iowa_City%2C_Iowa%29",
    "label": "Oakland Cemetery (Iowa City, Iowa)",
    "reviewed": "2026-10-29"
  },
  "villisca-axe-house": {
    "lat": 40.930809,
    "lng": -94.973923,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Villisca_axe_murders",
    "label": "Villisca axe murders",
    "reviewed": "2026-10-29"
  },
  "gacy-house-site": {
    "lat": 41.968333,
    "lng": -87.817778,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Norwood_Park_Township%2C_Illinois",
    "label": "Norwood Park Township, Illinois",
    "reviewed": "2026-10-29"
  },
  "bobby-franks-kidnap-site": {
    "lat": 41.837045,
    "lng": -87.684939,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Chicago city, IL",
    "reviewed": "2026-10-29"
  },
  "cherry-mine-disaster": {
    "lat": 41.426667,
    "lng": -89.2125,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/1909_Cherry_Mine_disaster",
    "label": "1909 Cherry Mine disaster",
    "reviewed": "2026-10-29"
  },
  "st-valentines-massacre": {
    "lat": 41.9208,
    "lng": -87.6379,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Saint_Valentine%27s_Day_Massacre",
    "label": "Saint Valentine's Day Massacre",
    "reviewed": "2026-10-29"
  },
  "eastland-disaster-site": {
    "lat": 41.887222,
    "lng": -87.631694,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/SS_Eastland",
    "label": "SS Eastland",
    "reviewed": "2026-10-29"
  },
  "holmes-murder-castle": {
    "lat": 41.837045,
    "lng": -87.684939,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Chicago city, IL",
    "reviewed": "2026-10-29"
  },
  "little-gracie-watson-grave": {
    "lat": 32.043889,
    "lng": -81.045556,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bonaventure_Cemetery",
    "label": "Bonaventure Cemetery",
    "reviewed": "2026-10-29"
  },
  "mercer-williams-house": {
    "lat": 32.0713,
    "lng": -81.0954,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Mercer_House_%28Savannah%2C_Georgia%29",
    "label": "Mercer House (Savannah, Georgia)",
    "reviewed": "2026-10-29"
  },
  "marshall-house-savannah": {
    "lat": 32.012457,
    "lng": -81.194157,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Savannah city, GA",
    "reviewed": "2026-10-29"
  },
  "wright-square-hanging": {
    "lat": 32.0779,
    "lng": -81.0923,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Wright_Square_%28Savannah%2C_Georgia%29",
    "label": "Wright Square (Savannah, Georgia)",
    "reviewed": "2026-10-29"
  },
  "moon-river-brewing": {
    "lat": 32.081004,
    "lng": -81.09202,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Moon_River_Brewing_Company",
    "label": "Moon River Brewing Company",
    "reviewed": "2026-10-29"
  },
  "colonial-park-cemetery": {
    "lat": 32.075278,
    "lng": -81.09,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Colonial_Park_Cemetery",
    "label": "Colonial Park Cemetery",
    "reviewed": "2026-10-29"
  },
  "snippy-horse-site": {
    "lat": 37.474528,
    "lng": -105.876956,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Alamosa city, CO",
    "reviewed": "2026-10-29"
  },
  "crestone-ziggurat-vortex": {
    "lat": 37.994529,
    "lng": -105.696206,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Crestone town, CO",
    "reviewed": "2026-10-29"
  },
  "san-luis-valley-lane-6": {
    "lat": 37.745976,
    "lng": -105.877735,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Hooper town, CO",
    "reviewed": "2026-10-29"
  },
  "the-t-road": {
    "lat": 37.994529,
    "lng": -105.696206,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Crestone town, CO",
    "reviewed": "2026-10-29"
  },
  "kristal-reisinger-site": {
    "lat": 37.994529,
    "lng": -105.696206,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Crestone town, CO",
    "reviewed": "2026-10-29"
  },
  "gold-camp-road-tunnels": {
    "lat": 38.867255,
    "lng": -104.760749,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Colorado Springs city, CO",
    "reviewed": "2026-10-29"
  },
  "emma-crawford-mountain": {
    "lat": 38.857539,
    "lng": -104.912861,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Manitou Springs city, CO",
    "reviewed": "2026-10-29"
  },
  "deadman-canyon-espinosa": {
    "lat": 38.84,
    "lng": -104.52,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/El_Paso_County%2C_Colorado",
    "label": "El Paso County, Colorado",
    "reviewed": "2026-10-29"
  },
  "victor-hotel-morgue": {
    "lat": 38.710556,
    "lng": -105.140556,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Victor_Hotel",
    "label": "Victor Hotel",
    "reviewed": "2026-10-29"
  },
  "riverview-cemetery-mine": {
    "lat": 38.86779,
    "lng": -106.977261,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Crested Butte town, CO",
    "reviewed": "2026-10-29"
  },
  "sin-city-tunnels": {
    "lat": 38.8467,
    "lng": -104.8619,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Old_Colorado_City",
    "label": "Old Colorado City",
    "reviewed": "2026-10-29"
  },
  "colorado-state-pen-museum": {
    "lat": 38.4394,
    "lng": -105.2473,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Museum_of_Colorado_Prisons",
    "label": "Museum of Colorado Prisons",
    "reviewed": "2026-10-29"
  },
  "rmnp-disappearances": {
    "lat": 40.3466,
    "lng": -105.7364,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Rocky_Mountain_National_Park",
    "label": "Rocky Mountain National Park",
    "reviewed": "2026-10-29"
  },
  "stanley-hotel": {
    "lat": 40.38288,
    "lng": -105.51921,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/The_Stanley_Hotel",
    "label": "The Stanley Hotel",
    "reviewed": "2026-10-29"
  },
  "missouri-state-pen-jeff-city": {
    "lat": 38.573409,
    "lng": -92.160584,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Missouri_State_Penitentiary",
    "label": "Missouri State Penitentiary",
    "reviewed": "2026-10-29"
  },
  "lemp-mansion": {
    "lat": 38.5932,
    "lng": -90.216,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Lemp_Mansion",
    "label": "Lemp Mansion",
    "reviewed": "2026-10-29"
  },
  "trans-allegheny-asylum": {
    "lat": 39.038611,
    "lng": -80.471389,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Trans-Allegheny_Lunatic_Asylum",
    "label": "Trans-Allegheny Lunatic Asylum",
    "reviewed": "2026-10-29"
  },
  "wv-pen-moundsville": {
    "lat": 39.91649,
    "lng": -80.742368,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/West_Virginia_Penitentiary",
    "label": "West Virginia Penitentiary",
    "reviewed": "2026-10-29"
  },
  "point-pleasant-mothman": {
    "lat": 38.910278,
    "lng": -82.069444,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/McClintic_Wildlife_Management_Area",
    "label": "McClintic Wildlife Management Area",
    "reviewed": "2026-10-29"
  },
  "waverly-hills-sanatorium": {
    "lat": 38.130147,
    "lng": -85.841728,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Waverly_Hills_Sanatorium",
    "label": "Waverly Hills Sanatorium",
    "reviewed": "2026-10-29"
  },
  "ohio-state-reformatory": {
    "lat": 40.785278,
    "lng": -82.505,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Ohio_State_Reformatory",
    "label": "Ohio State Reformatory",
    "reviewed": "2026-10-29"
  },
  "brushy-mountain-pen": {
    "lat": 36.1052,
    "lng": -84.4529,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Brushy_Mountain_State_Penitentiary",
    "label": "Brushy Mountain State Penitentiary",
    "reviewed": "2026-10-29"
  },
  "old-idaho-pen": {
    "lat": 43.6027,
    "lng": -116.162,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Old_Idaho_State_Penitentiary",
    "label": "Old Idaho State Penitentiary",
    "reviewed": "2026-10-29"
  },
  "eastern-state-pen": {
    "lat": 39.9683,
    "lng": -75.1725,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Eastern_State_Penitentiary",
    "label": "Eastern State Penitentiary",
    "reviewed": "2026-10-29"
  },
  "centralia-mine-fire": {
    "lat": 40.803333,
    "lng": -76.341667,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Centralia%2C_Pennsylvania",
    "label": "Centralia, Pennsylvania",
    "reviewed": "2026-10-29"
  },
  "lizzie-borden-house": {
    "lat": 41.69894,
    "lng": -71.1562,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Lizzie_Borden_House",
    "label": "Lizzie Borden House",
    "reviewed": "2026-10-29"
  },
  "salem-witch-memorial": {
    "lat": 42.522222,
    "lng": -70.896111,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Salem_witch_trials",
    "label": "Salem witch trials",
    "reviewed": "2026-10-29"
  },
  "danvers-state-hospital": {
    "lat": 42.574174,
    "lng": -70.950516,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Danvers CDP, MA",
    "reviewed": "2026-10-29"
  },
  "alcatraz-island": {
    "lat": 37.826667,
    "lng": -122.422778,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Alcatraz_Island",
    "label": "Alcatraz Island",
    "reviewed": "2026-10-29"
  },
  "black-dahlia-dump-site": {
    "lat": 34.019394,
    "lng": -118.410825,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Los Angeles city, CA",
    "reviewed": "2026-10-29"
  },
  "cecil-hotel": {
    "lat": 34.0442,
    "lng": -118.251,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Cecil_Hotel_%28Los_Angeles%29",
    "label": "Cecil Hotel (Los Angeles)",
    "reviewed": "2026-10-29"
  },
  "cielo-drive-manson": {
    "lat": 34.07923,
    "lng": -118.402437,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Beverly Hills city, CA",
    "reviewed": "2026-10-29"
  },
  "golden-gate-bridge": {
    "lat": 37.819722,
    "lng": -122.478611,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
    "label": "Golden Gate Bridge",
    "reviewed": "2026-10-29"
  },
  "donner-pass-campsite": {
    "lat": 39.32,
    "lng": -120.241667,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Donner_Memorial_State_Park",
    "label": "Donner Memorial State Park",
    "reviewed": "2026-10-29"
  },
  "jonestown-memorial": {
    "lat": 37.771944,
    "lng": -122.179444,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Evergreen_Cemetery_%28Oakland%2C_California%29",
    "label": "Evergreen Cemetery (Oakland, California)",
    "reviewed": "2026-10-29"
  },
  "bodie-ghost-town": {
    "lat": 38.212222,
    "lng": -119.012222,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bodie%2C_California",
    "label": "Bodie, California",
    "reviewed": "2026-10-29"
  },
  "mountain-meadows-massacre": {
    "lat": 37.4755,
    "lng": -113.6437,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Mountain_Meadows_Massacre",
    "label": "Mountain Meadows Massacre",
    "reviewed": "2026-10-29"
  },
  "skinwalker-ranch-gate": {
    "lat": 40.294914,
    "lng": -109.949353,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Ballard town, UT",
    "reviewed": "2026-10-29"
  },
  "wounded-knee-massacre": {
    "lat": 43.143548,
    "lng": -102.368236,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Wounded Knee CDP, SD",
    "reviewed": "2026-10-29"
  },
  "bennington-triangle": {
    "lat": 43.000278,
    "lng": -73.082778,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Glastenbury%2C_Vermont",
    "label": "Glastenbury, Vermont",
    "reviewed": "2026-10-29"
  },
  "maura-murray-route-112": {
    "lat": 44.141584,
    "lng": -72.02683,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Woodsville CDP, NH",
    "reviewed": "2026-10-29"
  },
  "jimmy-hoffa-red-fox": {
    "lat": 42.576389,
    "lng": -83.266944,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Bloomfield_Township%2C_Oakland_County%2C_Michigan",
    "label": "Bloomfield Township, Oakland County, Michigan",
    "reviewed": "2026-10-29"
  },
  "fox-hollow-farm": {
    "lat": 39.965479,
    "lng": -86.148369,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Carmel city, IN",
    "reviewed": "2026-10-29"
  },
  "wuornos-dump-site": {
    "lat": 29.05,
    "lng": -81.15,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Volusia_County%2C_Florida",
    "label": "Volusia County, Florida",
    "reviewed": "2026-10-29"
  },
  "st-augustine-lighthouse": {
    "lat": 29.88543,
    "lng": -81.28852,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/St._Augustine_Light",
    "label": "St. Augustine Light",
    "reviewed": "2026-10-29"
  },
  "st-louis-cemetery-one": {
    "lat": 29.960821,
    "lng": -90.075325,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Saint_Louis_Cemetery",
    "label": "Saint Louis Cemetery",
    "reviewed": "2026-10-29"
  },
  "lalaurie-mansion": {
    "lat": 30.05342,
    "lng": -89.934502,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "New Orleans city, LA",
    "reviewed": "2026-10-29"
  },
  "myrtles-plantation-hist": {
    "lat": 30.803056,
    "lng": -91.3875,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Myrtles_Plantation",
    "label": "Myrtles Plantation",
    "reviewed": "2026-10-29"
  },
  "seattle-underground": {
    "lat": 47.602,
    "lng": -122.334,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Seattle_Underground",
    "label": "Seattle Underground",
    "reviewed": "2026-10-29"
  },
  "ted-bundy-issaquah": {
    "lat": 47.544488,
    "lng": -122.049085,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Issaquah city, WA",
    "reviewed": "2026-10-29"
  },
  "amityville-horror-house": {
    "lat": 40.669844,
    "lng": -73.415787,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Amityville village, NY",
    "reviewed": "2026-10-29"
  },
  "lost-dutchman-mine": {
    "lat": 33.478056,
    "lng": -111.238889,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Superstition_Mountains",
    "label": "Superstition Mountains",
    "reviewed": "2026-10-29"
  },
  "silver-plume-disappearances": {
    "lat": 39.695372,
    "lng": -105.727021,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Silver Plume town, CO",
    "reviewed": "2026-10-29"
  },
  "gilman-colorado": {
    "lat": 39.53277778,
    "lng": -106.39388889,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Gilman,_Colorado",
    "label": "Gilman, Colorado",
    "reviewed": "2026-10-29"
  },
  "battle-of-los-angeles": {
    "lat": 34.05,
    "lng": -118.25,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Los_Angeles",
    "label": "Los Angeles event area",
    "reviewed": "2026-10-29"
  },
  "conjuring-house": {
    "lat": 41.97,
    "lng": -71.68,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/Burrillville,_Rhode_Island",
    "label": "Burrillville area — private property",
    "reviewed": "2026-10-29"
  },
  "bonaventure-cemetery": {
    "lat": 32.043889,
    "lng": -81.045556,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Bonaventure_Cemetery",
    "label": "Bonaventure Cemetery — geographic reference",
    "reviewed": "2026-10-29"
  },
  "linwood-cemetery": {
    "lat": 39.547132,
    "lng": -107.342556,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Linwood Cemetery — geographic reference",
    "reviewed": "2026-10-29"
  },
  "greenwood-cemetery-hot-springs": {
    "lat": 34.489442,
    "lng": -93.050254,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "Greenwood Cemetery — geographic reference",
    "reviewed": "2026-10-29"
  },
  "evergreen-cemetery-oakland": {
    "lat": 37.771944,
    "lng": -122.179444,
    "precision": "place",
    "source": "https://en.wikipedia.org/wiki/Evergreen_Cemetery_%28Oakland%2C_California%29",
    "label": "Evergreen Cemetery — geographic reference",
    "reviewed": "2026-10-29"
  },
  "highway-115-colorado": {
    "lat": 38.84,
    "lng": -104.52,
    "precision": "area",
    "source": "https://en.wikipedia.org/wiki/El_Paso_County%2C_Colorado",
    "label": "Highway 115 — Dead Man’s Canyon Corridor — geographic reference",
    "reviewed": "2026-10-29"
  },
  "san-luis-valley-colorado": {
    "lat": 37.745976,
    "lng": -105.877735,
    "precision": "area",
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html",
    "label": "San Luis Valley, Colorado — geographic reference",
    "reviewed": "2026-10-29"
  }
};
