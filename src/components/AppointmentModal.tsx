import React, { useState } from "react";
import { SHOWROOM_LOCATIONS } from "../data/locations";
import { STORE_CONFIG } from "../data/storeConfig";
import { X, Calendar, Clock, CheckCircle2, MessageCircle } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    showroom: SHOWROOM_LOCATIONS[0].name,
    serviceType: preselectedProduct ? "Product Viewing" : "Bridal Trousseau Consultation",
    preferredDate: "",
    preferredTime: "Morning (11:00 AM – 1:00 PM)",
    notes: preselectedProduct ? `Inquiring about ${preselectedProduct}` : "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setError("Please fill in your name, contact phone number, and preferred date.");
      return;
    }
    setError("");
    setIsSubmitted(true);
  };

  const whatsappConfirmationUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vanya Concierge, I have scheduled an in-store appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nShowroom: ${formData.showroom}\nService: ${formData.serviceType}\nDate: ${formData.preferredDate} (${formData.preferredTime})\nNotes: ${formData.notes || "None"}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#AA8B56]/40 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#45403A] hover:text-[#1E1B18] rounded-full hover:bg-[#F4EFE6] transition-colors cursor-pointer"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-medium tracking-widest uppercase text-[#AA8B56]">
                Private Viewing Suite
              </span>
              <h3 className="font-serif text-2xl text-[#1E1B18] font-medium">
                Reserve an In-Store Experience
              </h3>
              <p className="text-xs text-[#666057] leading-relaxed">
                Enjoy personalized concierge attention, private bridal trial suites, and certified gemological guidance at our heritage showrooms.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  />
                </div>
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#45403A] font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="radhika@example.com"
                  className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Select Showroom *
                  </label>
                  <select
                    value={formData.showroom}
                    onChange={(e) => setFormData({ ...formData, showroom: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  >
                    {SHOWROOM_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Service of Interest *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  >
                    <option value="Bridal Trousseau Consultation">Bridal Trousseau Consultation</option>
                    <option value="Certified Solitaire & Engagement">Certified Solitaire & Engagement</option>
                    <option value="Custom Bespoke Commission">Custom Bespoke Atelier Commission</option>
                    <option value="22K Traditional Gold Collection">22K Traditional Gold Collection</option>
                    <option value="Bullion & Old Gold Exchange">Bullion & Old Gold Exchange</option>
                    <option value="Product Viewing">Specific Product Viewing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  />
                </div>
                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                  >
                    <option value="Morning (11:00 AM – 1:00 PM)">Morning (11:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 4:30 PM)">Afternoon (2:00 PM – 4:30 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#45403A] font-medium mb-1">
                  Special Notes or Jewellery Pieces
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your wedding date, outfit colors, or specific designs you wish to preview..."
                  className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none text-[#1E1B18]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E1B18] hover:bg-[#382917] text-white font-semibold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl text-[#1E1B18]">
              Appointment Requested
            </h3>

            <p className="text-xs text-[#666057] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our senior concierge at the <strong>{formData.showroom}</strong> will contact you via WhatsApp / phone on <strong>{formData.phone}</strong> to confirm your viewing for <strong>{formData.preferredDate}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappConfirmationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 border border-[#AA8B56] text-[#1E1B18] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4EFE6] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
