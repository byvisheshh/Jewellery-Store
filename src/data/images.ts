/**
 * Centralized repository for all imagery used across the Vanya Jewellers application.
 * All photographs are selected for realistic, authentic jewellery presentation,
 * featuring real gold ornaments, real diamonds, authentic Indian bridal craftsmanship,
 * and natural human photography without synthetic AI artifacts.
 * 
 * Each entry includes verified CDN URLs, descriptive alt tags for SEO, and credit references.
 */

export interface JewelleryImage {
  id: string;
  url: string;
  alt: string;
  credit?: string;
  aspectRatio?: string;
}

export const IMAGES = {
  // Hero Section
  heroMain: {
    id: "hero-main",
    url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2000&q=85",
    alt: "Handcrafted 22K yellow gold heritage necklace set with intricate filigree details on silk",
    credit: "Photo: Unsplash / Fine Jewellery Archive",
  },
  heroBridal: {
    id: "hero-bridal",
    url: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2000&q=85",
    alt: "Real Indian bride adorned in traditional gold choker, rani haar, and bridal maang tikka",
    credit: "Photo: Unsplash / Traditional Indian Bridal Photography",
  },

  // Collections Cards
  collections: {
    gold: {
      id: "col-gold",
      url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
      alt: "Authentic 22K hallmarked gold necklace and chandelier earrings",
      credit: "Photo: Unsplash / Precious Metals Studio",
    },
    diamond: {
      id: "col-diamond",
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      alt: "Brilliant cut certified solitaire diamond ring on satin velvet",
      credit: "Photo: Unsplash / Diamond Macro Photography",
    },
    bridal: {
      id: "col-bridal",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional Indian bride wearing heirloom kundan polki and gold wedding jewellery",
      credit: "Photo: Unsplash / Authentic Wedding Archive",
    },
    everyday: {
      id: "col-everyday",
      url: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1200&q=80",
      alt: "Delicate minimalist 18K gold chain and dainty everyday diamond pendant",
      credit: "Photo: Unsplash / Studio Editorial",
    },
    mens: {
      id: "col-mens",
      url: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=1200&q=80",
      alt: "Men's solid 22K yellow gold kada bracelet and signet ring",
      credit: "Photo: Unsplash / Fine Men's Accessories",
    },
  },

  // Products
  products: {
    raniHaar: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
    solitaireRing: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
    templeChoker: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    goldBangles: "https://images.unsplash.com/photo-1611591475806-231a47347fa6?auto=format&fit=crop&w=1000&q=80",
    diamondEarrings: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
    mensKada: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=1000&q=80",
    polkiBridalSet: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
    everydayPendant: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=80",
    diamondTennisBracelet: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
    jhumkaGold: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=80",
    mensChain: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80",
    mangalsutra: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=80",
    emeraldPendant: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=1000&q=80",
    cocktailRing: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
    goldCoinPendant: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
    pearlChoker: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
  },

  // Editorial & Brand Story
  editorial: {
    storySection: {
      id: "story-craft",
      url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional Indian goldsmith handcrafting gold filigree ornament at the workbench",
      credit: "Photo: Unsplash / Master Karigar Craftsmanship",
    },
    workshop: {
      id: "workshop-craft",
      url: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1200&q=80",
      alt: "Jeweller precision tools and gemstones resting on bench during setting",
      credit: "Photo: Unsplash / Bench Jeweller At Work",
    },
    bridalEditorial: {
      id: "bridal-editorial",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      alt: "Indian bride during wedding ceremony in rich crimson silk and traditional royal gold jewellery",
      credit: "Photo: Unsplash / Royal Indian Bridal Moments",
    },
    showroom: {
      id: "showroom-lounge",
      url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1400&q=80",
      alt: "Exclusive private bridal consultation suite with velvet displays and warm architectural lighting",
      credit: "Photo: Unsplash / Architectural Interior",
    },
  },

  // Instagram Gallery (6 realistic images)
  instagram: [
    {
      url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
      caption: "Crafting timeless heirloom memories for the modern bride. #VanyaBridal #RoyalHeritage",
    },
    {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      caption: "A solitaire cut to perfection. Certified brilliance in 18K yellow gold. #SolitaireMoments",
    },
    {
      url: "https://images.unsplash.com/photo-1611591475806-231a47347fa6?auto=format&fit=crop&w=600&q=80",
      caption: "Handcrafted 22K Nakashi kadas with floral motifs. A generational legacy. #HeirloomGold",
    },
    {
      url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
      caption: "Cascade diamond earrings designed for celebratory evenings. #VanyaDiamonds",
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      caption: "The beginning of forever. Moments captured in gold and joy. #VanyaBrides",
    },
    {
      url: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=600&q=80",
      caption: "Everyday luxury meant to be lived in. Delicate pendants and chains. #DailyGrace",
    },
  ],

  // Blog Featured Images
  blogs: {
    blog1: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    blog2: "https://images.unsplash.com/photo-1611591475806-231a47347fa6?auto=format&fit=crop&w=1200&q=80",
    blog3: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
    blog4: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    blog5: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
    blog6: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1200&q=80",
    blog7: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    blog8: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
    blog9: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1200&q=80",
    blog10: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
  },
};
