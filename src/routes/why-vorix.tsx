import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  Bed,
  Building2,
  Compass,
  Eye,
  FileText,
  Flag,
  GraduationCap,
  Home,
  Landmark,
  Link2,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const Route = createFileRoute("/why-vorix")({
  head: () => ({
    meta: [
      { title: "Why VORIX — Value for Renters, Students, Landlords & Agents" },
      {
        name: "description",
        content:
          "One platform for renters, students, landlords, agents and property providers: AI-powered housing discovery, structured listings and a trust framework built for Nigeria.",
      },
      { property: "og:title", content: "Why VORIX — One Platform, Multiple Stakeholders" },
      {
        property: "og:description",
        content:
          "See how VORIX helps renters, students, landlords, agents and developers discover and connect around housing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyVorix,
});

/* ─────────── data ─────────── */

const STAKEHOLDERS = [
  {
    id: "renters",
    name: "Renters / Tenants",
    icon: Home,
    problem:
      "Finding suitable accommodation can be stressful, time-consuming and filled with uncertainty.",
    solves: [
      "Discover properties based on actual needs",
      "Search by location, budget and property type",
      "Compare available properties side by side",
      "Access clearer, structured property information",
      "Spot verification indicators before committing",
      "Reduce exposure to misleading listings",
      "Reach property providers or agents directly",
    ],
    value: "Less stress. Less uncertainty. Better housing decisions.",
    features: [
      "AI-powered discovery",
      "Smart search",
      "Location filters",
      "Verification indicators",
      "Property details",
      "Enquiry tools",
    ],
  },
  {
    id: "students",
    name: "Students",
    icon: GraduationCap,
    problem:
      "Students face limited time, unfamiliar locations, unreliable listings and difficulty finding housing close to school.",
    solves: [
      "Find accommodation around their school",
      "Search strictly within a student budget",
      "Discover suitable student housing and self-contains",
      "Explore unfamiliar areas with landmark search",
      "Depend less on random social-media listings",
      "Compare options fast during relocation periods",
    ],
    value: "Student housing discovery that is faster, smarter and easier.",
    features: [
      "Landmark search (UNILAG, LASU, YABATECH)",
      "Student housing category",
      "Budget matching",
      "Voice search",
      "Match scoring",
    ],
  },
  {
    id: "landlords",
    name: "Landlords / Property Owners",
    icon: Landmark,
    problem:
      "Property owners need reliable ways to reach serious renters while managing listings and staying visible.",
    solves: [
      "List properties with structured information",
      "Reach renters actively searching",
      "Present homes professionally with photos and details",
      "Improve listing visibility",
      "Communicate with interested renters",
      "Build trust through verification",
      "Manage property information digitally",
    ],
    value: "Better visibility. Better tenant discovery. Better management.",
    features: [
      "Property listing",
      "Owner dashboard concept",
      "Listing management",
      "Verification",
      "Enquiry inbox",
      "Visibility insights",
    ],
  },
  {
    id: "agents",
    name: "Real Estate Agents",
    icon: Users,
    problem:
      "Agents operate across fragmented channels, making it hard to manage listings, reach clients and establish trust.",
    solves: [
      "Digitally showcase a full portfolio",
      "Reach renters already in search mode",
      "Organise listings in one place",
      "Build a professional digital presence",
      "Communicate directly with prospects",
      "Build credibility through verification",
      "Rely less on scattered social channels",
    ],
    value: "More visibility. More qualified enquiries. Less wasted time.",
    features: [
      "Agent profile concept",
      "Portfolio listings",
      "Verified agent badge",
      "Direct messaging",
      "Targeted discovery",
    ],
  },
  {
    id: "providers",
    name: "Property Providers / Developers",
    icon: Building2,
    problem:
      "Developers and providers need better digital channels to showcase available inventory and reach the right audience.",
    solves: [
      "Digital showcasing of available inventory",
      "Structured property information",
      "Targeted discovery by area and budget",
      "Direct access to potential users",
      "Better visibility for available units",
      "One centralised discovery platform",
    ],
    value: "Turn available housing inventory into discoverable opportunities.",
    features: [
      "Inventory showcase",
      "Structured data",
      "Targeted reach",
      "Discovery analytics concept",
    ],
  },
] as const;

const AI_SIGNALS = [
  { emoji: "📍", label: "Location", value: "Lekki" },
  { emoji: "🏠", label: "Property type", value: "Apartment" },
  { emoji: "🛏", label: "Bedrooms", value: "2 bedrooms" },
  { emoji: "💰", label: "Budget", value: "≤ ₦2,000,000 / year" },
  { emoji: "🚗", label: "Access", value: "Close to major roads" },
  { emoji: "🌆", label: "Lifestyle", value: "Quiet neighbourhood" },
];

const ECOSYSTEM = [
  { name: "Renters", icon: Home, does: "Discover housing" },
  { name: "Students", icon: GraduationCap, does: "Find suitable accommodation" },
  { name: "Landlords", icon: Landmark, does: "List & reach renters" },
  { name: "Agents", icon: Users, does: "Showcase & connect with prospects" },
  { name: "Providers", icon: Building2, does: "Increase property visibility" },
];

const CHANGES = [
  { title: "Discovery", icon: Compass, text: "Make finding suitable properties easier." },
  { title: "Intelligence", icon: Sparkles, text: "Use AI to make search natural and personal." },
  { title: "Transparency", icon: Eye, text: "Provide structured, clearer property information." },
  { title: "Trust", icon: ShieldCheck, text: "Build verification and reporting into the experience." },
  { title: "Connection", icon: Link2, text: "Connect renters, agents, landlords and providers." },
];

const TRUST_PILLARS = [
  { icon: BadgeCheck, title: "Verified property concept", text: "Listings that pass checks are clearly marked so users know what has been reviewed." },
  { icon: ShieldCheck, title: "Verified agent & provider concept", text: "Providers can build credibility through identity and portfolio checks." },
  { icon: FileText, title: "Structured listing information", text: "Every listing follows the same fields — price, size, rooms, amenities, terms." },
  { icon: Flag, title: "Reporting mechanism", text: "Users can flag suspicious listings so the ecosystem gets cleaner over time." },
];

/* ─────────── page ─────────── */

function WhyVorix() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Stakeholders />
        <AgentFlow />
        <AiSection />
        <Trust />
        <Ecosystem />
        <Changes />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary to-[oklch(0.22_0.05_235)] text-primary-foreground">
      <div className="pointer-events-none absolute -top-24 -left-24 size-[24rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold mb-7">
          <Target className="size-3.5 text-accent" /> Why VORIX
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.08] mb-6">
          One Platform. Multiple Stakeholders.{" "}
          <span className="bg-gradient-to-r from-accent to-[oklch(0.78_0.14_175)] bg-clip-text text-transparent">
            One Better Housing Ecosystem.
          </span>
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-9">
          VORIX connects renters, students, agents, landlords and property providers through a
          smarter, more transparent and AI-powered housing experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/ask"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity"
          >
            <Sparkles className="size-4" /> Try Ask VORIX
          </Link>
          <Link
            to="/discover"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/15 transition-colors"
          >
            <Search className="size-4" /> Find your property
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stakeholders() {
  const [active, setActive] = useState<string>(STAKEHOLDERS[0].id);
  const current = STAKEHOLDERS.find((s) => s.id === active) ?? STAKEHOLDERS[0];

  return (
    <section id="who-we-serve" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Who we serve"
          title="Every side of the housing market gets something"
          sub="Pick a stakeholder to see their problem, how VORIX helps, and the benefit they walk away with."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 mb-10">
          {STAKEHOLDERS.map((s) => {
            const on = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                aria-pressed={on}
                className={`text-left rounded-2xl border p-4 transition-all ${
                  on
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] -translate-y-0.5"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-xl mb-3 ${
                    on ? "bg-white/15" : "bg-primary-soft text-primary"
                  }`}
                >
                  <s.icon className="size-5" />
                </span>
                <span className="block text-sm font-bold leading-tight">{s.name}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-9 shadow-[var(--shadow-card)]">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-4">
                <current.icon className="size-6" />
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">{current.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">The problem</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{current.problem}</p>
              <div className="rounded-2xl bg-accent-soft border border-accent/25 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">Key value</p>
                <p className="text-sm font-semibold text-foreground leading-snug">{current.value}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">How VORIX helps</p>
              <ul className="grid gap-2.5 sm:grid-cols-2 mb-7">
                {current.solves.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Relevant VORIX features</p>
              <div className="flex flex-wrap gap-2">
                {current.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-foreground/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentFlow() {
  const steps = [
    { icon: Store, title: "Agent / Landlord", text: "Lists a property with structured details and photos." },
    { icon: Sparkles, title: "VORIX", text: "Verifies, structures and matches the listing to real demand." },
    { icon: Users, title: "Potential renter", text: "Discovers it, checks trust signals and sends an enquiry." },
  ];
  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHead title="Agent → VORIX → Potential renter" sub="One clean path replaces scattered WhatsApp groups and reposted listings." />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary mb-4">
                <s.icon className="size-5" />
              </span>
              <h3 className="font-bold text-foreground mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 size-6 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="AI-powered experience"
          title="AI that understands what you're looking for"
          sub="Not a chatbot bolted on — a housing discovery assistant that reads your request the way a good agent would."
        />

        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {/* conversation */}
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-[var(--shadow-elevated)]">
            <div className="flex items-center gap-2 border-b border-border pb-4 mb-5">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground leading-none">Ask VORIX</p>
                <p className="text-[11px] text-muted-foreground">Housing discovery assistant</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" /> Online
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-primary text-primary-foreground px-4 py-3 text-sm leading-relaxed">
                  I want a two-bedroom apartment around Lekki, preferably somewhere quiet, with good
                  access to major roads, and my budget is ₦2 million.
                </p>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-muted px-4 py-3">
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    Got it — here's what I understood from that:
                  </p>
                  <ul className="space-y-1.5 mb-3">
                    {AI_SIGNALS.map((s) => (
                      <li key={s.label} className="flex items-center gap-2 text-[13px]">
                        <span aria-hidden="true">{s.emoji}</span>
                        <span className="text-muted-foreground">{s.label}:</span>
                        <span className="font-semibold text-foreground">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground leading-relaxed">
                    I found 3 quiet 2-bedroom apartments in Lekki within budget, ranked by how well
                    they match. Verified listings appear first.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/ask"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Run this search live <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* prompts + how */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-4">Try prompts like these</h3>
              <ul className="space-y-2.5">
                {[
                  "I need a self-contained apartment close to YABATECH for under ₦800,000.",
                  "Find me a two-bedroom apartment around Lagos Island under my budget.",
                  "Student housing near LASU with steady power and security.",
                ].map((p) => (
                  <li key={p}>
                    <Link
                      to="/ask"
                      search={{ q: p }}
                      className="flex items-start gap-2.5 rounded-xl bg-muted px-4 py-3 text-sm text-foreground/85 hover:bg-primary-soft hover:text-primary transition-colors"
                    >
                      <MessageSquare className="mt-0.5 size-4 shrink-0 text-primary" />
                      "{p}"
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Voice search is available on Ask VORIX — tap the mic and speak your request instead of
                typing.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: MapPin, t: "Reads location & landmarks", d: "Schools, districts and neighbourhoods." },
                { icon: Wallet, t: "Respects your budget", d: "Naira ranges, yearly or nightly." },
                { icon: Bed, t: "Understands room needs", d: "Bedrooms, bathrooms, occupancy." },
                { icon: TrendingUp, t: "Ranks by match quality", d: "Best fit first, not loudest listing." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
                  <c.icon className="size-5 text-primary mb-3" />
                  <p className="text-sm font-bold text-foreground mb-1">{c.t}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Built around trust"
          title="Verification → Transparency → Confidence"
          sub="VORIX is building a verification and trust framework designed to help users make safer, better-informed housing decisions."
        />

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-12">
          {[
            { icon: ShieldCheck, label: "Verification", text: "Checks on listings, owners and agents." },
            { icon: Eye, label: "Transparency", text: "Structured details, no hidden basics." },
            { icon: BadgeCheck, label: "Confidence", text: "Decisions made with clearer information." },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 flex-1">
              <div className="flex-1 rounded-2xl bg-primary text-primary-foreground p-5">
                <s.icon className="size-5 text-accent mb-3" />
                <p className="font-bold mb-1">{s.label}</p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{s.text}</p>
              </div>
              {i < 2 && <ArrowRight className="hidden sm:block size-5 shrink-0 text-primary/40" />}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TRUST_PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent mb-4">
                <p.icon className="size-5" />
              </span>
              <h3 className="font-bold text-foreground mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          Verification is being rolled out progressively. Listings show their current verification
          state — pending listings are labelled clearly rather than assumed safe.
        </p>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="The VORIX ecosystem"
          title="VORIX connects the people who need housing with the people providing it"
        />

        <div className="relative rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-card)]">
          <div className="mx-auto mb-8 max-w-xs rounded-2xl bg-primary text-primary-foreground px-6 py-5 text-center">
            <p className="text-lg font-bold tracking-tight">VORIX</p>
            <p className="text-xs text-primary-foreground/75">AI-powered housing discovery & trust layer</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.map((e) => (
              <div key={e.name} className="rounded-2xl border border-border bg-surface p-5 text-center">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary mb-3">
                  <e.icon className="size-5" />
                </span>
                <p className="font-bold text-foreground">{e.name}</p>
                <ArrowRight className="mx-auto my-2 size-4 rotate-90 text-accent" />
                <p className="text-sm text-muted-foreground leading-snug">{e.does}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Changes() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHead eyebrow="What VORIX changes" title="Five shifts in how housing gets found" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CHANGES.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4">
                <c.icon className="size-5" />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.22_0.05_235)] text-primary-foreground py-16 sm:py-24">
      <div className="pointer-events-none absolute -bottom-32 -right-16 size-[26rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-balance mb-8">
          VORIX is building a smarter, more transparent way to discover and connect with housing.
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {["AI-Powered Discovery", "Trust", "Transparency", "Connection"].map((t) => (
            <span key={t} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold">
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/discover"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity"
          >
            <Search className="size-4" /> Find your property
          </Link>
          <a
            href="mailto:vorixconnectltd@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/15 transition-colors"
          >
            Partner with VORIX <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
