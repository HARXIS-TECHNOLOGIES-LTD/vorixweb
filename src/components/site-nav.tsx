import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, LayoutDashboard, Sparkles } from "lucide-react";
import logo from "@/assets/vorix-logo.png";
import { useVorix } from "@/lib/vorix-store";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/discover", label: "Discover" },
  { to: "/ask", label: "Ask VORIX" },
  { to: "/why-vorix", label: "Why VORIX" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/join-the-team", label: "Join the Team" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { saved } = useVorix();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 min-w-0">
          <div className="size-9 sm:size-10 bg-primary rounded-lg flex items-center justify-center p-1.5 shrink-0">
            <img src={logo} alt="VORIX" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-primary truncate">VORIX</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary font-semibold" }}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/dashboard"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
          >
            <Heart className="size-4" />
            Saved
            {saved.length > 0 && (
              <span className="ml-0.5 rounded-full bg-accent text-accent-foreground text-[11px] font-bold px-1.5 py-0.5">
                {saved.length}
              </span>
            )}
          </Link>
          <Link
            to="/ask"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Sparkles className="size-4" />
            Ask VORIX
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
          >
            <span className="relative block w-5 h-3.5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm font-medium">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-muted text-primary" }}
                className="px-3 py-3 rounded-lg hover:bg-muted text-foreground/85"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/ask"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold inline-flex items-center justify-center gap-2"
            >
              <LayoutDashboard className="size-4" />
              Start with Ask VORIX
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
