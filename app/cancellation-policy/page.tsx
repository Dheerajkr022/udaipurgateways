import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Udaipur Gateway",
  description: "Cancellation policy for Udaipur Gateway — Independent Travel Information, Itinerary Planning & Enquiry Assistance.",
};

export default function CancellationPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Cancellation Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="lead text-base sm:text-lg font-medium text-gray-800">
              Udaipur Gateway is operated by Nothing Like Travel LLP and provides independent travel information, sightseeing guidance, itinerary suggestions and enquiry assistance.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. General Enquiries</h2>
            <p>
              Submitting an enquiry through our website or contacting our team does not create a confirmed booking, reservation or purchase. General travel information and enquiry submissions do not require a booking cancellation.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Third-Party Services</h2>
            <p>
              Udaipur Gateway does not process hotel reservations, transport bookings or payments through its website. Customers who independently arrange accommodation, transport, sightseeing activities or other services directly with third-party providers must follow the cancellation and rescheduling policies of those providers.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Courier Information</h2>
            <p>
              For courier-related enquiries, customers should confirm the applicable service conditions and cancellation terms directly with the selected logistics provider.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Contact</h2>
            <p>
              <strong>Email:</strong> <a href="mailto:info@udaipurgateway.com" className="text-primary hover:underline">info@udaipurgateway.com</a><br />
              <strong>Phone:</strong> <a href="tel:+919279022649" className="text-primary hover:underline">+91 92790 22649</a>
            </p>

            <p className="mt-12 text-xs text-gray-500 border-t pt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
