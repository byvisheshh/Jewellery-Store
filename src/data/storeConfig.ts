export interface StoreConfig {
  storeName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  instagramHandle: string;
  yearEstablished: number;
  hallmarkLicense: string;
  flagshipAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  openingHours: string;
  goldRates: {
    gold24kPer10g: number;
    gold22kPer10g: number;
    gold18kPer10g: number;
    silverPer1kg: number;
    lastUpdated: string;
  };
}

export const STORE_CONFIG: StoreConfig = {
  storeName: "VANYA JEWELLERS",
  tagline: "Timeless Jewellery. Crafted for Your Moments.",
  subTagline: "Discover beautifully crafted jewellery that celebrates love, tradition and life's most memorable moments.",
  phone: "+919820154321",
  displayPhone: "+91 98201 54321",
  email: "concierge@vanyajewellers.com",
  whatsappNumber: "919820154321",
  defaultWhatsAppMessage: "Hi, I am interested in your jewellery collection. I would like to know more.",
  instagramHandle: "vanyajewellers",
  yearEstablished: 1974,
  hallmarkLicense: "HM-BIS-916-MH-2024",
  flagshipAddress: {
    line1: "Heritage Boulevard, 42 Mahatma Gandhi Road",
    line2: "Opposite Kala Ghoda Arts Quarter, Fort",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
  },
  openingHours: "Monday to Sunday: 10:30 AM – 8:30 PM (IST)",
  goldRates: {
    gold24kPer10g: 86450,
    gold22kPer10g: 79250,
    gold18kPer10g: 64840,
    silverPer1kg: 98500,
    lastUpdated: "Today, 10:30 AM IST",
  },
};
