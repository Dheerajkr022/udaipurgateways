export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: "Domestic" | "International";
  category: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  highlights: string[];
  thingsToDo: { title: string; desc: string; img: string }[];
  attractions: { title: string; desc: string; img: string }[];
  bestTime: string;
  idealDuration: string;
  bestFor: string;
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export const mockDestinations: Destination[] = [
  {
    id: "lake-pichola",
    slug: "lake-pichola",
    name: "Lake Pichola & Ghats",
    country: "Udaipur, Rajasthan",
    region: "Domestic",
    category: "Lakes & Heritage",
    shortDescription: "The picturesque heart of Udaipur featuring iconic island palaces, historic ghats, and royal sunset views.",
    description: "Lake Pichola is an artificial fresh water lake created in the year 1362 AD, named after the nearby Picholi village. It is one of several contiguous lakes in the city of Udaipur developed over the centuries for irrigation and drinking water. Overlooking its serene waters are the grand City Palace complex, Mohan Mandir, Arsi Vilas, Gangaur Ghat, Ambrai Ghat, and the world-famous white marble island palaces of Jag Niwas (Lake Palace) and Jag Mandir.",
    heroImage: "/destinations/lake-pichola-sunset.jpg",
    bestTime: "September - March",
    idealDuration: "1-2 Days",
    bestFor: "Couples, Families, Photographers & Heritage Lovers",
    highlights: ["Sunset Boat Cruises", "Jag Mandir Island Palace", "Historic Gangaur & Ambrai Ghats", "Lakeside Haveli Cafes", "Bagore Ki Haveli Folk Dance"],
    thingsToDo: [
      { title: "Sunset Boat Cruise", desc: "Sail across serene waters with panoramic views of the illuminated City Palace and Jag Mandir.", img: "/cruise/royal.webp" },
      { title: "Ghat Exploration & Aarti", desc: "Witness traditional evening aarti and cultural life at Gangaur Ghat and Ambrai Ghat.", img: "/packages/package-weekend-lake-city.jpg" },
    ],
    attractions: [
      { title: "Jag Mandir Island Palace", desc: "17th-century island palace where Prince Khurram (Emperor Shah Jahan) took refuge.", img: "/cruise/cordella.jpg" },
      { title: "Bagore Ki Haveli", desc: "18th-century royal haveli featuring the vibrant Dharohar folk dance show each evening.", img: "/packages/package-weekend-lake-city.jpg" },
      { title: "Gangaur Ghat", desc: "Iconic waterfront steps in the old city known for cultural celebrations and scenic photography.", img: "/destinations/lake-pichola-sunset.jpg" },
    ],
    gallery: ["/destinations/lake-pichola-sunset.jpg", "/destinations/city-palace-complex.jpg", "/cruise/cordella.jpg", "/packages/package-royal-honeymoon-udaipur.jpg", "/packages/package-weekend-lake-city.jpg"],
    faqs: [
      { question: "What is the best time of day to take a boat cruise on Lake Pichola?", answer: "Late afternoon around 4:30 PM to 6:00 PM is best to experience golden hour and watch the sun set behind the Aravali hills." },
      { question: "Are private boats available on Lake Pichola?", answer: "Yes, both shared and private motor boats operate from Rameshwar Ghat inside the City Palace jetty." },
    ]
  },
  {
    id: "city-palace",
    slug: "city-palace",
    name: "City Palace Complex",
    country: "Udaipur, Rajasthan",
    region: "Domestic",
    category: "Royal Mewar Architecture",
    shortDescription: "Rajasthan's largest palace complex, showcasing four centuries of Mewar royal heritage and architecture.",
    description: "Perched atop a crest overlooking Lake Pichola, the City Palace of Udaipur was built over nearly 400 years with contributions from several rulers of the Mewar dynasty, beginning with Maharana Udai Singh II in 1559. The complex features a series of courtyards, pavilions, terraces, corridors, and hanging gardens blending Rajasthani, Mughal, and European architectural elements.",
    heroImage: "/destinations/city-palace-complex.jpg",
    bestTime: "October - March",
    idealDuration: "3-5 Hours",
    bestFor: "History Enthusiasts, Architecture Admirers & Families",
    highlights: ["Mor Chowk Glass Mosaics", "Zenana Mahal", "Crystal Gallery", "Badi Mahal Courtyard", "Panoramic Pichola Views"],
    thingsToDo: [
      { title: "Palace Museum Audio Tour", desc: "Walk through royal chambers, armoury exhibits, and coronation courtyards with guided commentary.", img: "/destinations/city-palace-complex.jpg" },
      { title: "Mewar Sound & Light Show", desc: "Enjoy the evening theatrical presentation narrating the glorious history of the House of Mewar.", img: "/images/travel-enquiry.jpg" },
    ],
    attractions: [
      { title: "Mor Chowk (Peacock Courtyard)", desc: "Exquisite glass inlay mosaics depicting dancing peacocks crafted with vibrant glass.", img: "/destinations/city-palace-complex.jpg" },
      { title: "Jagdish Temple", desc: "Imposing 1651 Indo-Aryan temple dedicated to Lord Vishnu right outside the palace gate.", img: "/images/travel-enquiry.jpg" },
      { title: "Crystal Gallery", desc: "World's largest private collection of rare 19th-century F&C Osler crystal furniture.", img: "/hotels-cruises/deluxe-room.jpg" },
    ],
    gallery: ["/destinations/city-palace-complex.jpg", "/destinations/lake-pichola-sunset.jpg", "/images/travel-enquiry.jpg", "/hotels-cruises/standard-room.jpg"],
    faqs: [
      { question: "How much time is required to tour the City Palace?", answer: "At least 2 to 3 hours are recommended to properly explore the museum sections and courtyards." },
      { question: "Is the City Palace open all days?", answer: "Yes, the City Palace Museum is open daily from 9:00 AM to 5:30 PM." },
    ]
  },
  {
    id: "fateh-sagar",
    slug: "fateh-sagar",
    name: "Fateh Sagar Lake & Gardens",
    country: "Udaipur, Rajasthan",
    region: "Domestic",
    category: "Lakeside & Promenades",
    shortDescription: "A serene lake framed by the Aravalis, popular for its Rani Road promenade, island gardens, and cafes.",
    description: "Fateh Sagar Lake is a sparkling artificial lake built to the north-west of Udaipur by Maharana Jai Singh in 1687 and later renovated by Maharana Fateh Singh. It houses three small islands: Nehru Park with a boat-shaped restaurant, a public park with water-jet fountains, and the Udaipur Solar Observatory—one of the premier solar observing stations in Asia.",
    heroImage: "/destinations/fateh-sagar-lake.jpg",
    bestTime: "September - March",
    idealDuration: "Half Day",
    bestFor: "Walkers, Families, Foodies & Couples",
    highlights: ["Nehru Park Island", "Rani Road Scenic Drive", "Udaipur Solar Observatory", "Mumbai Market Food Stalls", "Speedboat Rides"],
    thingsToDo: [
      { title: "Rani Road Sunset Walk", desc: "Stroll or bicycle along the tranquil shoreline road surrounded by the Aravali hills.", img: "/destinations/fateh-sagar-lake.jpg" },
      { title: "Speedboat & Solar Boat Rides", desc: "Exciting boat rides connecting the mainland to Nehru Park island garden.", img: "/cruise/celebrity.jpg" },
    ],
    attractions: [
      { title: "Sahelion Ki Bari", desc: "Historic royal garden with lotus pools, marble pavilions, and rain-fountains built for royal maidens.", img: "/packages/package-mewar-family-heritage.jpg" },
      { title: "Nehru Park Island", desc: "Landscaped island park in the center of Fateh Sagar with floral gardens and fountains.", img: "/destinations/fateh-sagar-lake.jpg" },
    ],
    gallery: ["/destinations/fateh-sagar-lake.jpg", "/cruise/celebrity.jpg", "/packages/package-mewar-family-heritage.jpg", "/images/cafe.jpeg"],
    faqs: [
      { question: "Can tourists visit the Udaipur Solar Observatory?", answer: "The Solar Observatory on the island is a research facility and generally requires special academic permission, but can be viewed from boat tours." },
    ]
  },
  {
    id: "sajjangarh",
    slug: "sajjangarh",
    name: "Sajjangarh (Monsoon Palace)",
    country: "Udaipur, Rajasthan",
    region: "Domestic",
    category: "Hilltop Palaces & Sunsets",
    shortDescription: "A majestic hilltop fortress palace offering 360-degree panoramic views of Udaipur's lakes and Aravali valleys.",
    description: "Built in 1884 by Maharana Sajjan Singh, the Monsoon Palace sits dramatically atop the Bansdara peak of the Aravali range at an elevation of 944 metres above sea level. Originally planned as a nine-storey astronomical centre and monsoon retreat, it offers sweeping bird's-eye views of Lake Pichola, Fateh Sagar, the City Palace, and surrounding countryside.",
    heroImage: "/destinations/sajjangarh-monsoon-palace.jpg",
    bestTime: "July - March (Magical during Monsoons)",
    idealDuration: "2-3 Hours",
    bestFor: "Sunset Chasers, Trekkers & Photographers",
    highlights: ["Spectacular Aravali Sunsets", "Panoramic Lake Views", "Sajjangarh Biological Park", "Winding Mountain Drive", "Night Illumination"],
    thingsToDo: [
      { title: "Sunset Viewing", desc: "Watch the golden sun dip behind the Aravali hills from the palace terrace.", img: "/images/cta-mountain.jpg" },
      { title: "Biological Park Safari", desc: "Explore the wildlife park at the foot of the hill featuring leopards, tigers, and native deer.", img: "/packages/package-aravali-adventure-trek.jpg" },
    ],
    attractions: [
      { title: "Bansdara Peak Viewpoint", desc: "Highest elevation viewpoint overlooking the entire Udaipur basin and all major lakes.", img: "/destinations/sajjangarh-monsoon-palace.jpg" },
      { title: "Sajjangarh Wildlife Sanctuary", desc: "Dense deciduous reserve flanking the hill, habitat for wild boar, hyenas, and migratory birds.", img: "/packages/package-aravali-adventure-trek.jpg" },
    ],
    gallery: ["/destinations/sajjangarh-monsoon-palace.jpg", "/images/cta-mountain.jpg", "/packages/package-aravali-adventure-trek.jpg"],
    faqs: [
      { question: "How do I reach the top of Sajjangarh?", answer: "Authorized green electric shuttle vehicles and taxis operate from the main gate at the foot of the hill." },
    ]
  },
  {
    id: "kumbhalgarh",
    slug: "kumbhalgarh",
    name: "Kumbhalgarh Fort",
    country: "Rajasthan (Nearby Excursion)",
    region: "Domestic",
    category: "Aravali Fortresses & Heritage",
    shortDescription: "UNESCO World Heritage fortress featuring the world's second-longest continuous wall (36 km).",
    description: "Located about 84 km north of Udaipur, Kumbhalgarh Fort was built during the 15th century by Rana Kumbha. Perched on a hill 1,100 metres above sea level, its massive perimeter wall stretches over 36 kilometres, earning it the moniker 'The Great Wall of India'. It contains over 360 ancient temples and the Badal Mahal palace at its summit.",
    heroImage: "/destinations/kumbhalgarh-fort-wall.jpg",
    bestTime: "October - March",
    idealDuration: "Full Day Excursion",
    bestFor: "History Buffs, Hikers & Heritage Explorers",
    highlights: ["36-km Great Wall of India", "Badal Mahal Cloud Palace", "Sound & Light Evening Show", "Kumbhalgarh Wildlife Sanctuary", "Over 360 Temples"],
    thingsToDo: [
      { title: "Wall Trekking", desc: "Walk along segments of the massive stone ramparts overlooking the Mewar hills.", img: "/packages/package-mewar-forts-excursion.jpg" },
      { title: "Evening Light Show", desc: "Experience the history of Rana Kumbha illuminated with dramatic sound and lights.", img: "/destinations/kumbhalgarh-fort-wall.jpg" },
    ],
    attractions: [
      { title: "Badal Mahal", desc: "Highest palace in the fort featuring pastel 19th-century murals and breezy courtyards.", img: "/destinations/kumbhalgarh-fort-wall.jpg" },
      { title: "Vedi Temple", desc: "Triple-storey Jain temple near the Hanuman Pol gate.", img: "/destinations/ranakpur-jain-temple.jpg" },
    ],
    gallery: ["/destinations/kumbhalgarh-fort-wall.jpg", "/packages/package-mewar-forts-excursion.jpg"],
    faqs: [
      { question: "How far is Kumbhalgarh from Udaipur?", answer: "It is approximately 84 km from Udaipur and takes about 2 to 2.5 hours by car." },
    ]
  },
  {
    id: "ranakpur",
    slug: "ranakpur",
    name: "Ranakpur Jain Temple",
    country: "Rajasthan (Nearby Excursion)",
    region: "Domestic",
    category: "Marble Architectural Marvels",
    shortDescription: "A breathtaking 15th-century marble temple renowned for its 1,444 uniquely carved pillars.",
    description: "Nestled in a lush valley of the Aravali range 90 km from Udaipur, the Ranakpur Jain Temple (Chaturmukha Dharana Vihara) is considered among the most spectacular marble architectural accomplishments in India. Dedicated to Lord Adinath, the temple is supported by 1,444 exquisitely carved marble pillars, no two of which are identical.",
    heroImage: "/destinations/ranakpur-jain-temple.jpg",
    bestTime: "October - March",
    idealDuration: "Half to Full Day",
    bestFor: "Culture Lovers, Art Enthusiasts & Spiritual Travelers",
    highlights: ["1,444 Unique Carved Pillars", "White Marble Domes", "Chaturmukha Sanctum", "Peaceful Aravali Setting", "Vegetarian Dining Hall"],
    thingsToDo: [
      { title: "Architectural Exploration", desc: "Admire the ceiling mandapas, toranas, and intricate carvings that play with light throughout the day.", img: "/destinations/ranakpur-jain-temple.jpg" },
    ],
    attractions: [
      { title: "Chaumukha Temple", desc: "The main four-faced shrine dedicated to the first Tirthankara, Lord Adinath.", img: "/packages/package-sacred-temples-ranakpur.jpg" },
    ],
    gallery: ["/destinations/ranakpur-jain-temple.jpg", "/packages/package-sacred-temples-ranakpur.jpg"],
    faqs: [
      { question: "Can Ranakpur and Kumbhalgarh be visited together on a day trip?", answer: "Yes, many travelers combine Kumbhalgarh Fort and Ranakpur into a single day circuit from Udaipur." },
    ]
  },
  {
    id: "chittorgarh",
    slug: "chittorgarh",
    name: "Chittorgarh Fort",
    country: "Rajasthan (Nearby Excursion)",
    region: "Domestic",
    category: "Epic Mewar History",
    shortDescription: "India's largest fort complex, representing centuries of Mewar chivalry, valor, and legendary sacrifice.",
    description: "Spreading over 700 acres atop a 180-metre high hill, Chittorgarh Fort is the ancestral capital of Mewar, located 115 km east of Udaipur. Famous for stories of Maharana Pratap, Rani Padmini, and Meera Bai, the fort is home to majestic towers, stepwells, reservoirs, and historic palaces including Vijay Stambha (Tower of Victory) and Kirti Stambha.",
    heroImage: "/destinations/chittorgarh-fort.jpg",
    bestTime: "October - March",
    idealDuration: "Full Day Excursion",
    bestFor: "History Buffs, Photographers & Pilgrims",
    highlights: ["Vijay Stambha (Tower of Victory)", "Kirti Stambha", "Rani Padmini Palace", "Gaumukh Water Reservoir", "Meera Temple"],
    thingsToDo: [
      { title: "Heritage Rampart Tour", desc: "Drive along the 13-km perimeter road exploring ancient gates, bastions, and battlements.", img: "/destinations/chittorgarh-fort.jpg" },
    ],
    attractions: [
      { title: "Vijay Stambha", desc: "Nine-storey victory tower built in 1448 by Rana Kumbha to commemorate victory over Mahmud Khilji.", img: "/destinations/chittorgarh-fort.jpg" },
      { title: "Gaumukh Reservoir", desc: "A sacred cliffside spring gushing from a natural cow-mouth rock formation into a deep pool.", img: "/destinations/lake-pichola-sunset.jpg" },
    ],
    gallery: ["/destinations/chittorgarh-fort.jpg", "/destinations/lake-pichola-sunset.jpg"],
    faqs: [
      { question: "How far is Chittorgarh from Udaipur?", answer: "Chittorgarh is about 115 km from Udaipur and is easily accessible via the 4-lane highway in around 2 hours." },
    ]
  },
  {
    id: "mount-abu",
    slug: "mount-abu",
    name: "Mount Abu & Dilwara",
    country: "Rajasthan (Nearby Excursion)",
    region: "Domestic",
    category: "Scenic Hill Station",
    shortDescription: "Rajasthan's only hill station, famous for the tranquil Nakki Lake, cool mountain air, and Dilwara Temples.",
    description: "Situated 160 km from Udaipur near the Gujarat border, Mount Abu is a lush plateau in the Aravali range surrounded by pine forests, serene lakes, and scenic rock formations. It is internationally celebrated for the Dilwara Temples—an extraordinary complex of 11th to 13th-century marble craftsmanship.",
    heroImage: "/destinations/mount-abu-nakki-lake.jpg",
    bestTime: "All Year Round (Pleasant in Summer)",
    idealDuration: "1-2 Days",
    bestFor: "Families, Couples, Pilgrims & Nature Seekers",
    highlights: ["Dilwara Marble Temples", "Nakki Lake Boating", "Guru Shikhar Peak", "Sunset Point", "Pleasant Mountain Climate"],
    thingsToDo: [
      { title: "Nakki Lake Boating", desc: "Pedal and motor boats amidst picturesque hillocks and Toad Rock.", img: "/destinations/mount-abu-nakki-lake.jpg" },
    ],
    attractions: [
      { title: "Dilwara Temples", desc: "Five legendary Jain temples famed for some of the world's most delicate marble filigree carvings.", img: "/destinations/ranakpur-jain-temple.jpg" },
    ],
    gallery: ["/destinations/mount-abu-nakki-lake.jpg", "/destinations/ranakpur-jain-temple.jpg"],
    faqs: [
      { question: "Is Mount Abu an easy excursion from Udaipur?", answer: "Yes, it takes approximately 3 hours by road through scenic Aravali mountain highways." },
    ]
  },
];

export function getDestinations(): Destination[] {
  return mockDestinations;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  const direct = mockDestinations.find(d => d.slug === slug || d.id === slug);
  if (direct) return direct;

  // Fallback aliases so old URLs gracefully show a relevant Udaipur destination
  const aliasMap: Record<string, string> = {
    "goa": "lake-pichola",
    "manali": "city-palace",
    "kerala": "fateh-sagar",
    "rajasthan": "sajjangarh",
    "dubai": "kumbhalgarh",
    "bali": "ranakpur",
    "singapore": "chittorgarh",
    "new-zealand": "mount-abu",
  };
  const mapped = aliasMap[slug.toLowerCase()];
  if (mapped) return mockDestinations.find(d => d.slug === mapped);

  return undefined;
}
