import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import HeroEnquiryForm from "@/components/forms/HeroEnquiryForm";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-maldives.jpg"
          alt="Udaipur City of Lakes"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">

        {/* Left Content */}
        <div className="text-white space-y-6">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-semibold text-sm rounded-full tracking-wider uppercase">
            EXPLORE THE CITY OF LAKES
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            UDAIPUR<br />
            GATEWAY
          </h1>
          <div className="space-y-3 text-lg text-gray-200 max-w-lg leading-relaxed">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              Independent Travel Information, Itinerary Planning & Enquiry Assistance
            </p>
            <p>
              Discover majestic lake palaces, royal heritage hotels, historic sightseeing places, and authentic Rajasthan excursions with expert local guidance.
            </p>
            <p className="text-gray-100 font-medium">
              We are here to assist your journey with genuine information and dedicated travel advisory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#enquire"
              className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold text-center hover:opacity-90 transition-opacity"
            >
              ENQUIRE NOW
            </Link>
            <Link
              href="https://wa.me/919279022649"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-accent-green" />
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Right Widget */}
        <div className="lg:justify-self-end w-full max-w-md">
          <HeroEnquiryForm />
        </div>
      </div>
    </section>
  );
}
