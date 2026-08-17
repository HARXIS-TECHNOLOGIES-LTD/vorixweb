import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";

export type PropertyType =
  | "Student Housing"
  | "Self-Contained"
  | "Studio"
  | "Apartment"
  | "Shared Apartment"
  | "Duplex"
  | "Shortlet";

export type PriceUnit = "year" | "night";

export interface Property {
  id: string;
  name: string;
  area: string;
  city: string;
  type: PropertyType;
  price: number;
  unit: PriceUnit;
  bedrooms: number;
  bathrooms: number;
  size: string;
  student: boolean;
  verified: boolean;
  images: string[];
  description: string;
  amenities: string[];
  provider: { name: string; role: string; since: string; responseTime: string; verified: boolean };
  nearby: string[];
}

const IMGS = [prop1, prop2, prop3, prop4];
const img = (i: number) => [IMGS[i % 4], IMGS[(i + 1) % 4], IMGS[(i + 2) % 4]];

export const PROPERTIES: Property[] = [
  {
    id: "vx-101",
    name: "Akoka Student Residence",
    area: "Akoka",
    city: "Lagos",
    type: "Student Housing",
    price: 450000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "18 sqm",
    student: true,
    verified: true,
    images: img(0),
    description:
      "A compact single room in a managed student block a short walk from the University of Lagos back gate. Shared kitchen, prepaid metering and a resident caretaker on site.",
    amenities: ["WiFi", "Security", "Water Supply", "Prepaid Meter", "Study Area", "Furnished"],
    provider: { name: "Demo Provider — Akoka Residences", role: "Property Manager", since: "2023", responseTime: "Under 2 hours", verified: true },
    nearby: ["University of Lagos — 8 min walk", "Akoka Market — 5 min", "Bariga Bus Stop — 10 min"],
  },
  {
    id: "vx-102",
    name: "Yaba Self-Contained Studio",
    area: "Yaba",
    city: "Lagos",
    type: "Self-Contained",
    price: 480000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "22 sqm",
    student: true,
    verified: true,
    images: img(1),
    description:
      "Self-contained unit in a small, quiet compound off Herbert Macaulay Way. Popular with students and early-career professionals working around the Yaba tech cluster.",
    amenities: ["WiFi", "Security", "Water Supply", "Generator", "Furnished"],
    provider: { name: "Demo Provider — Yaba Housing Co.", role: "Verified Agent", since: "2022", responseTime: "Same day", verified: true },
    nearby: ["Yaba College of Technology — 12 min", "Yaba Bus Terminal — 6 min", "CcHub — 9 min"],
  },
  {
    id: "vx-103",
    name: "Surulere Shared Apartment",
    area: "Surulere",
    city: "Lagos",
    type: "Shared Apartment",
    price: 390000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "16 sqm",
    student: true,
    verified: false,
    images: img(2),
    description:
      "One private room in a three-bedroom flat shared with two other tenants. Rent covers the room, with shared kitchen, living area and water bill split between residents.",
    amenities: ["Water Supply", "Security", "Prepaid Meter", "Laundry"],
    provider: { name: "Demo Provider — Ajayi Lettings", role: "Property Provider", since: "2024", responseTime: "1–2 days", verified: false },
    nearby: ["National Stadium — 7 min", "Ojuelegba — 10 min", "Lawanson Market — 6 min"],
  },
  {
    id: "vx-104",
    name: "Ikeja Mini Apartment",
    area: "Ikeja",
    city: "Lagos",
    type: "Apartment",
    price: 1400000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "42 sqm",
    student: false,
    verified: true,
    images: img(3),
    description:
      "A one-bedroom apartment in a gated block off Awolowo Way with dedicated parking and a serviced borehole. Suited to young professionals working around Ikeja GRA.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Water Supply", "Air Conditioning"],
    provider: { name: "Demo Provider — Ikeja Property Partners", role: "Verified Agent", since: "2021", responseTime: "Under 4 hours", verified: true },
    nearby: ["Ikeja GRA — 5 min", "Computer Village — 12 min", "Ikeja City Mall — 9 min"],
  },
  {
    id: "vx-105",
    name: "Lekki Two-Bedroom Flat",
    area: "Lekki",
    city: "Lagos",
    type: "Apartment",
    price: 3500000,
    unit: "year",
    bedrooms: 2,
    bathrooms: 2,
    size: "78 sqm",
    student: false,
    verified: true,
    images: img(0),
    description:
      "Two-bedroom flat in a serviced estate in Lekki Phase 1 with estate security, treated water and a shared backup generator.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Solar", "Air Conditioning", "Gym"],
    provider: { name: "Demo Provider — Lekki Estate Management", role: "Property Manager", since: "2020", responseTime: "Under 2 hours", verified: true },
    nearby: ["Admiralty Way — 6 min", "Lekki Phase 1 Gate — 4 min", "Freedom Park Lekki — 10 min"],
  },
  {
    id: "vx-106",
    name: "Ogba Two-Bedroom Apartment",
    area: "Ogba",
    city: "Lagos",
    type: "Apartment",
    price: 1800000,
    unit: "year",
    bedrooms: 2,
    bathrooms: 2,
    size: "65 sqm",
    student: false,
    verified: false,
    images: img(1),
    description:
      "Two-bedroom apartment on the first floor of a four-unit building in Ogba, with parking space in the compound and a shared water tank.",
    amenities: ["Parking", "Security", "Water Supply", "Prepaid Meter"],
    provider: { name: "Demo Provider — Ogba Realty", role: "Property Provider", since: "2023", responseTime: "1–2 days", verified: false },
    nearby: ["Ogba Bus Stop — 5 min", "Ikeja Under Bridge — 15 min", "Excellence Hotel — 8 min"],
  },
  {
    id: "vx-107",
    name: "LASU Gate Student Lodge",
    area: "Ojo",
    city: "Lagos",
    type: "Student Housing",
    price: 320000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "15 sqm",
    student: true,
    verified: true,
    images: img(2),
    description:
      "Single room in a purpose-built student lodge minutes from the Lagos State University main gate. Rooms are let per session with a resident manager on site.",
    amenities: ["WiFi", "Security", "Water Supply", "Study Area", "Prepaid Meter"],
    provider: { name: "Demo Provider — LASU Lodge Management", role: "Property Manager", since: "2022", responseTime: "Same day", verified: true },
    nearby: ["Lagos State University — 6 min walk", "Iyana Iba Market — 12 min", "Ojo Barracks — 15 min"],
  },
  {
    id: "vx-108",
    name: "Agege Compact Studio",
    area: "Agege",
    city: "Lagos",
    type: "Studio",
    price: 650000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "28 sqm",
    student: false,
    verified: false,
    images: img(3),
    description:
      "Studio unit in a residential street in Agege, with its own entrance, kitchenette and prepaid meter. Newly repainted and tiled.",
    amenities: ["Water Supply", "Prepaid Meter", "Security"],
    provider: { name: "Demo Provider — Agege Lettings", role: "Property Provider", since: "2024", responseTime: "2–3 days", verified: false },
    nearby: ["Agege Station — 8 min", "Pen Cinema — 10 min", "Dopemu — 14 min"],
  },
  {
    id: "vx-109",
    name: "Lagos Island Serviced Shortlet",
    area: "Lagos Island",
    city: "Lagos",
    type: "Shortlet",
    price: 55000,
    unit: "night",
    bedrooms: 2,
    bathrooms: 2,
    size: "70 sqm",
    student: false,
    verified: true,
    images: img(0),
    description:
      "Serviced two-bedroom shortlet with daily housekeeping, inverter backup and secure parking. Booked per night with a two-night minimum stay.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Air Conditioning", "Furnished", "Laundry"],
    provider: { name: "Demo Provider — Island Stays", role: "Verified Host", since: "2021", responseTime: "Under 1 hour", verified: true },
    nearby: ["Marina — 7 min", "TBS — 9 min", "Broad Street — 5 min"],
  },
  {
    id: "vx-110",
    name: "Yaba Two-Bedroom Walk-Up",
    area: "Yaba",
    city: "Lagos",
    type: "Apartment",
    price: 2200000,
    unit: "year",
    bedrooms: 2,
    bathrooms: 2,
    size: "68 sqm",
    student: false,
    verified: true,
    images: img(1),
    description:
      "Two-bedroom flat in a well-kept walk-up building close to the Yaba tech corridor, with fibre-ready internet and a shared generator.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Water Supply"],
    provider: { name: "Demo Provider — Yaba Housing Co.", role: "Verified Agent", since: "2022", responseTime: "Same day", verified: true },
    nearby: ["Yaba Market — 8 min", "Sabo Bus Stop — 5 min", "University of Lagos — 15 min"],
  },
  {
    id: "vx-111",
    name: "Surulere Family Duplex",
    area: "Surulere",
    city: "Lagos",
    type: "Duplex",
    price: 5200000,
    unit: "year",
    bedrooms: 4,
    bathrooms: 4,
    size: "180 sqm",
    student: false,
    verified: false,
    images: img(2),
    description:
      "Four-bedroom semi-detached duplex with a small garden, staff room and space for two cars. Suited to a family looking for a longer-term let.",
    amenities: ["Parking", "Security", "Generator", "Water Supply", "Solar"],
    provider: { name: "Demo Provider — Adeniran Properties", role: "Property Provider", since: "2019", responseTime: "1–2 days", verified: false },
    nearby: ["Adeniran Ogunsanya — 6 min", "Shoprite Surulere — 8 min", "Ojuelegba — 12 min"],
  },
  {
    id: "vx-112",
    name: "Mainland Co-Living Room",
    area: "Lagos Mainland",
    city: "Lagos",
    type: "Shared Apartment",
    price: 720000,
    unit: "year",
    bedrooms: 1,
    bathrooms: 1,
    size: "20 sqm",
    student: true,
    verified: true,
    images: img(3),
    description:
      "Private room in a co-living flat on Lagos Mainland with shared workspace, cleaning included and utilities bundled into the rent.",
    amenities: ["WiFi", "Security", "Laundry", "Study Area", "Furnished", "Generator"],
    provider: { name: "Demo Provider — Mainland Co-Living", role: "Property Manager", since: "2023", responseTime: "Under 3 hours", verified: true },
    nearby: ["Ebute Metta — 6 min", "Third Mainland Bridge — 10 min", "Yaba — 12 min"],
  },
];

export const AREAS = Array.from(new Set(PROPERTIES.map((p) => p.area))).sort();
export const TYPES = Array.from(new Set(PROPERTIES.map((p) => p.type))).sort() as PropertyType[];
export const AMENITIES = Array.from(new Set(PROPERTIES.flatMap((p) => p.amenities))).sort();

export function formatPrice(p: Pick<Property, "price" | "unit">) {
  const n = p.price >= 1_000_000
    ? `₦${(p.price / 1_000_000).toFixed(p.price % 1_000_000 === 0 ? 0 : 1)}m`
    : `₦${p.price.toLocaleString("en-NG")}`;
  return `${n}/${p.unit}`;
}

export function getProperty(id: string) {
  return PROPERTIES.find((p) => p.id === id);
}
