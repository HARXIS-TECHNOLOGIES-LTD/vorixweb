import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/vorix-dashboard.jpg";
import logo from "@/assets/vorix-logo.png";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="VORIX" className="h-7 w-auto" />
      <span className="text-xl font-extrabold tracking-tighter uppercase">Vorix</span>
    </a>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VORIX — Verified Housing. Smarter Discovery." },
      {
        name: "description",
        content:
          "VORIX is building AI-powered housing discovery and trust infrastructure for Africa. Verified listings, fraud-proof rentals, smarter matching.",
      },
      { property: "og:title", content: "VORIX — Verified Housing. Smarter Discovery." },
      {
        property: "og:description",
        content:
          "AI-powered housing discovery and trust infrastructure for Africa. Join the waitlist.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Wordmark />
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#platform" className="hover:text-foreground transition-colors">
              Platform
            </a>
            <a href="#universities" className="hover:text-foreground transition-colors">
              Universities
            </a>
            <a href="#vision" className="hover:text-foreground transition-colors">
              Vision
            </a>
            <a href="#partners" className="hover:text-foreground transition-colors">
              Investors
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#platform"
            className="hidden sm:inline-flex text-sm font-semibold px-4 py-2 hover:text-primary transition-colors"
          >
            Explore
          </a>
          <a
            href="#waitlist"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center">
      <div className="animate-fade-up">
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6 inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
          Trust Infrastructure for Housing
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance max-w-4xl mb-8 leading-[1.05]">
          Building the Future of Trusted Housing in Africa
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          VORIX uses AI and deep verification systems to simplify housing discovery and
          eliminate fraud — starting from student hubs, scaling to pan-African markets.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#waitlist"
            className="bg-primary text-primary-foreground px-8 py-4 font-bold text-sm rounded-sm ring-offset-2 hover:ring-2 ring-primary transition-all"
          >
            Join Waitlist
          </a>
          <a
            href="#platform"
            className="border border-border bg-background px-8 py-4 font-bold text-sm rounded-sm hover:bg-muted transition-colors"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </header>
  );
}

function ProductPreview() {
  return (
    <section
      id="platform"
      className="mb-24 md:mb-32 animate-fade-up"
      style={{ animationDelay: "200ms" }}
    >
      <div className="relative rounded-xl overflow-hidden ring-1 ring-black/5 shadow-elevated">
        <img
          src={dashboardImg}
          alt="VORIX product dashboard showing verified property listings and trust analytics"
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm">
        {[
          ["01", "Verified property records"],
          ["02", "AI-powered matching"],
          ["03", "Fraud detection layer"],
        ].map(([n, label]) => (
          <div key={n} className="flex items-center gap-3 text-muted-foreground">
            <span className="mono text-[10px] tracking-widest text-primary">{n}</span>
            <span className="font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      title: "Fake Listings",
      desc: "Inaccurate property data leads to financial loss and wasted time for seekers.",
    },
    {
      title: "Inflated Costs",
      desc: "Lack of transparency allows for hidden charges and unregulated agent fees.",
    },
    {
      title: "Verification Gaps",
      desc: "No centralized infrastructure to verify landlords, agents, or property ownership.",
    },
    {
      title: "Search Stress",
      desc: "Fragmented search experiences make finding a home a month-long burden.",
    },
  ];
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
            01 / Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
            The Trust Deficit in African Housing
          </h2>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 border-l-2 border-border">
              <h4 className="font-bold mb-2">{it.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    {
      title: "Verified Listings",
      desc: "Every property and landlord vetted through layered KYC and document checks.",
    },
    {
      title: "AI Smart Discovery",
      desc: "Match by lifestyle, budget, commute, and verified community signals.",
    },
    {
      title: "Trust Infrastructure",
      desc: "A neutral verification layer the entire African market can build on.",
    },
    {
      title: "Fraud Reduction",
      desc: "Anomaly detection flags suspicious listings before they reach renters.",
    },
    {
      title: "Community Insights",
      desc: "Real reviews from real verified tenants — no anonymous noise.",
    },
    {
      title: "Fast Matching",
      desc: "From weeks of stress to days of clarity, powered by intent-aware search.",
    },
  ];
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="max-w-2xl mb-16">
        <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
          02 / Solution
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
          How VORIX Solves It
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          A discovery engine and trust layer built from the ground up for African real
          estate — beginning with the most underserved tier of the market.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden ring-1 ring-border">
        {items.map((it, i) => (
          <div key={it.title} className="bg-background p-8 hover:bg-muted/40 transition-colors">
            <div className="mono text-[10px] tracking-widest text-primary mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4 className="font-bold text-lg mb-2">{it.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUniversities() {
  return (
    <section
      id="universities"
      className="bg-ink text-ink-foreground rounded-2xl p-10 md:p-20 my-24 md:my-32"
    >
      <div className="max-w-3xl">
        <span className="mono text-[10px] uppercase tracking-widest text-primary font-bold">
          Strategic Entry
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-8 tracking-tight">
          Why we start with Universities
        </h2>
        <p className="text-slate-400 text-lg mb-4 leading-relaxed">
          Universities represent the densest concentration of housing demand and the
          fastest adoption environments in Africa. By solving for students first, we
          validate our trust infrastructure in high-velocity markets before scaling to
          urban and national ecosystems.
        </p>
        <p className="text-slate-500 text-sm mb-12">
          This is our entry point — not our final vision.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {[
            ["High Demand", "Market Validation"],
            ["Fast Adoption", "Tech-Native Users"],
            ["Feedback Loop", "Rapid Iteration"],
          ].map(([t, s]) => (
            <div key={t}>
              <div className="text-2xl font-bold mb-1">{t}</div>
              <div className="mono text-[10px] text-slate-500 uppercase tracking-widest">
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const pillars = [
    { t: "AI Housing Infrastructure", d: "The default trust layer for African property." },
    { t: "Pan-African Expansion", d: "From Lagos to every major African city." },
    { t: "Smart Property Systems", d: "Data-rich discovery for renters and landlords." },
    { t: "Trust Ecosystem", d: "Verified identities. Transparent transactions." },
  ];
  return (
    <section id="vision" className="py-20 md:py-24 border-t border-border">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
            03 / Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
            A new operating system for African housing
          </h2>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {pillars.map((p) => (
            <div key={p.t}>
              <h4 className="font-bold mb-2">{p.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section
      id="partners"
      className="py-20 md:py-24 border-t border-border flex flex-col md:flex-row gap-12 items-start md:items-end justify-between"
    >
      <div className="max-w-xl">
        <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
          04 / Partnerships
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
          Build the trust layer with us
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          We work with investors, universities, real estate operators, and startup
          accelerators committed to fixing African housing at the infrastructure level.
        </p>
      </div>
      <a
        href="mailto:partners@vorix.africa"
        className="bg-primary text-primary-foreground px-8 py-4 font-bold text-sm rounded-sm hover:opacity-90 transition-opacity"
      >
        Partner With VORIX →
      </a>
    </section>
  );
}

function Waitlist() {
  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 border-t border-border flex flex-col items-center text-center"
    >
      <span className="mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6">
        Join VORIX Community
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight max-w-2xl">
        Ready for Smarter Discovery?
      </h2>
      <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
        Get early access to verified housing and fraud-proof rentals. Be first when we
        launch in your city.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-md flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 font-bold text-sm rounded-sm whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          Join Early Access
        </button>
      </form>
      <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-6">
        Community link · Waitlist link
      </p>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Platform",
      links: ["Search Properties", "For Universities", "Trust System", "For Agents"],
    },
    {
      title: "Company",
      links: ["Vision", "Partnerships", "Contact", "Press"],
    },
    {
      title: "Social",
      links: ["LinkedIn", "Twitter / X", "Instagram", "TikTok", "WhatsApp"],
    },
  ];
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <Wordmark className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Building the future of African property infrastructure through AI and trust.
            </p>
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground space-y-1">
              <div>hello@vorix.africa</div>
              <div>Lagos, Nigeria</div>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-3">
              <span className="font-bold text-xs uppercase tracking-widest">{c.title}</span>
              {c.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-border">
          <span className="text-xs text-muted-foreground">
            © 2026 Vorix Technologies. Lagos, Nigeria.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <ProductPreview />
        <Problem />
        <Solution />
        <WhyUniversities />
        <Vision />
        <Partners />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
