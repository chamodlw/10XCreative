export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
  badge?: string;
}

export const CLIENTS_ROW_1: ClientItem[] = [
  { id: "c1", name: "Travelco Holidays", category: "Travel & Tourism", logoText: "TRAVELCO HOLIDAYS", badge: "Outbound Tour Specialist" },
  { id: "c2", name: "Royal Aquarium", category: "Retail & Pet Accessories", logoText: "ROYAL AQUARIUM", badge: "Aquatics & Pets" },
  { id: "c3", name: "Nile Construction", category: "Civil Engineering", logoText: "NILE CONSTRUCTION", badge: "Engineering & Infrastructure" },
  { id: "c4", name: "Aura Luxury Living", category: "Real Estate", logoText: "AURA RESIDENCES", badge: "Luxury Property" },
  { id: "c5", name: "PureClean Solutions", category: "Home Services", logoText: "PURECLEAN", badge: "Facility Care" },
];

export const CLIENTS_ROW_2: ClientItem[] = [
  { id: "c6", name: "Velvet Roast Cafe", category: "F&B / Hospitality", logoText: "VELVET ROAST", badge: "Specialty Coffee" },
  { id: "c7", name: "Apex Athletics Club", category: "Health & Fitness", logoText: "APEX ATHLETICS", badge: "High-Performance Gym" },
  { id: "c8", name: "Pulse Nutrition", category: "Consumer Goods", logoText: "PULSE ENERGY", badge: "Sports Beverage" },
  { id: "c9", name: "Heritage Retail", category: "Fashion & Lifestyle", logoText: "HERITAGE COLLECTIVE", badge: "Artisan Brands" },
  { id: "c10", name: "Zenith FinTech", category: "Financial Services", logoText: "ZENITH CAPITAL", badge: "Fintech Growth" },
];
