import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16">
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-8 mb-12">
        {/* Column 1 */}
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4">
            <h3 className="text-2xl font-bold leading-none tracking-tight">UDAIPUR GATEWAY</h3>
            <span className="text-xs text-gray-300 tracking-wider font-semibold block mt-1.5">
              Nothing Like Travel LLP
            </span>
            <span className="text-xs text-gray-400 font-normal block mt-1">
              Independent Travel Agency, Travel Information and Courier Assistance
            </span>
          </div>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-sm">
            Providing comprehensive travel information, heritage stay recommendations, sightseeing guidance, and reliable courier assistance in Udaipur and Rajasthan.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><FaLinkedin className="w-5 h-5" /></Link>
            <Link href="https://wa.me/919279022649" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"><MessageCircle className="w-5 h-5" /></Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/packages" className="hover:text-accent transition-colors">Holiday Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
            <li><Link href="/hotels" className="hover:text-accent transition-colors">Hotels & Resorts</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
          <h4 className="font-semibold text-lg mb-4">Top Destinations</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/destinations/lake-pichola" className="hover:text-accent transition-colors">Lake Pichola</Link></li>
            <li><Link href="/destinations/city-palace" className="hover:text-accent transition-colors">City Palace</Link></li>
            <li><Link href="/destinations/fateh-sagar" className="hover:text-accent transition-colors">Fateh Sagar</Link></li>
            <li><Link href="/destinations/sajjangarh" className="hover:text-accent transition-colors">Sajjangarh</Link></li>
            <li><Link href="/destinations/kumbhalgarh" className="hover:text-accent transition-colors">Kumbhalgarh</Link></li>
            <li><Link href="/destinations/ranakpur" className="hover:text-accent transition-colors">Ranakpur</Link></li>
            <li><Link href="/destinations/chittorgarh" className="hover:text-accent transition-colors">Chittorgarh</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-2 lg:col-span-1 mt-2 lg:mt-0">
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-gray-300 space-y-4">
            <p>
              Lake Palace Road, Near City Palace Circle,<br />
              Old City, Udaipur,<br />
              Rajasthan 313001, India
            </p>
            <p>Phone: <Link href="tel:+919279022649" className="hover:text-accent transition-colors">+91 92790 22649</Link></p>
            <p>Email: <Link href="mailto:info@udaipurgateway.com" className="hover:text-accent transition-colors">info@udaipurgateway.com</Link></p>
            <p>Hours: Mon - Sun: 9:00 AM - 8:00 PM</p>
          </address>
        </div>
      </div>

      {/* Important Information & Disclaimer Notices */}
      <div className="container mx-auto px-4 mb-12 space-y-4">
        {/* Important Information */}
        <div className="bg-[#02183b]/60 border border-emerald-600/40 rounded-xl p-4 md:p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">
              IMPORTANT INFORMATION
            </h4>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Udaipur Gateway, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), is an independent travel agency, travel information and courier assistance service. This website is 100% informational and does not process online bookings, reservations, or financial transactions. Rates, visiting schedules, and availability may vary and are determined by the respective property owners, monument authorities, and transport providers.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#02183b]/60 border border-emerald-600/40 rounded-xl p-4 md:p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">
              DISCLAIMER
            </h4>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Udaipur Gateway is operated by Nothing Like Travel LLP, an independent travel information and courier assistance agency. We are not the owner, operator, booking engine, or official representative of any hotel, palace, resort, monument trust, or transport service mentioned on this website. All brand names, trade marks, and property logos belong to their respective owners.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-xs border-t border-primary-light">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300">
            &copy; {new Date().getFullYear()} Nothing Like Travel LLP. All rights reserved.<br />
            GSTIN: 09AAZFN6228N1Z7 | Independent Travel Agency, Travel Information and Courier Assistance
          </div>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
