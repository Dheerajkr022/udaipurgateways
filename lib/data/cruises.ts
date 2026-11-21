export interface ItineraryDay {
  day: number;
  location: string;
  activity: string;
  image?: string;
}

export interface CruiseItineraryOption {
  title: string;
  days: ItineraryDay[];
}

export interface Cabin {
  name: string;
  description: string;
  features: string[];
  price?: string;
  image: string;
}

export interface DiningOption {
  name: string;
  description: string;
  image: string;
}

export interface CruiseActivity {
  name: string;
  icon: string; 
}

export interface DestinationCovered {
  name: string;
  description: string;
  image: string;
}

export interface ShipFacts {
  grossTonnage: string;
  guestCapacity: string;
  passengerDecks: string;
  diningOptionsCount: string;
  onboardActivitiesCount: string;
}

export interface CruiseFaq {
  question: string;
  answer: string;
}

export interface CruiseReview {
  author: string;
  rating: number;
  text: string;
}

export interface Cruise {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  destination: string;
  departure: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  duration: string;
  bestFor: string;
  startingPrice: string;
  highlights: string[];
  shipFacts: ShipFacts;
  itineraryOptions: CruiseItineraryOption[];
  cabins: Cabin[];
  diningOptions: DiningOption[];
  onboardActivities: CruiseActivity[];
  destinationsCovered: DestinationCovered[];
  included: string[];
  excluded: string[];
  facilities: string[];
  faqs: CruiseFaq[];
  reviews: CruiseReview[];
}

export const mockCruises: Cruise[] = [
  {
    id: "lake-pichola-sunset-cruise",
    slug: "royal-caribbean", // Kept as slug/alias for backward compatibility
    name: "Lake Pichola Royal Sunset Cruise",
    category: "Royal Lake Cruise",
    categorySlug: "lake-cruise",
    destination: "Lake Pichola, Udaipur",
    departure: "City Palace Rameshwar Ghat Jetty",
    shortDescription: "Sail past shimmering marble palaces and historic ghats as the sun sets over the Aravali hills.",
    description: "The Lake Pichola Royal Sunset Cruise is one of the quintessential experiences of Udaipur. Departing from the City Palace jetty at Rameshwar Ghat, the cruise takes you gliding past the historic bathing ghats, Gangaur Ghat, Mohan Mandir, and Arsi Vilas bird sanctuary, circling the floating marble wonder of Taj Lake Palace and docking at the 17th-century Jag Mandir Island Palace for sunset views.",
    heroImage: "/cruise/royal.webp",
    duration: "1 to 2 Hours",
    bestFor: "Couples | Families | Photography Enthusiasts",
    startingPrice: "Enquiry on Request",
    highlights: [
      "Panoramic views of the illuminated City Palace complex",
      "Close-up circuit around Taj Lake Palace (Jag Niwas)",
      "Docking and exploration of Jag Mandir Island Palace",
      "Stunning golden-hour photography of Aravali peaks",
      "Informative historical commentary on Mewar royalty",
    ],
    shipFacts: {
      grossTonnage: "Solar-Electric Vessel",
      guestCapacity: "Up to 30 Guests",
      passengerDecks: "Canopy Open Deck",
      diningOptionsCount: "Lakeside Courtyard Dining",
      onboardActivitiesCount: "Sightseeing & Photography",
    },
    itineraryOptions: [
      {
        title: "Sunset Heritage Cruise Route",
        days: [
          { day: 1, location: "City Palace Jetty", activity: "Boarding at Rameshwar Ghat with view of the grand palace walls." },
          { day: 1, location: "Taj Lake Palace waters", activity: "Slow scenic cruise around the white marble floating palace." },
          { day: 1, location: "Jag Mandir Island", activity: "Docking at Jag Mandir to view marble elephant statues and gardens." },
          { day: 1, location: "Old City Ghats", activity: "Return cruise passing illuminated Gangaur Ghat and Ambrai Ghat." }
        ]
      }
    ],
    cabins: [
      { name: "Royal Canopy Seating", description: "Shaded comfortable seating with panoramic 360-degree lake views.", features: ["Up to 4 Guests", "Padded Cushions", "Unobstructed Views"], price: "Enquiry on Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "Front Bow Open Deck", description: "Open-air forward seating ideal for photographers and sunset lovers.", features: ["Up to 6 Guests", "Prime Sunset Angle", "Refreshing Breeze"], price: "Enquiry on Request", image: "/cruise/suite-cabin.jpg" },
      { name: "Private Shikara Charter", description: "Exclusive decorated royal boat chartered exclusively for your party.", features: ["Up to 8 Guests", "Private Guide", "Flexible Timings"], price: "Enquiry on Request", image: "/cruise/ocean-view-cabin.jpg" },
      { name: "Classic Covered Boat", description: "Traditional covered vessel suited for families and small groups.", features: ["Up to 12 Guests", "Sun Protection", "Comfortable Seating"], price: "Enquiry on Request", image: "/cruise/interior-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Jag Mandir Island Darikhana", description: "Lakeside dining on the terrace of Jag Mandir with views across to the City Palace.", image: "/cruise/specialty-dining.png" },
      { name: "Picholi Bar & Cafe", description: "Refreshing beverages, tea, and Mewari snacks enjoyed while overlooking the lake.", image: "/cruise/main-dining.png" },
      { name: "Rooftop Heritage Dining", description: "Traditional Rajasthani thali dining at lakeside havelis following your evening boat cruise.", image: "/images/cafe.jpeg" },
      { name: "Courtyard Refreshments", description: "Tea and light refreshments served at Jag Mandir pavilion.", image: "/cruise/bars-lounges.jpg" }
    ],
    onboardActivities: [
      { name: "Heritage Sightseeing", icon: "activity" },
      { name: "Golden Hour Photography", icon: "heart" },
      { name: "Sunset Viewing", icon: "droplets" },
      { name: "Palace Commentary", icon: "users" },
      { name: "Bird Watching at Arsi Vilas", icon: "shopping-bag" },
      { name: "Island Exploration", icon: "music" }
    ],
    destinationsCovered: [
      { name: "Lake Pichola", description: "Udaipur's iconic lake created in 1362 AD.", image: "/destinations/lake-pichola.jpg" },
      { name: "Jag Mandir Island", description: "17th-century island palace.", image: "/cruise/cordella.jpg" },
      { name: "City Palace Waterfront", description: "Towering Mewar royal facade.", image: "/destinations/city-palace.jpg" },
      { name: "Gangaur Ghat", description: "Cultural waterfront steps.", image: "/destinations/fateh-sagar.jpg" },
      { name: "Arsi Vilas", description: "Historic royal bird sanctuary island.", image: "/destinations/sajjangarh.jpg" },
      { name: "Ambrai Ghat", description: "Romantic twilight viewpoint.", image: "/destinations/lake-pichola.jpg" }
    ],
    included: [
      "Scenic boat cruise across Lake Pichola",
      "Docking & admission to Jag Mandir Island Palace",
      "Life jackets and onboard safety gear",
      "Audio / historical commentary assistance",
      "GST and municipal lake fees"
    ],
    excluded: [
      "Personal food, beverages and dining expenses at Jag Mandir",
      "Professional camera fees levied by palace authorities",
      "Ground transfers to and from Rameshwar Ghat jetty",
      "Tips and personal gratuities"
    ],
    facilities: [
      "Life jackets for all ages",
      "Canopy sun and wind shade",
      "Clean safety-certified vessels",
      "Experienced local boatmen",
      "First aid kit onboard"
    ],
    faqs: [
      { question: "Where do we board the Lake Pichola cruise?", answer: "Boarding takes place at Rameshwar Ghat jetty, accessible through the City Palace grounds." },
      { question: "What time are sunset cruises conducted?", answer: "Sunset cruises usually depart between 4:30 PM and 5:30 PM depending on the time of year." },
      { question: "Can we get down at Jag Mandir Island?", answer: "Yes, regular cruise tickets include a stopover at Jag Mandir Island allowing you to explore the gardens and courtyards." }
    ],
    reviews: [
      { author: "Rohan & Family", rating: 5, text: "Amazing experience! The sunset views of City Palace and Jag Mandir from the water are breathtaking. Thank you Udaipur Gateway for the great guidance." },
      { author: "Pooja Mehta", rating: 5, text: "A must-do when visiting Udaipur. The lake cruise was tranquil, relaxing, and offered the best photo angles of the palace." }
    ]
  },
  {
    id: "jag-mandir-heritage-cruise",
    slug: "resorts-world-one",
    name: "Jag Mandir Island Heritage Boat Ride",
    category: "Island Palace Excursion",
    categorySlug: "island-cruise",
    destination: "Jag Mandir, Lake Pichola",
    departure: "Bansi Ghat / City Palace Jetty",
    shortDescription: "A royal voyage to the 17th-century island palace where Mughal Emperor Shah Jahan found inspiration.",
    description: "Built by three Maharanas of Mewar between 1551 and 1652, Jag Mandir is celebrated as the 'Lake Garden Palace'. It is famous for its octagonal Gol Mahal tower, monumental carved stone elephants standing guard at the water's edge, tranquil courtyards, and scenic royal gardens. This dedicated heritage boat ride delivers you directly to the island palace.",
    heroImage: "/cruise/cordella.jpg",
    duration: "1.5 to 2 Hours",
    bestFor: "Couples | Families | Architecture Enthusiasts",
    startingPrice: "Enquiry on Request",
    highlights: [
      "Life-size carved marble elephants greeting the jetty",
      "Gol Mahal palace tower with intricate colored stone inlays",
      "Gul Mahal pavilion where Prince Khurram stayed",
      "Courtyard garden flanked by palm trees and bougainvillea",
      "Panoramic views looking back at Udaipur's skyline"
    ],
    shipFacts: {
      grossTonnage: "Twin-Hull Heritage Vessel",
      guestCapacity: "Up to 25 Guests",
      passengerDecks: "Shaded Main Deck",
      diningOptionsCount: "Island Garden Cafe",
      onboardActivitiesCount: "Historic Exploration",
    },
    itineraryOptions: [
      {
        title: "Island Palace Exploration",
        days: [
          { day: 1, location: "Bansi Ghat", activity: "Ceremonial departure across the calm waters of Lake Pichola." },
          { day: 1, location: "Jag Mandir Jetty", activity: "Arrival past the eight carved marble guardian elephants." },
          { day: 1, location: "Gol Mahal", activity: "Tour of the dome and stone inlay craftsmanship." },
          { day: 1, location: "Return Voyage", activity: "Leisurely return cruise back to the City Palace jetty." }
        ]
      }
    ],
    cabins: [
      { name: "Heritage Canopy Seating", description: "Royal-themed seating with cushions and brass detailing.", features: ["Up to 4 Guests", "Shaded", "Cushioned"], price: "Enquiry on Request", image: "/cruise/balcony-cabin.jpg" },
      { name: "Executive Island Shuttle", description: "Speedy and comfortable shuttle service to the island.", features: ["Up to 10 Guests", "Fast", "Safe"], price: "Enquiry on Request", image: "/cruise/interior-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Darikhana All-Day Restaurant", description: "Fine multi-cuisine dining situated in the colonnaded pavilion of Jag Mandir.", image: "/cruise/specialty-dining.png" }
    ],
    onboardActivities: [
      { name: "Architectural Tour", icon: "activity" },
      { name: "Island Photography", icon: "heart" },
      { name: "Mughal History Walk", icon: "users" }
    ],
    destinationsCovered: [
      { name: "Jag Mandir Island", description: "Historic Lake Garden Palace.", image: "/cruise/cordella.jpg" },
      { name: "Lake Pichola", description: "Scenic waters of Udaipur.", image: "/destinations/lake-pichola.jpg" }
    ],
    included: [
      "Round-trip boat transport to Jag Mandir",
      "Entry to island gardens and heritage areas",
      "Safety life jackets"
    ],
    excluded: [
      "Food and beverages at island cafes",
      "Personal expenses"
    ],
    facilities: [
      "Life jackets",
      "Restroom facilities on island",
      "Shaded seating"
    ],
    faqs: [
      { question: "How long can we spend on Jag Mandir Island?", answer: "Most visitors spend between 45 minutes to 1.5 hours wandering the courtyards and gardens." }
    ],
    reviews: [
      { author: "Sunita Rao", rating: 5, text: "The boat ride to Jag Mandir was the highlight of our Udaipur weekend. Stunning views and very peaceful." }
    ]
  },
  {
    id: "fateh-sagar-solar-cruise",
    slug: "cordelia-cruises",
    name: "Fateh Sagar Solar Boat & Island Tour",
    category: "Eco Lake Cruise",
    categorySlug: "eco-cruise",
    destination: "Fateh Sagar Lake, Udaipur",
    departure: "Fateh Sagar Paal / Rani Road Jetty",
    shortDescription: "An eco-friendly solar boat cruise across Fateh Sagar Lake to Nehru Park island garden.",
    description: "Fateh Sagar Lake offers wide open waters surrounded by the rolling Aravali range. The eco-friendly solar-powered boats provide a quiet, zero-emission cruise across the lake, making regular stops at Nehru Park—an island park featuring lush green lawns, musical fountains, and a unique boat-shaped restaurant.",
    heroImage: "/cruise/celebrity.jpg",
    duration: "45 Minutes to 1 Hour",
    bestFor: "Families | Nature Lovers | Eco Travelers",
    startingPrice: "Enquiry on Request",
    highlights: [
      "Zero-emission whisper-quiet solar boat technology",
      "Visit Nehru Park island garden in the center of the lake",
      "Close-up views of the Udaipur Solar Observatory island",
      "Refreshing mountain breezes along Rani Road promenade",
      "Affordable and family-friendly experience"
    ],
    shipFacts: {
      grossTonnage: "Solar-Electric Catamaran",
      guestCapacity: "Up to 20 Guests",
      passengerDecks: "Single Level Open Deck",
      diningOptionsCount: "Nehru Park Island Cafe",
      onboardActivitiesCount: "Lake Cruising",
    },
    itineraryOptions: [
      {
        title: "Fateh Sagar Circuit",
        days: [
          { day: 1, location: "Fateh Sagar Jetty", activity: "Depart from the main promenade near Mumbai Market." },
          { day: 1, location: "Nehru Park", activity: "Disembark to explore island greenery and fountains." },
          { day: 1, location: "Solar Observatory waters", activity: "Pass by the internationally renowned solar research station." },
          { day: 1, location: "Rani Road shoreline", activity: "Return alongside the scenic Aravali mountain backdrop." }
        ]
      }
    ],
    cabins: [
      { name: "Solar Cruiser Deck", description: "Smooth, silent open-air deck seating under a protective canopy.", features: ["Up to 4 Guests", "Quiet", "Eco-friendly"], price: "Enquiry on Request", image: "/cruise/balcony-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Nehru Park Cafe", description: "Snacks, cold drinks, and ice creams on the island.", image: "/images/cafe.jpeg" }
    ],
    onboardActivities: [
      { name: "Island Strolls", icon: "activity" },
      { name: "Lake Views", icon: "heart" },
      { name: "Solar Tech Experience", icon: "users" }
    ],
    destinationsCovered: [
      { name: "Fateh Sagar Lake", description: "Scenic northern lake of Udaipur.", image: "/destinations/fateh-sagar.jpg" },
      { name: "Nehru Park Island", description: "Central garden island.", image: "/cruise/celebrity.jpg" }
    ],
    included: ["Boat ride to and from Nehru Park", "Island access", "Life jackets"],
    excluded: ["Food and snacks", "Speedboat rides"],
    facilities: ["Eco-friendly motor", "Life jackets", "Shaded seats"],
    faqs: [
      { question: "Is the solar boat safe for young children?", answer: "Yes, the boat is very stable, moves at gentle speeds, and life jackets are provided for all passengers." }
    ],
    reviews: [
      { author: "Kunal Joshi", rating: 5, text: "Very relaxing ride on Fateh Sagar. Nehru Park is a lovely spot to relax in the late afternoon." }
    ]
  },
  {
    id: "jaisamand-lake-cruise",
    slug: "anthem-of-the-seas",
    name: "Jaisamand Lake Island Excursion",
    category: "Lake & Island Safari",
    categorySlug: "safari-cruise",
    destination: "Jaisamand Lake (Dhebar Lake), Udaipur District",
    departure: "Jaisamand Dam Jetty (50 km from Udaipur)",
    shortDescription: "Cruise across Asia's second-largest artificial freshwater lake to tribal islands and summer palaces.",
    description: "Built in 1685 by Maharana Jai Singh, Jaisamand Lake (Dhebar Lake) covers an immense 87 square kilometres. It features a massive marble dam with six intricately carved cenotaphs (chhatris) and an ornate Shiva temple. Seven inhabited islands dot the lake, along with the Jaisamand Wildlife Sanctuary on its banks.",
    heroImage: "/cruise/norwegian.avif",
    duration: "Full Day Excursion (2-3 hrs on lake)",
    bestFor: "Adventurers | Nature Enthusiasts | Off-the-beaten-track Travelers",
    startingPrice: "Enquiry on Request",
    highlights: [
      "Explore Asia's second-largest artificial lake",
      "Marvel at the monumental marble dam and sculpted chhatris",
      "Boat ride to Baba Ka Magra and Pipli island settlements",
      "Views of the hilltop Hawa Mahal and Ruthi Rani Ka Mahal",
      "Spotting migratory birds, nilgai, and leopards in the sanctuary"
    ],
    shipFacts: {
      grossTonnage: "Motor Launch Vessel",
      guestCapacity: "Up to 35 Guests",
      passengerDecks: "Canopied Boat",
      diningOptionsCount: "Lakeside Resort Dining",
      onboardActivitiesCount: "Island Excursion",
    },
    itineraryOptions: [
      {
        title: "Jaisamand Lake Safari",
        days: [
          { day: 1, location: "Jaisamand Dam", activity: "Admire the massive marble embankment and carved elephant statues." },
          { day: 1, location: "Island Exploration", activity: "Cruise to Baba Ka Magra island to observe traditional village life." },
          { day: 1, location: "Sanctuary Shoreline", activity: "Sail along the edge of the wildlife sanctuary to spot local fauna." },
          { day: 1, location: "Palace Viewpoint", activity: "View the two historic summer palaces perched on adjacent hilltops." }
        ]
      }
    ],
    cabins: [
      { name: "Safari Launch Seating", description: "Spacious canopied vessel suited for large lakes and long distances.", features: ["Up to 6 Guests", "Sturdy", "Wide Viewing Angles"], price: "Enquiry on Request", image: "/cruise/suite-cabin.jpg" }
    ],
    diningOptions: [
      { name: "Jaisamand Island Resort", description: "Lakeside restaurant serving traditional Rajasthani and Indian meals.", image: "/cruise/specialty-dining.png" }
    ],
    onboardActivities: [
      { name: "Island Safari", icon: "activity" },
      { name: "Bird Watching", icon: "heart" },
      { name: "Historical Exploration", icon: "users" }
    ],
    destinationsCovered: [
      { name: "Jaisamand Lake", description: "Asia's second largest artificial lake.", image: "/cruise/norwegian.avif" },
      { name: "Jaisamand Wildlife Sanctuary", description: "Wooded hills surrounding the lake.", image: "/packages/adventure.jpg" }
    ],
    included: ["Boat cruise across Jaisamand Lake", "Life jackets and navigation guide"],
    excluded: ["Road transfers from Udaipur (50 km)", "Sanctuary entry fees if applicable", "Food and beverages"],
    facilities: ["Motor launch", "Certified life jackets", "Experienced captain"],
    faqs: [
      { question: "How far is Jaisamand Lake from Udaipur city?", answer: "It is approximately 50 km south-east of Udaipur, easily reachable in about 1 to 1.5 hours by car." }
    ],
    reviews: [
      { author: "Abhishek Jain", rating: 5, text: "A hidden gem near Udaipur! The sheer size of Jaisamand Lake is mesmerizing. Great recommendation from Udaipur Gateway." }
    ]
  }
];

export function getCruises(): Cruise[] {
  return mockCruises;
}

export function getCruiseBySlug(slug: string): Cruise | undefined {
  const direct = mockCruises.find(c => c.slug === slug || c.id === slug);
  if (direct) return direct;

  const aliasMap: Record<string, string> = {
    "royal-caribbean": "lake-pichola-sunset-cruise",
    "resorts-world-one": "jag-mandir-heritage-cruise",
    "cordelia-cruises": "fateh-sagar-solar-cruise",
    "anthem-of-the-seas": "jaisamand-lake-cruise",
    "lake-pichola-sunset-cruise": "lake-pichola-sunset-cruise",
    "jag-mandir-heritage-cruise": "jag-mandir-heritage-cruise",
    "fateh-sagar-solar-cruise": "fateh-sagar-solar-cruise",
    "jaisamand-lake-cruise": "jaisamand-lake-cruise",
  };
  const mapped = aliasMap[slug.toLowerCase()];
  if (mapped) return mockCruises.find(c => c.id === mapped || c.slug === mapped);

  return undefined;
}

export function getRelatedCruises(slug: string, limit: number = 3): Cruise[] {
  return mockCruises.filter(c => c.slug !== slug && c.id !== slug).slice(0, limit);
}
