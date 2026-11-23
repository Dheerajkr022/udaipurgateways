import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Udaipur Gateway",
  description: "Refund policy for Udaipur Gateway — Independent Travel Information, Itinerary Planning & Enquiry Assistance.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Refund Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="lead text-base sm:text-lg font-medium text-gray-800">
              Udaipur Gateway is operated by Nothing Like Travel LLP and provides independent travel information, itinerary suggestions, sightseeing guidance and enquiry assistance.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Website Enquiries</h2>
            <p>
              Submitting a general enquiry through our website does not constitute a booking, purchase or payment transaction. No online payment is collected through the website for submitting an enquiry.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Third-Party Services</h2>
            <p>
              Accommodation, transport, sightseeing and other travel services are independently provided by their respective service providers. Any payment, refund, cancellation or rescheduling relating to services purchased directly from a third-party provider is governed by that provider&apos;s terms and conditions. Customers should contact the respective provider directly regarding payment and refund requests.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Courier Information</h2>
            <p>
              Courier and parcel services are subject to the terms, charges and refund policies of the respective logistics provider.
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
