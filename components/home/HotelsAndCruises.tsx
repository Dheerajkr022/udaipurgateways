import Image from "next/image";
import Link from "next/link";
import { Building2, Anchor, Star, Bed } from "lucide-react";

export default function HotelsAndCruises() {
  const hotels = [
    { name: "The Oberoi Udaivilas", location: "Haridas Ji Ki Magri, Udaipur", img: "/hotels-cruises/leela.jpg", slug: "the-oberoi-udaivilas" },
    { name: "Taj Lake Palace", location: "Lake Pichola, Udaipur", img: "/hotels-cruises/taj.jpg", slug: "taj-lake-palace" },
    { name: "The Leela Palace", location: "Lake Pichola, Udaipur", img: "/hotels-cruises/raddison.jpg", slug: "the-leela-palace" },
    { name: "Radisson Blu Resort", location: "Fateh Sagar, Udaipur", img: "/hotels-cruises/stregis.jpg", slug: "radisson-blu" },
  ];

  const cruises = [
    { name: "Lake Pichola Royal Cruise", type: "Sunset Lake Cruise", img: "/cruise/royal.webp", slug: "royal-caribbean" },
    { name: "Jag Mandir Island Ride", type: "Heritage Boat Ride", img: "/cruise/cordella.jpg", slug: "resorts-world-one" },
    { name: "Fateh Sagar Solar Boat", type: "Eco Lake Cruise", img: "/cruise/celebrity.jpg", slug: "cordelia-cruises" },
    { name: "Jaisamand Lake Safari", type: "Island Lake Safari", img: "/cruise/norwegian.avif", slug: "anthem-of-the-seas" },
  ];

  return (
    <section className="py-16 bg-white border-t border-border-color">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Hotels Column */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-3">HOTELS & PALACES</h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto mb-4">
              Comprehensive information on Udaipur's world-famous luxury palace resorts and heritage stays
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-text-secondary">
              <span className="flex items-center gap-1 text-primary"><Star className="w-4 h-4"/> Palace Resorts</span>
              <span className="flex items-center gap-1"><Bed className="w-4 h-4"/> Heritage Havelis</span>
              <span className="flex items-center gap-1"><Building2 className="w-4 h-4"/> Lakefront Stays</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {hotels.map((hotel, i) => (
              <Link href={`/hotels/${hotel.slug}`} key={i} className="block rounded-xl overflow-hidden border border-border-color group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{hotel.name}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{hotel.location}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/hotels" className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-xs inline-block hover:bg-primary-light transition-colors">
              EXPLORE HOTELS & RESORTS
            </Link>
          </div>
        </div>

        {/* Cruises Column */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-3">LAKE CRUISES & BOATING</h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto mb-4">
              Scenic lake boat tours, sunset charters, and island palace rides across Udaipur's historic waters
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-text-secondary">
              <span className="flex items-center gap-1 text-primary"><Anchor className="w-4 h-4"/> Sunset Cruises</span>
              <span className="flex items-center gap-1"><Anchor className="w-4 h-4"/> Solar Boats</span>
              <span className="flex items-center gap-1"><Anchor className="w-4 h-4"/> Island Palaces</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cruises.map((cruise, i) => (
              <Link href={`/cruises/${cruise.slug}`} key={i} className="block rounded-xl overflow-hidden border border-border-color group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <Image src={cruise.img} alt={cruise.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-primary text-sm group-hover:text-accent transition-colors">{cruise.name}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{cruise.type}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/cruises" className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-xs inline-block hover:bg-primary-light transition-colors">
              EXPLORE LAKE CRUISES
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
