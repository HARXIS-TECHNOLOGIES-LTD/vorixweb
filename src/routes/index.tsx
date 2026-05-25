import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/vorix-logo.png";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
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
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  ClipboardList,
  ExternalLink,
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/40 to-background">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-6">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
          Now in early access · Nigeria
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 max-w-4xl mx-auto text-balance leading-[1.1]">
          Rent, Buy, Sell, Book, Save & Manage Homes
          <span className="block text-foreground/70 mt-2 text-2xl md:text-3xl font-medium">
            — All in One Platform
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Africa's trusted housing platform with verified listings, secure transactions,
          and AI-powered discovery built to eliminate fraud.
        </p>

        {/* Search bar */}
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-3 md:p-4 max-w-4xl mx-auto text-left">
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <a href="#types" className="hover:text-primary transition-colors font-medium">
            Find a Property →
          </a>
          <span className="text-border">|</span>
          <a href="#landlord" className="hover:text-primary transition-colors font-medium">
            List a Property →
          </a>
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

/* ───────────────── WAITLIST ───────────────── */
function Waitlist() {
  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
          Join the VORIX community
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Get early access to verified housing and fraud-proof rentals. Be first when we
          launch in your city.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
          />
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
            Join Early Access
          </button>
        </form>
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
              {[Instagram, Twitter, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <PropertyTypes />
        <Steps />
        <Featured />
        <Why />
        <Landlord />
        <Survey />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
