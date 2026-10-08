import React from "react";
import { Product } from "../data/products";
import { STORE_CONFIG } from "../data/storeConfig";
import { X, Trash2, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onBookAppointment: (savedItemsSummary: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onSelectProduct,
  onBookAppointment,
}) => {
  if (!isOpen) return null;

  const totalEstimate = items.reduce((sum, item) => sum + item.price, 0);

  const whatsappMessage = `Hello Vanya Jewellers, I have curated a private wishlist of pieces for my upcoming milestone:\n${items
    .map((item, idx) => `${idx + 1}. ${item.name} (${item.metal}, ${item.priceDisplay})`)
    .join("\n")}\n\nPlease share availability for viewing at your showroom.`;

  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-md w-full bg-[#FAF8F5] shadow-2xl border-l border-[#AA8B56]/40 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8E2D8] flex items-center justify-between bg-white">
          <div>
            <h3 className="font-serif text-xl text-[#1E1B18] font-medium">
              Curated Wishlist
            </h3>
            <span className="text-xs text-[#8E877D]">
              {items.length} {items.length === 1 ? "creation" : "creations"} saved
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#45403A] hover:text-[#1E1B18] rounded-full hover:bg-[#F4EFE6] transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <span className="font-serif text-4xl text-[#D8C6A5]">VJ</span>
              <h4 className="font-serif text-lg text-[#1E1B18]">Your Wishlist is Empty</h4>
              <p className="text-xs text-[#8E877D] max-w-xs mx-auto leading-relaxed">
                Save pieces as you explore our collections to easily consult with our senior jewellery stylists or family members.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-white border border-[#E8E2D8] group hover:border-[#AA8B56] transition-colors"
                >
                  <div
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="w-16 h-20 shrink-0 bg-[#FAF8F5] cursor-pointer overflow-hidden"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      aspectRatio="aspect-[4/5]"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] tracking-wider uppercase text-[#8E877D] block">
                      {item.metal} · {item.grossWeight}
                    </span>
                    <h5
                      onClick={() => {
                        onSelectProduct(item);
                        onClose();
                      }}
                      className="font-serif text-sm font-medium text-[#1E1B18] group-hover:text-[#AA8B56] truncate cursor-pointer"
                    >
                      {item.name}
                    </h5>
                    <span className="text-xs font-semibold text-[#1E1B18] tabular-nums block mt-0.5">
                      {item.priceDisplay}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-[#8E877D] hover:text-red-600 transition-colors cursor-pointer"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E8E2D8] bg-white space-y-3">
            <div className="flex items-center justify-between text-xs pb-1">
              <span className="text-[#8E877D] uppercase tracking-wider">Estimated Total</span>
              <span className="text-base font-semibold text-[#1E1B18] tabular-nums">
                ₹{totalEstimate.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire All on WhatsApp</span>
            </a>

            {/* Book Viewing for All Saved Pieces */}
            <button
              onClick={() => {
                onBookAppointment(items.map((i) => i.name).join(", "));
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1E1B18] hover:bg-[#382917] text-white font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
              <span>Book Viewing for Saved Pieces</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
