import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  Bath,
  Bed,
  CalendarCheck,
  Check,
  Clock,
  FileCheck2,
  Heart,
  MapPin,
  Ruler,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { VerifiedBadge } from "@/components/property-card";
import { formatPrice, getProperty } from "@/lib/properties";
import { useVorix } from "@/lib/vorix-store";

export const Route = createFileRoute("/property/$propertyId")({
  loader: ({ params }) => {
    const property = getProperty(params.propertyId);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Listing unavailable — VORIX" }, { name: "robots", content: "noindex" }] };
    }
    const { property } = loaderData;
    const title = `${property.name}, ${property.area} — ${formatPrice(property)} | VORIX`;
    const description = `${property.type} in ${property.area}, ${property.city}. ${property.bedrooms} bed, ${property.bathrooms} bath, ${formatPrice(property)}. ${property.verified ? "Verified by VORIX." : "Verification in progress."}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PropertyDetail,
  notFoundComponent: PropertyNotFound,
});

function PropertyNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground">This listing isn't available</h1>
        <p className="mt-2 text-sm text-muted-foreground">It may have been let or removed from the demo catalogue.</p>
        <Link to="/discover" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
          Back to Discover
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const { isSaved, toggleSaved, addRequest } = useVorix();
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", date: "", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const saved = isSaved(property.id);

  const trust = [
    { icon: FileCheck2, label: "Listing documents reviewed", ok: property.verified },
    { icon: UserCheck, label: "Provider identity confirmed", ok: property.provider.verified },
    { icon: MapPin, label: "Physical address checked", ok: property.verified },
    { icon: ShieldCheck, label: "No duplicate-listing flags", ok: true },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name";
    if (!/^[0-9+\s-]{7,}$/.test(form.phone.trim())) next.phone = "Enter a reachable phone number";
    if (!form.date) next.date = "Choose a preferred date";
    setErrors(next);
    if (Object.keys(next).length) return;

    addRequest({
      propertyId: property.id,
      propertyName: property.name,
      name: form.name.trim(),
      phone: form.phone.trim(),
      date: form.date,
      note: form.note.trim(),
    });
    setDone(true);
    toast.success("Viewing request sent", { description: "Track it any time from your dashboard." });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <Link to="/discover" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Back to Discover
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={property.images[active]}
                alt={`${property.name} — view ${active + 1}`}
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="mt-3 flex gap-3">
              {property.images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`overflow-hidden rounded-xl border-2 transition-colors ${i === active ? "border-primary" : "border-transparent"}`}
                >
                  <img src={src} alt="" loading="lazy" decoding="async" className="h-20 w-28 object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{property.name}</h1>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4" /> {property.area}, {property.city} · {property.type}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{formatPrice(property)}</p>
                <VerifiedBadge verified={property.verified} className="mt-2" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Bed, label: `${property.bedrooms} bedroom${property.bedrooms > 1 ? "s" : ""}` },
                { icon: Bath, label: `${property.bathrooms} bathroom${property.bathrooms > 1 ? "s" : ""}` },
                { icon: Ruler, label: property.size },
                { icon: Clock, label: `Replies ${property.provider.responseTime.toLowerCase()}` },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground">
                  <Icon className="mb-2 size-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-bold text-foreground">About this home</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{property.description}</p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-bold text-foreground">Amenities</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="size-4 text-accent" /> {a}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-bold text-foreground">Around the area</h2>
              <ul className="mt-3 space-y-2">
                {property.nearby.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" /> {n}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                <ShieldCheck className="size-4 text-accent" /> VORIX trust check
              </h2>
              <ul className="mt-4 space-y-3">
                {trust.map(({ icon: Icon, label, ok }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full ${
                        ok ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span className={ok ? "text-foreground" : "text-muted-foreground"}>
                      {label}
                      {!ok && " — pending"}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-border pt-5 text-sm">
                <p className="font-semibold text-foreground">{property.provider.name}</p>
                <p className="mt-1 text-muted-foreground">
                  {property.provider.role} · on VORIX since {property.provider.since}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <CalendarCheck className="size-5 text-primary" /> Request a viewing
              </h2>

              {done ? (
                <div className="mt-4 rounded-xl border border-accent/30 bg-accent/10 p-5 text-sm">
                  <p className="font-semibold text-foreground">Request received</p>
                  <p className="mt-1 text-muted-foreground">
                    The VORIX team will confirm your viewing for {form.date} and share the provider's
                    verified contact details.
                  </p>
                  <Link
                    to="/dashboard"
                    className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    View in dashboard
                  </Link>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-4 space-y-4" noValidate>
                  {[
                    { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
                    { id: "phone", label: "Phone number", type: "tel", placeholder: "080..." },
                    { id: "date", label: "Preferred date", type: "date", placeholder: "" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={(form as any)[f.id]}
                        onChange={(e) => setForm((s) => ({ ...s, [f.id]: e.target.value }))}
                        aria-invalid={!!errors[f.id]}
                        className={`w-full rounded-xl border bg-background px-3 py-2.5 text-sm focus:outline-none ${
                          errors[f.id] ? "border-destructive" : "border-border focus:border-primary"
                        }`}
                      />
                      {errors[f.id] && <p className="mt-1 text-xs text-destructive">{errors[f.id]}</p>}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="note" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Anything else? (optional)
                    </label>
                    <textarea
                      id="note"
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                      placeholder="Move-in timing, questions for the provider…"
                      className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request viewing
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaved(property.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Heart className={`size-4 ${saved ? "fill-accent text-accent" : ""}`} />
                    {saved ? "Saved to your list" : "Save this home"}
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
