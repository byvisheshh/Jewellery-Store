import React, { useState } from "react";
import { Product } from "../data/products";
import { STORE_CONFIG } from "../data/storeConfig";
import { ImageWithFallback } from "./ImageWithFallback";
import { 
  X, 
  Heart, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  MapPin, 
  Scale 
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onBookAppointment: (productName?: string) => void;
  onNavigateToLocations: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onBookAppointment,
  onNavigateToLocations,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello, I would like to inquire about purchasing "${product.name}" (Purity: ${product.purity}, Weight: ${product.grossWeight}, Price: ${product.priceDisplay}). Please connect me with a senior jewellery concierge.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#FAF8F5] shadow-2xl border border-[#AA8B56]/30 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-[#1E1B18] hover:text-white rounded-full text-[#1E1B18] transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content - Scrollable Interior */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Image Gallery (Contiguous Sticky Module) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/5] bg-white border border-[#E8E2D8] overflow-hidden">
                <ImageWithFallback
                  src={activeImage}
                  alt={product.name}
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-20 h-20 shrink-0 border overflow-hidden cursor-pointer transition-all ${
                        activeImage === imgUrl
                          ? "border-[#AA8B56] ring-1 ring-[#AA8B56]"
                          : "border-[#E8E2D8] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <ImageWithFallback
                        src={imgUrl}
                        alt={`${product.name} angle ${idx + 1}`}
                        aspectRatio="aspect-square"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* BIS Hallmark Certificate Card */}
              <div className="bg-[#F4EFE6] p-4 border border-[#D8C6A5] text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#705530] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#AA8B56]" />
                  <span>BIS Hallmarking & Authenticity Guarantee</span>
                </div>
                <p className="text-[#666057] leading-relaxed">
                  Every gram of gold in this piece is certified under BIS Hallmarking standards with a laser-engraved 6-digit HUID code ({product.hallmarkCode}) verifiable on the BIS CARE application.
                </p>
              </div>
            </div>

            {/* Right Column: Specifications & Acquisition CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & Collection Kicker */}
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#8E877D]">
                  <span>{product.category} · {product.jewelleryType}</span>
                  <span className="text-emerald-700 font-medium">{product.availability}</span>
                </div>

                {/* Product Title */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-medium leading-tight">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="py-2 border-y border-[#E8E2D8] flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8E877D] block">Price (Incl. all taxes & making charges)</span>
                    <span className="text-2xl sm:text-3xl font-semibold text-[#1E1B18] tabular-nums">
                      {product.priceDisplay}
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="flex items-center gap-1.5 text-xs text-[#666057] hover:text-[#AA8B56] transition-colors cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#AA8B56] text-[#AA8B56]" : ""}`} />
                    <span>{isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}</span>
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-[#45403A] leading-relaxed">
                  {product.description}
                </p>

                {/* Detailed Specifications Table */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-[#AA8B56]" />
                    <span>Technical Specifications</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-white border border-[#E8E2D8]">
                      <span className="text-[#8E877D] block">Gold Purity</span>
                      <strong className="text-[#1E1B18] font-medium">{product.purity}</strong>
                    </div>
                    <div className="p-2.5 bg-white border border-[#E8E2D8]">
                      <span className="text-[#8E877D] block">Gross Weight</span>
                      <strong className="text-[#1E1B18] font-medium">{product.grossWeight}</strong>
                    </div>
                    {product.netGoldWeight && (
                      <div className="p-2.5 bg-white border border-[#E8E2D8]">
                        <span className="text-[#8E877D] block">Net Gold Weight</span>
                        <strong className="text-[#1E1B18] font-medium">{product.netGoldWeight}</strong>
                      </div>
                    )}
                    <div className="p-2.5 bg-white border border-[#E8E2D8]">
                      <span className="text-[#8E877D] block">Occasion</span>
                      <strong className="text-[#1E1B18] font-medium">{product.occasion}</strong>
                    </div>
                  </div>

                  {/* Diamond Specs if applicable */}
                  {product.diamondSpecs && (
                    <div className="p-3 bg-white border border-[#E8E2D8] text-xs space-y-1 mt-2">
                      <div className="flex items-center gap-1 text-[#8F7040] font-semibold uppercase tracking-wider text-[11px]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Natural Diamond Certification</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                        <div>
                          <span className="text-[#8E877D]">Total Carat:</span> <strong>{product.diamondSpecs.totalCarat}</strong>
                        </div>
                        <div>
                          <span className="text-[#8E877D]">Color / Clarity:</span> <strong>{product.diamondSpecs.color} / {product.diamondSpecs.clarity}</strong>
                        </div>
                        <div>
                          <span className="text-[#8E877D]">Cert:</span> <strong>{product.diamondSpecs.certification}</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Features Bullets */}
                <div className="pt-2">
                  <h4 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold mb-2">
                    Craftsmanship Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#666057]">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#AA8B56] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: WhatsApp, Book Appointment, Visit Showrooms */}
              <div className="space-y-3 pt-4 border-t border-[#E8E2D8]">
                {/* Primary WhatsApp Enquiry */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Secondary Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      onBookAppointment(product.name);
                      onClose();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1E1B18] hover:bg-[#382917] text-white font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
                    <span>Book Appointment</span>
                  </button>

                  <button
                    onClick={() => {
                      onNavigateToLocations();
                      onClose();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 border border-[#AA8B56] hover:bg-[#F4EFE6] text-[#1E1B18] font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#AA8B56]" />
                    <span>Visit Showroom</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
