import React from "react";
import { STORE_CONFIG } from "../data/storeConfig";
import { IMAGES } from "../data/images";
import { PRODUCTS, Product } from "../data/products";
import { TESTIMONIALS } from "../data/testimonials";
import { ProductCard } from "../components/ProductCard";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Hammer, 
  History, 
  Layers, 
  MapPin, 
  Instagram, 
  ChevronDown, 
  Award,
  ArrowUpRight
} from "lucide-react";

interface HomePageProps {
  onNavigate: (route: string) => void;
  onSelectProduct: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenAppointment: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  isWishlisted,
  onToggleWishlist,
  onOpenAppointment,
}) => {
  const signatureProducts = PRODUCTS.filter((p) => p.signature || p.featured).slice(0, 6);

  const featuredCollections = [
    {
      title: "Gold Jewellery",
      description: "22K BIS Hallmarked heritage necklaces, bangles, and temple heirlooms.",
      route: "gold",
      image: IMAGES.collections.gold.url,
      alt: IMAGES.collections.gold.alt,
    },
    {
      title: "Diamond Jewellery",
      description: "Certified natural solitaires, tennis bracelets, and cascading chandeliers.",
      route: "diamond",
      image: IMAGES.collections.diamond.url,
      alt: IMAGES.collections.diamond.alt,
    },
    {
      title: "Bridal Jewellery",
      description: "Royal Polki jadau, antique chokers, and multi-tier Rani Haars for your forever moment.",
      route: "bridal",
      image: IMAGES.collections.bridal.url,
      alt: IMAGES.collections.bridal.alt,
    },
    {
      title: "Everyday Jewellery",
      description: "Refined 18K minimalist pendants, lightweight mangalsutras, and daily chains.",
      route: "everyday",
      image: IMAGES.collections.everyday.url,
      alt: IMAGES.collections.everyday.alt,
    },
    {
      title: "Men's Jewellery",
      description: "Substantial solid 22K kadas, diamond-cut curb chains, and architectural signets.",
      route: "mens",
      image: IMAGES.collections.mens.url,
      alt: IMAGES.collections.mens.alt,
    },
  ];

  const trustPoints = [
    {
      title: "BIS Hallmarked Gold",
      description: "Every piece certified with laser-engraved 6-digit HUID code for 916/750 pure gold verification.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Diamonds",
      description: "Natural diamonds with independent international grading from GIA and IGI laboratories.",
      icon: Award,
    },
    {
      title: "Transparent Pricing",
      description: "Zero hidden resin deductions. Transparent live bullion rates, net gold weights, and clear making charges.",
      icon: Eye,
    },
    {
      title: "Expert Craftsmanship",
      description: "Bespoke hand-drawn filigree, Nakashi repoussé, and jadau setting by master hereditary Karigars.",
      icon: Hammer,
    },
    {
      title: "Custom Atelier",
      description: "Collaborate directly with our master designers to translate your personal heirloom vision into reality.",
      icon: Layers,
    },
    {
      title: `Trusted Since ${STORE_CONFIG.yearEstablished}`,
      description: "Over five decades of uncompromised integrity, dressing generations of Indian families.",
      icon: History,
    },
  ];

  const guideCards = [
    {
      title: "How to Choose the Right Gold Jewellery",
      category: "Occasion Guide",
      readTime: "7 min read",
      slug: "how-to-choose-gold-jewellery-for-every-occasion",
    },
    {
      title: "Understanding Gold Purity: 22K vs 18K",
      category: "Gold Science",
      readTime: "6 min read",
      slug: "22k-vs-18k-gold-what-is-the-difference",
    },
    {
      title: "How to Buy a Diamond: The 4Cs Demystified",
      category: "Gemology",
      readTime: "10 min read",
      slug: "diamond-buying-guide-for-beginners",
    },
    {
      title: "Jewellery Care & Cleaning Guide",
      category: "Heirloom Care",
      readTime: "6 min read",
      slug: "how-to-take-care-of-your-gold-jewellery",
    },
    {
      title: "Complete Guide to Indian Bridal Jewellery",
      category: "Bridal Planning",
      readTime: "11 min read",
      slug: "complete-guide-to-indian-bridal-jewellery",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#181614] text-white overflow-hidden">
        {/* Background Real Photography with subtle warm contrast scrim */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.heroMain.url}
            alt={IMAGES.heroMain.alt}
            aspectRatio="aspect-auto"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
          {/* Measured Scrim for WCAG 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#1E1B18]/65 to-[#1E1B18]/40" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C2A77A]/50 bg-[#1E1B18]/70 backdrop-blur-sm text-[#D8C6A5] text-[11px] tracking-[0.25em] uppercase font-medium">
            <Sparkles className="w-3 h-3 text-[#AA8B56]" />
            <span>Fine Indian Heritage & Diamond Jewellery</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] leading-[1.12] text-balance">
            {STORE_CONFIG.tagline}
          </h1>

          <p className="text-base sm:text-lg text-[#EAE0CE]/90 max-w-2xl mx-auto font-light leading-relaxed">
            {STORE_CONFIG.subTagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("collections")}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#AA8B56] hover:bg-[#8F7040] text-white font-medium text-xs uppercase tracking-[0.15em] transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </button>
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF8F5] border border-[#D8C6A5]/70 font-medium text-xs uppercase tracking-[0.15em] transition-all cursor-pointer backdrop-blur-sm"
            >
              Visit Our Store
            </button>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#D8C6A5]/80 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* 2. FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
            Featured Collections
          </h2>
          <p className="text-xs sm:text-sm text-[#666057] leading-relaxed">
            Each creation is an ode to timeless traditions, shaped by master artisans using 22K hallmarked gold and certified diamonds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCollections.map((col, idx) => (
            <div
              key={col.title}
              onClick={() => onNavigate(col.route)}
              className={`group relative bg-white border border-[#E8E2D8] hover:border-[#AA8B56] overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#FAF8F5]">
                <ImageWithFallback
                  src={col.image}
                  alt={col.alt}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-[#1E1B18] group-hover:text-[#8F7040] transition-colors font-medium">
                    {col.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#AA8B56] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-[#666057] leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#8F7040] font-medium inline-flex items-center gap-1">
                    Discover Collection <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BRAND STORY SECTION */}
      <section className="bg-[#F4EFE6] py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Craft Photography */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] bg-white border border-[#D8C6A5] p-2 shadow-xl">
                <ImageWithFallback
                  src={IMAGES.editorial.storySection.url}
                  alt={IMAGES.editorial.storySection.alt}
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#1E1B18] text-[#EAE0CE] p-6 max-w-xs border border-[#AA8B56]/50 shadow-2xl">
                <span className="font-serif text-3xl font-light block text-white tabular-nums">
                  50+
                </span>
                <span className="text-xs tracking-wider uppercase text-[#D8C6A5]">
                  Years of Uncompromised Heritage & Trust
                </span>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
                  Our Legacy & Purpose
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal leading-tight text-balance">
                  "Jewellery is more than an ornament. It carries stories, traditions and memories from one generation to the next."
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#45403A] leading-relaxed font-light">
                <p>
                  Founded in {STORE_CONFIG.yearEstablished}, {STORE_CONFIG.storeName} was born out of an unwavering reverence for authentic Indian goldsmithing traditions. For five decades, our workshops have nurtured master Karigars hailing from generational craft families in Bengal, Rajasthan, and Tamil Nadu.
                </p>
                <p>
                  Every piece begins not with industrial machinery, but with hand-drawn charcoal sketches, pure 24K bullion melted to exacting 22K/18K alloy ratios, and hours of patient chiseling, repoussé, and setting. We believe that true luxury lies in unhurried devotion to purity, beauty, and permanence.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1B18] hover:bg-[#382917] text-white font-medium text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8C6A5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE COLLECTION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
              Masterpiece Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              Signature Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#666057] max-w-xl">
              Hand-selected signature creations showcasing our finest temple goldwork, certified solitaires, and royal bridal pieces.
            </p>
          </div>

          <button
            onClick={() => onNavigate("collections")}
            className="self-start md:self-auto text-xs uppercase tracking-wider text-[#1E1B18] hover:text-[#8F7040] font-semibold border-b border-[#1E1B18] pb-1 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>View All Creations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {signatureProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (TRUST POINTS) */}
      <section className="bg-white py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
              Purity & Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              Why Choose {STORE_CONFIG.storeName}
            </h2>
            <p className="text-xs sm:text-sm text-[#666057]">
              Every jewel is accompanied by unassailable certifications, ethical sourcing, and five decades of family trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#AA8B56]/60 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#D8C6A5] flex items-center justify-center text-[#8F7040]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1E1B18]">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#666057] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BRIDAL EDITORIAL SECTION */}
      <section className="relative bg-[#181614] text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.editorial.bridalEditorial.url}
            alt={IMAGES.editorial.bridalEditorial.alt}
            aspectRatio="aspect-auto"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#1E1B18]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D8C6A5] text-[11px] uppercase tracking-[0.2em] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#AA8B56]" />
              <span>The Royal Wedding Trousseau</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
              "For the Beginning of Forever"
            </h2>

            <p className="text-sm sm:text-base text-[#EAE0CE]/90 leading-relaxed font-light">
              A bride's adornment is a tapestry of familial blessings and timeless grace. Explore our couture bridal suites featuring intricately carved temple chokers, layered Rani Haars, syndicate Polki maang tikkas, and heirloom kadas crafted to illuminate your sacred day.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#D8C6A5]">
              <div className="border-l border-[#AA8B56] pl-3">
                <strong className="block text-white font-medium text-sm">Bridal Sets</strong>
                <span className="text-[11px] text-[#8E877D]">Chokers & Rani Haars</span>
              </div>
              <div className="border-l border-[#AA8B56] pl-3">
                <strong className="block text-white font-medium text-sm">Maang Tikka & Nath</strong>
                <span className="text-[11px] text-[#8E877D]">Sacred Head Adornments</span>
              </div>
              <div className="border-l border-[#AA8B56] pl-3">
                <strong className="block text-white font-medium text-sm">Nakashi Bangles</strong>
                <span className="text-[11px] text-[#8E877D]">Solid 22K Gold Kadas</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("bridal")}
                className="px-8 py-3.5 bg-[#AA8B56] hover:bg-[#8F7040] text-white font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Explore Bridal Collection
              </button>
              <button
                onClick={onOpenAppointment}
                className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-[#D8C6A5] font-medium text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Book Bridal Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JEWELLERY GUIDE (EDUCATIONAL JOURNAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
              Connoisseur's Library
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              Jewellery Guides & Journal
            </h2>
            <p className="text-xs sm:text-sm text-[#666057] max-w-xl">
              Empowering you with authentic gemological knowledge, purity benchmarks, and care guidance.
            </p>
          </div>

          <button
            onClick={() => onNavigate("blog")}
            className="self-start md:self-auto text-xs uppercase tracking-wider text-[#1E1B18] hover:text-[#8F7040] font-semibold border-b border-[#1E1B18] pb-1 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideCards.map((card) => (
            <div
              key={card.slug}
              onClick={() => onNavigate(`blog-${card.slug}`)}
              className="p-6 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#8E877D] uppercase tracking-wider">
                  <span className="text-[#8F7040] font-semibold">{card.category}</span>
                  <span>{card.readTime}</span>
                </div>
                <h3 className="font-serif text-lg text-[#1E1B18] group-hover:text-[#8F7040] transition-colors leading-snug">
                  {card.title}
                </h3>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs text-[#AA8B56] font-medium">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-[#FAF8F5] py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold">
              Words of Trust
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              Patron Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#666057]">
              Reflections from families across India who celebrate their most memorable moments with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <div
                key={test.id}
                className="p-8 bg-white border border-[#E8E2D8] flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#C2A77A]">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#45403A] leading-relaxed italic">
                    "{test.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F4EFE6] space-y-1">
                  <h4 className="font-serif text-base text-[#1E1B18] font-medium">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-[#8E877D]">
                    <span className="font-medium text-[#705530]">{test.city}</span>
                    <span aria-hidden="true">·</span>
                    <span>{test.occasion}</span>
                  </div>
                  <span className="text-[10px] text-[#8E877D] block truncate">
                    Selected: {test.piecePurchased}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F7040] font-semibold flex items-center justify-center gap-1.5">
            <Instagram className="w-3.5 h-3.5" />
            <span>Follow Our Journey</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
            @{STORE_CONFIG.instagramHandle}
          </h2>
          <p className="text-xs sm:text-sm text-[#666057]">
            Glimpses into our master Karigar workshops, real bridal portraits, and daily gold elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {IMAGES.instagram.map((item, idx) => (
            <a
              key={idx}
              href={`https://instagram.com/${STORE_CONFIG.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#FAF8F5] overflow-hidden border border-[#E8E2D8] block"
            >
              <ImageWithFallback
                src={item.url}
                alt={item.caption}
                aspectRatio="aspect-square"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1E1B18]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://instagram.com/${STORE_CONFIG.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#1E1B18] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
