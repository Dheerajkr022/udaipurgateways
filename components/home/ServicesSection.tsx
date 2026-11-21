import { Plane, Building2, Ship, FileCheck, Shield, Briefcase, Users, FileText, Package } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { title: "Udaipur Holiday Itineraries", desc: "Curated sightseeing and holiday planning for couples and families", icon: Plane, href: "/packages" },
    { title: "Courier & Parcel Assistance", desc: "Express parcel, luggage, and handicraft courier assistance in Udaipur", icon: Package, href: "/contact" },
    { title: "Heritage Hotels & Palace Stays", desc: "Detailed information on premier lakeview and heritage palace properties", icon: Building2, href: "/hotels" },
    { title: "Lake Pichola & Lake Cruises", desc: "Advisory for sunset boat rides, royal charters, and island excursions", icon: Ship, href: "/cruises" },
    { title: "Mewar Excursion Circuits", desc: "Day trips to Kumbhalgarh Fort, Ranakpur Temples, and Chittorgarh", icon: FileCheck, href: "/destinations" },
    { title: "Travel Insurance Advisory", desc: "Comprehensive travel insurance guidance for domestic & international travelers", icon: Shield, href: "/contact" },
    { title: "Destination Weddings Advisory", desc: "Venue and accommodation information for royal Udaipur celebrations", icon: Briefcase, href: "/contact" },
    { title: "Corporate & Group Retreats", desc: "Conference and offsite planning assistance in scenic Udaipur", icon: Users, href: "/contact" },
    { title: "Cultural & Folk Show Guidance", desc: "Dharohar dance at Bagore Ki Haveli and sound & light show information", icon: FileText, href: "/destinations/lake-pichola" },
  ];

  return (
    <section className="py-16 bg-page-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            OUR SERVICES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Independent travel information, local sightseeing advisory, and dedicated courier assistance across Udaipur and Rajasthan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <Link href={svc.href} key={i} className="bg-white p-6 rounded-xl border border-border-color hover:shadow-lg transition-shadow flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-page-bg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <svc.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1 text-lg group-hover:text-primary transition-colors">{svc.title}</h3>
                <p className="text-sm text-text-secondary">{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
