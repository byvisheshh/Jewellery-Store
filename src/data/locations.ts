export interface ShowroomLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  timings: string;
  manager: string;
  isFlagship?: boolean;
  amenities: string[];
  googleMapsQuery: string;
}

export const SHOWROOM_LOCATIONS: ShowroomLocation[] = [
  {
    id: "loc-mumbai",
    name: "Mumbai Flagship Heritage Salon",
    city: "Mumbai",
    address: "Heritage Boulevard, 42 Mahatma Gandhi Road, Kala Ghoda Arts Quarter, Fort, Mumbai 400001",
    landmark: "Opposite Jehangir Art Gallery & David Sassoon Library",
    phone: "+91 98201 54321",
    email: "mumbai.flagship@vanyajewellers.com",
    timings: "Monday – Sunday: 10:30 AM – 8:30 PM",
    manager: "Devendra Singhal (Head of Assaying & Salon)",
    isFlagship: true,
    amenities: [
      "Private Bridal Consultation Suite",
      "GIA/IGI Diamond Microscope Grading Lab",
      "Master Karigar Live Bench & Bespoke Studio",
      "Complimentary Valet Parking",
      "Complimentary Ultrasonic Sonic Cleaning Lounge",
    ],
    googleMapsQuery: "Fort+Mumbai+Jewellery",
  },
  {
    id: "loc-delhi",
    name: "New Delhi Mehrauli Couture Suite",
    city: "New Delhi",
    address: "One Style Mile, Kalka Das Marg, Near Qutub Minar, Mehrauli, New Delhi 110030",
    landmark: "Adjacent to The Dhan Mill & Haveli Dharampura",
    phone: "+91 98112 76543",
    email: "delhi.salon@vanyajewellers.com",
    timings: "Monday – Sunday: 11:00 AM – 8:00 PM",
    manager: "Rohini Sen (Bridal Couture Director)",
    isFlagship: false,
    amenities: [
      "Exclusive By-Appointment Bridal Wardrobe Matching",
      "Antique Polki & Jadau Vault",
      "Champagne Hospitality Service",
      "Secure Vault Storage & Delivery Service",
    ],
    googleMapsQuery: "Mehrauli+New+Delhi+Jewellery",
  },
  {
    id: "loc-bengaluru",
    name: "Bengaluru Lavelle Road Showroom",
    city: "Bengaluru",
    address: "Prestige Centre, 18 Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru 560001",
    landmark: "Walking distance from UB City & Cubbon Park",
    phone: "+91 98860 32198",
    email: "bengaluru@vanyajewellers.com",
    timings: "Monday – Sunday: 10:30 AM – 8:30 PM",
    manager: "K. Subramanian (South Heritage Specialist)",
    isFlagship: false,
    amenities: [
      "Traditional South Indian Temple & Kasu Mala Collection",
      "Gold Bullion & 24K Coin Exchange Counter",
      "Private VIP Consultation Chambers",
      "Valet Parking",
    ],
    googleMapsQuery: "Lavelle+Road+Bengaluru+Jewellery",
  },
  {
    id: "loc-hyderabad",
    name: "Hyderabad Jubilee Hills Gallery",
    city: "Hyderabad",
    address: "Road No. 36, Jubilee Hills, Near Peddamma Temple Metro, Hyderabad 500033",
    landmark: "Opposite Designer Enclave, Jubilee Hills",
    phone: "+91 98490 87654",
    email: "hyderabad@vanyajewellers.com",
    timings: "Monday – Sunday: 11:00 AM – 8:30 PM",
    manager: "Farhan Ali (Royal Nizami & Heritage Specialist)",
    isFlagship: false,
    amenities: [
      "Basra Pearl & Nizami Choker Collection",
      "Bespoke Men's Fine Jewellery Salon",
      "Full BIS Hallmarking Verification Desk",
      "Valet Parking",
    ],
    googleMapsQuery: "Jubilee+Hills+Hyderabad+Jewellery",
  },
];
