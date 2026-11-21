import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Udaipur Gateway",
  description: "Terms and conditions of service for Udaipur Gateway — Independent Travel Agency, Travel Information and Courier Assistance.",
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              By accessing or using the Udaipur Gateway website, you agree to be bound by these Terms and Conditions. Please review them carefully before using our informational and advisory services.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at Udaipur Gateway, you agree to comply with these terms of service and all applicable laws and regulations. Udaipur Gateway is operated by Nothing Like Travel LLP (GSTIN: 09AAZFN6228N1Z7), an Independent Travel Agency, Travel Information and Courier Assistance service based in Udaipur, Rajasthan.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Nature of Website (100% Informational)</h2>
            <p>
              This website is solely for informational, travel guidance, and enquiry assistance purposes. Udaipur Gateway does not operate an online booking engine, automated checkout, or instant payment system on this website. Submitting an enquiry form signals an expression of interest and does not constitute a legally binding confirmation or financial transaction.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Use License</h2>
            <p>
              Permission is granted to view and read materials on the Udaipur Gateway website for personal, non-commercial transitory viewing only. You may not copy, modify, distribute, or reverse engineer any content without written permission.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Independent Advisory & Third-Party Providers</h2>
            <p>
              Udaipur Gateway is an independent travel advisory service. We are not the owner, operator, or official representative of any hotel, heritage palace, monument, or transport operator displayed on this site. Tariffs, availability, schedules, and policies are set solely by the respective independent providers.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Courier & Logistics Assistance</h2>
            <p>
              Courier and parcel assistance services help clients coordinate with certified logistics carriers for luggage and parcel transport. Transit timelines, customs obligations, and loss/damage liability are strictly governed by the standard carrier contract of the logistics partner selected.
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
