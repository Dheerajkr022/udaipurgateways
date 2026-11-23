import InnerPageHero from "@/components/layout/InnerPageHero";
import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Udaipur Gateway",
  description: "Get in touch with Udaipur Gateway for travel guidance, sightseeing information, and courier assistance in Udaipur, Rajasthan.",
};

export default function Page() {
  return (
    <main>
      <InnerPageHero
        title="Contact Us"
        description="Get in touch with Udaipur Gateway for travel guidance, sightseeing information, and courier assistance."
        breadcrumb="Contact"
      />

      <section className="py-16 lg:py-24 bg-page-bg">
        <div className="container mx-auto px-4">

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Service Location</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Lake Palace Road, Near City Palace Circle,<br />
                Old City, Udaipur,<br />
                Rajasthan 313001, India
              </p>
              <p className="text-xs text-text-secondary/80 mt-2">
                Operated by Nothing Like Travel LLP<br />
                GSTIN: 09AAZFN6228N1Z7
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Call Us</h3>
              <div className="text-text-secondary text-sm space-y-2">
                <p>
                  <Link href="tel:+919279022649" className="hover:text-primary transition-colors">+91 92790 22649</Link>
                </p>
                <p>
                  <Link href="https://wa.me/919279022649" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp: +91 92790 22649</Link>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Email Us</h3>
              <div className="text-text-secondary text-sm space-y-2">
                <p>
                  <Link href="mailto:info@udaipurgateway.com" className="hover:text-primary transition-colors">info@udaipurgateway.com</Link>
                </p>
                <p>
                  <Link href="mailto:support@udaipurgateway.com" className="hover:text-primary transition-colors">support@udaipurgateway.com</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Form and Map Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-border-color overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Form Side */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
                <p className="text-text-secondary mb-8">Fill out the form below and our travel experts will get back to you shortly.</p>
                <TravelEnquiryForm />
              </div>

              {/* Map Side */}
              <div className="bg-gray-100 min-h-[400px] relative">
                {/* Embedded Google Map (Udaipur, Rajasthan) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116089.47167664858!2d73.64964687595567!3d24.585445037985474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Udaipur Gateway Office Location"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
