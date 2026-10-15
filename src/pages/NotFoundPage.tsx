import React from "react";
import { Link } from "../components/Link";
import { STORE_CONFIG } from "../data/storeConfig";
import { Compass, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center space-y-8">
      <div className="w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#D8C6A5] flex items-center justify-center mx-auto text-[#8F7040]">
        <Compass className="w-8 h-8 animate-spin-slow" />
      </div>

      <div className="space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F7040] font-semibold">
          404 Error · Page Not Located
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal">
          The Piece You Are Looking For Has Moved
        </h1>
        <p className="text-xs sm:text-sm text-[#666057] max-w-lg mx-auto leading-relaxed">
          The link you followed may have expired, or the specific creation has been relocated to our private vault. Explore our current collections and jewellery guides below.
        </p>
      </div>

      {/* Suggested Helpful Destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto text-left">
        <Link
          to="/collections"
          className="p-5 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all group flex flex-col justify-between space-y-2 shadow-sm"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#8F7040] font-semibold block">
              High Jewellery
            </span>
            <h3 className="font-serif text-base text-[#1E1B18] group-hover:text-[#AA8B56] transition-colors">
              Explore Collections
            </h3>
            <p className="text-[11px] text-[#666057]">
              Browse 22K gold, certified solitaires, and bridal suites.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-[#AA8B56] font-medium pt-2">
            <span>View Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <Link
          to="/blog"
          className="p-5 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all group flex flex-col justify-between space-y-2 shadow-sm"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#8F7040] font-semibold block">
              Connoisseur Library
            </span>
            <h3 className="font-serif text-base text-[#1E1B18] group-hover:text-[#AA8B56] transition-colors">
              Jewellery Journal
            </h3>
            <p className="text-[11px] text-[#666057]">
              10 comprehensive guides on gold purity, 4Cs, and care.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-[#AA8B56] font-medium pt-2">
            <span>Read Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <Link
          to="/"
          className="p-5 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all group flex flex-col justify-between space-y-2 shadow-sm"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#8F7040] font-semibold block">
              Heritage Atelier
            </span>
            <h3 className="font-serif text-base text-[#1E1B18] group-hover:text-[#AA8B56] transition-colors">
              Homepage
            </h3>
            <p className="text-[11px] text-[#666057]">
              Return to {STORE_CONFIG.storeName} main salon.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-[#AA8B56] font-medium pt-2">
            <span>Return Home</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};
