import Image from "next/image";
import Link from "next/link";
import { Building2, Star, Bed, MapPin } from "lucide-react";

export default function HotelsAndCruises() {
  const hotels = [
    { 
      name: "The Oberoi Udaivilas", 
      location: "Haridas Ji Ki Magri, Udaipur", 
      img: "/hotels-cruises/leela.jpg", 
      slug: "the-oberoi-udaivilas",
      type: "Luxury Palace Resort"
    },
    { 
      name: "Taj Lake Palace", 
      location: "Lake Pichola, Udaipur", 
      img: "/hotels-cruises/taj.jpg", 
      slug: "taj-lake-palace",
      type: "Heritage Island Palace"
    },
    { 
      name: "The Leela Palace", 
      location: "Lake Pichola, Udaipur", 
      img: "/hotels-cruises/raddison.jpg", 
      slug: "the-leela-palace",
      type: "Luxury Lake Palace Hotel"
    },
    { 
      name: "Radisson Blu Resort", 
      location: "Fateh Sagar, Udaipur", 
      img: "/hotels-cruises/stregis.jpg", 
      slug: "radisson-blu",
      type: "Palace Resort & Spa"
    },
    { 
      name: "The Ananta Udaipur", 
      location: "Kodiyat Road, Bujhda, Udaipur", 
      img: "/hotels-cruises/ananta-resort.jpg", 
      slug: "the-ananta-udaipur",
      type: "Luxury Hill Resort & Spa"
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-border-color">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            FEATURED HOTELS & RESORTS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Comprehensive travel information on Udaipur&apos;s world-famous luxury palace resorts, hill sanctuaries, and heritage stays
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs font-semibold text-text-secondary">
            <span className="flex items-center gap-1.5 text-primary"><Star className="w-4 h-4 fill-amber-400 text-amber-400"/> Palace Resorts</span>
            <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-primary"/> Heritage Havelis</span>
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-primary"/> Hilltop Luxury Stays</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {hotels.map((hotel, i) => (
            <Link 
              href={`/hotels/${hotel.slug}`} 
              key={i} 
              className="group rounded-xl overflow-hidden border border-border-color bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={hotel.img} 
                  alt={hotel.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-primary font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                  {hotel.type}
                </span>
              </div>
              <div className="p-3.5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-primary text-sm group-hover:text-accent transition-colors leading-snug">
                    {hotel.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary mt-1 flex items-center gap-1 line-clamp-1">
                    <MapPin className="w-3 h-3 text-accent shrink-0" />
                    <span>{hotel.location}</span>
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-border-color/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/hotels" 
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm"
          >
            EXPLORE ALL HOTELS & RESORTS
          </Link>
        </div>
      </div>
    </section>
  );
}
