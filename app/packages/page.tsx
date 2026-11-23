import InnerPageHero from "@/components/layout/InnerPageHero";
import PackageGrid from "@/components/packages/PackageGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday Itinerary Ideas & Travel Guides | Udaipur Gateway",
  description: "Explore suggested travel itineraries for Udaipur and the Mewar region. General destination information, sightseeing suggestions and travel planning assistance.",
};

export default function Page() {
  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Holiday Itinerary Ideas" 
        description="Explore suggested travel itineraries for Udaipur and the Mewar region. Our guides provide general destination information, sightseeing suggestions and travel planning assistance." 
        breadcrumb="Holiday Itineraries" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            HOLIDAY ITINERARY IDEAS
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-base">
            Explore suggested travel itineraries for Udaipur and the Mewar region. Our guides provide general destination information, sightseeing suggestions and travel planning assistance for couples, families and groups.
          </p>
          <p className="text-xs text-text-secondary/80 max-w-2xl mx-auto mt-2">
            The itineraries displayed are informational suggestions and do not represent confirmed travel packages or guaranteed inclusions. Accommodation, transport, activities and other services are independently provided by their respective providers.
          </p>
          <p className="text-xs font-semibold text-primary mt-2">
            Submit an enquiry to receive additional travel information and planning assistance.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <PackageGrid />

          <div className="mt-16 max-w-3xl mx-auto">
            <OurRoleNotice />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <WhyChooseUs />
      </div>
      
      <CTASection />
    </main>
  );
}
