import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Udaipur Gateway",
  description: "Cancellation policy and information for Udaipur Gateway — Independent Travel Agency, Travel Information and Courier Assistance.",
};

export default function CancellationPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Cancellation Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Udaipur Gateway, operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), is an independent travel agency, travel information and courier assistance service. This website is purely informational and does not process online bookings or payments directly.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Informational Service Notice</h2>
            <p>
              Submissions made through enquiry forms on this website do not constitute a confirmed financial booking. When you enquire about hotels, palaces, holiday packages, or regional excursions, our team provides travel guidance and connects you with authorized service providers.
            </p>
            <p>
              Any formal cancellations of arrangements arranged through third-party operators (such as hotels or transport services) must be made in writing via email to our team and are subject to the specific terms set by the independent operators.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Hotel & Heritage Palace Policies</h2>
            <p>
              Hotel cancellation terms in Udaipur vary significantly between heritage palace resorts, boutique havelis, and city hotels. High-season periods (October through March and festival dates) often feature strict cancellation schedules. Please review the specific cancellation terms communicated during your travel planning.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Sightseeing & Excursions</h2>
            <p>
              Sightseeing excursions and private vehicle arrangements to Kumbhalgarh, Ranakpur, or Chittorgarh are governed by the respective transport operators and local visiting guidelines. Rescheduling options may be available subject to prior notice.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Courier & Parcel Assistance</h2>
            <p>
              Cancellation of courier assistance requests must be made prior to shipment dispatch or pickup by the logistics carrier. Once a consignment has been handed over to the courier partner, cancellations are subject to the carrier&apos;s standard terms.
            </p>

            <p className="mt-12 text-sm text-gray-500 border-t pt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
