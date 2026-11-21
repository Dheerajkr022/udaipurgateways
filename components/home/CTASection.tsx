import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-mountain.jpg"
          alt="Udaipur Aravali Hills Landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">LET US PLAN YOUR PERFECT UDAIPUR HOLIDAY</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Share your travel requirements to receive verified destination information, heritage stay recommendations, and personalized travel assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link 
            href="#enquire"
            className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-orange-600 transition-colors"
          >
            REQUEST TRAVEL INFORMATION
          </Link>
          <Link 
            href="#enquire"
            className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
