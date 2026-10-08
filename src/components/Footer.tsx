import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointment }) => {
  const { storeName, displayPhone, email, openingHours, flagshipAddress, instagramHandle, hallmarkLicense } = STORE_CONFIG;

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(STORE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <footer className="bg-[#181614] text-[#EAE0CE] border-t border-[#382917] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2C2824]">
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-medium text-white uppercase block">
              {storeName}
            </span>
            <p className="text-xs tracking-widest text-[#C2A77A] uppercase font-medium">
              Fine Indian Heritage & Diamond Jewellery · Est. {STORE_CONFIG.yearEstablished}
            </p>
            <p className="text-sm text-[#8E877D] leading-relaxed max-w-sm">
              Dedicated to pure 22K hallmarked gold, ethically sourced certified natural diamonds, and multi-generational bridal artistry. Handcrafted by master karigars for your life's most meaningful milestones.
            </p>

            {/* BIS Hallmarking Trust Seal */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#D8C6A5] bg-[#221F1B] p-3 border border-[#382917] max-w-md">
              <ShieldCheck className="w-5 h-5 text-[#C2A77A] shrink-0" />
              <div>
                <strong className="block text-white font-medium">BIS Hallmarking License {hallmarkLicense}</strong>
                <span className="text-[11px] text-[#8E877D]">Every piece carries unique 6-digit laser-engraved HUID certification.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Collections
            </h3>
            <ul className="space-y-2 text-xs text-[#8E877D]">
              <li>
                <button onClick={() => handleLinkClick("gold")} className="hover:text-white transition-colors cursor-pointer">
                  22K Gold Jewellery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("diamond")} className="hover:text-white transition-colors cursor-pointer">
                  Certified Diamond Solitaires
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("bridal")} className="hover:text-white transition-colors cursor-pointer">
                  Royal Bridal Trousseau
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("mens")} className="hover:text-white transition-colors cursor-pointer">
                  Men's Fine Jewellery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("everyday")} className="hover:text-white transition-colors cursor-pointer">
                  Everyday Minimalist Gold
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("custom")} className="hover:text-white transition-colors cursor-pointer">
                  Bespoke Custom Atelier
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Journal & Guides */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Jewellery Journal
            </h3>
            <ul className="space-y-2 text-xs text-[#8E877D]">
              <li>
                <button onClick={() => handleLinkClick("blog")} className="hover:text-white transition-colors cursor-pointer">
                  All Journal Articles
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog-22k-vs-18k-gold-what-is-the-difference")} className="hover:text-white transition-colors cursor-pointer">
                  22K vs 18K Gold Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog-7-things-to-check-before-buying-gold-jewellery")} className="hover:text-white transition-colors cursor-pointer">
                  7 Checks Before Buying Gold
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog-complete-guide-to-indian-bridal-jewellery")} className="hover:text-white transition-colors cursor-pointer">
                  Indian Bridal Planning
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog-how-to-take-care-of-your-gold-jewellery")} className="hover:text-white transition-colors cursor-pointer">
                  Jewellery Care Manual
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("about")} className="hover:text-white transition-colors cursor-pointer">
                  Our 50-Year Legacy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Flagship & Hours */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Showroom & Concierge
            </h3>
            <div className="space-y-2.5 text-xs text-[#8E877D]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2A77A] mt-0.5 shrink-0" />
                <span>
                  {flagshipAddress.line1}, {flagshipAddress.line2}, {flagshipAddress.city} {flagshipAddress.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C2A77A] shrink-0" />
                <a href={`tel:${STORE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2A77A] shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C2A77A] mt-0.5 shrink-0" />
                <span>{openingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-1.5 text-xs text-[#C2A77A] hover:text-white transition-colors font-medium uppercase tracking-wider"
              >
                <span>Book In-Store Viewing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8E877D]">
          {/* Social Channels */}
          <div className="flex items-center gap-5">
            <span className="text-[11px] tracking-wider uppercase text-[#C2A77A]">Connect:</span>
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@{instagramHandle}</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Quick Legal Links */}
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick("locations")} className="hover:text-white transition-colors cursor-pointer">
              Showrooms
            </button>
            <button onClick={() => handleLinkClick("privacy-policy")} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick("terms-conditions")} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Copyright notice required by prompt */}
        <div className="pt-8 mt-8 border-t border-[#24211D] text-center text-xs text-[#666057]">
          <p>© 2026 {storeName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
