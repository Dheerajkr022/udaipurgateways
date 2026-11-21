import InnerPageHero from "@/components/layout/InnerPageHero";
import CTASection from "@/components/home/CTASection";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Details | Udaipur Gateway",
  description: "Learn more about our independent travel information and courier assistance services in Udaipur.",
};

export default function Page() {
  return (
    <main className="bg-page-bg">
      <InnerPageHero 
        title="Travel & Courier Service Details" 
        description="Learn more about what our independent advisory and courier assistance entails." 
        breadcrumb="Service Details" 
      />
      <div className="py-16 container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 rounded-2xl border border-border-color shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Dedicated Local Assistance</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Udaipur Gateway provides personalized travel information and courier guidance tailored to your specific schedule and requirements. Whether you need assistance choosing the right heritage stay in Udaipur, planning a day excursion to Kumbhalgarh or Chittorgarh, or sending parcels and handicrafts via our courier assistance service, we are here to guide you.
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-primary mb-4">Submit an Enquiry</h3>
            <TravelEnquiryForm />
          </div>
        </div>
        <OurRoleNotice />
      </div>
      <CTASection />
    </main>
  );
}
