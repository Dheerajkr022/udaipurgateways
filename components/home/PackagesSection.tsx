import Link from "next/link";
import PackageGrid from "@/components/packages/PackageGrid";

export default function PackagesSection() {
  return (
    <section className="py-16 bg-page-bg border-t border-border-color">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            HOLIDAY ITINERARY IDEAS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-3xl mx-auto text-sm sm:text-base font-medium">
            Explore suggested travel itineraries for Udaipur and the Mewar region. Our guides provide general destination information, sightseeing suggestions and travel planning assistance for couples, families and groups.
          </p>
          <p className="mt-2 text-xs text-text-secondary/80 max-w-2xl mx-auto">
            The itineraries displayed are informational suggestions and do not represent confirmed travel packages or guaranteed inclusions. Accommodation, transport, activities and other services are independently provided by their respective providers.
          </p>
        </div>

        <PackageGrid />
        
        <div className="mt-10 text-center">
          <Link href="/packages" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            EXPLORE ALL HOLIDAY ITINERARIES
          </Link>
        </div>
      </div>
    </section>
  );
}