import InnerPageHero from "@/components/layout/InnerPageHero";
import HotelCard from "@/components/hotels/HotelCard";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurRoleNotice from "@/components/common/OurRoleNotice";
import { getHotels } from "@/lib/data/hotels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Resorts Information | Udaipur Gateway",
  description: "Explore information about Udaipur's heritage hotels, palace properties, luxury resorts and lakeside accommodation options.",
};

export default function HotelsListingPage() {
  const hotels = getHotels();

  return (
    <main className="bg-gray-50">
      <InnerPageHero 
        title="Hotels & Resorts Information" 
        description="Explore information about Udaipur's heritage hotels, palace properties, luxury resorts and lakeside accommodation options." 
        breadcrumb="Hotels" 
      />
      
      <div className="py-16 lg:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Disclosure Notice */}
          <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-border-color shadow-xs text-text-secondary leading-relaxed space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Hotels & Resorts Information</h2>
            <p>
              Explore information about Udaipur&apos;s heritage hotels, palace properties, luxury resorts and lakeside accommodation options.
            </p>
            <p>
              Udaipur Gateway independently provides general property information, location details and travel enquiry assistance.
            </p>
            <p>
              We are not the owner, operator, booking agent or officially appointed representative of the properties featured on this website. Property names and trademarks belong to their respective owners.
            </p>
            <p className="font-semibold text-gray-800">
              For room availability, current rates, reservations and property-specific terms, please contact the respective property directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

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
