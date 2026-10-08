import React, { useState } from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { 
  Sparkles, 
  Layers, 
  MessageCircle, 
  CheckCircle2, 
  Compass, 
  Hammer, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

interface CustomJewelleryPageProps {
  onOpenAppointment: () => void;
}

export const CustomJewelleryPage: React.FC<CustomJewelleryPageProps> = ({
  onOpenAppointment,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jewelleryType: "Bridal Heirloom Necklace",
    metalChoice: "22K Yellow Gold (916)",
    gemstonePreference: "Natural Diamonds & Zambian Emeralds",
    budgetRange: "₹5,00,000 – ₹10,00,000",
    targetDate: "",
    visionDescription: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Initial Vision & Consultation",
      description: "Meet with our head designer in our private salon or over video consultation to share your reference sketches, heirloom stones, wedding garments, or symbolic motifs.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Hand-Drawn Gouache & 3D CAD",
      description: "Our atelier creates hand-painted gouache illustrations and millimetre-accurate 3D CAD renders, allowing you to preview proportions before a single gram of gold is melted.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Ethical Gem & Bullion Curation",
      description: "We source certified GIA diamonds and untreated precious gemstones matching your color and clarity criteria, weighed and inspected under gemological microscopes.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "Karigar Bench Handcrafting",
      description: "Master goldsmiths in our heritage workshop hand-draw filigree wires, chase Nakashi reliefs, and set stones using centuries-old Jadau techniques.",
      icon: Hammer,
    },
    {
      num: "05",
      title: "BIS Hallmarking & Grand Unveiling",
      description: "The finished jewel undergoes rigorous assaying and receives its unique 6-digit laser HUID hallmark before being unveiled in our bespoke velvet presentation case.",
      icon: ShieldCheck,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const whatsappBespokeUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vanya Atelier, I am interested in a Custom Bespoke Jewellery commission:\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.jewelleryType}\nMetal: ${formData.metalChoice}\nBudget: ${formData.budgetRange}\nVision: ${formData.visionDescription || "Please arrange a consultation."}`
  )}`;

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-[#181614] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.editorial.workshop.url}
            alt={IMAGES.editorial.workshop.alt}
            aspectRatio="aspect-auto"
            className="w-full h-full object-cover scale-105 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#1E1B18]/70 to-[#1E1B18]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C2A77A]/50 bg-[#1E1B18]/70 backdrop-blur-sm text-[#D8C6A5] text-[11px] tracking-widest uppercase font-medium">
            <Sparkles className="w-3 h-3 text-[#AA8B56]" />
            <span>The Bespoke Atelier</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
            Your Vision. Handcrafted for Eternity.
          </h1>

          <p className="text-xs sm:text-sm text-[#EAE0CE]/90 max-w-2xl mx-auto leading-relaxed font-light">
            Transform personal narratives, heirloom family gemstones, and rare bridal visions into one-of-a-kind BIS hallmarked masterpieces.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
            The Bespoke Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18]">
            From Concept to Heirloom
          </h2>
          <p className="text-xs sm:text-sm text-[#666057]">
            Every bespoke creation takes approximately 4 to 8 weeks, ensuring unhurried dedication to every facet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="p-6 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-colors space-y-3 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-light text-[#AA8B56] tabular-nums">
                      {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#8F7040]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#1E1B18] leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#666057] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inquiry Form & Consultation Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#AA8B56]/50 p-8 sm:p-12 shadow-xl">
          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <span className="text-xs uppercase tracking-widest text-[#AA8B56] font-semibold">
                  Begin Your Commission
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1B18]">
                  Custom Jewellery Consultation Request
                </h3>
                <p className="text-xs text-[#666057] max-w-lg mx-auto">
                  Share your preliminary ideas with our senior design director. We will schedule a private salon or digital design review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Gayatri Deshmukh"
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98000 00000"
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Jewellery Silhouette *
                    </label>
                    <select
                      value={formData.jewelleryType}
                      onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    >
                      <option value="Bridal Heirloom Necklace">Bridal Heirloom Necklace</option>
                      <option value="Custom Solitaire Engagement Ring">Custom Solitaire Engagement Ring</option>
                      <option value="Antique Temple Kadas">Pair of Antique Temple Kadas</option>
                      <option value="Heirloom Gemstone Remodelling">Heirloom Gemstone Remodelling</option>
                      <option value="Men's Architectural Kada or Chain">Men's Architectural Kada or Chain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Precious Metal Purity *
                    </label>
                    <select
                      value={formData.metalChoice}
                      onChange={(e) => setFormData({ ...formData, metalChoice: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    >
                      <option value="22K Yellow Gold (916)">22K Yellow Gold (916 BIS)</option>
                      <option value="18K Champagne Gold (750)">18K Champagne Gold (750 BIS)</option>
                      <option value="18K White Gold / Rose Gold">18K White Gold / Rose Gold</option>
                      <option value="Platinum (950)">Platinum (950)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    >
                      <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
                      <option value="₹5,00,000 – ₹10,00,000">₹5,00,000 – ₹10,00,000</option>
                      <option value="₹10,00,000 – ₹25,00,000">₹10,00,000 – ₹25,00,000</option>
                      <option value="₹25,00,000+">₹25,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#45403A] font-medium mb-1">
                      Target Completion Date
                    </label>
                    <input
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#45403A] font-medium mb-1">
                    Your Vision & Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.visionDescription}
                    onChange={(e) => setFormData({ ...formData, visionDescription: e.target.value })}
                    placeholder="Describe your design inspirations, family heirlooms to be remounted, or specific bridal outfits..."
                    className="w-full p-2.5 bg-white border border-[#E8E2D8] focus:border-[#AA8B56] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1E1B18] hover:bg-[#382917] text-white text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Submit Bespoke Commission Request
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl text-[#1E1B18]">
                Bespoke Inquiry Received
              </h3>

              <p className="text-xs text-[#666057] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our head design consultant will reach out via WhatsApp/phone on <strong>{formData.phone}</strong> within 24 hours to review your bespoke requirements.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={whatsappBespokeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Atelier on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 border border-[#AA8B56] text-[#1E1B18] text-xs uppercase tracking-wider font-semibold hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
