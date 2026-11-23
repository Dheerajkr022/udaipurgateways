import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">ABOUT US</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
            ABOUT UDAIPUR GATEWAY
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
            <p>
              <strong>Udaipur Gateway</strong> is operated by <strong>Nothing Like Travel LLP</strong>, an independent travel information, itinerary planning and enquiry assistance service based in Udaipur, Rajasthan. We are committed to helping visitors explore the City of Lakes and the glorious Mewar region with genuine, reliable, and transparent travel information.
            </p>
            <p>
              Our wide range of travel advisory services includes personalized sightseeing guides for iconic landmarks like the City Palace, Lake Pichola, Jag Mandir, and Sajjangarh Monsoon Palace, detailed information on heritage palaces and lakeside resorts, and regional excursion circuits to Kumbhalgarh, Ranakpur, and Chittorgarh. In addition, we offer dedicated courier and parcel assistance for luggage, documents, and traditional Rajasthani handicrafts.
            </p>
          </div>
          <Link href="/about" className="inline-block border-2 border-primary text-primary px-6 py-2.5 rounded-md font-semibold hover:bg-primary hover:text-white transition-colors">
            KNOW MORE ABOUT US
          </Link>
        </div>

        {/* Right - Company Info Card */}
        <div className="bg-page-bg p-8 lg:p-10 rounded-xl border border-border-color shadow-sm">
          <ul className="space-y-6 text-text-primary">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Company Name:</span>
                <span className="text-text-secondary text-sm">Nothing Like Travel LLP</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">GSTIN:</span>
                <span className="text-text-secondary text-sm">09AAZFN6228N1Z7</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Brand Positioning:</span>
                <span className="text-text-secondary text-sm">Independent Travel Information, Itinerary Planning & Enquiry Assistance</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Service Location:</span>
                <span className="text-text-secondary text-sm">Lake Palace Road, Near City Palace Circle, Udaipur, Rajasthan 313001</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
