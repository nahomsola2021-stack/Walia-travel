export interface TourDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string;
  activities?: string[];
}

export interface Tour {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  duration: string; // e.g. "10 days"
  durationDays: number;
  region: 'Northern Ethiopia' | 'Southern Ethiopia' | 'Eastern Ethiopia' | 'Addis Ababa' | 'Afar' | 'Rift Valley' | 'Highlands';
  experienceTypes: Array<'Wildlife' | 'Adventure' | 'Trekking' | 'Birdwatching' | 'Culture' | 'Heritage' | 'Extreme Expedition'>;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: TourDay[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme' | 'Easy to Moderate';
  groupSize: string;
  startingLocation: string;
  priceFrom?: string;
  bestTimeToVisit?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  region: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  keyAttractions: string[];
  wildlife: string[];
  adventureActivities: string[];
  recommendedTourIds: string[];
  bestSeason: string;
  elevation?: string;
}

export interface WildlifeSpecies {
  id: string;
  name: string;
  amharicName?: string;
  scientificName: string;
  status: 'Endangered' | 'Critically Endangered' | 'Vulnerable' | 'Near Threatened' | 'Endemic';
  habitat: string;
  description: string;
  image: string;
  funFact: string;
  whereToSpot: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Wildlife' | 'Adventure' | 'Travel Tips' | 'Ethiopian Culture' | 'Destinations' | 'Trekking' | 'Birdwatching';
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface TravelEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'Sports & Run' | 'Cultural Festival' | 'Wildlife Departure' | 'Seasonal Expedition';
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Wildlife' | 'Landscapes' | 'Adventure' | 'People & Culture' | 'Mountains';
  imageUrl: string;
  caption: string;
  photographer?: string;
}
