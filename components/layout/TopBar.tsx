import { ShieldCheck, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-xs sm:text-sm py-2 border-b border-white/10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-center sm:text-left">
          <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
          <span>INDEPENDENT TRAVEL INFORMATION SERVICE | GSTIN: 09AAZFN6228N1Z7</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm shrink-0">
          <Link href="tel:+919279022649" className="flex items-center gap-1.5 sm:gap-2 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Call Us: +91 92790 22649</span>
          </Link>
          <Link href="https://wa.me/919279022649" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-accent-green hover:opacity-80 transition-opacity">
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>WhatsApp Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
