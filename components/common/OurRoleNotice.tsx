import { CheckCircle2 } from "lucide-react";

interface OurRoleNoticeProps {
  className?: string;
  isSection?: boolean;
}

export default function OurRoleNotice({ className = "", isSection = false }: OurRoleNoticeProps) {
  const content = (
    <div className={`bg-[#f9fbf9] border border-[#e2ebe4] rounded-3xl p-6 sm:p-8 shadow-xs ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <CheckCircle2 className="w-6 h-6 text-[#14532d] stroke-[2.2]" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Our Role</h3>
      </div>
      <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
        <p>
          <strong>Udaipur Gateway</strong> is operated by <strong>Nothing Like Travel LLP</strong> (GSTIN: 09AAZFN6228N1Z7), an independent travel information, itinerary planning and enquiry assistance service.
        </p>
        <p>
          We provide general travel information, sightseeing guidance, itinerary suggestions, and enquiry assistance for hotels, resorts, palaces, heritage stays, and courier services.
        </p>
        <p className="font-bold text-gray-900 pt-1">
          This website is 100% informational. We do not process online bookings or payments. We are not the owner, operator, booking agent, or officially appointed representative of the properties, attractions, or transport services featured on this website. Property names and trademarks belong to their respective owners. For room availability, current rates, reservations and property-specific terms, please contact the respective property directly.
        </p>
      </div>
    </div>
  );

  if (isSection) {
    return (
      <section className="py-12 bg-white border-t border-border-color">
        <div className="container mx-auto px-4 max-w-4xl">
          {content}
        </div>
      </section>
    );
  }

  return content;
}
