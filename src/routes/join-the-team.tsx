import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer } from "./index";
import {
  Rocket,
  Heart,
  Users,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Code2,
  Server,
  Smartphone,
  Paintbrush,
  Layers,
  Image as ImageIcon,
  Brain,
  ShieldCheck,
  ClipboardList,
  Settings,
  Megaphone,
  MessageCircle,
  Video,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Compass,
  Scale,
  Target,
  Telescope,
  Handshake,
  Zap,
} from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfawOwqiWz0-FDYcHr-bAG5W5crekDp25UE_w9MkMIvYs1YiA/viewform?usp=header";

export const Route = createFileRoute("/join-the-team")({
  head: () => ({
    meta: [
      { title: "Join the Team — VORIX Careers" },
      {
        name: "description",
        content:
          "Help build the future of student housing in Africa. Explore open roles at VORIX and apply to join our founding team.",
      },
      { property: "og:title", content: "Join the Team — VORIX Careers" },
      {
        property: "og:description",
        content:
          "Real startup experience, meaningful impact, and equity opportunities. Apply to join VORIX.",
      },
    ],
  }),
  component: JoinTheTeam,
});

function JoinTheTeam() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <WhyJoin />
      <OpenRoles />
      <Culture />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-20 -left-32 size-72 sm:size-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-72 sm:size-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
          <Sparkles className="size-3.5" /> We're Hiring · Founding Team
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Join the Team Building the{" "}
          <span className="text-primary">Future of Student Housing</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          VORIX is building Africa's most trusted housing platform — starting with students.
          Join us early and help shape a product, a company, and a movement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-primary/20"
          >
            Apply Now <ArrowRight className="size-4" />
          </a>
          <a
            href="#roles"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border bg-background px-7 py-4 rounded-xl font-semibold hover:bg-muted transition"
          >
            See Open Roles
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── WHY JOIN ───────── */
function WhyJoin() {
  const items = [
    { icon: Rocket, title: "Real Startup Experience", desc: "Build a product from zero with full ownership — not a cog in a corporate machine." },
    { icon: Heart, title: "Meaningful Impact", desc: "Solve a real housing problem affecting millions of students across Africa." },
    { icon: Users, title: "Collaborative Team", desc: "Work alongside ambitious founders, engineers, and creators who care deeply." },
    { icon: GraduationCap, title: "Learning & Growth", desc: "Move fast, ship often, and grow your skills in a high-velocity environment." },
    { icon: Sparkles, title: "Leadership Opportunities", desc: "Early team members lead teams as VORIX scales — your impact compounds." },
    { icon: TrendingUp, title: "Long-Term Equity Potential", desc: "Founding contributors are eligible for equity that grows with the company." },
  ];
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Why Join VORIX
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            Six reasons people are choosing to build with us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition"
            >
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="size-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── OPEN ROLES ───────── */
function OpenRoles() {
  const roles = [
    { icon: Code2, title: "Frontend Developer", cat: "Engineering" },
    { icon: Server, title: "Backend Developer", cat: "Engineering" },
    { icon: Smartphone, title: "Mobile Developer", cat: "Engineering" },
    { icon: Paintbrush, title: "UI/UX Designer", cat: "Design" },
    { icon: Layers, title: "Product Designer", cat: "Design" },
    { icon: ImageIcon, title: "Graphic Designer", cat: "Design" },
    { icon: Brain, title: "AI / Machine Learning", cat: "Engineering" },
    { icon: ShieldCheck, title: "Cybersecurity", cat: "Engineering" },
    { icon: ClipboardList, title: "Product Manager", cat: "Product" },
    { icon: Settings, title: "Operations", cat: "Operations" },
    { icon: Megaphone, title: "Marketing", cat: "Growth" },
    { icon: MessageCircle, title: "Community Growth", cat: "Growth" },
    { icon: Video, title: "Content Creator", cat: "Growth" },
  ];
  return (
    <section id="roles" className="py-16 md:py-28 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
            Open Roles
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Find Your Place at VORIX
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            We're hiring across engineering, design, product, and growth. One application — all roles.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {roles.map(({ icon: Icon, title, cat }) => (
            <a
              key={title}
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-md transition"
            >
              <div className="size-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate">{title}</h3>
                <p className="text-xs text-foreground/60">{cat}</p>
              </div>
              <ArrowRight className="size-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition shrink-0" />
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-primary/20"
          >
            Apply Now <ArrowRight className="size-4" />
          </a>
          <p className="text-xs text-foreground/60 mt-3">Don't see your role? Apply anyway — we want to hear from you.</p>
        </div>
      </div>
    </section>
  );
}

/* ───────── CULTURE ───────── */
function Culture() {
  const values = [
    { icon: Target, title: "Ownership", desc: "We act like founders — take responsibility, ship outcomes." },
    { icon: Scale, title: "Integrity", desc: "We do what's right, even when no one is watching." },
    { icon: Zap, title: "Consistency", desc: "Small, repeated effort beats sporadic brilliance." },
    { icon: Compass, title: "Curiosity", desc: "We ask questions, learn fast, and stay humble." },
    { icon: Handshake, title: "Teamwork", desc: "We win together. No egos, no silos." },
    { icon: Telescope, title: "Long-term Thinking", desc: "We build for decades, not for hype cycles." },
  ];
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Our Culture
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            The values that shape how we work, hire, and grow.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border"
            >
              <Icon className="size-7 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── PROCESS ───────── */
function Process() {
  const steps = [
    { n: "01", title: "Application", desc: "Submit your application via our short form." },
    { n: "02", title: "Review", desc: "We review your background and portfolio within a week." },
    { n: "03", title: "Interview", desc: "A friendly conversation with the founding team." },
    { n: "04", title: "Trial Task", desc: "A small, real-world task to see how we work together." },
    { n: "05", title: "Onboarding", desc: "Welcome aboard — we set you up to ship from day one." },
  ];
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            Clear, respectful, and fast — usually 1–2 weeks end to end.
          </p>
        </div>
        <div className="relative grid md:grid-cols-5 gap-6 md:gap-4">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto mb-4 size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                {s.n}
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    {
      q: "Who can apply to VORIX?",
      a: "Anyone passionate about building. We welcome students, recent graduates, and professionals across Africa and beyond. Skill and drive matter more than credentials.",
    },
    {
      q: "What's the time commitment?",
      a: "Roles range from part-time contribution (10–15 hrs/week) to full-time founding positions. Tell us what works for you in your application.",
    },
    {
      q: "Is VORIX paying salaries right now?",
      a: "We're in our early startup stage. Founding team members receive equity and a path to compensation as we raise and grow. Some specialist roles may include stipends.",
    },
    {
      q: "What does equity mean here?",
      a: "Long-term contributors are eligible for equity in VORIX, vested over time. The earlier and more meaningfully you contribute, the larger your potential stake.",
    },
    {
      q: "Do I need housing or real estate experience?",
      a: "No. We care about your craft and curiosity. We'll teach you the industry — you bring the skills.",
    },
    {
      q: "Can I work remotely?",
      a: "Yes. VORIX is remote-first with team check-ins. We hire across Africa and select international time zones.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg">
            Everything you need to know before you apply.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border border-border rounded-2xl bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg">{f.q}</span>
                  <span className="shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-sm sm:text-base text-foreground/75 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── FINAL CTA ───────── */
function FinalCTA() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 md:p-16 text-center">
        <div className="absolute -top-20 -right-20 size-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4">
            Ready to build with us?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-base sm:text-lg">
            One short form. We respond within a week. Let's create something real together.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition shadow-xl"
          >
            Apply Now <ArrowRight className="size-4" />
          </a>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-primary-foreground/70">
            <Check className="size-3.5" /> Open to students, professionals & remote applicants
          </div>
        </div>
      </div>
    </section>
  );
}
