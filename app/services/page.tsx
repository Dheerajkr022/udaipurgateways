import InnerPageHero from "@/components/layout/InnerPageHero";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Udaipur Gateway",
  description: "Independent travel information, sightseeing guidance, and courier assistance services in Udaipur, Rajasthan.",
};

export default function Page() {
  return (
    <main>
      <InnerPageHero 
        title="Our Services" 
        description="Comprehensive travel information, local sightseeing advisory, and dedicated courier assistance." 
        breadcrumb="Services" 
      />
      <ServicesSection />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <OurRoleNotice />
      </div>
      <div className="bg-white">
        <WhyChooseUs />
      </div>
      <CTASection />
    </main>
  );
}
