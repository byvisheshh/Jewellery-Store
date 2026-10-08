import React, { useState } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    STORE_CONFIG.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Subdued luxury chat tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1E1B18] text-[#FAF8F5] text-xs px-3.5 py-2 rounded shadow-xl border border-[#AA8B56]/40 animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="font-serif tracking-wide">
            Chat with {STORE_CONFIG.storeName} Concierge
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8E877D] hover:text-white p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1A1817] text-[#D8C6A5] border border-[#AA8B56] shadow-2xl hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AA8B56] hover:scale-105"
        aria-label="Chat on WhatsApp with Vanya Jewellers Concierge"
        title="WhatsApp Concierge"
      >
        <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
