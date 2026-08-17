import { AMENITIES, AREAS, PROPERTIES, type Property, type PropertyType } from "./properties";

export interface VorixFilters {
  area?: string;
  type?: PropertyType;
  maxPrice?: number;
  bedrooms?: number;
  student?: boolean;
  verifiedOnly?: boolean;
  amenities: string[];
}

export const EMPTY_FILTERS: VorixFilters = { amenities: [] };

/** Landmarks users type instead of an area name. */
const LANDMARKS: Record<string, string> = {
  unilag: "Akoka",
  "university of lagos": "Akoka",
  lasu: "Ojo",
  "lagos state university": "Ojo",
  yabatech: "Yaba",
  "yaba college": "Yaba",
  ojo: "Ojo",
  "victoria island": "Lagos Island",
  vi: "Lagos Island",
  mainland: "Lagos Mainland",
};

const TYPE_WORDS: Array<[RegExp, PropertyType]> = [
  [/\b(student|hostel|lodge|accommodation for students)\b/i, "Student Housing"],
  [/\bself[-\s]?contain(ed)?\b/i, "Self-Contained"],
  [/\bstudio\b/i, "Studio"],
  [/\b(shared|co[-\s]?living|roommate)\b/i, "Shared Apartment"],
  [/\bduplex\b/i, "Duplex"],
  [/\b(shortlet|short let|per night|nightly)\b/i, "Shortlet"],
  [/\b(apartment|flat)\b/i, "Apartment"],
];

const NUM_WORDS: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, single: 1 };

function parsePrice(q: string): number | undefined {
  // ₦500,000 / 500k / 1.5 million / 1.5m / N500000
  const m = q.match(
    /(?:under|below|less than|max(?:imum)?|up to|budget of|around|about)?\s*[₦n]?\s*([\d][\d,.]*)\s*(k|m|million|thousand)?/i,
  );
  if (!m) return undefined;
  let n = parseFloat(m[1].replace(/,/g, ""));
  if (!Number.isFinite(n)) return undefined;
  const unit = (m[2] || "").toLowerCase();
  if (unit === "k" || unit === "thousand") n *= 1_000;
  if (unit === "m" || unit === "million") n *= 1_000_000;
  if (n < 1000) return undefined; // likely a bedroom count, not a price
  return n;
}

export function parseQuery(raw: string): VorixFilters {
  const q = raw.toLowerCase();
  const f: VorixFilters = { amenities: [] };

  for (const area of AREAS) {
    if (q.includes(area.toLowerCase())) f.area = area;
  }
  if (!f.area) {
    for (const [key, area] of Object.entries(LANDMARKS)) {
      if (q.includes(key)) {
        f.area = area;
        break;
      }
    }
  }

  for (const [re, type] of TYPE_WORDS) {
    if (re.test(q)) {
      f.type = type;
      break;
    }
  }
  if (/\bstudent|hostel|lodge|undergraduate|campus\b/.test(q)) f.student = true;
  if (/\bverified|trusted|trust|safe\b/.test(q)) f.verifiedOnly = true;

  const bed = q.match(/(\d+|one|two|three|four|five|single)[\s-]*(bed|bedroom|bedrooms|br)\b/);
  if (bed) f.bedrooms = NUM_WORDS[bed[1]] ?? parseInt(bed[1], 10);

  const price = parsePrice(raw);
  if (price) f.maxPrice = price;

  for (const a of AMENITIES) {
    if (q.includes(a.toLowerCase())) f.amenities.push(a);
  }

  return f;
}

export interface MatchReason {
  label: string;
  met: boolean;
}

export interface MatchResult {
  property: Property;
  score: number;
  reasons: MatchReason[];
}

export function matchProperties(f: VorixFilters, pool: Property[] = PROPERTIES): MatchResult[] {
  const results = pool.map((property) => {
    const reasons: MatchReason[] = [];
    let weight = 0;
    let earned = 0;

    const add = (label: string, met: boolean, w: number) => {
      reasons.push({ label, met });
      weight += w;
      if (met) earned += w;
    };

    if (f.area) add(`Located in ${f.area}`, property.area === f.area, 3);
    if (f.maxPrice) add(`Within ₦${f.maxPrice.toLocaleString("en-NG")} budget`, property.price <= f.maxPrice, 3);
    if (f.type) add(`${f.type} property`, property.type === f.type, 2);
    if (f.student) add("Suitable for students", property.student, 2);
    if (f.verifiedOnly) add("Verified listing", property.verified, 2);
    if (f.bedrooms) add(`${f.bedrooms} bedroom${f.bedrooms > 1 ? "s" : ""}`, property.bedrooms >= f.bedrooms, 2);
    for (const a of f.amenities) add(a, property.amenities.includes(a), 1);

    const score = weight === 0 ? 100 : Math.round((earned / weight) * 100);
    return { property, score, reasons };
  });

  return results.sort((a, b) => b.score - a.score || a.property.price - b.property.price);
}

/** Hard filter used by the Discover page. */
export function filterProperties(f: VorixFilters, pool: Property[] = PROPERTIES): Property[] {
  return pool.filter((p) => {
    if (f.area && p.area !== f.area) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.maxPrice && p.price > f.maxPrice) return false;
    if (f.bedrooms && p.bedrooms < f.bedrooms) return false;
    if (f.student && !p.student) return false;
    if (f.verifiedOnly && !p.verified) return false;
    if (f.amenities.length && !f.amenities.every((a) => p.amenities.includes(a))) return false;
    return true;
  });
}

export function describeFilters(f: VorixFilters): Array<{ label: string; value: string }> {
  const out: Array<{ label: string; value: string }> = [];
  if (f.area) out.push({ label: "Location", value: f.area });
  if (f.type) out.push({ label: "Property type", value: f.type });
  if (f.maxPrice) out.push({ label: "Budget", value: `Up to ₦${f.maxPrice.toLocaleString("en-NG")}` });
  if (f.bedrooms) out.push({ label: "Bedrooms", value: `${f.bedrooms}+` });
  if (f.student) out.push({ label: "Audience", value: "Student housing" });
  if (f.verifiedOnly) out.push({ label: "Trust preference", value: "Verified listings" });
  if (f.amenities.length) out.push({ label: "Amenities", value: f.amenities.join(", ") });
  return out;
}

export const EXAMPLE_QUERIES = [
  "Find verified student accommodation around Yaba under ₦500,000 per year.",
  "Show me apartments around Ikeja under ₦1.5 million.",
  "I need a two-bedroom apartment in Lekki.",
  "Find accommodation close to LASU.",
];
