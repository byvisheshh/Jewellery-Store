import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { ShieldCheck, Scale, RefreshCw } from "lucide-react";

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="space-y-2 border-b border-[#E8E2D8] pb-6">
        <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
          Customer Charter & Assurance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
          Terms & Conditions of Sale
        </h1>
        <p className="text-xs text-[#8E877D]">
          Effective as of March 2026 · {STORE_CONFIG.storeName}
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-[#45403A] leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#AA8B56]" />
            <span>1. Mandatory BIS Hallmarking Standards</span>
          </h2>
          <p>
            Every piece of gold jewellery offered by {STORE_CONFIG.storeName} is certified in accordance with Bureau of Indian Standards (BIS) Hallmarking regulations. Each article bears the official BIS triangular logo, the karat purity stamp (22K916 for 22 Karat or 18K750 for 18 Karat), and a unique 6-digit laser-engraved Hallmark Unique Identification (HUID) code. Patrons are encouraged to verify this code independently using the Government of India's BIS CARE application.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#AA8B56]" />
            <span>2. Transparent Pricing & Weight Calculations</span>
          </h2>
          <p>
            Gold bullion prices fluctuate daily in accordance with international bullion exchanges and are published each morning at 10:30 AM IST. All invoices issued by {STORE_CONFIG.storeName} strictly separate:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Gross Weight:</strong> Total weight of the finished ornament on calibrated legal metrology scales.</li>
            <li><strong>Stone / Enamel Weight:</strong> Precise weight of all diamonds, gemstones, pearls, or enamelling, completely deducted from gold valuation.</li>
            <li><strong>Net Gold Weight:</strong> The pure gold weight on which the daily gold rate is applied. No resin or lac filler is ever billed at gold value.</li>
            <li><strong>Making Charges:</strong> Transparent artisan craftsmanship and wastage fees as itemized on the quotation.</li>
            <li><strong>Statutory GST:</strong> 3% Goods and Services Tax applied in compliance with Indian taxation laws.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-[#AA8B56]" />
            <span>3. Lifetime Exchange & Buyback Policy</span>
          </h2>
          <p>
            We take pride in standing behind our creations for life. All authentic {STORE_CONFIG.storeName} ornaments returned with original tax invoice and certification are eligible for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Plain Gold Exchange:</strong> 100% value of the net gold weight calculated at the prevailing gold market rate on the day of exchange.</li>
            <li><strong>Diamond Exchange:</strong> 100% valuation of certified natural diamonds against new diamond jewellery purchases, or 90% in cash buyback.</li>
            <li><strong>Making Charges & Taxes:</strong> Making charges and government GST are non-refundable upon buyback.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            4. Bespoke & Custom Commission Policy
          </h2>
          <p>
            Bespoke creations require a 40% initial deposit prior to metal casting and gemstone procurement. Once a 3D CAD design is approved by the client in writing, modifications may incur additional melting or setting charges. Bespoke items crafted with personalized monogram engravings or specific non-standard sizing are non-refundable.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            5. Secure Transit & Delivery Insurance
          </h2>
          <p>
            All remote deliveries arranged by {STORE_CONFIG.storeName} are dispatched through armored logistics partners (such as Sequel Logistics or BVC Logistics) and are 100% insured against loss or transit theft until the package is physically signed for by the recipient with OTP verification.
          </p>
        </section>
      </div>
    </div>
  );
};
