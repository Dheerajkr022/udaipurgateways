import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Udaipur Gateway",
  description: "Refund policy and guidelines for Udaipur Gateway — Independent Travel Agency, Travel Information and Courier Assistance.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Refund Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Udaipur Gateway operates as an informational travel advisory and courier assistance provider. This website does not process online credit card transactions or direct payment checkouts.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Refund Eligibility & Principles</h2>
            <p>
              Because this website is 100% informational, no transactions or online charges are levied simply for using our guides, browsing destination information, or submitting general enquiries.
            </p>
            <p>
              For travel services, hotel stays, or transport bookings arranged through third-party operators with our advisory assistance, refund eligibility is strictly determined by the terms and conditions of the respective hotels, palaces, lake boat operators, and transport carriers.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Processing of Approved Third-Party Refunds</h2>
            <p>
              When a refund is approved by an independent service provider (such as a hotel or transport company), the refund is processed according to that operator&apos;s billing timeline. Typically, bank transfers or reversals require 7 to 14 business days depending on the financial institutions involved.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Courier & Parcel Assistance</h2>
            <p>
              In the event that a courier pickup cannot be completed due to carrier constraints, any advance service fee paid for courier coordination will be promptly returned via the original method of payment.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Contact for Assistance</h2>
            <p>
              If you have any questions regarding refunds or service policies from partner providers, please reach out to our team at <a href="mailto:support@udaipurgateway.com" className="text-primary font-semibold underline">support@udaipurgateway.com</a>.
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
