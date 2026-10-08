import React, { useState } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { Search, Heart, Menu, X, Calendar, Phone } from "lucide-react";

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenAppointment: () => void;
  wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenWishlist,
  onOpenAppointment,
  wishlistCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Collections", route: "collections" },
    { label: "Gold", route: "gold" },
    { label: "Diamond", route: "diamond" },
    { label: "Bridal", route: "bridal" },
    { label: "Men's", route: "mens" },
    { label: "Everyday", route: "everyday" },
    { label: "Custom", route: "custom" },
    { label: "Journal", route: "blog" },
    { label: "About", route: "about" },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Title (Single text element wordmark in display face) */}
        <button
          onClick={() => handleLinkClick("home")}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#AA8B56]"
        >
          <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.18em] text-[#1E1B18] uppercase group-hover:text-[#8F7040] transition-colors">
            {STORE_CONFIG.storeName}
          </span>
        </button>

        {/* Zone 2: Navigation Links (Clean text links with subtle hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.08em] font-medium text-[#45403A] uppercase">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleLinkClick(link.route)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? "text-[#1E1B18] font-semibold"
                    : "hover:text-[#1E1B18]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#AA8B56]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Search, Wishlist, Appointment CTA) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#45403A] hover:text-[#1E1B18] transition-colors cursor-pointer"
            aria-label="Search jewellery and journal"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button
            onClick={onOpenWishlist}
            className="p-2 text-[#45403A] hover:text-[#1E1B18] transition-colors relative cursor-pointer"
            aria-label="View Saved Items"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#AA8B56] text-white text-[10px] font-medium rounded-full flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Appointment CTA */}
          <button
            onClick={onOpenAppointment}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#1E1B18] hover:bg-[#382917] transition-colors cursor-pointer border border-[#1E1B18]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D8C6A5]" />
            <span>Book Visit</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E1B18] hover:text-[#8F7040] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleLinkClick(link.route)}
                className={`text-left py-2 px-3 text-sm tracking-wider uppercase font-medium rounded transition-colors ${
                  currentRoute === link.route
                    ? "bg-[#EAE0CE] text-[#1E1B18] font-semibold"
                    : "text-[#45403A] hover:bg-[#F4EFE6]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenAppointment();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-widest font-semibold bg-[#1E1B18] text-white"
            >
              <Calendar className="w-4 h-4 text-[#D8C6A5]" />
              Book Showroom Appointment
            </button>
            <button
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-widest font-medium border border-[#C2A77A] text-[#1E1B18]"
            >
              <Phone className="w-3.5 h-3.5 text-[#AA8B56]" />
              Contact Us & Locations
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
