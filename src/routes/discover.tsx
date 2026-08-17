import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, RotateCcw, Search, ShieldCheck, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PropertyCard } from "@/components/property-card";
import { AMENITIES, AREAS, PROPERTIES, TYPES, type PropertyType } from "@/lib/properties";
import { EMPTY_FILTERS, filterProperties, type VorixFilters } from "@/lib/vorix-ai";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover verified homes in Lagos — VORIX" },
      {
        name: "description",
        content:
          "Browse verified student housing, self-contained units, apartments and shortlets across Lagos with filters for budget, bedrooms and amenities.",
      },
      { property: "og:title", content: "Discover verified homes in Lagos — VORIX" },
      {
        property: "og:description",
        content: "Filter verified Lagos listings by area, budget, bedrooms, verification status and amenities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscoverPage,
});

const BUDGETS = [
  { label: "Any budget", value: 0 },
  { label: "Under ₦400,000", value: 400000 },
  { label: "Under ₦700,000", value: 700000 },
  { label: "Under ₦1.5m", value: 1500000 },
  { label: "Under ₦4m", value: 4000000 },
];

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function DiscoverPage() {
  const [filters, setFilters] = useState<VorixFilters>(EMPTY_FILTERS);
  const [keyword, setKeyword] = useState("");
  const [showMore, setShowMore] = useState(false);

  const results = useMemo(() => {
    const base = filterProperties(filters, PROPERTIES);
    const k = keyword.trim().toLowerCase();
    if (!k) return base;
    return base.filter((p) =>
      [p.name, p.area, p.city, p.type, p.description].join(" ").toLowerCase().includes(k),
    );
  }, [filters, keyword]);

  const set = (patch: Partial<VorixFilters>) => setFilters((f) => ({ ...f, ...patch }));
  const toggleAmenity = (a: string) =>
    setFilters((f) => ({
      ...f,
      amenities: f.amenities.includes(a) ? f.amenities.filter((x) => x !== a) : [...f.amenities, a],
    }));

  const reset = () => {
    setFilters(EMPTY_FILTERS);
    setKeyword("");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="border-b border-border bg-surface px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Discover verified homes
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                Filter the VORIX demo catalogue by location, budget, rooms and trust status.
              </p>
            </div>
            <Link
              to="/ask"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Sparkles className="size-4" /> Or just ask VORIX
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Keyword
                </span>
                <span className="flex items-center gap-2 rounded-xl border border-border bg-background px-3">
                  <Search className="size-4 text-muted-foreground" />
                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Area, name or feature"
                    className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
                  />
                </span>
              </label>
              <Select
                label="Location"
                value={filters.area ?? ""}
                onChange={(v) => set({ area: v || undefined })}
                options={[{ label: "All locations", value: "" }, ...AREAS.map((a) => ({ label: a, value: a }))]}
              />
              <Select
                label="Property type"
                value={filters.type ?? ""}
                onChange={(v) => set({ type: (v || undefined) as PropertyType | undefined })}
                options={[{ label: "All types", value: "" }, ...TYPES.map((t) => ({ label: t, value: t }))]}
              />
              <Select
                label="Budget"
                value={String(filters.maxPrice ?? 0)}
                onChange={(v) => set({ maxPrice: Number(v) || undefined })}
                options={BUDGETS.map((b) => ({ label: b.label, value: String(b.value) }))}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowMore((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Filter className="size-4" /> {showMore ? "Hide filters" : "More filters"}
              </button>
              <button
                type="button"
                onClick={() => set({ verifiedOnly: !filters.verifiedOnly })}
                aria-pressed={!!filters.verifiedOnly}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  filters.verifiedOnly
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-foreground hover:border-accent"
                }`}
              >
                <ShieldCheck className="size-4" /> Verified only
              </button>
              <button
                type="button"
                onClick={() => set({ student: !filters.student })}
                aria-pressed={!!filters.student}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  filters.student ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground hover:border-primary"
                }`}
              >
                Student friendly
              </button>
              <button
                type="button"
                onClick={reset}
                className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="size-4" /> Reset
              </button>
            </div>

            {showMore && (
              <div className="mt-5 border-t border-border pt-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Select
                    label="Bedrooms"
                    value={String(filters.bedrooms ?? 0)}
                    onChange={(v) => set({ bedrooms: Number(v) || undefined })}
                    options={[
                      { label: "Any", value: "0" },
                      { label: "1+", value: "1" },
                      { label: "2+", value: "2" },
                      { label: "3+", value: "3" },
                      { label: "4+", value: "4" },
                    ]}
                  />
                </div>
                <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {AMENITIES.map((a) => {
                    const on = filters.amenities.includes(a);
                    return (
                      <button
                        key={a}
                        type="button"
                        onClick={() => toggleAmenity(a)}
                        aria-pressed={on}
                        className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                          on ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground/75 hover:border-primary"
                        }`}
                      >
                        {a}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="mb-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{results.length}</span> of{" "}
          {PROPERTIES.length} demo listings
        </p>
        {results.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <h2 className="text-lg font-bold text-foreground">No listings match those filters</h2>
            <p className="mt-2 text-sm text-muted-foreground">Loosen the budget or clear a filter to see more.</p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <RotateCcw className="size-4" /> Reset filters
            </button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
