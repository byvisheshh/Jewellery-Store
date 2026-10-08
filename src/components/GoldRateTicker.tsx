import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { Sparkles, ShieldCheck } from "lucide-react";

export const GoldRateTicker: React.FC = () => {
  const { goldRates } = STORE_CONFIG;

  return (
    <div className="bg-[#1E1B18] text-[#EAE0CE] border-b border-[#382917] text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-sans">
        {/* Left: BIS Hallmarking Certification */}
        <div className="flex items-center gap-2 text-[#D8C6A5]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C2A77A]" />
          <span className="tracking-wide">
            100% BIS Hallmarked (916 / 750 HUID) & Certified Natural Diamonds
          </span>
        </div>

        {/* Right: Live Gold Bullion Rates */}
        <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase text-[#EAE0CE]/90">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[#8E877D]">Live Rates:</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              24K Gold: <strong className="font-semibold text-white">₹{goldRates.gold24kPer10g.toLocaleString("en-IN")}/10g</strong>
            </span>
            <span className="text-[#543E23]">|</span>
            <span>
              22K Gold: <strong className="font-semibold text-white">₹{goldRates.gold22kPer10g.toLocaleString("en-IN")}/10g</strong>
            </span>
            <span className="hidden sm:inline text-[#543E23]">|</span>
            <span className="hidden sm:inline">
              Silver: <strong className="font-semibold text-white">₹{goldRates.silverPer1kg.toLocaleString("en-IN")}/kg</strong>
            </span>
          </div>
          <span className="hidden md:inline text-[10px] text-[#8E877D] normal-case">
            ({goldRates.lastUpdated})
          </span>
        </div>
      </div>
    </div>
  );
};
