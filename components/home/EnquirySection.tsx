import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import Image from "next/image";

export default function EnquirySection() {
  return (
    <section className="py-16 lg:py-24 bg-page-bg" id="enquire">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-color grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Visual & Process Explanation */}
          <div className="relative p-8 lg:p-12 bg-primary flex flex-col justify-between text-white min-h-[480px]">
            <div className="relative z-10 space-y-4">
              <span className="text-accent text-xs font-bold tracking-wider uppercase block">ENQUIRY ASSISTANCE</span>
              <h2 className="text-2xl lg:text-3xl font-bold">How Our Enquiry Process Works</h2>
              <div className="space-y-3 text-xs sm:text-sm text-gray-200 leading-relaxed">
                <p>
                  Udaipur Gateway provides independent travel information, sightseeing guidance, itinerary suggestions and enquiry assistance.
                </p>
                <p>
                  Visitors can submit their travel requirements through our website or contact our team directly.
                </p>
                <p>
                  After receiving an enquiry, our team may provide relevant destination information, itinerary suggestions, accommodation details and information about local travel options.
                </p>
                <p className="font-semibold text-white">
                  Submitting an enquiry does not confirm a reservation, booking or purchase.
                </p>
                <p className="text-xs text-gray-300">
                  Udaipur Gateway does not operate an online booking engine or payment checkout system. Any reservation, service agreement, payment or final confirmation must be completed directly with the respective service provider.
                </p>
                <p className="text-xs text-gray-300">
                  Prices, availability, service conditions and cancellation terms are determined by the respective providers.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 z-0 opacity-20">
              <Image 
                src="/images/travel-enquiry.jpg" 
                alt="Rajasthan Heritage Architecture" 
                fill 
                className="object-cover mix-blend-overlay"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 lg:p-12">
            <TravelEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
