import React from "react";
import { PRODUCTS, Product, JewelleryCategory } from "../data/products";
import { IMAGES } from "../data/images";
import { STORE_CONFIG } from "../data/storeConfig";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ShieldCheck, Sparkles, Calendar, MessageCircle, ArrowRight } from "lucide-react";

interface CategoryLandingPageProps {
  category: JewelleryCategory;
  onSelectProduct: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenAppointment: () => void;
  onNavigate: (route: string) => void;
}

interface CategoryMeta {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  purityBadge: string;
  editorialStory: string;
  bulletPoints: string[];
}

export const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  category,
  onSelectProduct,
  isWishlisted,
  onToggleWishlist,
  onOpenAppointment,
  onNavigate,
}) => {
  const metaMap: Record<JewelleryCategory, CategoryMeta> = {
    Gold: {
      title: "22K Heritage Gold Jewellery",
      subtitle: "Handcrafted pure 22K (916) hallmarked temple, Nakashi, and filigree ornaments forged with generational artistry.",
      heroImage: IMAGES.collections.gold.url,
      heroAlt: IMAGES.collections.gold.alt,
      purityBadge: "BIS 916 Hallmarked Gold Guarantee",
      editorialStory: "Gold in Indian tradition is not merely an alloy; it represents eternal prosperity and divine grace. Our gold collection features heavy Nakashi repoussé work, delicate hand-drawn Bengali wire filigree, and royal antique chokers created with solid gold cores and zero resin fillers.",
      bulletPoints: [
        "100% 22K 916 BIS Hallmarked with unique laser HUID code",
        "Transparent gross vs net gold weight billing",
        "Lifetime gold exchange policy at prevailing market rates",
        "Crafted by hereditary master goldsmiths across India",
      ],
    },
    Diamond: {
      title: "Certified Natural Diamond Jewellery",
      subtitle: "Exquisite solitaires, articulated chandelier drops, and fluid tennis bracelets featuring GIA & IGI certified stones.",
      heroImage: IMAGES.collections.diamond.url,
      heroAlt: IMAGES.collections.diamond.alt,
      purityBadge: "GIA & IGI Laser-Inscribed Certification",
      editorialStory: "Every diamond in our atelier is hand-selected for extraordinary light performance. We curate solely natural diamonds with Triple Excellent cuts, ensuring your piece radiates with maximum scintillation and pure fire across a lifetime.",
      bulletPoints: [
        "Natural untreated diamonds with laser-inscribed girdle numbers",
        "Mounted in solid 18K gold and platinum prongs",
        "VVS-VS clarities with colorless to near-colorless grades",
        "Complimentary lifetime ultrasonic cleaning & prong inspection",
      ],
    },
    Bridal: {
      title: "Royal Indian Bridal Jewellery",
      subtitle: "Curated wedding trousseau suites: regal Jadau Polki chokers, layered Rani Haars, maang tikkas, and heirloom kadas.",
      heroImage: IMAGES.collections.bridal.url,
      heroAlt: IMAGES.collections.bridal.alt,
      purityBadge: "Heirloom Trousseau Craftsmanship",
      editorialStory: "The bridal ornament is the crowning glory of life's most sacred milestone. Our bridal atelier collaborates closely with brides and their families to curate balanced silhouettes that harmonize with lehengas, sarees, and ancestral jewels.",
      bulletPoints: [
        "Syndicate uncut polki diamonds set in pure gold foil",
        "Natural untreated Zambian emeralds and south sea pearls",
        "Private trial sessions with bridal lehenga swatches",
        "Modular pieces designed for post-wedding cocktail adaptability",
      ],
    },
    "Men's Jewellery": {
      title: "Fine Jewellery for Men",
      subtitle: "Solid 22K cylindrical kadas, diamond-cut Cuban curb chains, and architectural diamond signet rings.",
      heroImage: IMAGES.collections.mens.url,
      heroAlt: IMAGES.collections.mens.alt,
      purityBadge: "Substantial Solid 22K & 18K Construction",
      editorialStory: "Crafted for the discerning gentleman who values substance and architectural precision. Our men's collection features substantial solid metal weights, ergonomic comfort bands, and refined satin finishes that transition effortlessly between ceremonial sherwanis and boardroom attire.",
      bulletPoints: [
        "Heavy solid gold construction with lifetime shape retention",
        "Engineered comfort-fit inner contours",
        "Diamond-cut bevels on curb and Cuban chain links",
        "Custom laser monogram engraving available on request",
      ],
    },
    "Everyday Jewellery": {
      title: "Everyday Luxury Gold Jewellery",
      subtitle: "Featherlight 18K chains, modern geometric mangalsutras, and dainty diamond pendants designed for daily grace.",
      heroImage: IMAGES.collections.everyday.url,
      heroAlt: IMAGES.collections.everyday.alt,
      purityBadge: "Comfort-Fit 18K & 22K Daily Wear",
      editorialStory: "Fine jewellery is meant to be lived in, not hidden in vaults. Our everyday line balances modern minimalist elegance with unyielding durability—featuring low-profile bezel mounts, smooth snag-free settings, and versatile silhouettes for the contemporary woman.",
      bulletPoints: [
        "Snag-free low profile mounts that protect delicate clothing",
        "Tangle-free micro link wire engineering",
        "Versatile designs that transition from morning coffee to black-tie dinners",
        "Sweat and water resilient for seamless everyday wear",
      ],
    },
  };

  const meta = metaMap[category] || metaMap.Gold;
  const categoryProducts = PRODUCTS.filter((p) => p.category === category);

  const whatsappInquiryUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Vanya Concierge, I am interested in exploring your "${meta.title}" collection. Please share available pieces.`
  )}`;

  return (
    <div className="space-y-16 pb-20">
      {/* Category Hero Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-[#181614] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={meta.heroImage}
            alt={meta.heroAlt}
            aspectRatio="aspect-auto"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#1E1B18]/70 to-[#1E1B18]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C2A77A]/50 bg-[#1E1B18]/70 backdrop-blur-sm text-[#D8C6A5] text-[11px] tracking-widest uppercase font-medium">
            <Sparkles className="w-3 h-3 text-[#AA8B56]" />
            <span>{meta.purityBadge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
            {meta.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#EAE0CE]/90 max-w-2xl mx-auto leading-relaxed font-light">
            {meta.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-2.5 bg-[#AA8B56] hover:bg-[#8F7040] text-white text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Book In-Store Viewing
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-transparent hover:bg-white/10 text-white border border-[#D8C6A5] text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Story & Craftsmanship Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFE6] p-8 sm:p-12 border border-[#E8E2D8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8F7040] font-semibold">
              The Art of {category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18]">
              Artistry, Purity & Heirloom Integrity
            </h2>
            <p className="text-xs sm:text-sm text-[#45403A] leading-relaxed font-light">
              {meta.editorialStory}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-6 border border-[#D8C6A5] space-y-3 shadow-sm">
            <h3 className="font-serif text-sm tracking-wider uppercase text-[#1E1B18] font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#AA8B56]" />
              <span>The Vanya Guarantee</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#666057]">
              {meta.bulletPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#AA8B56] font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curated Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8E2D8] pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18]">
              Curated {category} Showcase
            </h2>
            <span className="text-xs text-[#8E877D]">
              Showing {categoryProducts.length} certified creations
            </span>
          </div>

          <button
            onClick={() => onNavigate("collections")}
            className="text-xs uppercase tracking-wider text-[#8F7040] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categoryProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
              isWishlisted={isWishlisted(prod.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
