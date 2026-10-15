import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { Link } from "./Link";
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
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const { storeName, displayPhone, email, openingHours, flagshipAddress, instagramHandle, hallmarkLicense } = STORE_CONFIG;

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(STORE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <footer className="bg-[#181614] text-[#EAE0CE] border-t border-[#382917] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2C2824]">
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" title={`${storeName} Home`}>
              <span className="font-serif text-2xl tracking-[0.2em] font-medium text-white uppercase block">
                {storeName}
              </span>
            </Link>
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

          {/* Col 2: Collections with Crawlable Anchor Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Collections
            </h3>
            <ul className="space-y-2 text-xs text-[#8E877D]">
              <li>
                <Link to="/collections/gold-jewellery" className="hover:text-white transition-colors">
                  22K Gold Jewellery Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/diamond-jewellery" className="hover:text-white transition-colors">
                  Certified Diamond Solitaires
                </Link>
              </li>
              <li>
                <Link to="/collections/bridal-jewellery" className="hover:text-white transition-colors">
                  Royal Bridal Trousseau Sets
                </Link>
              </li>
              <li>
                <Link to="/collections/mens-jewellery" className="hover:text-white transition-colors">
                  Men's Fine Gold Jewellery
                </Link>
              </li>
              <li>
                <Link to="/collections/everyday-jewellery" className="hover:text-white transition-colors">
                  Everyday Minimalist Gold
                </Link>
              </li>
              <li>
                <Link to="/custom-jewellery" className="hover:text-white transition-colors">
                  Bespoke Custom Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Journal & Guides with Crawlable Anchor Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Jewellery Journal
            </h3>
            <ul className="space-y-2 text-xs text-[#8E877D]">
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  All Buying Guides & Articles
                </Link>
              </li>
              <li>
                <Link to="/blog/22k-vs-18k-gold-what-is-the-difference" className="hover:text-white transition-colors">
                  22K vs 18K Gold Purity Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/7-things-to-check-before-buying-gold-jewellery" className="hover:text-white transition-colors">
                  7 Checks Before Buying Gold
                </Link>
              </li>
              <li>
                <Link to="/blog/complete-guide-to-indian-bridal-jewellery" className="hover:text-white transition-colors">
                  Complete Indian Bridal Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-take-care-of-your-gold-jewellery" className="hover:text-white transition-colors">
                  Gold Jewellery Care Manual
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our 50-Year Goldsmith Legacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Flagship & Hours */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm tracking-wider uppercase text-white font-semibold">
              Showrooms & Concierge
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
                className="inline-flex items-center gap-1.5 text-xs text-[#C2A77A] hover:text-white transition-colors font-medium uppercase tracking-wider cursor-pointer"
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

          {/* Quick Legal Links as Crawlable Anchors */}
          <div className="flex items-center gap-6">
            <Link to="/store-locations" className="hover:text-white transition-colors">
              Store Locations
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 mt-8 border-t border-[#24211D] text-center text-xs text-[#666057]">
          <p>© 2026 {storeName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
