import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Udaipur Gateway",
  description: "Disclaimer and legal notice for Udaipur Gateway — Independent Travel Agency, Travel Information and Courier Assistance.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Disclaimer</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              The information contained on the Udaipur Gateway website (the &quot;Service&quot;) is for general travel information, sightseeing guidance, and courier assistance advisory purposes only.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. General Informational Disclaimer</h2>
            <p>
              Udaipur Gateway is an independent travel agency, travel information and courier assistance service based in Udaipur, Rajasthan. This website is 100% informational. Udaipur Gateway does not operate an online booking engine, reservation cart, or payment checkout system on this website.
            </p>
            <p>
              Udaipur Gateway assumes no responsibility for errors, inaccuracies, or omissions in the contents of the Service. In no event shall Udaipur Gateway be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever arising out of or in connection with the use of the Service or the travel guidance provided.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Non-Affiliation Disclaimer</h2>
            <p>
              Udaipur Gateway is an independent travel advisory and courier assistance agency. We are not affiliated with, endorsed by, or sponsored by any hotel, resort, palace property, monument trust, lake boat operator, airline, or government tourism board unless explicitly stated. All trademarks, service marks, trade names, and brand names referenced on this site belong to their respective owners.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Travel Information & Third-Party Rates</h2>
            <p>
              All property descriptions, amenities, lake boat schedules, monument visiting timings, and estimated tariffs are provided for informational and planning purposes only. Availability and pricing are governed entirely by the independent hotels, palaces, tour operators, and monument authorities. Udaipur Gateway acts solely as an informational guide and enquiry facilitator.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Courier Assistance Disclaimer</h2>
            <p>
              Courier and parcel assistance services offered by Udaipur Gateway assist clients in coordinating with licensed domestic and international logistics providers. Shipment delivery times, customs duties, and transit terms are governed by the respective courier carrier&apos;s standard terms of carriage.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. External Links Disclaimer</h2>
            <p>
              The Udaipur Gateway website may contain links to external third-party websites. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on external websites, and links do not imply endorsement.
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
