import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
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
  MapPin,
  Building2,
  Cpu,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfawOwqiWz0-FDYcHr-bAG5W5crekDp25UE_w9MkMIvYs1YiA/viewform?usp=header";

/* Brand palette (modern startup) */
const NAVY = "#0B1220";
const BLUE = "#2563EB";
const CYAN = "#38BDF8";

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

/* ───────── Apply Button ───────── */
function ApplyButton({
  variant = "primary",
  children = "Apply Now",
  className = "",
  href = FORM_URL,
  onClick,
  type = "button",
  disabled = false,
}: {
  variant?: "primary" | "light" | "dark";
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base =
    "group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? `bg-[${BLUE}] text-white shadow-[0_10px_30px_-10px_${BLUE}99] hover:shadow-[0_20px_50px_-12px_${BLUE}cc] hover:-translate-y-0.5`
      : variant === "dark"
        ? `bg-[${NAVY}] text-white shadow-lg hover:-translate-y-0.5 hover:shadow-2xl`
        : "bg-white text-[#0B1220] border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:border-[#2563EB]/40";

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </>
  );

  if (onClick || type === "submit") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${base} ${styles} ${className}`}
      >
        {content}
      </button>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </a>
  );
}

/* ───────── Animated Hero Background ───────── */
function HeroBackground() {
  // Pre-computed particle positions (deterministic to avoid hydration churn)
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${(i * 53) % 100}%`,
        top: `${(i * 37) % 100}%`,
        size: 2 + ((i * 7) % 5),
        delay: (i % 6) * 0.8,
        duration: 6 + (i % 5),
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />

      {/* Glow blobs */}
      <div
        className="absolute -top-32 -left-32 size-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${BLUE}33, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-40 -right-32 size-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(circle, ${CYAN}40, transparent 70%)` }}
      />

      {/* Map grid */}
      <svg className="absolute inset-0 w-full h-full text-[#2563EB]/15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" />
      </svg>

      {/* Connection nodes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <g stroke={BLUE} strokeWidth="1" fill="none" opacity="0.35">
          <line x1="120" y1="180" x2="320" y2="120" />
          <line x1="320" y1="120" x2="560" y2="240" />
          <line x1="560" y1="240" x2="780" y2="140" />
          <line x1="200" y1="480" x2="430" y2="540" />
          <line x1="430" y1="540" x2="700" y2="460" />
          <line x1="700" y1="460" x2="880" y2="540" />
          <line x1="320" y1="120" x2="430" y2="540" />
        </g>
        <g fill={BLUE}>
          {[
            [120, 180],
            [320, 120],
            [560, 240],
            [780, 140],
            [200, 480],
            [430, 540],
            [700, 460],
            [880, 540],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" opacity="0.9" />
              <circle cx={x} cy={y} r="10" opacity="0.15">
                <animate attributeName="r" values="6;16;6" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>
      </svg>

      {/* Floating geometric shapes */}
      <div className="absolute top-[18%] left-[10%] hidden sm:block animate-[float_8s_ease-in-out_infinite]">
        <div className="size-14 rounded-2xl border border-[#2563EB]/30 bg-white/60 backdrop-blur-sm shadow-lg shadow-[#2563EB]/10 rotate-12" />
      </div>
      <div className="absolute top-[28%] right-[12%] hidden md:block animate-[float_10s_ease-in-out_infinite_1s]">
        <div className="size-10 rounded-xl border border-[#38BDF8]/40 bg-white/60 backdrop-blur-sm shadow-lg -rotate-6" />
      </div>
      <div className="absolute bottom-[20%] left-[18%] hidden sm:block animate-[float_9s_ease-in-out_infinite_2s]">
        <div className="size-12 rounded-full border border-[#2563EB]/30 bg-white/60 backdrop-blur-sm shadow-lg" />
      </div>

      {/* Property outline cards */}
      <div className="absolute bottom-[26%] right-[18%] hidden md:block animate-[float_11s_ease-in-out_infinite_0.5s]">
        <svg width="64" height="60" viewBox="0 0 64 60" className="text-[#2563EB]/40">
          <path d="M4 28 L32 6 L60 28 L60 56 L4 56 Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
          <rect x="26" y="38" width="12" height="18" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Floating pins */}
      <FloatingPin className="hidden sm:block top-[22%] left-[28%] text-[#2563EB]" />
      <FloatingPin className="hidden md:block top-[40%] right-[28%] text-[#38BDF8] [animation-delay:1.5s]" />
      <FloatingPin className="hidden sm:block bottom-[18%] left-[40%] text-[#2563EB]/80 [animation-delay:2.5s]" />

      {/* Glowing particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-[particle_var(--d)_ease-in-out_infinite]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? BLUE : CYAN,
            boxShadow: `0 0 ${p.size * 4}px ${i % 2 === 0 ? BLUE : CYAN}`,
            opacity: 0.5,
            animationDelay: `${p.delay}s`,
            ["--d" as string]: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingPin({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none animate-[float_6s_ease-in-out_infinite] ${className}`}>
      <div className="relative">
        <MapPin className="size-7 fill-current drop-shadow-lg" strokeWidth={1.5} />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-current opacity-40 blur-sm" />
      </div>
    </div>
  );
}

/* ───────── Page ───────── */
function JoinTheTeam() {
  return (
    <div className="min-h-screen bg-white text-[#0B1220]">
      {/* Inline keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        @keyframes particle {
          0%, 100% { transform: translate(0,0) scale(1); opacity: .35; }
          50% { transform: translate(10px,-20px) scale(1.4); opacity: .8; }
        }
        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <Nav />
      <Hero />
      <WhyJoin />
      <OpenRoles />
      <Disciplines />
      <Culture />
      <Process />
      <ApplicationForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36 md:pt-44 md:pb-48 px-4 sm:px-6">
      <HeroBackground />
      <div className="relative max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold mb-8 shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full size-2 bg-[#2563EB]" />
          </span>
          We're Hiring · Founding Team
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8">
          Join the team building the{" "}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            future of student housing
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          VORIX is building Africa's most trusted housing platform — starting
          with students. Join us early and help shape a product, a company, and
          a movement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <ApplyButton />
          <a
            href="#roles"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 bg-white/70 backdrop-blur px-7 py-4 rounded-xl font-semibold hover:bg-white hover:border-[#2563EB]/30 transition"
          >
            See Open Roles
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── Section wrapper ───────── */
function SectionShell({
  children,
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  tone?: "light" | "tint" | "dark";
  id?: string;
}) {
  const bg =
    tone === "tint"
      ? "bg-[#F8FAFC]"
      : tone === "dark"
        ? "bg-[#0B1220] text-white"
        : "bg-white";
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 ${bg}`}
    >
      <div className="relative">{children}</div>
    </section>
  );
}

function SectionHeader({
  tag,
  title,
  subtitle,
  light = false,
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${
          light ? "bg-white/10 text-[#38BDF8]" : "bg-[#2563EB]/10 text-[#2563EB]"
        }`}
      >
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
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
    <SectionShell tone="light">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Why VORIX"
          title={<>Build something that <span className="text-[#2563EB]">matters</span></>}
          subtitle="Six reasons people are choosing to build with us."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-7 sm:p-8 rounded-3xl border border-slate-200 bg-white hover:border-[#2563EB]/40 hover:shadow-2xl hover:shadow-[#2563EB]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#2563EB]/15 to-[#38BDF8]/10 text-[#2563EB] flex items-center justify-center mb-5 group-hover:from-[#2563EB] group-hover:to-[#38BDF8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#2563EB]/30 transition-all">
                <Icon className="size-6" />
              </div>
              <h3 className="font-bold text-lg mb-2.5">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
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
    <SectionShell tone="tint" id="roles">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Open Roles"
          title="Find your place at VORIX"
          subtitle="We're hiring across engineering, design, product, and growth. One application — all roles."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {roles.map(({ icon: Icon, title, cat }) => (
            <a
              key={title}
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="size-11 shrink-0 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate">{title}</h3>
                <p className="text-xs text-slate-500">{cat}</p>
              </div>
              <ArrowRight className="size-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition shrink-0" />
            </a>
          ))}
        </div>
        <div className="text-center mt-14 flex flex-col items-center gap-3">
          <ApplyButton />
          <p className="text-xs text-slate-500">
            Don't see your role? Apply anyway — we want to hear from you.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ───────── DISCIPLINES (replaces team photo) ───────── */
function Disciplines() {
  const disciplines = [
    {
      icon: Code2,
      title: "Engineering",
      desc: "From web to mobile to AI — engineers who ship reliable, scalable systems.",
      tint: "from-[#2563EB] to-[#38BDF8]",
    },
    {
      icon: Paintbrush,
      title: "Design",
      desc: "Product and brand designers crafting trustworthy, delightful experiences.",
      tint: "from-[#38BDF8] to-[#2563EB]",
    },
    {
      icon: Cpu,
      title: "Product Development",
      desc: "Product thinkers translating user pain into focused, impactful features.",
      tint: "from-[#0B1220] to-[#2563EB]",
    },
    {
      icon: Building2,
      title: "Operations",
      desc: "Operators making the engine run — from landlords to logistics.",
      tint: "from-[#2563EB] to-[#0B1220]",
    },
  ];
  return (
    <SectionShell tone="dark">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dark-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dark-grid)" />
        </svg>
      </div>
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 size-[40rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${BLUE}, transparent 70%)` }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          tag="The Team"
          title={<>A mission-driven team of <span className="bg-gradient-to-r from-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent">builders</span></>}
          subtitle="We're a small, multidisciplinary group of people who care deeply about housing, technology, and Africa's future. No corporate ladders — just craft, ownership, and shipping."
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disciplines.map(({ icon: Icon, title, desc, tint }) => (
            <div
              key={title}
              className="group relative p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`size-14 rounded-2xl bg-gradient-to-br ${tint} flex items-center justify-center mb-5 shadow-lg shadow-[#2563EB]/30`}>
                <Icon className="size-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2.5">{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 max-w-3xl mx-auto">
          {[
            { n: "13+", l: "Open Roles" },
            { n: "100%", l: "Remote-First" },
            { n: "1", l: "Shared Mission" },
          ].map((s) => (
            <div
              key={s.l}
              className="text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent">
                {s.n}
              </div>
              <div className="text-[11px] sm:text-xs text-white/60 mt-1.5 font-medium">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
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
    <SectionShell tone="tint">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Our Culture"
          title="How we work, hire, and grow"
          subtitle="Six values that shape every decision we make."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#2563EB]/15 to-transparent flex items-center justify-center mb-4">
                <Icon className="size-6 text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-lg mb-2.5">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
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
    <SectionShell tone="light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Process"
          title="From application to onboarding"
          subtitle="Clear, respectful, and fast — usually 1–2 weeks end to end."
        />
        <div className="relative grid md:grid-cols-5 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#38BDF8]/40" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto mb-4 size-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] text-white flex items-center justify-center font-bold shadow-lg shadow-[#2563EB]/30">
                {s.n}
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ───────── APPLICATION FORM ───────── */
type FormFields = { name: string; email: string; role: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(v: FormFields): FormErrors {
  const e: FormErrors = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  else if (v.name.trim().length < 2) e.name = "Name is too short.";
  else if (v.name.length > 80) e.name = "Name is too long.";

  if (!v.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  else if (v.email.length > 120) e.email = "Email is too long.";

  if (!v.role.trim()) e.role = "Please pick a role.";

  if (!v.message.trim()) e.message = "Tell us a bit about yourself.";
  else if (v.message.trim().length < 20)
    e.message = "Please write at least 20 characters.";
  else if (v.message.length > 1000) e.message = "Keep it under 1000 characters.";
  return e;
}

const ROLE_OPTIONS = [
  "Engineering",
  "Design",
  "Product",
  "Operations",
  "Growth / Marketing",
  "Other",
];

function ApplicationForm() {
  const [values, setValues] = useState<FormFields>({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const setField = (k: keyof FormFields, v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    if (touched[k]) {
      setErrors(validate({ ...values, [k]: v }));
    }
  };

  const handleBlur = (k: keyof FormFields) => {
    setTouched((p) => ({ ...p, [k]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eMap = validate(values);
    setErrors(eMap);
    setTouched({ name: true, email: true, role: true, message: true });
    if (Object.keys(eMap).length > 0) return;

    setStatus("loading");
    // Simulate persistence + send user to the Google Form to complete official application
    await new Promise((r) => setTimeout(r, 900));
    try {
      const prior = JSON.parse(localStorage.getItem("vorix_applications") || "[]");
      prior.push({ ...values, at: new Date().toISOString() });
      localStorage.setItem("vorix_applications", JSON.stringify(prior));
    } catch {
      /* ignore */
    }
    setStatus("success");
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border bg-white text-[#0B1220] placeholder:text-slate-400 transition outline-none focus:ring-4 focus:ring-[#2563EB]/15";
  const inputOk = "border-slate-200 focus:border-[#2563EB]";
  const inputErr = "border-red-400 focus:border-red-500 focus:ring-red-500/15";

  return (
    <SectionShell tone="light">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="Apply"
          title="Quick application"
          subtitle="Tell us about you. We'll review every application within a week."
        />

        {status === "success" ? (
          <div className="relative rounded-3xl border border-[#2563EB]/20 bg-white p-8 sm:p-10 text-center shadow-xl shadow-[#2563EB]/5">
            <div className="mx-auto mb-5 size-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
              <CheckCircle2 className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-3">Thanks, {values.name.split(" ")[0]}!</h3>
            <p className="text-slate-600 mb-6">
              We've captured your details. A new tab opened with our full
              application form — please complete it to finish your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <ApplyButton>Open Application Form</ApplyButton>
              <button
                type="button"
                onClick={() => {
                  setValues({ name: "", email: "", role: "", message: "" });
                  setErrors({});
                  setTouched({});
                  setStatus("idle");
                }}
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold border border-slate-200 hover:border-[#2563EB]/40 transition"
              >
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-xl shadow-[#2563EB]/5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" htmlFor="name" error={touched.name ? errors.name : undefined}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Ada Lovelace"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={!!errors.name}
                  className={`${inputBase} ${touched.name && errors.name ? inputErr : inputOk}`}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={touched.email ? errors.email : undefined}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  placeholder="you@email.com"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  className={`${inputBase} ${touched.email && errors.email ? inputErr : inputOk}`}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Role of interest" htmlFor="role" error={touched.role ? errors.role : undefined}>
                <select
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={(e) => setField("role", e.target.value)}
                  onBlur={() => handleBlur("role")}
                  aria-invalid={!!errors.role}
                  className={`${inputBase} ${touched.role && errors.role ? inputErr : inputOk}`}
                >
                  <option value="">Select a role…</option>
                  {ROLE_OPTIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field
                label="Why VORIX?"
                htmlFor="message"
                error={touched.message ? errors.message : undefined}
                hint={`${values.message.length}/1000`}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell us about your background, what excites you about VORIX, and a link to your work."
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={!!errors.message}
                  className={`${inputBase} resize-none ${touched.message && errors.message ? inputErr : inputOk}`}
                />
              </Field>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                By submitting you'll be redirected to our full application form.
              </p>
              <ApplyButton type="submit" onClick={() => {}} disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Submit Application"
                )}
              </ApplyButton>
            </div>
          </form>
        )}
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={htmlFor} className="text-sm font-semibold text-[#0B1220]">
          {label} <span className="text-[#2563EB]">*</span>
        </label>
        {hint && <span className="text-[11px] text-slate-400">{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5">
          <span className="inline-block size-1.5 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    { q: "Who can apply to VORIX?", a: "Anyone passionate about building. We welcome students, recent graduates, and professionals across Africa and beyond. Skill and drive matter more than credentials." },
    { q: "What's the time commitment?", a: "Roles range from part-time contribution (10–15 hrs/week) to full-time founding positions. Tell us what works for you in your application." },
    { q: "Is VORIX paying salaries right now?", a: "We're in our early startup stage. Founding team members receive equity and a path to compensation as we raise and grow. Some specialist roles may include stipends." },
    { q: "What does equity mean here?", a: "Long-term contributors are eligible for equity in VORIX, vested over time. The earlier and more meaningfully you contribute, the larger your potential stake." },
    { q: "Do I need housing or real estate experience?", a: "No. We care about your craft and curiosity. We'll teach you the industry — you bring the skills." },
    { q: "Can I work remotely?", a: "Yes. VORIX is remote-first with team check-ins. We hire across Africa and select international time zones." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SectionShell tone="tint">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          tag="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before you apply."
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border rounded-2xl bg-white overflow-hidden transition-all ${
                  isOpen ? "border-[#2563EB]/30 shadow-lg shadow-[#2563EB]/5" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg">{f.q}</span>
                  <span
                    className={`shrink-0 size-8 rounded-full flex items-center justify-center transition ${
                      isOpen ? "bg-[#2563EB] text-white" : "bg-[#2563EB]/10 text-[#2563EB]"
                    }`}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 -mt-1 text-sm sm:text-base text-slate-600 leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

/* ───────── FINAL CTA ───────── */
function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1220] via-[#0B1220] to-[#0F1B3D] text-white p-8 sm:p-12 md:p-16 text-center border border-white/5">
        <div
          className="absolute -top-20 -right-20 size-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BLUE}66, transparent 70%)` }}
        />
        <div
          className="absolute -bottom-20 -left-20 size-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${CYAN}55, transparent 70%)` }}
        />
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative">
          <MapPin className="size-10 mx-auto mb-5 text-[#38BDF8]" strokeWidth={1.5} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-[1.1]">
            Ready to build with us?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-9 text-base sm:text-lg">
            One short form. We respond within a week. Let's create something
            real together.
          </p>
          <div className="flex justify-center">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-[#0B1220] px-8 py-4 rounded-xl font-semibold shadow-2xl hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-12px_rgba(56,189,248,0.5)] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#2563EB]/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Apply Now
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-white/70">
            <Check className="size-3.5 text-[#38BDF8]" /> Open to students,
            professionals & remote applicants
          </div>
        </div>
      </div>
    </section>
  );
}
