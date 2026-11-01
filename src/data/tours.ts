// src/data/tours.ts

export interface TourDay {
  day: number;
  title: string;
  description: string;
  location?: string;
}

export interface ExtendedTour {
  id: string;
  slug: string;
  name: string;
  priceFrom: string | number;
  tagline: string;
  destination: string;
  duration: string;
  daysCount: number;
  category: string;
  difficulty: string;
  startLocation: string;
  endLocation: string;
  transportation: string;
  bestMonths: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: TourDay[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  practicalNotes: string[];
}

export const TOURS_DATA: ExtendedTour[] = [
  // =======================================================================
  // PRIORITY TOURS
  // =======================================================================
  {
    id: 'peaks-to-depths-simien-danakil',
    slug: 'peaks-to-depths-simien-danakil',
    name: 'From Peaks to Depths: Simien & Danakil Ultimate Adventure',
    priceFrom: 'On request',
    tagline: 'Trek the Roof of Africa, then descend into the volcanic heart of the Danakil Depression',
    destination: 'Simien & Danakil',
    duration: '7 days',
    daysCount: 7,
    category: 'Nature and Adventure',
    difficulty: 'Challenging',
    startLocation: 'Gondar',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD',
    bestMonths: 'November – February',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793479165/htmjyzhosybgns4dbvc5.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1784044759/cyzxqd7f9ratotwxhbat.jpg'],
    shortDescription: 'Begin in the spectacular Simien Mountains, trekking dramatic cliffs, then descend into the extraordinary Danakil Depression.',
    overview: 'Begin in the spectacular Simien Mountains, trekking dramatic cliffs and deep valleys while encountering Gelada baboons and the rare Walia ibex, and challenge yourself to reach Ras Bwahit (4,430m). Then descend into the extraordinary Danakil Depression, where the fiery Erta Ale volcano, the vast salt flats of Lake Assale and the colorful geothermal wonders of Dallol reveal a truly otherworldly landscape...',
    highlights: [
      'Trek the Simien escarpment past Jinbar Falls to the Imet Gogo viewpoint',
      'Meet Gelada baboons and look for the rare Walia ibex at Chennek',
      'Reach for the summit of Ras Bwahit (4,430m)',
      'Trek at night to Erta Ale volcano and its glowing lava lake',
      'Explore the colorful mineral terraces and hot springs of Dallol'
    ],
    itinerary: [
      { day: 1, title: 'Gondar – Sankaber – Geech', location: 'Simien Mountains', description: 'Drive from Gondar to Sankaber. Begin your trek through highland grasslands and giant heather landscapes, enjoying magnificent views of the escarpment before arriving at Geech camp.' },
      { day: 2, title: 'Geech – Imet Gogo – Chennek', location: 'Simien Mountains', description: 'Hike to Imet Gogo (3,925m) for panoramic views of rugged peaks and deep valleys. Continue along the ridge edge to Chennek, known for its endemic Walia Ibex and Gelada baboons.' },
      { day: 3, title: 'Chennek – Ras Bwahit – Gondar', location: 'Mount Bwahit', description: 'Early morning ascent of Ras Bwahit (4,430m). After taking in the views from the Roof of Africa, descend to Chennek and drive back to Gondar for a well-earned rest in a comfortable lodge.' },
      { day: 4, title: 'Gondar – Semera – Erta Ale Basecamp', location: 'Danakil Depression', description: 'Fly from Gondar (via Addis) to Semera. Travel by 4WD across dramatic desert terrain to the base of Erta Ale. As darkness falls, begin the ascent to the caldera to witness the boiling lava lake under the stars.' },
      { day: 5, title: 'Erta Ale – Lake Assale', location: 'Afar Desert', description: 'Descend early before the sun hits peak intensity. Drive through ancient lava fields toward the sprawling salt flats of Lake Assale. Spend the evening watching camel caravans cross the vast white expanse.' },
      { day: 6, title: 'Dallol Geothermal Springs', location: 'Dallol', description: 'Explore the surreal, multi-colored sulfur springs, acidic pools, and salt pillars of Dallol. It is a visual marvel unlike anywhere else on Earth. Return to Semera in the late afternoon.' },
      { day: 7, title: 'Semera – Addis Ababa', location: 'Semera', description: 'Enjoy a relaxed breakfast in Semera before catching your domestic flight back to Addis Ababa, concluding your epic journey of peaks and depths.' }
    ],
    whatsIncluded: ['All airport transfers and ground transportation', 'Domestic flights', 'All accommodation (hotels and camping)', 'Full-board meals', 'Trekking gear & Camping equipment'],
    whatsNotIncluded: ['International flights', 'Ethiopian visa fees', 'Travel insurance', 'Personal sleeping bag'],
    practicalNotes: ['Price on request. Small group or private.', 'Temperatures in Danakil can exceed 40°C (104°F). Bring light layers for the day and warm clothes for the mountain nights.']
  },
  {
    id: 'bale-mountains-wildlife-trekking',
    slug: 'bale-mountains-wildlife-trekking',
    name: 'Bale Mountains Wildlife & Trekking Adventure',
    priceFrom: 'On request',
    tagline: 'Trek and camp across the Sanetti Plateau and Harenna Forest in search of the Ethiopian wolf',
    destination: 'Bale Mountains',
    duration: '9 days',
    daysCount: 9,
    category: 'Wildlife Safaris',
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD',
    bestMonths: 'October – March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789820884/zd5ze8a4zujmqqpqpgvx.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1784106326/zmlnxenqjquec40areje.jpg'],
    shortDescription: 'Spend six unforgettable days trekking and camping in the Bale Mountains in search of the endemic Ethiopian wolf.',
    overview: 'Discover Ethiopia’s endemic wildlife, spectacular landscapes and untouched wilderness. Spend six unforgettable days trekking and camping in the Bale Mountains, from the lush Harenna Forest with its waterfalls, rich birdlife and endemic Bale monkeys to the vast Sanetti Plateau...',
    highlights: [
      'Track the rare Ethiopian wolf on the Sanetti Plateau',
      'Explore the Gaysay Grasslands for Mountain Nyala',
      'Search for endemic Bale monkeys in the Harenna Forest',
      'Visit local communities involved in traditional coffee production'
    ],
    itinerary: [
      { day: 1, title: 'Addis Ababa – Awassa', location: 'Rift Valley', description: 'Drive south through the Great Rift Valley lakes region. Stop at Lake Ziway to spot aquatic birds, then overnight in Awassa.' },
      { day: 2, title: 'Awassa – Dinsho', location: 'Bale Mountains HQ', description: 'Continue into the Bale Mountains. Afternoon walk around the Dinsho headquarters in the Gaysay Grasslands to spot Mountain Nyala and Menelik’s bushbuck.' },
      { day: 3, title: 'Trek: Dinsho to Sodota', location: 'Web Valley', description: 'Begin your trek through the Web Valley. The landscape features striking rock formations and the Fincha Habera waterfall. Camp at Sodota.' },
      { day: 4, title: 'Trek: Sodota to Wasama', location: 'Mararo Valley', description: 'Hike through the Mararo Valley, a prime habitat for the Ethiopian wolf. Pass mineral springs before setting up camp at Wasama beneath craggy peaks.' },
      { day: 5, title: 'Trek: Wasama to Rafu', location: 'Rafu Rock Pillars', description: 'Ascend steeply toward the Sanetti Plateau, moving through high-altitude afro-alpine vegetation to the dramatic rock pillars of Rafu. Camp among the stones.' },
      { day: 6, title: 'Rafu – Sanetti Plateau', location: 'Sanetti Plateau', description: 'Cross the vast, windswept Sanetti Plateau (4,000m+). This is the best place on Earth to observe the endangered Ethiopian wolf hunting giant mole-rats.' },
      { day: 7, title: 'Sanetti – Harenna Forest', location: 'Harenna Forest', description: 'Descend rapidly off the plateau escarpment into the mystical Harenna Forest, one of the last remaining primeval forests in Africa. Look for Bale Monkeys and rare birds.' },
      { day: 8, title: 'Harenna – Rift Valley Lakes', location: 'Lake Langano', description: 'Leave the mountains behind, driving back toward the Rift Valley. Relax by the shores of Lake Langano, enjoying the contrasting warm climate.' },
      { day: 9, title: 'Langano – Addis Ababa', location: 'Addis Ababa', description: 'Morning bird watching or relaxation by the lake before driving back to Addis Ababa for your departing flight or onward journey.' }
    ],
    whatsIncluded: ['Expert English-speaking trekking guide', 'Accommodation at lodges and camps', 'Full-board meal plan', 'Mules and muleteers for baggage'],
    whatsNotIncluded: ['International flights and visa fees', 'Tips and personal expenses'],
    practicalNotes: ['Price on request. Small group or private.', 'Be prepared for sub-zero temperatures at night on the Sanetti Plateau.']
  },
  {
    id: 'northern-southern-ethiopia-grand-discovery',
    slug: 'northern-southern-ethiopia-grand-discovery',
    name: 'Northern & Southern Ethiopia Grand Discovery Tour',
    priceFrom: 'On request',
    tagline: 'Ancient history, diverse cultures, wildlife and breathtaking landscapes in one grand journey',
    destination: 'Northern & Southern Ethiopia',
    duration: '20 days',
    daysCount: 20,
    category: 'Completed Ethiopia Journey',
    difficulty: 'Easy to Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'October – March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1785762596/at38awk2jml8g4legvyy.webp',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789690142/lcupyjfbrdjbytckaa7p.webp'],
    shortDescription: 'Explore Ethiopia from north to south, visiting the island monasteries of Lake Tana, Lalibela, and the Lower Omo Valley.',
    overview: 'Explore Ethiopia from north to south. Visit the island monasteries of Lake Tana and the Blue Nile Falls, the Simien Mountains, the royal castles of Gondar, the rock-hewn churches of Lalibela and the ancient stelae of Axum. Then travel to the Lower Omo Valley to witness the incredibly diverse cultures and living traditions of indigenous tribes.',
    highlights: [
      'Boat trip on Lake Tana to the island monasteries',
      'The rock-hewn churches of Lalibela',
      'Lower Omo Valley cultures: Ari, Mursi, Hamer and Karo',
      'Ethiopian wolf and Mountain Nyala in the Bale Mountains'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Addis Ababa', location: 'Addis Ababa', description: 'Welcome to Ethiopia. Transfer to your hotel and enjoy a welcome dinner with a briefing of your grand adventure.' },
      { day: 2, title: 'Addis to Bahir Dar', location: 'Bahir Dar', description: 'Fly to Bahir Dar. In the afternoon, visit the dramatic Blue Nile Falls (Tis Abay).' },
      { day: 3, title: 'Lake Tana Monasteries', location: 'Lake Tana', description: 'Boat excursion on Lake Tana to explore ancient island monasteries featuring vivid medieval frescoes.' },
      { day: 4, title: 'Bahir Dar to Gondar', location: 'Gondar', description: 'Drive to Gondar. Explore the 17th-century Fasil Ghebbi (Royal Enclosure) and Debre Berhan Selassie church.' },
      { day: 5, title: 'Simien Mountains Excursion', location: 'Simien Mountains', description: 'Day trip into the Simien Mountains to see dramatic escarpments and troops of Gelada baboons.' },
      { day: 6, title: 'Gondar to Axum', location: 'Axum', description: 'Fly to Axum. Discover the ancient obelisks, the ruins of Queen of Sheba’s palace, and St. Mary of Zion church.' },
      { day: 7, title: 'Axum to Lalibela', location: 'Lalibela', description: 'Fly to Lalibela. Begin exploring the Northwestern cluster of magnificent 12th-century rock-hewn churches.' },
      { day: 8, title: 'Lalibela Second Group', location: 'Lalibela', description: 'Visit the Southeastern cluster of churches and the iconic cross-shaped Bet Giyorgis (St. George).' },
      { day: 9, title: 'Lalibela to Addis Ababa', location: 'Addis Ababa', description: 'Fly back to Addis. Afternoon at leisure or exploring the vibrant Mercato.' },
      { day: 10, title: 'Addis to Arba Minch', location: 'Arba Minch', description: 'Fly southward to Arba Minch. Drive up into the Guge Mountains to visit the Dorze people, known for their towering woven homes.' },
      { day: 11, title: 'Lake Chamo & Konso', location: 'Lake Chamo / Konso', description: 'Morning boat trip on Lake Chamo to see massive crocodiles and hippos. Drive to Konso and explore their UNESCO-listed terraced villages.' },
      { day: 12, title: 'Konso to Jinka', location: 'Jinka', description: 'Journey into the heart of the Omo Valley to Jinka. Visit the South Omo Research Center.' },
      { day: 13, title: 'Mago National Park & Mursi', location: 'Mago / Turmi', description: 'Drive through Mago NP to meet the Mursi people, renowned for their distinctive lip plates. Continue to Turmi.' },
      { day: 14, title: 'Omorate & Dassanech', location: 'Omorate', description: 'Drive to Omorate, cross the Omo River in traditional dugout canoes, and visit a Dassanech village.' },
      { day: 15, title: 'Turmi & Hamer Culture', location: 'Turmi', description: 'Spend the day immersing in Hamer culture. If lucky, witness a traditional Bull Jumping ceremony or a lively local market.' },
      { day: 16, title: 'Turmi to Awassa', location: 'Rift Valley', description: 'Begin the scenic drive back north through the Rift Valley, overnighting in the lakeside city of Awassa.' },
      { day: 17, title: 'Awassa to Bale Mountains', location: 'Dinsho', description: 'Drive up into the Bale Mountains. Afternoon wildlife viewing around the Dinsho headquarters.' },
      { day: 18, title: 'Sanetti Plateau & Wolves', location: 'Bale Mountains', description: 'Full day exploring the Sanetti Plateau, searching for the rare Ethiopian wolf and viewing the spectacular Harenna escarpment.' },
      { day: 19, title: 'Bale to Lake Langano', location: 'Lake Langano', description: 'Descend from the mountains to the tranquil, bilharzia-free waters of Lake Langano for a relaxing afternoon.' },
      { day: 20, title: 'Langano to Addis Ababa', location: 'Addis Ababa', description: 'Return to Addis Ababa. Enjoy a farewell cultural dinner and traditional coffee ceremony before your departure.' }
    ],
    whatsIncluded: ['All domestic flights', 'Private 4WD transportation', 'Premium accommodations', 'All meals', 'Expert national guides', 'Tribe/village entrance fees'],
    whatsNotIncluded: ['International flights', 'Photo fees in Omo Valley'],
    practicalNotes: ['Price on request. Small group or private.', 'An extensive, paced journey requiring a moderate level of fitness.']
  },
  {
    id: 'simien-mountains-trekking-5-days',
    slug: 'simien-mountains-trekking-5-days',
    name: 'Simien Mountains Trekking Adventure',
    priceFrom: 'On request',
    tagline: 'Gondar’s castles, Gelada baboons and the high ridges of the UNESCO-listed Simien Mountains',
    destination: 'Simien Mountains',
    duration: '5 days',
    daysCount: 5,
    category: 'Nature and Adventure',
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'October – March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/qpalhi1agsrwvlh1ftpa.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1779540735/j1qdkdvklcsifpjlsck9.jpg'],
    shortDescription: 'Explore the historic castles of Gondar and trek through the high ridges of the UNESCO-listed Simien Mountains.',
    overview: 'Discover the mountains and wildlife of northern Ethiopia. Explore the historic castles and churches of Gondar, then trek through the UNESCO-listed Simien Mountains National Park to Imet Gogo and Mount Bwahit...',
    highlights: [
      'Explore the historic castles and churches of Gondar',
      'Discover the UNESCO-listed Simien Mountains National Park',
      'Trek to Imet Gogo and Mount Bwahit'
    ],
    itinerary: [
      { day: 1, title: 'Addis Ababa – Gondar', location: 'Gondar', description: 'Fly to Gondar. Spend the day exploring the Royal Enclosure, Fasilidas’ Bath, and the beautifully painted Debre Berhan Selassie church.' },
      { day: 2, title: 'Gondar – Sankaber', location: 'Simien Mountains', description: 'Drive up into the Simien Mountains. Check in at the park headquarters and take an acclimatization hike to Sankaber camp, encountering Gelada baboons.' },
      { day: 3, title: 'Sankaber – Geech', location: 'Simien Mountains', description: 'Trek along the escarpment with stunning views, stopping at the impressive Jinbar Waterfall before arriving at Geech plateau.' },
      { day: 4, title: 'Geech – Imet Gogo – Chennek', location: 'Imet Gogo', description: 'Hike to Imet Gogo, one of the most spectacular viewpoints in the park. Continue to Chennek, keeping an eye out for the Walia Ibex.' },
      { day: 5, title: 'Chennek – Gondar – Addis Ababa', location: 'Addis Ababa', description: 'Morning drive from Chennek back to Gondar airport for your return flight to Addis Ababa.' }
    ],
    whatsIncluded: ['2 nights in hotels and 2 nights on trek', 'Full board at Limalimo Lodge (optional upgrade)', 'Local flights', 'Trekking gear'],
    whatsNotIncluded: ['Lunch and dinner in Gondar (unless specified)'],
    practicalNotes: ['Price on request.', 'Hiking boots and warm sleeping bags are mandatory.']
  },
  {
    id: 'northern-historic-simien-7-days',
    slug: 'northern-historic-simien-7-days',
    name: 'Northern Ethiopia Historic & Simien Mountains Adventure',
    priceFrom: 'On request',
    tagline: 'Rock-hewn churches, medieval castles and the spectacular peaks of the Simien Mountains',
    destination: 'Northern Ethiopia',
    duration: '7 days',
    daysCount: 7,
    category: 'Historical Discoveries',
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'October – March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400488/yjjoqh9dg9b36oubwmn3.jpg',
    galleryImages: [],
    shortDescription: 'Discover Ethiopia’s ancient heritage, rock-hewn churches, medieval castles and spectacular mountain landscapes.',
    overview: 'Discover Ethiopia’s ancient heritage, rock-hewn churches, medieval castles and spectacular mountain landscapes. Begin in Addis Ababa, continue to the rock-hewn churches of Lalibela and the imperial castles of Gondar...',
    highlights: [
      'Walk among the rock-hewn churches of Lalibela',
      'Explore the Fasil Ghebbi Royal Enclosure',
      'Trek the Simien ridges to Jinbar Falls'
    ],
    itinerary: [
      { day: 1, title: 'Addis Ababa – Bahir Dar', location: 'Lake Tana', description: 'Fly to Bahir Dar. Enjoy a boat trip on Lake Tana to explore 14th-century island monasteries and visit the Blue Nile Falls.' },
      { day: 2, title: 'Bahir Dar – Gondar', location: 'Gondar', description: 'Scenic drive to Gondar. Spend the afternoon exploring the UNESCO-listed royal castles of Fasil Ghebbi.' },
      { day: 3, title: 'Gondar – Simien Mountains', location: 'Sankaber', description: 'Drive into the Simien Mountains National Park. Enjoy an afternoon hike to spot troops of Gelada baboons grazing on the highland plateau.' },
      { day: 4, title: 'Simien Mountains – Axum', location: 'Axum', description: 'Drive through the breathtaking Tekeze river gorge to Axum, the spiritual heart of Ethiopia and home to ancient towering stelae.' },
      { day: 5, title: 'Axum – Lalibela', location: 'Lalibela', description: 'Morning tour of Axum’s archaeological sites. In the afternoon, take a short flight to the holy city of Lalibela.' },
      { day: 6, title: 'Lalibela Rock-Hewn Churches', location: 'Lalibela', description: 'A full day exploring the 11 magnificent rock-hewn churches, a masterclass of medieval engineering carved directly out of bedrock.' },
      { day: 7, title: 'Lalibela – Addis Ababa', location: 'Addis Ababa', description: 'Transfer to the airport for your return flight to Addis Ababa. Conclude with a farewell cultural dinner.' }
    ],
    whatsIncluded: ['Domestic flights', 'All accommodation', 'Entry fee and guides', 'Private transportation'],
    whatsNotIncluded: ['International flights', 'Lunches and dinners in major cities'],
    practicalNotes: ['Price on request.', 'Easy pacing suitable for all ages.']
  },

  // =======================================================================
  // PREVIOUS TOURS 
  // =======================================================================
  {
    id: 'addis-1',
    slug: '1-day-addis-city-tour',
    name: '1 Day Addis Ababa Guided City Tour',
    priceFrom: '95',
    tagline: 'Discover the historical and cultural heart of Ethiopia in a single day.',
    destination: 'Addis Ababa',
    duration: '1 Day',
    daysCount: 1,
    category: 'City Tours',
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789842816/tpefwwzioulxvhfkgb7b.webp',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789842816/tpefwwzioulxvhfkgb7b.webp'],
    shortDescription: 'Discover the historical and cultural heart of Ethiopia in a single day, exploring panoramic mountains, ancient fossils, and vibrant markets.',
    overview: 'Upon arrival at Bole International Airport, you will be met by a representative from Abiy Ethiopia Tours...',
    highlights: ['Enjoy panoramic views of the city', 'Visit the National Museum'],
    itinerary: [
      { day: 1, title: 'Addis Ababa City Tour', location: 'Addis Ababa', description: 'Drive to Mount Entoto for panoramic views, visit Maryam Church and the Entoto Museum. Head to the National Museum to meet "Lucy", followed by a coffee ceremony and a visit to the bustling Mercato.' }
    ],
    whatsIncluded: ['Entrance fees', 'Lunch', 'Roundtrip airport transfer'],
    whatsNotIncluded: ['Accommodation'],
    practicalNotes: ['Ideal for layovers or as a trip extension.']
  },
  {
    id: 'danakil-3',
    slug: '3-day-danakil-depression',
    name: '3-Day Danakil Depression Volcano, Dallol & Salt Flats',
    priceFrom: '785',
    tagline: 'Journey to the lowest, hottest, and most surreal place on Earth.',
    destination: 'Afar / Danakil Depression',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    category: 'Nature and Adventure',
    difficulty: 'Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4x4',
    bestMonths: 'October to March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/uymjwklcqm5flyi2dhi7.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789400586/palpzv1cwzf74zsnuszl.jpg'],
    shortDescription: 'Hike to the spectacular active lava lake of Erta Ale under the night sky.',
    overview: 'Fly from Addis Ababa to Semera and travel by 4x4 into the Danakil Depression...',
    highlights: ['Hike to Erta Ale Volcano', 'Explore Dallol’s colorful geothermal formations'],
    itinerary: [
      { day: 1, title: 'Addis Ababa to Semera to Erta Ale', location: 'Erta Ale', description: 'Fly to Semera, meet your 4x4 crew, and drive deep into the Afar region. Hike to the caldera of Erta Ale at night to witness the bubbling lava lake.' },
      { day: 2, title: 'Erta Ale to Lake Assale', location: 'Lake Assale', description: 'Descend at dawn. Drive through desert landscapes toward the salt flats of Lake Assale, visiting Afar villages along the way.' },
      { day: 3, title: 'Dallol & Return', location: 'Dallol / Semera', description: 'Watch the sunrise over Lake Assale before exploring Dallol’s colorful geothermal formations. Drive back to Semera for your flight to Addis.' }
    ],
    whatsIncluded: ['Camping equipment', 'Meals', 'Flights', 'Afar local guides and scouts'],
    whatsNotIncluded: ['International flights', 'Sleeping bag'],
    practicalNotes: ['Very hot climate. Bring wet wipes and a headlamp.']
  },
  {
    id: 'omo-5',
    slug: '5-day-authentic-omo-valley',
    name: '5-Day Authentic Omo Valley Culture and Tribal Heritages',
    priceFrom: '1985',
    tagline: 'Immerse yourself in the living traditions of the Omo Valley tribes.',
    destination: 'Southern Omo Valley',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Cultural Journeys',
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/sxbbfoyqvvgstsllyg0z.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789400510/jjmp2ct6hd27bzfodiz9.jpg'],
    shortDescription: 'Meet the Banna, Hamer, Dassanech, and Karo communities and experience authentic village life.',
    overview: 'Fly from Addis Ababa to Jinka and begin your Omo Valley adventure...',
    highlights: ['Experience traditions of Banna and Hamer', 'Visit the Karo people'],
    itinerary: [
      { day: 1, title: 'Addis Ababa to Jinka & Mursi Tribe', location: 'Jinka', description: 'Fly to Jinka. Drive into Mago National Park to visit a Mursi village, famous for their lip plates. Return to Jinka.' },
      { day: 2, title: 'Jinka to Turmi', location: 'Turmi', description: 'Drive to Turmi. Visit a lively tribal market (if falling on a market day) and interact with the Hamer people.' },
      { day: 3, title: 'Omorate | Dassanech', location: 'Omorate', description: 'Travel to Omorate and cross the Omo River in a wooden canoe to visit the Dassanech tribe. Return to Turmi.' },
      { day: 4, title: 'Karo Tribe | Konso', location: 'Konso', description: 'Visit the Karo people, renowned for their intricate body painting. Drive up into the highlands to Konso.' },
      { day: 5, title: 'Konso to Arba Minch & Departure', location: 'Arba Minch', description: 'Explore a terraced Konso village. Drive to Arba Minch for a domestic flight back to Addis Ababa.' }
    ],
    whatsIncluded: ['Accommodation', 'Meals', 'Flights', 'Local village guides'],
    whatsNotIncluded: ['International flights', 'Photography fees'],
    practicalNotes: ['Always ask permission before taking photos of individuals.']
  },
  {
    id: 'danakil-lalibela-5',
    slug: '5-day-danakil-lalibela',
    name: '5-Day Danakil Depression & Lalibela Rock Churches',
    priceFrom: '1570',
    tagline: 'A breathtaking contrast of geological fire, ancient salt, and sacred stone.',
    destination: 'Danakil & Northern Highlands',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Historical Discoveries',
    difficulty: 'Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD',
    bestMonths: 'October to March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/wbjbwva5bg6yqmu3fj8g.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789393567/bbeu9khgnqokdvyyjhir.jpg'],
    shortDescription: 'Witness the surreal geothermal landscapes of the Danakil Depression and fly into the highlands to explore Lalibela.',
    overview: 'Fly from Addis Ababa to Semera and travel by 4x4 through the dramatic Afar landscape...',
    highlights: ['Hike to Erta Ale', 'Discover Lalibela’s rock-hewn churches'],
    itinerary: [
      { day: 1, title: 'Addis Ababa to Semera to Erta Ale', location: 'Danakil', description: 'Fly to Semera, drive to Erta Ale basecamp, and trek at night to view the active volcano.' },
      { day: 2, title: 'Erta Ale to Lake Assale', location: 'Afar', description: 'Morning descent. Drive to the salt flats of Lake Assale, camping near the remote outpost of Hamed Ela.' },
      { day: 3, title: 'Dallol to Lalibela', location: 'Lalibela', description: 'Explore Dallol’s sulfur springs at sunrise. Drive back to Semera and fly (via Addis) into the highlands to Lalibela.' },
      { day: 4, title: 'Lalibela Rock-Hewn Churches', location: 'Lalibela', description: 'Spend a full day exploring the magnificent 12th-century subterranean churches of Lalibela, including Bet Giyorgis.' },
      { day: 5, title: 'Lalibela to Addis Ababa', location: 'Addis Ababa', description: 'Morning at leisure in Lalibela before taking a short domestic flight back to Addis Ababa.' }
    ],
    whatsIncluded: ['Accommodation', 'Flights', 'Meals', 'All entrance fees'],
    whatsNotIncluded: ['International flights'],
    practicalNotes: ['A rapid transition from extreme desert heat to cool mountain air. Pack accordingly.']
  },
  {
    id: 'highlights-12',
    slug: '12-day-ethiopia-highlights',
    name: '12-Day Ethiopia Highlights: History, Culture, Wildlife & Omo Valley',
    priceFrom: '3976',
    tagline: 'The ultimate cross-country expedition of history, culture, and nature.',
    destination: 'All Regions',
    duration: '12 Days / 11 Nights',
    daysCount: 12,
    category: 'Completed Ethiopia Journey',
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'September to May',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473041/vw1ksxsq147g0s2hijwa.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/jphkyw2m66wt8jbv8ame.jpg'],
    shortDescription: 'Explore the royal castles of Gondar, the rock-hewn churches of Lalibela, wildlife in Simien, and Omo Valley.',
    overview: 'This comprehensive 12-day journey covers the best of Ethiopia...',
    highlights: ['Blue Nile Falls', 'Gondar', 'Gelada baboons', 'Omo tribes'],
    itinerary: [
      { day: 1, title: 'Arrival & City Tour', location: 'Addis Ababa', description: 'Arrive in Addis Ababa. Afternoon city tour including the National Museum and Entoto Mountains.' },
      { day: 2, title: 'Fly to Bahir Dar', location: 'Lake Tana', description: 'Morning flight to Bahir Dar. Boat trip on Lake Tana and afternoon excursion to the Blue Nile Falls.' },
      { day: 3, title: 'Drive to Gondar', location: 'Gondar', description: 'Drive to Gondar and explore the medieval castles of the Royal Enclosure and local churches.' },
      { day: 4, title: 'Simien Mountains Day Trip', location: 'Simien Mountains', description: 'Day trip into the Simien Mountains to see breathtaking landscapes and Gelada baboons. Return to Gondar.' },
      { day: 5, title: 'Fly to Lalibela', location: 'Lalibela', description: 'Fly to Lalibela. Afternoon exploration of the first group of rock-hewn churches.' },
      { day: 6, title: 'Lalibela Exploration', location: 'Lalibela', description: 'Visit the remaining churches and enjoy a traditional Ethiopian coffee ceremony.' },
      { day: 7, title: 'Fly South to Arba Minch', location: 'Arba Minch', description: 'Fly to Arba Minch (via Addis). Relax at a lodge overlooking the Rift Valley lakes.' },
      { day: 8, title: 'Lake Chamo & Dorze', location: 'Arba Minch', description: 'Morning boat safari on Lake Chamo. Afternoon drive up to the Dorze village in the Guge mountains.' },
      { day: 9, title: 'Drive to Jinka', location: 'Jinka', description: 'Drive through terraced landscapes into the Omo Valley, arriving in Jinka.' },
      { day: 10, title: 'Mursi Tribe & Turmi', location: 'Turmi', description: 'Visit the Mursi tribe in Mago NP, then drive south to Turmi to meet the Hamer people.' },
      { day: 11, title: 'Omorate & Konso', location: 'Konso', description: 'Visit the Dassanech tribe at the Omo River, then drive up to the terraced highlands of Konso.' },
      { day: 12, title: 'Return to Addis Ababa', location: 'Addis Ababa', description: 'Fly from nearby Arba Minch back to Addis Ababa for international departure.' }
    ],
    whatsIncluded: ['Accommodation', 'Flights', 'Transportation', 'English-speaking guide'],
    whatsNotIncluded: ['International flights', 'Gratuities'],
    practicalNotes: ['A well-paced tour combining internal flights to save driving time.']
  },
  {
    id: 'grand-19',
    slug: '19-day-grand-ethiopia',
    name: '19-Day Completed Ethiopia Historical, Cultural, Wildlife & Scenic Journey',
    priceFrom: '8500',
    tagline: 'A comprehensive, unhurried immersion into every corner of Ethiopia.',
    destination: 'Complete Ethiopia',
    duration: '19 Days / 18 Nights',
    daysCount: 19,
    category: 'Completed Ethiopia Journey',
    difficulty: 'Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD',
    bestMonths: 'October to May',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793552823/wxp4zagwgedjfbscgclz.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1793552823/wxp4zagwgedjfbscgclz.jpg'],
    shortDescription: 'Experience Lalibela, Gondar, the Simien Mountains, the Danakil Depression, the South Omo Valley, and the Bale Mountains.',
    overview: 'This is the ultimate, unhurried 19-day masterclass in Ethiopian heritage...',
    highlights: ['Lalibela’s rock-hewn churches', 'Ethiopian wolf', 'Simien Mountains'],
    itinerary: [
      { day: 1, title: 'Arrival in Addis Ababa', location: 'Addis Ababa', description: 'Welcome briefing and city tour.' },
      { day: 2, title: 'Danakil Depression Start', location: 'Semera', description: 'Fly to Semera, drive to Erta Ale basecamp, night hike to volcano.' },
      { day: 3, title: 'Lake Assale & Dallol', location: 'Danakil', description: 'Explore Dallol sulfur springs and salt flats. Return to Semera.' },
      { day: 4, title: 'Fly to Gondar', location: 'Gondar', description: 'Fly to Gondar. Tour the Royal Castles and Debre Berhan Selassie.' },
      { day: 5, title: 'Simien Mountains', location: 'Simien Mountains', description: 'Drive to Simien NP. Hike to spot Gelada baboons and enjoy escarpment views.' },
      { day: 6, title: 'Axum Historic Sites', location: 'Axum', description: 'Drive via Tekeze Gorge to Axum. Explore stelae fields.' },
      { day: 7, title: 'Fly to Lalibela', location: 'Lalibela', description: 'Fly to Lalibela. Visit the first cluster of rock-hewn churches.' },
      { day: 8, title: 'Lalibela Deep Dive', location: 'Lalibela', description: 'Explore the remaining churches including St. George.' },
      { day: 9, title: 'Fly to Bahir Dar', location: 'Lake Tana', description: 'Fly to Bahir Dar. Boat trip on Lake Tana monasteries.' },
      { day: 10, title: 'Blue Nile & Fly South', location: 'Arba Minch', description: 'Visit Blue Nile Falls, fly to Addis, then to Arba Minch.' },
      { day: 11, title: 'Dorze & Lake Chamo', location: 'Arba Minch', description: 'Visit Dorze village and take a boat safari on Lake Chamo.' },
      { day: 12, title: 'Omo Valley - Jinka', location: 'Jinka', description: 'Drive into the South Omo Valley.' },
      { day: 13, title: 'Mursi & Turmi', location: 'Turmi', description: 'Visit the Mursi tribe, then proceed to Turmi (Hamer people).' },
      { day: 14, title: 'Omorate Dassanech', location: 'Omorate', description: 'Cross the Omo river to see the Dassanech tribe.' },
      { day: 15, title: 'Konso Highlands', location: 'Konso', description: 'Drive to Konso to see their terraced agriculture and cultural landscapes.' },
      { day: 16, title: 'Rift Valley Drive', location: 'Awassa', description: 'Drive to Awassa. Relax by the lake.' },
      { day: 17, title: 'Bale Mountains', location: 'Bale Mountains', description: 'Drive to Bale Mountains. Spot Nyala and bushbuck at Dinsho.' },
      { day: 18, title: 'Sanetti Plateau', location: 'Sanetti Plateau', description: 'Look for Ethiopian wolves on the high-altitude plateau.' },
      { day: 19, title: 'Return to Addis', location: 'Addis Ababa', description: 'Drive back to Addis Ababa for departure.' }
    ],
    whatsIncluded: ['Accommodation', 'Flights', 'Meals', 'Transportation', 'All entry fees'],
    whatsNotIncluded: ['International flights', 'Personal purchases'],
    practicalNotes: ['Comprehensive route. Expect contrasting climates and varied pacing.']
  },
  {
    id: 'harar-awash-5',
    slug: '5-days-harar-and-awash-national-park',
    name: '5 Days Harar and Awash National Park',
    priceFrom: '1150',
    tagline: 'Experience volcanic landscapes, vibrant markets, and the famous Hyena Man tradition.',
    destination: 'Awash National Park, Dire Dawa, Harar',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Wildlife Safaris', 
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: '4WD or Tourist Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/i1bndbepjq2hwbkiu3fo.jpg',
    galleryImages: ['https://res.cloudinary.com/dw1ohipim/image/upload/v1790361826/xt1a082vzyouqhknh5xz.jpg'],
    shortDescription: 'Discover Awash National Park, Dire Dawa, and the historic walled city of Harar in one immersive cultural adventure.',
    overview: 'Discover a 5-day journey from Addis Ababa through Awash National Park, Dire Dawa, and the historic walled city of Harar...',
    highlights: ['Game drives in Awash National Park', 'Cultural walking tour of Harar'],
    itinerary: [
      { day: 1, title: 'Addis Ababa to Awash', location: 'Awash National Park', description: 'Drive from Addis Ababa to Awash National Park. Afternoon game drive to spot Beisa Oryx, Soemmerring’s gazelles, and baboons.' },
      { day: 2, title: 'Awash to Dire Dawa', location: 'Dire Dawa', description: 'Explore the Awash River gorge and waterfalls before driving east to the railway city of Dire Dawa.' },
      { day: 3, title: 'Dire Dawa to Harar', location: 'Harar', description: 'Drive up into the hills to the ancient walled city of Harar. Afternoon walking tour of the narrow alleyways and colorful markets.' },
      { day: 4, title: 'Harar City & Hyena Feeding', location: 'Harar', description: 'Visit the Rimbaud House and Harari museums. In the evening, witness or participate in the traditional feeding of wild hyenas.' },
      { day: 5, title: 'Harar to Addis Ababa', location: 'Addis Ababa', description: 'Drive or fly (from Dire Dawa) back to Addis Ababa, concluding the tour with a farewell lunch.' }
    ],
    whatsIncluded: ['Accommodation', 'Transportation', 'Guide', 'Hyena feeding fee'],
    whatsNotIncluded: ['International flights', 'Meals not specified'],
    practicalNotes: ['Harar is a predominantly Muslim city; modest dress is appreciated.']
  },

  // =======================================================================
  // SPECIALTY TOURS (BIRDING & COFFEE)
  // =======================================================================
  {
    id: 'ethiopia-endemic-birding-10-days',
    slug: 'ethiopia-endemic-birding-10-days',
    name: '10-Day Endemic Birding Safari: Rift Valley & Bale',
    priceFrom: 'On request',
    tagline: 'Discover Ethiopia’s extraordinary avian diversity across varied ecosystems.',
    destination: 'Rift Valley Lakes & Bale Mountains',
    duration: '10 Days / 9 Nights',
    daysCount: 10,
    category: 'Birding Tours',
    difficulty: 'Easy to Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private 4WD',
    bestMonths: 'October to March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473041/vw1ksxsq147g0s2hijwa.jpg', 
    galleryImages: [],
    shortDescription: 'Spot rare and endemic bird species across the Rift Valley lakes, Awash National Park, and the high-altitude Bale Mountains.',
    overview: 'Ethiopia is a true paradise for birders. This 10-day itinerary takes you through the Great Rift Valley, renowned for its diverse aquatic birdlife, and up into the Bale Mountains, home to numerous high-altitude endemics. You will have the chance to spot the Abyssinian Catbird, Rouget’s Rail, Blue-winged Goose, and many more.',
    highlights: [
      'Spot the Rouget’s Rail and Blue-winged Goose in the Bale Mountains',
      'Explore the flamingo-filled shores of Lake Abijatta and Lake Shala',
      'Birding in the acacia woodlands of Awash National Park',
      'Expert local ornithologist guide'
    ],
    itinerary: [
      { day: 1, title: 'Addis Ababa – Awash National Park', location: 'Awash', description: 'Drive to Awash National Park. Afternoon birding looking for Arabian Bustard and Carmine Bee-eater in the acacia woodlands.' },
      { day: 2, title: 'Awash – Lake Ziway', location: 'Lake Ziway', description: 'Morning birding in Awash, then drive to Lake Ziway to spot aquatic birds like the African Fish Eagle, Marabou storks, and pelicans.' },
      { day: 3, title: 'Lake Ziway – Bale Mountains', location: 'Bale Mountains', description: 'Drive up into the Bale Mountains. Stop at the Dinsho headquarters to spot the Abyssinian Catbird and White-backed Black Tit.' },
      { day: 4, title: 'Sanetti Plateau Endemics', location: 'Sanetti Plateau', description: 'Full day birding on the high plateau. Target species include the Blue-winged Goose, Rouget’s Rail, and Spot-breasted Lapwing.' },
      { day: 5, title: 'Harenna Forest', location: 'Harenna Forest', description: 'Descend into the Harenna Forest canopy. Look for the Abyssinian Crimsonwing, African Emerald Cuckoo, and Narina Trogon.' },
      { day: 6, title: 'Bale to Awassa', location: 'Awassa', description: 'Drive back to the Rift Valley. Evening walk along Lake Awassa to see pygmy geese, malachite kingfishers, and black crakes.' },
      { day: 7, title: 'Awassa to Yirgalem', location: 'Yirgalem', description: 'Short drive to Yirgalem. Spend the day walking through lush coffee forests spotting silvery-cheeked hornbills and African paradise flycatchers.' },
      { day: 8, title: 'Yirgalem to Lake Langano', location: 'Lake Langano', description: 'Travel to Lake Langano. The surrounding woodland is excellent for spotting the endemic Yellow-fronted Parrot and Black-winged Lovebird.' },
      { day: 9, title: 'Abijatta-Shalla National Park', location: 'Abijatta-Shalla', description: 'Visit these twin lakes known for enormous flocks of lesser and greater flamingos, great white pelicans, and cormorants.' },
      { day: 10, title: 'Rift Valley to Addis Ababa', location: 'Addis Ababa', description: 'Final morning of casual birding by the lake before returning to Addis Ababa for your departure.' }
    ],
    whatsIncluded: ['Specialist birding guide', 'All accommodation and meals', 'Park entrance fees', '4WD transportation'],
    whatsNotIncluded: ['International flights', 'Binoculars and camera gear'],
    practicalNotes: ['Bring a high-quality telephoto lens and binoculars.', 'Early morning starts are essential for optimal bird activity.']
  },
  {
    id: 'ethiopia-specialty-coffee-route-7-days',
    slug: 'ethiopia-specialty-coffee-route-7-days',
    name: '7-Day Southern Specialty Coffee Route',
    priceFrom: 'On request',
    tagline: 'Trace the origins of Arabica coffee from the birthplace of Kaffa to the highlands of Yirgacheffe.',
    destination: 'Yirgacheffe, Sidama, & Kaffa',
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    category: 'Specialty Coffee Tours',
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'October to February (Harvest Season)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791483182/xx38kv7tjgtztu4pj9c1.jpg',
    galleryImages: [],
    shortDescription: 'Immerse yourself in the birthplace of Arabica. Visit cooperative farms, learn washing techniques, and participate in traditional coffee ceremonies.',
    overview: 'Journey deep into the lush highlands of southern and southwestern Ethiopia to uncover the secrets of the world’s finest coffee. From the legendary forests of Kaffa (where coffee was discovered) to the renowned washing stations of Yirgacheffe and Sidama, you will meet local farmers, learn about harvesting and processing, and experience the cultural significance of the Ethiopian coffee ceremony.',
    highlights: [
      'Visit specialty coffee farms in Yirgacheffe and Sidama',
      'Learn about wet and dry processing at local washing stations',
      'Participate in an authentic Ethiopian coffee ceremony',
      'Cupping sessions to taste distinct regional flavor profiles'
    ],
    itinerary: [
      { day: 1, title: 'Addis Ababa – Hawassa', location: 'Hawassa', description: 'Drive south towards the Rift Valley. Stop for an introductory coffee cupping session at a premier roastery in Addis before departing.' },
      { day: 2, title: 'Hawassa – Yirgacheffe', location: 'Yirgacheffe', description: 'Drive into the misty highlands of Yirgacheffe. Visit cooperative farms and learn about selective hand-picking and the wet washing process.' },
      { day: 3, title: 'Yirgacheffe – Sidama', location: 'Sidama', description: 'Explore the Sidama coffee region. Meet local farmers, witness raised-bed drying techniques, and enjoy a traditional coffee ceremony in a village home.' },
      { day: 4, title: 'Sidama – Jimma', location: 'Jimma', description: 'A scenic drive across the country to Jimma, the gateway to the Kaffa region. Enjoy the rolling green landscapes.' },
      { day: 5, title: 'Jimma – Bonga (Kaffa Biosphere)', location: 'Bonga', description: 'Enter the Kaffa Biosphere Reserve, the undisputed birthplace of Arabica coffee. Hike into the wild coffee forests.' },
      { day: 6, title: 'Bonga Coffee Forests', location: 'Bonga', description: 'Full day exploring the wild coffee ecosystems. Learn how locals harvest wild beans and protect the forest canopy.' },
      { day: 7, title: 'Jimma – Addis Ababa', location: 'Addis Ababa', description: 'Fly or drive back to Addis Ababa. Conclude with a final tasting session comparing the southern and southwestern profiles.' }
    ],
    whatsIncluded: ['Coffee expert guide', 'Cupping sessions', 'All accommodation and meals', 'Transportation'],
    whatsNotIncluded: ['International flights'],
    practicalNotes: ['Best experienced during the harvest season (Nov-Jan) for active processing sights.']
  }
];