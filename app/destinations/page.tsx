import InnerPageHero from "@/components/layout/InnerPageHero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { getDestinations } from "@/lib/data/destinations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udaipur Sightseeing & Destinations | Udaipur Gateway",
  description: "Explore the most famous tourist attractions, lake viewpoints, royal palaces, and nearby heritage excursions in Udaipur with Udaipur Gateway.",
};

export default function Page() {
  const destinations = getDestinations();

  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Explore Udaipur & Rajasthan" 
        description="Discover breathtaking lakes, majestic forts, marble temples, and royal Mewar palaces with our curated travel guides." 
        breadcrumb="Destinations" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <DestinationGrid destinations={destinations} />

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
