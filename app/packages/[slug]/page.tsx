import InnerPageHero from "@/components/layout/InnerPageHero";
import PackageGrid from "@/components/packages/PackageGrid";
import CTASection from "@/components/home/CTASection";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itinerary Details | Udaipur Gateway",
  description: "View suggested itinerary details and sightseeing information for Udaipur and Rajasthan.",
};

export default function Page() {
  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Udaipur Holiday Itinerary Details" 
        description="Comprehensive sightseeing itinerary, heritage stay recommendations, and travel guidance." 
        breadcrumb="Itinerary Details" 
      />
      <div className="py-16 container mx-auto px-4 max-w-5xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-border-color shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Suggested Udaipur Itineraries</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Every itinerary designed by Udaipur Gateway is tailored around your travel dates, pace, and interests. Whether you wish to focus on royal palace tours, peaceful sunset boat rides across Lake Pichola, or regional excursions to Kumbhalgarh Fort and Ranakpur Temples, submit your requirements below for personalized guidance.
          </p>
          <TravelEnquiryForm />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Explore More Itinerary Ideas</h3>
          <PackageGrid />
        </div>

        <div className="max-w-3xl mx-auto">
          <OurRoleNotice />
        </div>
      </div>
      <CTASection />
    </main>
  );
}
