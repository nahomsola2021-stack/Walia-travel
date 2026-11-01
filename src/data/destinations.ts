import { Destination } from '../types';

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'dest-simien',
    slug: 'simien-mountains',
    name: 'Simien Mountains National Park',
    subtitle: 'The Roof of Africa — Vertical Escarpments & Endemic Highlands',
    region: 'Northern Ethiopia (Amhara)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789836009/xe1n7kzc5rhwjjg2zh0t.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A UNESCO World Heritage site known as the "Chess Pieces of the Gods," the Simien Mountains boast colossal jagged peaks, dramatic 1,500-meter cliffs dropping down to the lowlands, and rich Afro-alpine ecosystems. It is the exclusive home of the endangered Walia ibex and thousands of peaceful Gelada baboons.',
    keyAttractions: [
      'Jinbar Waterfall plunging 500m into an escarpment chasm',
      'Imet Gogo panoramic summit (3,926m)',
      'Mount Bwahit (4,430m) and Ras Dashen (4,550m), highest peak in Ethiopia',
      'Chennek valley and escarpment edge trails'
    ],
    wildlife: ['Walia Ibex', 'Gelada Baboon', 'Ethiopian Wolf', 'Bearded Vulture (Lammergeier)', 'Thick-billed Raven'],
    adventureActivities: ['Multi-day high altitude trekking', 'Mountain camping', 'Escarpment photography', 'Wildlife tracking'],
    recommendedTourIds: ['tour-1', 'tour-3'],
    bestSeason: 'October to March (Crisp clear skies and dry trails)',
    elevation: '1,900m to 4,550m'
  },
  {
    id: 'dest-bale',
    slug: 'bale-mountains',
    name: 'Bale Mountains National Park',
    subtitle: 'Africa’s Greatest Afro-Alpine Wilderness & Endangered Wolf Haven',
    region: 'Southeastern Ethiopia (Oromia)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789820884/zd5ze8a4zujmqqpqpgvx.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The Bale Mountains preserve Africa’s largest Afro-alpine habitat. The vast, windswept Sanetti Plateau rises over 4,000 meters, carpeted with giant lobelias and crystal glacial tarns where the critically endangered Ethiopian wolf hunts. Further south, the plateau plunges into the mystical, moss-draped Harenna cloud forest.',
    keyAttractions: [
      'Sanetti Plateau (4,000m+ Afro-alpine moorland)',
      'Mount Tullu Dimtu (4,377m), second highest summit in Ethiopia',
      'Ancient moss-covered Harenna Cloud Forest',
      'Dinsho juniper forest reserve'
    ],
    wildlife: ['Ethiopian Wolf', 'Mountain Nyala', 'Menelik Bushbuck', 'Bale Monkey', 'Blue-winged Goose', 'Rouget’s Rail'],
    adventureActivities: ['Highland safari tracking', 'Horseback trekking', 'Cloud forest hiking', 'Specialist endemic birding'],
    recommendedTourIds: ['tour-5', 'tour-7'],
    bestSeason: 'November to April',
    elevation: '1,500m to 4,377m'
  },
  {
    id: 'dest-danakil',
    slug: 'danakil-depression',
    name: 'Danakil Depression & Erta Ale',
    subtitle: 'The Geothermal Frontier — Magma Lakes, Acid Springs & Salt Caravans',
    region: 'Northeastern Ethiopia (Afar)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1784044759/z1v74ibrim8opa7ae1ej.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'One of the hottest and lowest places on Earth (125m below sea level), the Danakil Depression is a surreal geological spectacle. Witness the bubbling sulfuric neon greens and yellows of Dallol, the permanent churning molten lava lake of shield volcano Erta Ale, and endless camel caravans carving salt from blinding white crusts.',
    keyAttractions: [
      'Erta Ale Volcano active lava lake',
      'Dallol hydrothermal mineral ponds and chimneys',
      'Lake Karum and Lake Assal salt flats',
      'Traditional Afar salt-mining caravans'
    ],
    wildlife: ['Somali Wild Ass', 'Ostriches', 'Desert Gazelles'],
    adventureActivities: ['Volcano night trekking', 'Off-road 4WD desert expeditions', 'Astrophotography', 'Extreme expedition camping'],
    recommendedTourIds: ['tour-4', 'tour-6'],
    bestSeason: 'November to February (Coolest expedition window)',
    elevation: '-125m below sea level to 613m'
  },
  {
    id: 'dest-lalibela',
    slug: 'lalibela',
    name: 'Lalibela Rock-Hewn Churches',
    subtitle: 'The Eighth Wonder of the World — Living 12th-Century Monolithic Marvels',
    region: 'Northern Highlands (Amhara)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789837875/np04lvnvpk0bupwzvdou.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Carved straight down into monolithic volcanic basalt bedrock in the 12th and 13th centuries, Lalibela’s 11 medieval rock-hewn churches remain active places of living pilgrimage. Connected by subterranean trenches and tunnels, Bet Giyorgis (Church of St. George) stands as an unrivaled testament to human faith and architectural mastery.',
    keyAttractions: [
      'Bet Giyorgis (Church of St. George) cross-monolith',
      'Bet Medhane Alem (largest monolithic rock church on Earth)',
      'Subterranean stone tunnels and trenches',
      'Asheten Maryam mountain monastery hike'
    ],
    wildlife: ['Gelada Baboons on perimeter crags', 'Lammergeier vultures', 'Augur buzzards'],
    adventureActivities: ['Highland hiking', 'Mule treks to mountain hermitages', 'Liturgical photography', 'Cultural immersion'],
    recommendedTourIds: ['tour-3', 'tour-8'],
    bestSeason: 'September to May (Special festivals in January: Genna & Timkat)',
    elevation: '2,500m'
  },
  {
    id: 'dest-rift-valley',
    slug: 'rift-valley-lakes',
    name: 'Great Rift Valley Lakes',
    subtitle: 'Glimmering Waterways, Thermal Springs & Birdwatcher’s Paradise',
    region: 'Central & Southern Ethiopia',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1786277685/koljczs1kdgfy1myq0qq.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A colossal tectonic trench cleaving through Ethiopia, dotted with a constellation of dramatic freshwater and alkaline lakes: Ziway, Langano, Abijatta, Shalla, Hawassa, and Chamo. Home to thousands of pink flamingos, pelicans, giant hippos, and crocodile colonies.',
    keyAttractions: [
      'Lake Langano bronze-sand swimming beaches',
      'Abijatta-Shalla National Park flamingo flocks and crater lakes',
      'Lake Chamo giant Nile crocodile congregation',
      'Lake Hawassa vibrant morning fish market'
    ],
    wildlife: ['Greater and Lesser Flamingos', 'Great White Pelicans', 'Hippopotamuses', 'Nile Crocodiles', 'African Fish Eagles'],
    adventureActivities: ['Lakeside boat cruises', 'Birdwatching expeditions', 'Kayaking', 'Eco-resort wellness'],
    recommendedTourIds: ['tour-1', 'tour-2', 'tour-7'],
    bestSeason: 'Year-round; November to March for migratory birding',
    elevation: '1,500m to 1,800m'
  },
  {
    id: 'dest-omo-valley',
    slug: 'omo-valley',
    name: 'Omo Valley',
    subtitle: 'Ancestral Cultures & Ancient Rhythms of the South',
    region: 'Southern Nations, Nationalities, and Peoples',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1784491632/dwsvrs4uaemasr1zuvcn.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A cradle of human civilization where ancestral traditions, body artistry, and pastoral rituals have endured across millennia. Home to diverse indigenous communities including the Mursi, Hamer, Karo, and Dassanech along the lower Omo river basin.',
    keyAttractions: [
      'Mursi and Suri communities known for intricate clay lip plates and body painting',
      'Hamer cattle jumping rites and ceremonial evangadi dances',
      'Lower Omo Valley UNESCO paleo-anthropological site',
      'Mago National Park'
    ],
    wildlife: ['Lelwel Hartebeest', 'Gerenuk', 'Guereza Colobus', 'Lesser Kudu'],
    adventureActivities: ['Cultural expeditions', 'Bush camping', 'River navigations', 'Portrait photography'],
    recommendedTourIds: ['tour-7'],
    bestSeason: 'July to September and December to March',
    elevation: '400m to 1,200m'
  },
  {
    id: 'dest-harar',
    slug: 'harar-jugol',
    name: 'Harar Jugol & Sof Omar',
    subtitle: 'The Living Walled Citadel of Islamic Heritage & Hyena Feeders',
    region: 'Eastern Ethiopia (Harari)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393454/bqn22oqola1mtb9wmntn.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A fortified 16th-century walled city with 368 narrow stone alleyways, 82 historic mosques, and vibrant market culture. Famous for its nocturnal bond between local "Hyena Men" who feed spotted hyenas by hand, and nearby natural wonders like the subterranean limestone cave system of Sof Omar.',
    keyAttractions: [
      'Historic Jugol stone city walls and 5 antique gates',
      'The nocturnal Hyena Men of Harar',
      'Arthur Rimbaud historic cultural house',
      'Sof Omar underground limestone river caves'
    ],
    wildlife: ['Spotted Hyenas', 'Hamadryas Baboons', 'Awash Valley Oryx'],
    adventureActivities: ['Night wildlife encounters', 'Caving expeditions in Sof Omar', 'Specialty coffee cupping', 'Historical walking tours'],
    recommendedTourIds: ['tour-9'],
    bestSeason: 'October to May',
    elevation: '1,885m'
  }
];
