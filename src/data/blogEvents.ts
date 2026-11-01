import { BlogPost, TravelEvent } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'great-ethiopian-run-insiders-guide',
    title: 'The Great Ethiopian Run: How Africa’s Largest 10K Became a Global Phenomenon',
    category: 'Adventure',
    excerpt: 'Each November, 45,000 runners flood the highlands of Addis Ababa in an explosion of red, green, and gold. Here is how to experience this electric celebration of human stamina.',
    content: 'Founded by Olympic legend Haile Gebrselassie in 2001, the Great Ethiopian Run has transcended athletics to become one of the most euphoric street festivals on the African continent. Situated at 2,400 meters above sea level, running the streets of Addis Ababa is both an invigorating physical challenge and a carnival of unity...',
    author: 'Abebe Tadesse, Lead Expedition Guide',
    date: 'October 12, 2025',
    readTime: '6 min read',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789845162/pliqma4nk2vv1zdqrxpg.jpg',
    featured: true
  },
  {
    id: 'post-2',
    slug: 'tracking-the-ethiopian-wolf-sanetti',
    title: 'Silent Stalkers of Sanetti: Tracking the World’s Rarest Canid at 4,000 Meters',
    category: 'Wildlife',
    excerpt: 'With fewer than 500 individuals remaining on Earth, spending a morning in the misty Afro-alpine tundras of Bale alongside the red-coated Ethiopian wolf is a rare privilege.',
    content: 'Dawn breaks over the Sanetti Plateau at minus four degrees Celsius. Frost coats the silvery rosettes of giant lobelias. Across the undulating basalt plains, a slender reddish silhouette appears against the horizon...',
    author: 'Sara Mengistu, Wildlife Biologist',
    date: 'November 28, 2025',
    readTime: '8 min read',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789831861/x1v8yps47xeqiazls9ir.jpg',
    featured: false
  },
  {
    id: 'post-3',
    slug: 'danakil-depression-lava-and-salt',
    title: 'Journey to the Center of the Earth: What to Expect in the Danakil Depression',
    category: 'Destinations',
    excerpt: 'From the molten churn of Erta Ale volcano to the neon sulfuric terraces of Dallol, expedition secrets for surviving and savoring Earth’s hottest geological frontier.',
    content: 'Descending 125 meters below sea level into the Afar Depression feels like stepping onto another celestial body. The air shimmers with heat, while vibrant turquoise and acid-yellow pools bubble from crystalline mineral chimneys...',
    author: 'Kassahun Bekele, Extreme Expeditions Director',
    date: 'December 15, 2025',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789844425/sdpdgnhf57u3heufwcp6.jpg',
    featured: false
  },
  {
    id: 'post-4',
    slug: 'lalibela-timkat-and-genna-spiritual-legacy',
    title: 'The Stone Spires of Faith: Experiencing Christmas and Timkat in Lalibela',
    category: 'Ethiopian Culture',
    excerpt: 'Why witnessing thousands of white-robed pilgrims chant in the subterranean rock trenches of Lalibela is an experience that stays with you forever.',
    content: 'Carved straight down into volcanic basalt nearly a millennium ago, King Lalibela intended these 11 monolithic churches to be a "New Jerusalem". During Genna (Christmas) and Timkat (Epiphany), these ancient courtyards become alive with ethereal incense, drumbeats, and nocturnal Ge’ez chanting...',
    author: 'Hiwot Hailu, Heritage Specialist',
    date: 'January 4, 2026',
    readTime: '5 min read',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789847248/gjwftoryuwyhroh0orkr.jpg',
    featured: false
  }
];

export const TRAVEL_EVENTS: TravelEvent[] = [
  {
    id: 'event-1',
    slug: 'great-ethiopian-run-2026',
    title: 'Great Ethiopian Run International 10K',
    date: 'November 15, 2026',
    location: 'Meskel Square, Addis Ababa',
    description: 'Join Africa’s grandest road race and festival with 45,000 runners through the heart of the high-altitude capital, hosted alongside our signature wildlife and highland tours.',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789845162/pliqma4nk2vv1zdqrxpg.jpg',
    category: 'Sports & Run',
    highlight: 'Guaranteed VIP registration & official race pack included'
  },
  {
    id: 'event-2',
    slug: 'genna-christmas-lalibela',
    title: 'Genna (Ethiopian Christmas) at Lalibela',
    date: 'January 6–8, 2027',
    location: 'Lalibela Rock-Hewn Churches',
    description: 'An extraordinary nocturnal pilgrimage vigil where tens of thousands of white-robed faithful surround Bet Maryam by flickering candlelight.',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789847402/s5cxtpf0cp53lscbxbht.jpg',
    category: 'Cultural Festival',
    highlight: 'Rare nocturnal access to sacred rock-cut trench ceremonies'
  },
  {
    id: 'event-3',
    slug: 'timkat-epiphany-gondar',
    title: 'Timkat (Epiphany) Festival in Royal Gondar',
    date: 'January 18–20, 2027',
    location: 'Fasilides’ Bath, Gondar',
    description: 'The most photogenic water blessing festival in Ethiopia, where the Tabot holy replicas are brought to the historic 17th-century royal bathing pool under song and trumpets.',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789847493/ojuu55nmbvwivngtiwpl.jpg',
    category: 'Cultural Festival',
    highlight: 'Exclusive spectator terrace over the royal water renewal'
  },
  {
    id: 'event-4',
    slug: 'annual-bird-migration-rift-valley',
    title: 'Annual Palearctic Bird Migration Peak',
    date: 'December 1 – January 15, 2027',
    location: 'Rift Valley Lakes & Bale Mountains',
    description: 'Tens of thousands of migratory waterfowl join resident flocks across lakes Ziway, Langano, and Awassa. Exclusive master ornithologist departures.',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789394231/ukjfccrdwjhqstvsdwqh.jpg',
    category: 'Wildlife Departure',
    highlight: 'Over 200 bird species recorded in a single 7-day departure'
  }
];
