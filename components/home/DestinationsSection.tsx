"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DestinationsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "excursions">("all");

  const destinations = [
    { name: "Lake Pichola & Ghats", type: "Lakes & Heritage", img: "/destinations/lake-pichola.jpg", slug: "lake-pichola", category: "city" },
    { name: "City Palace Complex", type: "Royal Mewar Architecture", img: "/destinations/city-palace.jpg", slug: "city-palace", category: "city" },
    { name: "Fateh Sagar Lake", type: "Lakeside & Gardens", img: "/destinations/fateh-sagar.jpg", slug: "fateh-sagar", category: "city" },
    { name: "Sajjangarh Monsoon Palace", type: "Hilltop Palaces & Sunsets", img: "/destinations/sajjangarh.jpg", slug: "sajjangarh", category: "city" },
    { name: "Kumbhalgarh Fort", type: "Great Wall of India", img: "/destinations/kumbhalgarh.jpg", slug: "kumbhalgarh", category: "excursions" },
    { name: "Ranakpur Jain Temple", type: "Marble Architectural Marvels", img: "/destinations/ranakpur.jpg", slug: "ranakpur", category: "excursions" },
    { name: "Chittorgarh Fort", type: "Epic Mewar History", img: "/destinations/chittorgarh.jpg", slug: "chittorgarh", category: "excursions" },
    { name: "Mount Abu Hill Station", type: "Scenic Hill Station", img: "/destinations/mount-abu.jpg", slug: "mount-abu", category: "excursions" },
  ];

  const filteredDestinations = activeTab === "all" 
    ? destinations 
    : destinations.filter(d => d.category === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            POPULAR UDAIPUR ATTRACTIONS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Explore authentic sightseeing guides, lake viewpoints, and heritage excursions around Udaipur
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'all' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}`}
            >
              ALL SIGHTSEEING
            </button>
            <button 
              onClick={() => setActiveTab("excursions")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'excursions' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-transparent text-text-secondary border border-border-color hover:bg-page-bg'}`}
            >
              NEARBY EXCURSIONS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDestinations.map((dest, i) => (
            <Link href={`/destinations/${dest.slug}`} key={i} className="group rounded-xl overflow-hidden shadow-sm border border-border-color block">
              <div className="relative h-48 overflow-hidden">
                <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-primary">{dest.name}</h3>
                <p className="text-xs text-text-secondary mt-1">{dest.type}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/destinations" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            EXPLORE ALL SIGHTSEEING PLACES
          </Link>
        </div>
      </div>
    </section>
  );
}
