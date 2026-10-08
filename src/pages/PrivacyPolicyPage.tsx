import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { ShieldCheck } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="space-y-2 border-b border-[#E8E2D8] pb-6">
        <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
          Legal & Privacy Assurance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8E877D]">
          Last Updated: March 2026 · {STORE_CONFIG.storeName}
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-[#45403A] leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            1. Our Commitment to Client Confidentiality
          </h2>
          <p>
            At {STORE_CONFIG.storeName}, client confidentiality is a cornerstone of our heritage. We recognize the deeply sensitive nature of high-value jewellery acquisitions, wedding preparations, and family heirloom remodelling. We are committed to safeguarding all personal, financial, and bespoke design data entrusted to us.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            2. Information We Collect
          </h2>
          <p>
            When you visit our showrooms, schedule appointments, or interact with our digital atelier, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact Information: Full name, phone number, email address, and postal delivery details.</li>
            <li>Government Identification (PAN / Aadhaar): Mandated under the Government of India Prevention of Money Laundering Act (PMLA) for jewellery purchases exceeding statutory thresholds.</li>
            <li>Bespoke Commission Details: Finger measurements, design preferences, and customized engraving texts.</li>
            <li>Appointment Preferences: Preferred showroom, trial dates, and jewellery categories of interest.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            3. How We Use Your Information
          </h2>
          <p>
            Your information is used strictly to fulfill your requested services, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Issuing statutory BIS hallmarked GST tax invoices and IGI/GIA diamond authenticity certificates.</li>
            <li>Coordinating secure armored transit delivery for online purchases.</li>
            <li>Facilitating lifetime sonic cleaning, prong inspections, and exchange verification in our showrooms.</li>
            <li>Communicating via WhatsApp regarding your bespoke commission progress or appointment confirmations.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            4. Absolute Prohibition on Third-Party Data Sale
          </h2>
          <p>
            {STORE_CONFIG.storeName} has never, and will never, sell, lease, or monetize your personal information to third-party marketing firms or data brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg text-[#1E1B18] font-semibold">
            5. Contact Our Privacy Officer
          </h2>
          <p>
            For any inquiries regarding data protection or to request the deletion of your consultation records, please contact our Compliance Officer at:
          </p>
          <div className="p-4 bg-white border border-[#E8E2D8] text-xs">
            <strong className="block text-[#1E1B18]">{STORE_CONFIG.storeName} Data Privacy Cell</strong>
            <span>Email: privacy@vanyajewellers.com</span>
            <br />
            <span>Telephone: {STORE_CONFIG.displayPhone}</span>
            <br />
            <span>Address: {STORE_CONFIG.flagshipAddress.line1}, {STORE_CONFIG.flagshipAddress.city} {STORE_CONFIG.flagshipAddress.pincode}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
