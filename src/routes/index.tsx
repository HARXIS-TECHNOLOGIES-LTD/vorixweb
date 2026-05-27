import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/vorix-logo.png";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import mockupChat from "@/assets/mockup-chat.png";
import mockupHome from "@/assets/mockup-home.png";
import {
  Search,
  MapPin,
  Home,
  Building2,
  BedDouble,
  GraduationCap,
  Trees,
  Briefcase,
  ShieldCheck,
  Lock,
  PhoneOff,
  LifeBuoy,
  Bed,
  Bath,
  Car,
  Wifi,
  Users,
  Ruler,
  Check,
  ArrowRight,
  Linkedin,
  Twitter,
  MessageCircle,
  ClipboardList,
  ExternalLink,
  Instagram,
  TrendingUp,
  Globe2,
  Loader2,
  Heart,
  Sparkles,
  Quote,
  AlertTriangle,
  Eye,
  Scale,
  Compass,
  Target,
  Telescope,
  Rocket,
  Mail,
  Handshake,
  MessageSquare,
  Smartphone,
  Zap,
  XCircle,
  Tag,
  Footprints,
  MessageCircleWarning,
  ShieldAlert,
  Sparkle,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VORIX — Africa's Trusted Housing Platform" },
      {
        name: "description",
        content:
          "Rent, buy, sell, book & manage homes — all in one platform. Verified listings, secure transactions, AI-powered discovery across Africa.",
      },
      { property: "og:title", content: "VORIX — Africa's Trusted Housing Platform" },
      {
        property: "og:description",
        content:
          "Verified listings, secure transactions, and AI-powered property discovery across Africa.",
      },
    ],
  }),
  component: Index,
});

/* ───────────────── NAV ───────────────── */
function Nav() {
  const links = [
    ["Rent", "#types"],
    ["Buy & Sell", "#types"],
    ["Shortlets", "#types"],
    ["Hostels", "#types"],
    ["Land", "#types"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center p-1.5">
            <img src={logo} alt="VORIX" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="text-lg font-bold tracking-tight text-primary">VORIX</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex text-sm font-medium px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
          >
            Sign In
          </a>
          <a
            href="#landlord"
            className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            List Property
          </a>
        </div>
      </div>
    </header>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  const trust = [
    { icon: Users, label: "Community Driven" },
    { icon: ShieldCheck, label: "Verification Focused" },
    { icon: Heart, label: "Built From Real Experience" },
    { icon: Sparkles, label: "Early Access Platform" },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary to-[oklch(0.22_0.05_235)] text-primary-foreground">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 size-[32rem] rounded-full bg-[oklch(0.55_0.15_220)]/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold mb-8">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
          A new kind of housing platform · Built for real people
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl mx-auto text-balance leading-[1.05]">
          Finding a place to stay{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent to-[oklch(0.78_0.14_175)] bg-clip-text text-transparent">
              shouldn't feel like survival.
            </span>
          </span>
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed">
          VORIX is building a smarter and more trusted way to discover verified accommodation,
          reduce housing stress, and simplify the real estate experience for students, young
          professionals, families, and everyday renters across Nigeria and beyond.
        </p>

        <p className="text-sm md:text-base text-primary-foreground/60 max-w-2xl mx-auto mb-10 italic leading-relaxed">
          Too many people lose money, time, opportunities, and peace of mind searching for
          accommodation. We believe technology can change that.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a
            href="https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-elevated"
          >
            Join the Community
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#vision"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            See Our Vision
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {trust.map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm text-left"
            >
              <span className="size-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <t.icon className="size-4" />
              </span>
              <span className="text-xs md:text-sm font-medium text-primary-foreground/85 leading-tight">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FOUNDER'S STORY ───────────────── */
function Story() {
  const beats = [
    {
      label: "The Beginning",
      text: "When I gained admission into university, I thought finding accommodation would be simple. Instead, it became one of the most stressful experiences of my life.",
    },
    {
      label: "The Struggle",
      text: "I searched across online platforms, contacted agents, moved from place to place, spent money on transportation, missed lectures, and struggled to find a safe and trustworthy place to stay.",
    },
    {
      label: "The Reality",
      text: "Different agents showed the same rooms with different prices. Some demanded payments before inspections. Some listings were fake. Some locations looked nothing like the pictures online.",
    },
    {
      label: "The Realization",
      text: "What affected me the most was realizing that thousands of other students and everyday people were facing the exact same problem. The system lacked trust. It lacked structure. It lacked transparency.",
    },
    {
      label: "The Mission",
      text: "That experience became the foundation of VORIX. We are not just building another property platform — we are building a system designed to make housing discovery safer, simpler, smarter, and more transparent for everyone.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-5">
            <Heart className="size-3.5" />
            Founder's Story
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            Built From Real Experience
          </h2>
        </div>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {beats.map((b, i) => (
              <div
                key={b.label}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* dot */}
                <span className="absolute left-4 md:left-1/2 size-3 rounded-full bg-accent ring-4 ring-background -translate-x-1/2 mt-1 md:mt-0" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{b.label}</h3>
                </div>

                <div className={`pl-12 md:pl-12 ${i % 2 === 1 ? "md:pl-0 md:pr-12" : ""}`}>
                  <p className="text-base text-foreground/75 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <figure className="mt-20 bg-gradient-to-br from-primary to-[oklch(0.22_0.05_235)] text-primary-foreground rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-elevated">
          <Quote className="absolute top-6 left-6 size-16 text-white/10" />
          <blockquote className="relative text-xl md:text-2xl font-medium leading-snug max-w-3xl mx-auto text-center italic">
            "We didn't start VORIX from imagination — we started it from frustration,
            experience, and the desire to solve a real problem."
          </blockquote>
          <figcaption className="relative text-center mt-6 text-sm text-primary-foreground/60 font-medium tracking-wider uppercase">
            — Founder, VORIX Technologies
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ───────────────── WHY VORIX EXISTS ───────────────── */
function WhyExists() {
  const problems = [
    { icon: AlertTriangle, label: "Fake property listings" },
    { icon: ShieldCheck, label: "Unverified agents" },
    { icon: Scale, label: "Inflated prices" },
    { icon: PhoneOff, label: "Poor communication" },
    { icon: Eye, label: "Lack of transparency" },
    { icon: Lock, label: "Housing scams" },
    { icon: Compass, label: "Wasted time & cost" },
  ];
  return (
    <section id="vision" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-0 size-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
            <Compass className="size-3.5" />
            Our Purpose
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5 tracking-tight leading-tight">
            Why VORIX Exists
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Finding accommodation should not be stressful, unsafe, confusing, or exploitative.
            Yet for too many people, it still is.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            People struggle daily with:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {problems.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 bg-surface border border-border rounded-xl px-4 py-3.5 hover:border-accent/40 hover:bg-accent-soft/30 transition-colors"
              >
                <span className="size-9 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
                  <p.icon className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground/85">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            We believe technology can simplify this process. Our mission is to create a
            connected housing ecosystem where people can discover properties more confidently,
            communicate more efficiently, and access better housing opportunities with less
            stress. We are starting from student communities because the housing problem is
            highly visible there — but our vision goes far beyond campuses. VORIX is being
            built to serve broader urban housing systems across Nigeria, Africa, and
            eventually global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative bg-gradient-to-br from-primary to-[oklch(0.24_0.05_235)] text-primary-foreground rounded-2xl p-8 md:p-10 overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative">
              <div className="size-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-5">
                <Target className="size-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-3">
                Our Mission
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                Building a smarter future for housing discovery.
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Make every step — from search to move-in — safer, simpler, and more
                transparent for renters, agents, and landlords alike.
              </p>
            </div>
          </div>

          <div className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow">
            <div className="size-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-5">
              <Telescope className="size-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-3">
              Our Vision
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-3">
              To become one of Africa's most trusted technology-driven housing platforms.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A connected ecosystem powering housing access across cities, campuses, and
              communities — from Lagos to the rest of the continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SEARCH (utility) ───────────────── */
function SearchBar() {
  return (
    <section className="bg-background -mt-12 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-3 md:p-4 text-left">
          <div className="grid md:grid-cols-[1.3fr_1fr_1fr_auto] gap-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/60 transition-colors">
              <MapPin className="size-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                  Location
                </div>
                <input
                  placeholder="Lagos, Ibadan, Abuja…"
                  className="w-full text-sm font-medium bg-transparent outline-none placeholder:text-foreground/40"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/60 transition-colors border-l border-border md:border-l">
              <Home className="size-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                  Property Type
                </div>
                <select className="w-full text-sm font-medium bg-transparent outline-none cursor-pointer">
                  <option>All Types</option>
                  <option>Rent</option>
                  <option>Buy</option>
                  <option>Shortlet</option>
                  <option>Hostel</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/60 transition-colors border-l border-border md:border-l">
              <Briefcase className="size-4 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                  Budget
                </div>
                <select className="w-full text-sm font-medium bg-transparent outline-none cursor-pointer">
                  <option>Any range</option>
                  <option>Under ₦500k</option>
                  <option>₦500k – ₦2M</option>
                  <option>₦2M+</option>
                </select>
              </div>
            </div>
            <button className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Search className="size-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ───────────────── PROPERTY TYPES ───────────────── */
function PropertyTypes() {
  const types = [
    { icon: Home, name: "Rent", desc: "Residential apartments and houses for long-term rental.", count: "12,480+ properties", live: true },
    { icon: Building2, name: "Buy & Sell", desc: "Properties for sale and investment opportunities.", count: "8,240+ properties", live: true },
    { icon: BedDouble, name: "Shortlets & Airbnb", desc: "Furnished apartments for short-term stays.", count: "3,120+ properties", live: true },
    { icon: GraduationCap, name: "Student Hostels", desc: "Affordable accommodation near universities.", count: "1,890+ properties", live: true },
    { icon: Trees, name: "Land", desc: "Plots and parcels for development and investment.", count: "2,340+ properties", live: true },
    { icon: Briefcase, name: "Commercial", desc: "Office spaces, retail shops, and warehouses.", count: "Coming Soon", live: false },
  ];
  return (
    <section id="types" className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
            Explore Properties
          </h2>
          <p className="text-muted-foreground">Find the perfect property type for your needs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((t) => (
            <div
              key={t.name}
              className="group bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className={`size-12 rounded-lg flex items-center justify-center mb-5 ${t.live ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"}`}>
                <t.icon className="size-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                {!t.live && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded">
                    Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.desc}</p>
              <div className={`text-xs font-semibold ${t.live ? "text-accent" : "text-muted-foreground"}`}>
                {t.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── HOW IT WORKS ───────────────── */
function Steps() {
  const steps = [
    {
      n: "Step 1",
      title: "Discover Verified Listings",
      desc: "Browse thousands of verified properties with authentic photos and detailed information you can trust.",
    },
    {
      n: "Step 2",
      title: "Connect Safely",
      desc: "Chat securely in-app with verified landlords and agents. No phone number scams or fake listings.",
    },
    {
      n: "Step 3",
      title: "Manage & Live Securely",
      desc: "Track payments, manage utilities, and build community connections in one comprehensive platform.",
    },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
            Your Safe Path to Property
          </h2>
          <p className="text-muted-foreground">
            Experience a secure and transparent property journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative bg-card border border-border rounded-2xl p-8 shadow-card"
            >
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-5">
                {i + 1}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                {s.n}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FEATURED PROPERTIES ───────────────── */
function Featured() {
  const props = [
    {
      img: prop1,
      price: "₦450,000/year",
      title: "Luxury 3BR Apartment",
      loc: "Victoria Island, Lagos",
      specs: [
        { icon: Bed, label: "3 beds" },
        { icon: Bath, label: "2 baths" },
        { icon: Car, label: "Parking" },
      ],
    },
    {
      img: prop2,
      price: "₦15,000/night",
      title: "Furnished Shortlet",
      loc: "Lekki Phase 1, Lagos",
      specs: [
        { icon: Bed, label: "2 beds" },
        { icon: Bath, label: "2 baths" },
        { icon: Wifi, label: "WiFi" },
      ],
    },
    {
      img: prop3,
      price: "₦80,000/session",
      title: "Student Hostel",
      loc: "Akoka, Lagos",
      specs: [
        { icon: Users, label: "4 person" },
        { icon: Wifi, label: "WiFi" },
        { icon: ShieldCheck, label: "Security" },
      ],
    },
    {
      img: prop4,
      price: "₦2,500,000",
      title: "Residential Land",
      loc: "Ibeju Lekki, Lagos",
      specs: [
        { icon: Ruler, label: "600 sqm" },
        { icon: ShieldCheck, label: "C of O" },
        { icon: Check, label: "Serviced" },
      ],
    },
  ];
  const filters = ["All", "Rent", "Buy", "Shortlets", "Hostels"];
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
              Featured Properties
            </h2>
            <p className="text-muted-foreground">Handpicked properties from verified landlords.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground/70 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  <ShieldCheck className="size-3" />
                  Verified
                </span>
              </div>
              <div className="p-5">
                <div className="text-primary font-bold text-lg mb-1">{p.price}</div>
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <MapPin className="size-3" />
                  {p.loc}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-border text-xs text-muted-foreground">
                  {p.specs.map((s) => (
                    <span key={s.label} className="flex items-center gap-1.5">
                      <s.icon className="size-3.5 text-primary" />
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
          >
            View All Properties
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHY DIFFERENT ───────────────── */
function Why() {
  const items = [
    { icon: ShieldCheck, title: "Verified Properties & Users", desc: "Every property and user undergoes verification through NIN/CAC." },
    { icon: Lock, title: "Safe Transactions", desc: "All payments monitored and protected within the platform." },
    { icon: PhoneOff, title: "No Phone Number Scams", desc: "Contact details only shared after in-app verification." },
    { icon: LifeBuoy, title: "Always Here to Help", desc: "Report issues and get support anytime, anywhere." },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
            Why VORIX is Different
          </h2>
          <p className="text-muted-foreground">Built with trust and safety at the core.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="text-center px-4">
              <div className="size-14 mx-auto rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5">
                <it.icon className="size-7" />
              </div>
              <h4 className="font-semibold mb-2">{it.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── LANDLORD CTA ───────────────── */
function Landlord() {
  const perks = [
    "Showcase your portfolio professionally",
    "Reach verified, quality tenants",
    "Manage everything in one dashboard",
    "Get verification badges that build trust",
  ];
  return (
    <section id="landlord" className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Are you a landlord or agent?
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Join thousands of property owners building trust and growing their business
              on VORIX.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              List Your Property
              <ArrowRight className="size-4" />
            </a>
          </div>
          <ul className="grid gap-4">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <span className="size-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SURVEY ───────────────── */
function Survey() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 size-32 bg-accent-soft/40 rounded-bl-full" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-accent-soft text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                <GraduationCap className="size-3.5" />
                LASU Students
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
              Help Shape VORIX for LASU
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              We are building VORIX to improve how student accommodation works around LASU and its environment. Our goal is to create a more organized and trusted system where verified agents can easily connect with serious student renters — without the usual stress of scattered communication and back-and-forth.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                "Agents get better visibility",
                "Listings reach the right audience faster",
                "Transactions become more structured",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span className="size-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-6">
              Right now, we are gathering insights from both students and agents to build it the right way. Your experience in this space is valuable, and we would love to carry you along as one of the early users on the platform.
            </p>
            <a
              href="https://vorix-survey.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <ClipboardList className="size-4" />
              Take the Survey
              <ExternalLink className="size-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WAITLIST (functional) ───────────────── */
function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      // ─── INTEGRATION PLACEHOLDER ───────────────────────────────
      // Replace this block with your preferred integration:
      //   • Custom API:   await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email: trimmed }) });
      //   • Formspree:    await fetch("https://formspree.io/f/XXXX", { method: "POST", headers: { Accept: "application/json" }, body: new FormData(e.target as HTMLFormElement) });
      //   • Supabase:     await supabase.from("waitlist").insert({ email: trimmed });
      //   • Firebase:     await addDoc(collection(db, "waitlist"), { email: trimmed, createdAt: serverTimestamp() });
      //   • Google Sheet: await fetch("<Apps Script Web App URL>", { method: "POST", body: JSON.stringify({ email: trimmed }) });
      await new Promise((r) => setTimeout(r, 600)); // simulated network
      // ───────────────────────────────────────────────────────────

      toast.success("Thank you for joining the VORIX early access community.");
      setJoined(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-5">
          <Rocket className="size-3.5" />
          Early Access
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
          Join the VORIX community
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Get early access to verified housing and fraud-proof rentals. Be first when we
          launch in your city.
        </p>

        {joined ? (
          <div className="max-w-md mx-auto bg-card border border-accent/30 rounded-2xl p-8 shadow-elevated animate-fade-up">
            <div className="size-12 mx-auto rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Check className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">You're on the list 🎉</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Thank you for joining the VORIX early access community. We'll be in touch soon.
            </p>
            <button
              onClick={() => setJoined(false)}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Add another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              disabled={loading}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-60"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : null}
              {loading ? "Joining…" : "Join Early Access"}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground/70 mt-5">
          We respect your privacy. No spam — ever.
        </p>
      </div>
    </section>
  );
}

/* ───────────────── CONTACT & COMMUNITY ───────────────── */
function ContactCommunity() {
  const cards = [
    {
      icon: Handshake,
      label: "Partnership & Collaboration",
      desc: "Interested in partnering with VORIX?",
      cta: "vorixconnectltd@gmail.com",
      href: "mailto:vorixconnectltd@gmail.com?subject=VORIX%20Partnership",
      accent: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      label: "Community Support",
      desc: "Join our growing VORIX community.",
      cta: "Open WhatsApp Community",
      href: "https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      icon: Mail,
      label: "Contact Team",
      desc: "Reach out directly to the VORIX Team.",
      cta: "vorixtechnologiesltd@gmail.com",
      href: "mailto:vorixtechnologiesltd@gmail.com?subject=VORIX%20Enquiry",
      accent: "from-sky-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      label: "Investor / Business Inquiry",
      desc: "For investor interest and business discussions.",
      cta: "vorixconnectltd@gmail.com",
      href: "mailto:vorixconnectltd@gmail.com?subject=VORIX%20Investor%20Inquiry",
      accent: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-surface overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[140px]" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
            <MessageSquare className="size-3.5" />
            Contact & Community
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
            Let's build VORIX together.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Partners, investors, agents, and renters — every conversation moves us forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elevated hover:-translate-y-0.5 hover:border-primary/40 transition-all"
              >
                <div className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${c.accent} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity`} />
                <div className="relative">
                  <div className={`inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="size-5" />
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    {c.label}
                  </div>
                  <p className="text-base text-foreground/85 leading-relaxed mb-5">{c.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {c.cta}
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TRUST & VISION (short) ───────────────── */
function TrustVision() {
  return (
    <section className="relative py-20 md:py-24 px-6 bg-gradient-to-br from-primary via-primary to-[oklch(0.22_0.05_235)] text-primary-foreground overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[36rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold mb-6">
          <Globe2 className="size-3.5" />
          Our Promise
        </div>
        <p className="text-2xl md:text-3xl font-semibold leading-snug">
          VORIX is building a smarter and more trusted future for{" "}
          <span className="bg-gradient-to-r from-accent to-[oklch(0.78_0.14_175)] bg-clip-text text-transparent">
            accommodation discovery and real estate access
          </span>{" "}
          across Africa.
        </p>
      </div>
    </section>
  );
}


/* ───────────────── FOOTER ───────────────── */
function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: ["About VORIX", "How It Works", "Trust & Safety", "Pricing"],
    },
    {
      title: "Property Types",
      links: ["Rent", "Buy & Sell", "Shortlets", "Student Hostels", "Land"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Report Property"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center p-1.5">
                <img src={logo} alt="VORIX" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-lg font-bold tracking-tight">VORIX</span>
            </div>
            <p className="font-semibold mb-2">Africa's Trusted Housing Platform</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Making property transactions safe, transparent, and accessible across Africa
              through verified listings and secure payment systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/Vorixtechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@vorix0001"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vorix-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold mb-4 text-sm">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-primary-foreground/60">
          <span>© 2026 VORIX Technologies · Lagos, Nigeria</span>
          <span>hello@vorix.africa</span>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── CTA SECTION ───────────────── */
function CTASection() {
  const actions = [
    {
      icon: Rocket,
      label: "Join Waitlist",
      title: "Join Waitlist",
      desc: "Get early access to VORIX updates, platform launches, and upcoming opportunities.",
      href: "#waitlist",
      accent: "from-primary to-accent",
    },
    {
      icon: Users,
      label: "Join Community",
      title: "Join Community",
      desc: "Become part of the growing VORIX community and follow our journey in real time.",
      href: "https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      icon: ClipboardList,
      label: "Take Survey",
      title: "Take Survey",
      desc: "Share your accommodation experience and help us improve the future of housing.",
      href: "https://vorix-survey.netlify.app/",
      accent: "from-amber-500 to-orange-500",
    },
    {
      icon: Handshake,
      label: "Become a Partner",
      title: "Become a Partner",
      desc: "Interested in collaborating, supporting, or working with VORIX? Let's connect.",
      href: "mailto:Vorixconnectltd@gmail.com?subject=VORIX%20Partnership",
      accent: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: Mail,
      label: "Contact Team",
      title: "Contact Team",
      desc: "Reach out directly to the VORIX team for inquiries, support, or opportunities.",
      href: "mailto:Vorixconnectltd@gmail.com",
      accent: "from-sky-500 to-indigo-500",
    },
  ];

  return (
    <section id="join" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-foreground/[0.02] to-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkle className="size-3.5" />
            Join the Movement
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            Be Part of the Future of Housing.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're building VORIX with real people, real experiences, and real feedback. Join us as we create
            a smarter and more trusted housing ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((a, i) => {
            const Icon = a.icon;
            const isFeatured = i === 0;
            return (
              <a
                key={a.title}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40 ${
                  isFeatured ? "lg:col-span-1 md:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${a.accent} mix-blend-overlay`} />
                <div className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${a.accent} opacity-10 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="size-6" />
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    {a.label}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{a.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Verified by VORIX</div>
          <div className="flex items-center gap-2"><Heart className="size-4 text-primary" /> Built with the community</div>
          <div className="flex items-center gap-2"><Lock className="size-4 text-primary" /> Privacy-first</div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PROBLEMS SECTION ───────────────── */
function ProblemsSection() {
  const problems = [
    { icon: XCircle, title: "Fake Listings", desc: "People waste time and money chasing properties that don't even exist." },
    { icon: ShieldAlert, title: "Unverified Agents", desc: "Many renters are forced to trust strangers without any accountability or transparency." },
    { icon: Tag, title: "Inflated Prices", desc: "The same property can appear online at completely different prices from different agents." },
    { icon: Footprints, title: "Stress & Movement", desc: "Students and renters spend days moving around unfamiliar areas searching for accommodation." },
    { icon: MessageCircleWarning, title: "Poor Communication", desc: "Many users struggle to get accurate information, responses, or updates from agents." },
    { icon: AlertTriangle, title: "Fear of Scams", desc: "People constantly worry about losing money before even seeing a property." },
  ];

  return (
    <section className="relative py-24 px-6 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-destructive/20 rounded-full blur-[160px] -z-0" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/20 bg-background/5 text-background/80 text-xs font-semibold tracking-wider uppercase mb-6">
            <AlertTriangle className="size-3.5" />
            The Reality
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            The Housing Experience Is Broken.
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Millions of people struggle daily with stress, uncertainty, scams, and unreliable housing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-2xl border border-background/10 bg-background/[0.04] backdrop-blur-sm p-7 hover:bg-background/[0.07] hover:border-background/20 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 rounded-xl bg-destructive/15 text-destructive-foreground flex items-center justify-center shrink-0 ring-1 ring-destructive/30 group-hover:scale-110 transition-transform">
                    <Icon className="size-5 text-red-400" />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-background/40 uppercase pt-2">
                    Problem 0{i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-background/65 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl sm:text-3xl font-semibold italic text-background/90 max-w-2xl mx-auto">
            "Housing should bring peace of mind — not anxiety."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PLATFORM PREVIEW ───────────────── */
function PlatformPreview() {
  const features = [
    { icon: Search, label: "Smart Discovery", desc: "Find homes that match your needs." },
    { icon: ShieldCheck, label: "Verified Listings", desc: "Every property is checked." },
    { icon: MessageSquare, label: "Easy Communication", desc: "Talk safely with verified agents." },
    { icon: Smartphone, label: "Better Accessibility", desc: "Designed for every device." },
    { icon: Zap, label: "Organized Search", desc: "No more scattered listings." },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background to-foreground/[0.03]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            <Smartphone className="size-3.5" />
            Platform Preview
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            Designed For Simplicity, Trust & Accessibility.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built to make housing discovery smoother, faster, and more transparent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Mockup stage */}
          <div className="relative h-[640px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[3rem] blur-3xl" />
            <div className="relative flex items-end justify-center gap-6">
              <div className="relative -mb-8 -mr-4 hidden sm:block">
                <div className="absolute -inset-4 bg-primary/30 rounded-[3rem] blur-2xl" />
                <img
                  src={mockupHome}
                  alt="VORIX home discovery interface"
                  loading="lazy"
                  decoding="async"
                  className="relative w-56 md:w-64 drop-shadow-2xl rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-700"
                />
                <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-background border border-border shadow-lg text-[10px] font-bold tracking-wider uppercase text-primary">
                  <ShieldCheck className="size-3 inline mr-1" /> Verified
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/30 rounded-[3rem] blur-2xl" />
                <img
                  src={mockupChat}
                  alt="VORIX secure messaging interface"
                  loading="lazy"
                  decoding="async"
                  className="relative w-60 md:w-72 drop-shadow-2xl rotate-[4deg] hover:rotate-[2deg] transition-transform duration-700"
                />
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-foreground text-background shadow-lg text-[10px] font-bold tracking-wider uppercase">
                  <Lock className="size-3 inline mr-1" /> Encrypted
                </div>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 hover:bg-card transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{f.label}</div>
                    <div className="text-sm text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <Quote className="size-10 text-primary/30 mx-auto mb-4" />
          <p className="text-2xl sm:text-3xl font-semibold italic text-foreground leading-snug">
            "We're not just building a platform — we're building a better housing experience."
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <SearchBar />
        <Story />
        <WhyExists />
        <ProblemsSection />
        <PlatformPreview />
        <PropertyTypes />

        <Steps />
        <Featured />
        <Why />
        <Landlord />
        <CTASection />
        <Survey />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
