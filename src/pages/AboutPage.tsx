import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  History, 
  HeartHandshake, 
  Hammer, 
  Layers, 
  ArrowRight 
} from "lucide-react";

interface AboutPageProps {
  onOpenAppointment: () => void;
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenAppointment,
  onNavigate,
}) => {
  const values = [
    {
      title: "Uncompromising Purity",
      desc: "Every gram of gold is 100% BIS hallmarked. We enforce zero resin, wax, or artificial weight fillers across all ornaments.",
      icon: ShieldCheck,
    },
    {
      title: "Hereditary Artistry",
      desc: "We provide sustainable patronage to third and fourth-generation Karigar families, preserving ancient Indian filigree and Jadau traditions.",
      icon: Hammer,
    },
    {
      title: "Transparent Trust",
      desc: "Live daily gold rates, transparent making charges, and computerized gross vs net gold weight verification on every invoice.",
      icon: Award,
    },
    {
      title: "Ethical Sourcing",
      desc: "All natural diamonds adhere strictly to the Kimberley Process, verified conflict-free and independently graded by GIA and IGI.",
      icon: HeartHandshake,
    },
  ];

  const timeline = [
    {
      year: "1974",
      title: "The Founding Bench in Mumbai",
      desc: "Founded by master goldsmith Purushottam Vanya in Mumbai's historic Kala Ghoda quarter, serving families seeking pure 22K gold temple ornaments.",
    },
    {
      year: "1988",
      title: "The Royal Bridal Atelier",
      desc: "Expanded into high bridal jewellery, reviving classical Rajasthani Jadau and Bengal wire filigree techniques for royal wedding trousseaus.",
    },
    {
      year: "2002",
      title: "Early BIS Hallmarking Pioneer",
      desc: "Became one of Maharashtra's first independent jewellery houses to voluntarily adopt mandatory 916 hallmarking across every gold ornament.",
    },
    {
      year: "2015",
      title: "In-House Gemological Grading Salon",
      desc: "Established an advanced microscope diamond laboratory in partnership with certified GIA and IGI gemologists for unassailable solitaire verification.",
    },
    {
      year: "2026",
      title: "Celebrating 50+ Years of Heritage",
      desc: "Over five decades of devotion, now welcoming third-generation brides and patrons across flagship salons in Mumbai, Delhi, Bengaluru, and Hyderabad.",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Editorial Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#181614] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.editorial.storySection.url}
            alt={IMAGES.editorial.storySection.alt}
            aspectRatio="aspect-auto"
            className="w-full h-full object-cover scale-105 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#1E1B18]/70 to-[#1E1B18]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C2A77A]/50 bg-[#1E1B18]/70 backdrop-blur-sm text-[#D8C6A5] text-[11px] tracking-widest uppercase font-medium">
            <Sparkles className="w-3 h-3 text-[#AA8B56]" />
            <span>Over 50 Years of Goldsmithing Legacy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
            Crafting Heirlooms Across Generations
          </h1>

          <p className="text-xs sm:text-sm text-[#EAE0CE]/90 max-w-2xl mx-auto leading-relaxed font-light">
            Discover the philosophy, artistry, and uncompromised ethics that have guided {STORE_CONFIG.storeName} since 1974.
          </p>
        </div>
      </section>

      {/* Our Story & Craftsmanship Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal leading-tight">
                Born at the Goldsmith's Bench
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#45403A] leading-relaxed font-light">
              <p>
                In 1974, {STORE_CONFIG.storeName} was established on a singular founding principle: that jewellery should never be a mass-produced commodity, but an emotional heirloom steeped in cultural reverence and unyielding purity.
              </p>
              <p>
                Our founder believed that the true spirit of Indian goldsmithing resides in the hands of the Karigar. While the modern world turned to automated assembly lines and synthetic stones, we preserved the sacred tradition of hand-alloying 24K bullion with copper and silver to achieve the supple, warm golden radiance that has adorned Indian brides for centuries.
              </p>
              <p>
                Today, under fourth-generation family leadership, our ateliers continue to handcraft pieces that grace grand weddings, quiet personal victories, and generational vaults across India and the globe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-white border border-[#D8C6A5] p-2 shadow-xl">
              <ImageWithFallback
                src={IMAGES.editorial.workshop.url}
                alt={IMAGES.editorial.workshop.alt}
                aspectRatio="aspect-[4/3]"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F4EFE6] py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
              The Foundations of Our House
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18]">
              Our Enduring Values
            </h2>
            <p className="text-xs sm:text-sm text-[#666057]">
              Four pillars that govern every sketch, every solder joint, and every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D8C6A5] flex items-center justify-center text-[#8F7040]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1E1B18]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#666057] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
            Chronology of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18]">
            Our Legacy Across Decades
          </h2>
          <p className="text-xs sm:text-sm text-[#666057]">
            Milestones that define our journey from a boutique Mumbai bench to one of India's most respected heritage houses.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[1px] before:bg-[#D8C6A5]">
          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className={`relative flex flex-col sm:flex-row gap-6 items-start ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Badge */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1E1B18] text-[#D8C6A5] border-2 border-white flex items-center justify-center text-[10px] font-bold z-10 tabular-nums">
                {idx + 1}
              </div>

              {/* Content Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 p-6 bg-white border border-[#E8E2D8] shadow-sm space-y-2">
                <span className="font-serif text-xl font-semibold text-[#8F7040] tabular-nums block">
                  {item.year}
                </span>
                <h4 className="font-serif text-base font-medium text-[#1E1B18]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#666057] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showroom Experience CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1B18] text-white p-8 sm:p-14 border border-[#AA8B56]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#D8C6A5] font-semibold">
              Personalized Hospitality
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              Experience Our Flagship Heritage Salon
            </h3>
            <p className="text-xs sm:text-sm text-[#8E877D] leading-relaxed">
              Step into our Mumbai Fort flagship or couture salons in Delhi, Bengaluru, and Hyderabad. Enjoy private bridal viewing suites and direct conversations with our master jewelers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3 bg-[#AA8B56] hover:bg-[#8F7040] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Book Salon Appointment
            </button>
            <button
              onClick={() => onNavigate("locations")}
              className="px-6 py-3 border border-[#D8C6A5] text-white hover:bg-white/10 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              View Showrooms
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
