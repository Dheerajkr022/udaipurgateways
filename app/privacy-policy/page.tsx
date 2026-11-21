import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Udaipur Gateway",
  description: "Privacy Policy for Udaipur Gateway — Independent Travel Agency, Travel Information and Courier Assistance.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Your privacy is important to us. It is Udaipur Gateway&apos;s policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We only ask for personal contact details when you willingly submit a travel enquiry, request itinerary guidance, or ask for courier assistance. We collect information by fair and lawful means, with your knowledge and consent.
            </p>
            <p>
              The types of personal information we may collect include your name, email address, phone number, destination preferences, and travel dates submitted via our enquiry forms. We do not collect online financial payment data or credit card numbers on this website.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Use of Information</h2>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested travel advisory or courier assistance. What data we store, we protect within commercially acceptable means to prevent unauthorized access, disclosure, copying, use, or modification.
            </p>
            <p>
              We do not share any personally identifying information publicly or with third parties, except when necessary to connect you with requested service providers (such as licensed courier operators or local tour coordinators) upon your explicit request.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Cookies and Tracking</h2>
            <p>
              Our website may use standard cookies to improve your browsing experience. You may choose to configure your web browser to refuse cookies or to alert you when cookies are being sent.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Third-Party Links</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
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
