export interface Testimonial {
  id: string;
  name: string;
  city: string;
  occasion: string;
  review: string;
  piecePurchased: string;
  rating: number;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ananya & Raghav Singhania",
    city: "Mumbai",
    occasion: "Bridal Trousseau",
    review: "The craftsmanship and attention to detail were exceptional. The team helped us choose the perfect bridal set for our Udaipur wedding. The transparency regarding 22K hallmarking and net gold weight gave our family complete peace of mind.",
    piecePurchased: "Maharani Polki & Emerald Bridal Choker Set",
    rating: 5,
    date: "January 2026",
  },
  {
    id: "test-2",
    name: "Dr. Vikram Joshi",
    city: "New Delhi",
    occasion: "25th Anniversary Milestone",
    review: "Purchased the Celestia solitaire ring for my wife's silver jubilee anniversary. The diamond fire under natural light is breathtaking. Mr. Singhal explained the GIA grading report patiently without any sales pressure.",
    piecePurchased: "The Celestia Round Solitaire Ring (1.52ct)",
    rating: 5,
    date: "February 2026",
  },
  {
    id: "test-3",
    name: "Sunita & Arvind Patel",
    city: "Ahmedabad",
    occasion: "Family Wedding & Dhanteras",
    review: "We have been patrons of Vanya Jewellers for over two decades. Their Padmavathi Nakashi bangles are solid 22K gold with zero artificial lac filling. True heirlooms that my daughter will cherish forever.",
    piecePurchased: "Padmavathi Nakashi Antique Gold Bangles",
    rating: 5,
    date: "November 2025",
  },
  {
    id: "test-4",
    name: "Meenakshi Sundaram",
    city: "Bengaluru",
    occasion: "Daughter's Arangetram & Wedding",
    review: "The Lakshmi Kasu Mala we received was exquisite. The finish on the embossed coins has that rare, authentic temple warmth that only master karigars can execute. Exceptional service at the Bengaluru showroom.",
    piecePurchased: "Lakshmi Kasu Mala Heritage Gold Necklace",
    rating: 5,
    date: "December 2025",
  },
  {
    id: "test-5",
    name: "Kabir Malhotra",
    city: "Hyderabad",
    occasion: "Self Signature Jewellery",
    review: "Finding substantial, high-weight gold jewellery designed specifically for men with refined tastes is hard. The Rajvansh solid 22K kada exceeded expectations — perfect weight balance and flawless mirror bevels.",
    piecePurchased: "Rajvansh Men's Solid Gold Kada (52.8g)",
    rating: 5,
    date: "February 2026",
  },
];
