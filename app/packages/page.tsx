import InnerPageHero from "@/components/layout/InnerPageHero";
import PackageGrid from "@/components/packages/PackageGrid";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udaipur Holiday Packages & Tours | Udaipur Gateway",
  description: "Explore curated holiday packages, romantic honeymoon tours, and heritage Mewar circuits with Udaipur Gateway.",
};

export default function Page() {
  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Udaipur Holiday Itineraries" 
        description="Curated itineraries and tour plans for your Udaipur and Rajasthan vacation. From romantic lakefront getaways to historic Mewar fort circuits." 
        breadcrumb="Holiday Packages" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            EXPLORE UDAIPUR HOLIDAY ITINERARIES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Click on any package to submit a quick enquiry, and our local travel experts will design the perfect itinerary tailored just for you.
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
