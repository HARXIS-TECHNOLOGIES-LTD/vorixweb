import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import logo from "@/assets/vorix-logo.png";

const SOCIALS = [
  { href: "https://x.com/Vorixtechnology", label: "X (Twitter)", icon: Twitter },
  { href: "https://www.linkedin.com/company/vorix-technologies/", label: "LinkedIn", icon: Linkedin },
  { href: "https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W", label: "WhatsApp Community", icon: MessageCircle },
  { href: "https://instagram.com/vorixtechnology", label: "Instagram", icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center p-1.5">
                <img src={logo} alt="VORIX" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="text-lg font-bold tracking-tight">VORIX</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm mb-6">
              AI-powered housing discovery and trust infrastructure — starting with student
              communities across Nigeria.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@vorix0001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/discover" className="hover:text-accent transition-colors">Discover homes</Link></li>
              <li><Link to="/ask" className="hover:text-accent transition-colors">Ask VORIX</Link></li>
              <li><Link to="/why-vorix" className="hover:text-accent transition-colors">Why VORIX</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition-colors">Saved & viewings</Link></li>
              <li><Link to="/join-the-team" className="hover:text-accent transition-colors">Join the team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Community</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="https://chat.whatsapp.com/IC1tNbguLmx6ZgO7j09r7W" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp community
                </a>
              </li>
              <li>
                <a href="https://vorix-survey.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Student & agent survey
                </a>
              </li>
              <li>
                <a href="mailto:vorixconnectltd@gmail.com?subject=Partnership%20with%20VORIX" className="hover:text-accent transition-colors">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="mailto:vorixconnectltd@gmail.com?subject=Investor%20enquiry" className="hover:text-accent transition-colors">
                  Investor enquiries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:vorixconnectltd@gmail.com" className="hover:text-accent transition-colors">
                  vorixconnectltd@gmail.com
                </a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-primary-foreground/60">
          <span>© 2026 VORIX Technologies · Lagos, Nigeria</span>
          <span>Listings shown are demo data for product preview purposes.</span>
        </div>
      </div>
    </footer>
  );
}
