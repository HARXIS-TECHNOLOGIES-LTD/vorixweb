import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, Compass, Heart, Search, Sparkles, Trash2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PropertyCard } from "@/components/property-card";
import { getProperty } from "@/lib/properties";
import { useVorix } from "@/lib/vorix-store";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your VORIX dashboard — saved homes & viewings" },
      {
        name: "description",
        content:
          "Keep track of saved homes, viewing requests and recent VORIX searches in one place.",
      },
      { property: "og:title", content: "Your VORIX dashboard" },
      {
        property: "og:description",
        content: "Saved homes, viewing requests and recent searches on VORIX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DashboardPage,
});

const TABS = [
  { id: "saved", label: "Saved homes", icon: Heart },
  { id: "viewings", label: "Viewing requests", icon: CalendarCheck },
  { id: "searches", label: "Recent searches", icon: Search },
] as const;

function DashboardPage() {
  const { saved, requests, searches, clearSearches, hydrated } = useVorix();
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("saved");

  const savedProperties = saved.map(getProperty).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="border-b border-border bg-surface px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Your housing dashboard</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Everything you shortlisted, requested and searched — stored on this device for the demo.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Saved homes", value: savedProperties.length },
              { label: "Viewing requests", value: requests.length },
              { label: "Searches made", value: searches.length },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-2xl font-bold text-primary">{hydrated ? s.value : "—"}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === id ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:border-primary"
              }`}
            >
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </div>

        {tab === "saved" && (
          savedProperties.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedProperties.map((p) => (
                <PropertyCard key={p!.id} property={p!} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No saved homes yet"
              body="Tap the heart on any listing to keep it here for later."
            />
          )
        )}

        {tab === "viewings" && (
          requests.length ? (
            <ul className="space-y-4">
              {requests.map((r) => (
                <li key={r.id} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <Link
                        to="/property/$propertyId"
                        params={{ propertyId: r.propertyId }}
                        className="font-bold text-foreground hover:text-primary"
                      >
                        {r.propertyName}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Preferred date {r.date} · {r.name} · {r.phone}
                      </p>
                      {r.note && <p className="mt-2 text-sm text-foreground/75">“{r.note}”</p>}
                    </div>
                    <span className="rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                      {r.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="No viewing requests yet"
              body="Open any listing and use “Request a viewing” to book a visit."
            />
          )
        )}

        {tab === "searches" && (
          searches.length ? (
            <div>
              <ul className="flex flex-wrap gap-2">
                {searches.map((s) => (
                  <li key={s}>
                    <Link
                      to="/ask"
                      search={{ q: s }}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      <Sparkles className="size-3.5 text-accent" /> {s}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={clearSearches}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="size-4" /> Clear search history
              </button>
            </div>
          ) : (
            <EmptyState
              title="No searches yet"
              body="Ask VORIX for what you need and your searches will appear here."
            />
          )
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-10 text-center">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{body}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/ask"
          search={{ q: "" }}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Sparkles className="size-4" /> Ask VORIX
        </Link>
        <Link
          to="/discover"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
        >
          <Compass className="size-4" /> Browse homes
        </Link>
      </div>
    </div>
  );
}
