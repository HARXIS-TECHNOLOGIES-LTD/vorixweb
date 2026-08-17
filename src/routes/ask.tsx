import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { ArrowRight, Compass, Sparkles, Wand2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AskVorixBox } from "@/components/ask-vorix-box";
import { PropertyCard } from "@/components/property-card";
import { describeFilters, matchProperties, parseQuery } from "@/lib/vorix-ai";
import { useVorix } from "@/lib/vorix-store";

export const Route = createFileRoute("/ask")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => ({
    q: typeof search.q === "string" && search.q ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Ask VORIX — AI housing search for Nigeria" },
      {
        name: "description",
        content:
          "Describe the home you need in plain words and VORIX matches you with verified listings, budgets and locations across Lagos.",
      },
      { property: "og:title", content: "Ask VORIX — AI housing search" },
      {
        property: "og:description",
        content: "Natural-language and voice property search with verified listings and match scoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AskPage,
});

function AskPage() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate();
  const { addSearch } = useVorix();

  const filters = useMemo(() => parseQuery(q), [q]);
  const understood = useMemo(() => describeFilters(filters), [filters]);
  const matches = useMemo(() => (q ? matchProperties(filters).slice(0, 6) : []), [q, filters]);

  useEffect(() => {
    if (q) addSearch(q);
  }, [q, addSearch]);

  const run = (query: string) => navigate({ to: "/ask", search: { q: query } });

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-[oklch(0.22_0.05_235)] px-4 pb-16 pt-14 text-primary-foreground sm:px-6 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute -top-24 left-1/3 size-[26rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold">
            <Sparkles className="size-3.5" /> AI-assisted discovery
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Tell VORIX what you need. In your own words.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-lg">
            Type or speak your request — location, budget, room count, verification. VORIX turns it
            into a structured search and ranks the closest matches.
          </p>
          <div className="mt-8 text-left">
            <AskVorixBox value={q} onSubmit={run} autoFocus />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {!q ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Wand2 className="mx-auto size-8 text-accent" />
            <h2 className="mt-4 text-xl font-bold text-foreground">Start with a request above</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              Or browse the full catalogue with manual filters on the Discover page.
            </p>
            <Link
              to="/discover"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Compass className="size-4" /> Browse all homes
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-10 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                What VORIX understood
              </h2>
              {understood.length ? (
                <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {understood.map((u) => (
                    <div key={u.label} className="rounded-xl border border-border bg-card p-4">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{u.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-foreground">{u.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  No specific filters detected — showing the strongest listings overall. Try adding a
                  location and a budget.
                </p>
              )}
            </div>

            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Matching properties
              </h2>
              <Link
                to="/discover"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Refine with manual filters <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((m) => (
                <div key={m.property.id}>
                  <PropertyCard property={m.property} score={m.score} />
                  <ul className="mt-3 space-y-1.5 px-1">
                    {m.reasons.slice(0, 4).map((r) => (
                      <li
                        key={r.label}
                        className={`text-xs ${r.met ? "text-accent" : "text-muted-foreground"}`}
                      >
                        {r.met ? "✓" : "•"} {r.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
