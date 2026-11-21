export interface HotelRoom {
  name: string;
  description?: string;
  image: string;
  features: string[];
}

export interface HotelDining {
  name: string;
  description: string;
  image: string;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  stars: number;
  location: string;
  address: string;
  tagline: string;
  description: string;
  quote: string;
  heroImage: string;
  gallery: string[];
  propertyType: string;
  idealFor: string;
  checkIn: string;
  checkOut: string;
  amenities: { name: string; icon: string }[];
  rooms: HotelRoom[];
  dining: HotelDining[];
  nearbyPlaces: { name: string; distance: string; image: string }[];
  faqs: { question: string; answer: string }[];
  rating: number;
  reviewsCount: number;
}

const standardAmenities = [
  { name: "Swimming Pool", icon: "pool" },
  { name: "Spa & Wellness", icon: "spa" },
  { name: "Fitness Centre", icon: "fitness" },
  { name: "Multiple Restaurants", icon: "restaurant" },
  { name: "Lake Views", icon: "beach" },
  { name: "Heritage Courtyards", icon: "kids" },
  { name: "Free Wi-Fi", icon: "wifi" },
  { name: "Concierge & Travel Desk", icon: "concierge" },
  { name: "Business Facilities", icon: "business" },
  { name: "Coffee Shop & Lounge", icon: "coffee" },
  { name: "Valet Parking", icon: "parking" },
  { name: "Lounge Bar", icon: "bar" },
  { name: "Smart TV", icon: "tv" },
  { name: "Climate Control AC", icon: "ac" },
  { name: "Laundry Service", icon: "laundry" },
  { name: "24/7 Security", icon: "security" },
  { name: "Room Telephone", icon: "phone" },
  { name: "Folk Music & Live Sitar", icon: "entertainment" },
  { name: "Tour & Sightseeing Desk", icon: "tours" },
  { name: "Card Payment", icon: "card" },
  { name: "Dedicated Workspace", icon: "workspace" },
  { name: "Photography Assistance", icon: "photo" },
  { name: "Lush Palace Gardens", icon: "garden" },
  { name: "Private Boat Transfers", icon: "golf" }
];

const royalRooms = [
  { name: "Premier Lakeview Room", description: "Elegantly appointed room with hand-crafted Mewar furnishings and sweeping views of Lake Pichola.", image: "/hotels-cruises/standard-room.jpg", features: ["King Bed", "Lake Pichola View", "Up to 2 Guests"] },
  { name: "Heritage Courtyard Room", description: "Spacious royal suite opening to serene reflective pools and blooming palace gardens.", image: "/hotels-cruises/superior-room.jpg", features: ["King Bed", "Palace Garden View", "Up to 2 Guests"] },
  { name: "Luxury Suite with Semi-Private Pool", description: "Refined palatial suite with direct access to an azure semi-private swimming pool.", image: "/hotels-cruises/deluxe-room.jpg", features: ["King Bed", "Pool & Lake View", "Up to 3 Guests"] },
  { name: "Royal Maharana Suite", description: "Magnificent suite with private dining terrace, ornate marble fireplace, and panoramic City Palace vistas.", image: "/hotels-cruises/suite-room.jpg", features: ["King Bed", "360 Panoramic View", "Up to 4 Guests"] }
];

export const mockHotels: Hotel[] = [
  {
    id: "the-oberoi-udaivilas",
    slug: "the-oberoi-udaivilas",
    name: "The Oberoi Udaivilas, Udaipur",
    stars: 5,
    location: "Haridas Ji Ki Magri, Udaipur, Rajasthan",
    address: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
    tagline: "Palatial Splendour on the Shores of Lake Pichola",
    description: "Located on the banks of Lake Pichola, The Oberoi Udaivilas stands on the 200-year-old hunting grounds of the Maharana of Mewar. Spread over 50 acres, which includes a twenty-acre wildlife sanctuary with deer and wild boar, the resort offers uninterrupted views across the lake to the City Palace. Designed in the traditional style of a Rajasthani royal palace with grand domes, hand-painted frescoes, reflection pools, and manicured courtyards, it consistently ranks among the finest luxury resorts in the world.",
    quote: "Where the majesty of Mewar meets world-renowned Oberoi hospitality.",
    heroImage: "/hotels-cruises/leela.jpg",
    gallery: ["/hotels-cruises/leela.jpg", "/destinations/lake-pichola-sunset.jpg", "/hotels-cruises/suite-room.jpg"],
    propertyType: "Luxury Palace Resort",
    idealFor: "Couples, Honeymooners, Luxury Travelers & Celebrations",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: royalRooms,
    dining: [
      { name: "Suryamahal", description: "Daytime dining under a hand-painted sky dome serving Western and Indian delicacies.", image: "/cruise/main-dining.png" },
      { name: "Udaimahal", description: "Fine dining restaurant offering traditional Indian cuisine accompanied by live music.", image: "/cruise/specialty-dining.png" },
      { name: "Chandni", description: "Open-air dining terrace with views of the City Palace and Lake Pichola.", image: "/images/cafe.jpeg" },
    ],
    nearbyPlaces: [
      { name: "Lake Pichola", distance: "0.1 km", image: "/destinations/lake-pichola-sunset.jpg" },
      { name: "City Palace", distance: "2.5 km", image: "/destinations/city-palace-complex.jpg" },
      { name: "Jagdish Temple", distance: "2.8 km", image: "/images/travel-enquiry.jpg" },
    ],
    faqs: [
      { question: "What is the best time to visit The Oberoi Udaivilas?", answer: "The winter months from October to March offer pleasant temperatures and clear sunny days ideal for lake views and courtyard relaxing." },
      { question: "Are private shikara boat rides available from the resort?", answer: "Yes, guests can enjoy sunset boat rides on Lake Pichola departing directly from the resort jetty." },
      { question: "Does the resort cater to destination weddings and special celebrations?", answer: "Yes, the palace courtyards and lakeside lawns provide magnificent settings for intimate celebrations and special events." },
      { question: "How far is the resort from Udaipur Airport (UDR)?", answer: "Maharana Pratap Airport (Udaipur) is approximately 27 km away, typically a 45-minute drive." }
    ],
    rating: 4.9,
    reviewsCount: 1850
  },
  {
    id: "taj-lake-palace",
    slug: "taj-lake-palace",
    name: "Taj Lake Palace, Udaipur",
    stars: 5,
    location: "Lake Pichola, Udaipur, Rajasthan",
    address: "P.O. Box No. 5, Lake Pichola, Udaipur, Rajasthan 313001",
    tagline: "The Floating White Marble Marvel of Lake Pichola",
    description: "Built in 1746 by Maharana Jagat Singh II as a royal pleasure palace named Jag Niwas, Taj Lake Palace rises gracefully from the turquoise waters of Lake Pichola. Accessible exclusively by private hotel boat, this white marble wonder features ornate jharokhas, tranquil lily ponds, frescoed royal chambers, and panoramic 360-degree vistas of Udaipur's historic skyline. An iconic filming location for James Bond's 'Octopussy', it is universally celebrated as one of the most romantic hotels in the world.",
    quote: "A floating vision of pure white marble on shimmering waters.",
    heroImage: "/hotels-cruises/taj.jpg",
    gallery: ["/hotels-cruises/taj.jpg", "/destinations/lake-pichola-sunset.jpg", "/hotels-cruises/deluxe-room.jpg"],
    propertyType: "Heritage Island Palace",
    idealFor: "Romance, Honeymooners, Heritage Connoisseurs & Photography",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: royalRooms,
    dining: [
      { name: "Jharokha", description: "All-day dining cafe overlooking Lake Pichola with arches and scallop frames.", image: "/cruise/main-dining.png" },
      { name: "Neel Kamal", description: "Authentic Mewari and royal Indian cuisine prepared using royal recipes.", image: "/cruise/specialty-dining.png" },
      { name: "Bhairo", description: "Rooftop European fine dining under the starlit Udaipur night sky.", image: "/cruise/specialty-dining.png" },
    ],
    nearbyPlaces: [
      { name: "City Palace Jetty", distance: "0.5 km (by boat)", image: "/destinations/city-palace-complex.jpg" },
      { name: "Jag Mandir Island", distance: "1.0 km (by boat)", image: "/destinations/lake-pichola-sunset.jpg" },
      { name: "Bagore Ki Haveli", distance: "0.8 km (by boat)", image: "/packages/weekend.jpg" },
    ],
    faqs: [
      { question: "How do guests reach the Taj Lake Palace?", answer: "Guests arrive at the private jetty on the mainland and are ferried across Lake Pichola on the hotel's royal private speedboats." },
      { question: "Is the Taj Lake Palace open to outside non-resident visitors?", answer: "To preserve tranquility and privacy for staying guests, access to the island palace is reserved strictly for hotel guests." },
      { question: "What dining experiences are available for romantic occasions?", answer: "The palace offers private pontoon boat dining and curated meals in royal marble jharokhas overlooking the illuminated City Palace." }
    ],
    rating: 4.9,
    reviewsCount: 2300
  },
  {
    id: "the-leela-palace",
    slug: "the-leela-palace",
    name: "The Leela Palace Udaipur",
    stars: 5,
    location: "Lake Pichola, Udaipur, Rajasthan",
    address: "Lake Pichola, P.O. Box No. 125, Udaipur, Rajasthan 313001",
    tagline: "Contemporary Royalty Overlooking Lake Pichola & Aravalis",
    description: "Nestled on the serene banks of Lake Pichola, The Leela Palace Udaipur blends traditional Mewari royal architecture with ultra-modern luxury. Each of the palace's 80 rooms and suites provides breathtaking views of heritage landmarks, the shimmering lake, and the rolling Aravali hills. Guests arrive by decorative boats across the water and are welcomed with rose petal showers and royal trumpets. Featuring the award-winning Sheesh Mahal lakeside restaurant and India's only tented luxury ESPA spa.",
    quote: "Timeless Mewar elegance on the water's edge.",
    heroImage: "/hotels-cruises/raddison.jpg",
    gallery: ["/hotels-cruises/raddison.jpg", "/hotels-cruises/suite-room.jpg", "/destinations/lake-pichola-sunset.jpg"],
    propertyType: "Luxury Lake Palace Hotel",
    idealFor: "Luxury Seekers, Couples, Families & Wellness Getaways",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: royalRooms,
    dining: [
      { name: "Sheesh Mahal", description: "Two-level open-air fine dining restaurant overlooking the illuminated palace across the lake.", image: "/cruise/specialty-dining.png" },
      { name: "The Dining Room", description: "Eclectic all-day dining with a walk-in wine cellar and views of tranquil courtyards.", image: "/cruise/main-dining.png" },
      { name: "Library Bar", description: "Intimate lounge with vintage artwork, first editions, and premium spirits.", image: "/cruise/bars-lounges.jpg" },
    ],
    nearbyPlaces: [
      { name: "Ambrai Ghat", distance: "0.8 km", image: "/destinations/lake-pichola-sunset.jpg" },
      { name: "City Palace", distance: "2.0 km", image: "/destinations/city-palace-complex.jpg" },
      { name: "Sajjangarh Monsoon Palace", distance: "7.0 km", image: "/destinations/sajjangarh-monsoon-palace.jpg" },
    ],
    faqs: [
      { question: "Does The Leela Palace offer arrival by boat?", answer: "Yes, guests enjoy a signature ceremonial boat arrival across Lake Pichola from the private mainland jetty." },
      { question: "Is Sheesh Mahal open for dinner to non-residents?", answer: "Yes, reservations in advance are recommended for non-resident guests wishing to dine at Sheesh Mahal." },
    ],
    rating: 4.8,
    reviewsCount: 1600
  },
  {
    id: "radisson-blu",
    slug: "radisson-blu",
    name: "Radisson Blu Udaipur Palace Resort & Spa",
    stars: 5,
    location: "Mallatalai, Fateh Sagar, Udaipur, Rajasthan",
    address: "B-1, Ambamata Scheme, Opp. Aravali Hospital, Mallatalai, Udaipur, Rajasthan 313001",
    tagline: "Regal Elegance Overlooking Fateh Sagar Lake",
    description: "Perched gracefully near the shores of Fateh Sagar Lake, Radisson Blu Udaipur Palace Resort & Spa offers a harmonious blend of royal Rajasthani architecture and modern international hospitality. Featuring sprawling two-tier outdoor swimming pools, palace-style domed pavilions, world-class banquet gardens, and wellness facilities, it is an outstanding property for romantic getaways, family holidays, and grand destination events.",
    quote: "A palace sanctuary of comfort and hospitality in Udaipur.",
    heroImage: "/hotels-cruises/stregis.jpg",
    gallery: ["/hotels-cruises/stregis.jpg", "/destinations/fateh-sagar-lake.jpg", "/hotels-cruises/superior-room.jpg"],
    propertyType: "Palace Resort & Spa",
    idealFor: "Families, Couples, Destination Weddings & Business Retreats",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: standardAmenities,
    rooms: royalRooms,
    dining: [
      { name: "Aravali Roof Top", description: "Rooftop dining with panoramic views of Fateh Sagar Lake and the Aravali hills.", image: "/cruise/specialty-dining.png" },
      { name: "Neel Mahal", description: "Multi-cuisine restaurant serving Indian, Continental, and Oriental delicacies.", image: "/cruise/main-dining.png" },
      { name: "Wok & Burn", description: "Asian specialty cuisine and sizzling culinary presentations.", image: "/images/cafe.jpeg" },
    ],
    nearbyPlaces: [
      { name: "Fateh Sagar Lake", distance: "0.5 km", image: "/destinations/fateh-sagar-lake.jpg" },
      { name: "Sahelion Ki Bari", distance: "2.5 km", image: "/packages/family.jpg" },
      { name: "Sajjangarh Monsoon Palace", distance: "5.0 km", image: "/destinations/sajjangarh-monsoon-palace.jpg" },
    ],
    faqs: [
      { question: "Does the hotel have lake-facing rooms?", answer: "Yes, Superior and Suite categories offer panoramic views of Fateh Sagar Lake and the surrounding hills." },
      { question: "Is Radisson Blu suitable for destination weddings?", answer: "Yes, it boasts some of the largest pillarless ballrooms and outdoor royal banquet lawns in Udaipur." },
    ],
    rating: 4.6,
    reviewsCount: 1100
  }
];

export function getHotels(): Hotel[] {
  return mockHotels;
}

export function getHotelBySlug(slug: string): Hotel | undefined {
  const direct = mockHotels.find(h => h.slug === slug || h.id === slug);
  if (direct) return direct;

  // Fallback aliases for legacy URLs
  const aliasMap: Record<string, string> = {
    "taj-exotica": "taj-lake-palace",
    "st-regis": "the-oberoi-udaivilas",
    "the-leela-palace": "the-leela-palace",
    "radisson-blu": "radisson-blu",
  };
  const mapped = aliasMap[slug.toLowerCase()];
  if (mapped) return mockHotels.find(h => h.slug === mapped);

  return undefined;
}

export function getSimilarHotels(slug: string): Hotel[] {
  return mockHotels.filter(h => h.slug !== slug).slice(0, 4);
}
