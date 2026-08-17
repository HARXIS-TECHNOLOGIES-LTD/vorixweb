import { Link } from "@tanstack/react-router";
import { Bath, Bed, Heart, MapPin, Ruler, ShieldCheck, ShieldAlert } from "lucide-react";
import { formatPrice, type Property } from "@/lib/properties";
import { useVorix } from "@/lib/vorix-store";

export function MatchBadge({ score }: { score: number }) {
  const tone =
    score >= 85 ? "bg-accent text-accent-foreground" : score >= 60 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground";
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone}`}>{score}% match</span>
  );
}

export function VerifiedBadge({ verified, className = "" }: { verified: boolean; className?: string }) {
  return verified ? (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-accent/12 text-accent px-2.5 py-1 text-[11px] font-semibold ${className}`}>
      <ShieldCheck className="size-3.5" /> Verified by VORIX
    </span>
  ) : (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-[11px] font-semibold ${className}`}>
      <ShieldAlert className="size-3.5" /> Verification pending
    </span>
  );
}

export function PropertyCard({ property, score }: { property: Property; score?: number }) {
  const { isSaved, toggleSaved } = useVorix();
  const saved = isSaved(property.id);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <Link to="/property/$propertyId" params={{ propertyId: property.id }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={`${property.name} in ${property.area}, ${property.city}`}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <VerifiedBadge verified={property.verified} className="bg-background/90 backdrop-blur" />
            {typeof score === "number" && <MatchBadge score={score} />}
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleSaved(property.id)}
        aria-label={saved ? `Remove ${property.name} from saved` : `Save ${property.name}`}
        aria-pressed={saved}
        className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-background/90 backdrop-blur border border-border text-foreground/70 hover:text-accent transition-colors"
      >
        <Heart className={`size-4 ${saved ? "fill-accent text-accent" : ""}`} />
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-bold leading-tight text-foreground">
            <Link to="/property/$propertyId" params={{ propertyId: property.id }} className="hover:text-primary transition-colors">
              {property.name}
            </Link>
          </h3>
          <span className="shrink-0 font-bold text-primary">{formatPrice(property)}</span>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
          <MapPin className="size-3.5" /> {property.area}, {property.city} · {property.type}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
          <span className="inline-flex items-center gap-1.5"><Bed className="size-3.5" /> {property.bedrooms} bed</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="size-3.5" /> {property.bathrooms} bath</span>
          <span className="inline-flex items-center gap-1.5"><Ruler className="size-3.5" /> {property.size}</span>
        </div>
      </div>
    </article>
  );
}
