import React, { useState } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { SHOWROOM_LOCATIONS } from "../data/locations";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Send 
} from "lucide-react";

interface ContactPageProps {
  onOpenAppointment: () => void;
  onNavigateToLocations: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenAppointment,
  onNavigateToLocations,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please complete your full name, phone number, and inquiry message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vanya Jewellers Concierge, I am reaching out regarding an inquiry:\nName: ${formData.name || "Customer"}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.message || STORE_CONFIG.defaultWhatsAppMessage}`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F7040] font-semibold">
          Client Concierge
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal">
          Connect with Our Ateliers
        </h1>
        <p className="text-xs sm:text-sm text-[#666057] leading-relaxed">
          Whether you are selecting a bridal trousseau, planning a bespoke commission, or seeking gold bullion advice, our senior advisors are at your service.
        </p>
      </div>

      {/* Main Grid: Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Flagship Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-8 space-y-6">
            <h3 className="font-serif text-xl text-[#1E1B18] font-medium border-b border-[#E8E2D8] pb-3">
              Flagship Headquarters
            </h3>

            <div className="space-y-4 text-xs text-[#45403A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#AA8B56] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1B18] font-semibold">Store Address:</strong>
                  <span>{STORE_CONFIG.flagshipAddress.line1}</span>
                  <br />
                  <span>{STORE_CONFIG.flagshipAddress.line2}</span>
                  <br />
                  <span>
                    {STORE_CONFIG.flagshipAddress.city}, {STORE_CONFIG.flagshipAddress.state} – {STORE_CONFIG.flagshipAddress.pincode}, {STORE_CONFIG.flagshipAddress.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#AA8B56] shrink-0" />
                <div>
                  <strong className="block text-[#1E1B18] font-semibold">Direct Phone:</strong>
                  <a href={`tel:${STORE_CONFIG.phone}`} className="hover:text-[#AA8B56] transition-colors">
                    {STORE_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#AA8B56] shrink-0" />
                <div>
                  <strong className="block text-[#1E1B18] font-semibold">Email Concierge:</strong>
                  <a href={`mailto:${STORE_CONFIG.email}`} className="hover:text-[#AA8B56] transition-colors">
                    {STORE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <strong className="block text-[#1E1B18] font-semibold">WhatsApp Concierge:</strong>
                  <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-medium">
                    +91 98201 54321 (Instant Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#AA8B56] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1B18] font-semibold">Opening Hours:</strong>
                  <span>{STORE_CONFIG.openingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-4 bg-[#1E1B18] hover:bg-[#382917] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D8C6A5]" />
                <span>Book Showroom Appointment</span>
              </button>
            </div>
          </div>

          {/* Multi-city Showroom Quick Banner */}
          <div className="p-6 bg-[#F4EFE6] border border-[#D8C6A5] text-xs space-y-2">
            <h4 className="font-serif text-sm text-[#1E1B18] font-semibold">
              Explore Our Other Salons
            </h4>
            <p className="text-[#666057] leading-relaxed">
              We also maintain dedicated bridal suites and gold lounges in New Delhi (Mehrauli), Bengaluru (Lavelle Road), and Hyderabad (Jubilee Hills).
            </p>
            <button
              onClick={onNavigateToLocations}
              className="text-[#8F7040] font-semibold uppercase tracking-wider text-[11px] hover:underline pt-1 inline-block cursor-pointer"
            >
              View All 4 Showroom Locations →
            </button>
          </div>
        </div>

        {/* Right Column: Contact & Message Form */}
        <div className="lg:col-span-7 bg-white border border-[#E8E2D8] p-8 sm:p-10 shadow-sm">
          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#AA8B56] font-semibold">
                  Send a Message
                </span>
                <h3 className="font-serif text-2xl text-[#1E1B18]">
                  Inquire with Our Concierge
                </h3>
                <p className="text-xs text-[#666057]">
                  Please leave your details below and our team will get in touch within 2 to 4 business hours.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Mehra"
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Preferred Visit Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Your Message / Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the jewellery items you are looking for, wedding dates, or general questions..."
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1E1B18] hover:bg-[#382917] text-white font-semibold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D8C6A5]" />
                    <span>Send Message to Concierge</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#1E1B18]">
                Message Delivered
              </h3>
              <p className="text-xs text-[#666057] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our client concierge has received your note and will get back to you promptly on <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-6 py-2 border border-[#AA8B56] text-[#1E1B18] text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF8F5] cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Google Maps Embed / Showroom Map Placeholder (Required by prompt) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl text-[#1E1B18]">
            Interactive Flagship Map: Fort, Mumbai
          </h3>
          <span className="text-xs text-[#8E877D]">
            Coordinates: 18.9298° N, 72.8335° E
          </span>
        </div>

        <div className="w-full h-80 bg-[#EAE0CE] border border-[#D8C6A5] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner">
          {/* Stylized Architectural Cartography Graphic */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1E1B18_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-md bg-white/95 p-6 border border-[#AA8B56] shadow-xl space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#1E1B18] text-[#D8C6A5] flex items-center justify-center mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-semibold text-[#1E1B18]">
              {STORE_CONFIG.storeName} Flagship
            </h4>
            <p className="text-xs text-[#666057]">
              Heritage Boulevard, 42 Mahatma Gandhi Road, Kala Ghoda Arts Quarter, Fort, Mumbai 400001
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Kala+Ghoda+Fort+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E1B18] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#382917] transition-colors"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
