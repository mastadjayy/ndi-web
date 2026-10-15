import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { massTimes, quickLinks, type Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

const TONES: Record<Tone, { icon: string; badge: string }> = {
  primary: { icon: "text-primary", badge: "bg-marian-light text-primary" },
  secondary: { icon: "text-secondary", badge: "bg-surface-container-high text-primary" },
  gold: { icon: "text-liturgical-gold", badge: "bg-gold-subtle text-tertiary-container" },
};

export function MassTimes() {
  return (
    <section id="horaires" aria-labelledby="horaires-title" className="container-page relative z-30 -mt-6">
      <div className="overflow-hidden rounded-xl border border-border-delicate bg-white shadow-md">
        <div className="h-1 bg-liturgical-gold" />
        <div className="p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-border-delicate pb-6 md:flex-row md:items-center">
            <div>
              <p className="text-label-caps uppercase text-secondary">Infos pratiques</p>
              <h2 id="horaires-title" className="mt-1 font-display text-headline-md text-primary">Horaires des Célébrations &amp; Offices</h2>
            </div>
            <Badge variant="outline" className="w-fit gap-1.5 border-secondary/20 bg-marian-light px-3 py-1 text-body-sm font-medium text-primary">
              <CalendarDays className="size-4 text-secondary" aria-hidden /> Semaine du Temps Ordinaire
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
            {massTimes.map(({ title, badge, icon: Icon, tone, stacked, rows, note, link }) => (
              <article key={title} className="flex flex-col justify-between rounded-xl border border-border-delicate bg-warm-ivory p-6 transition-shadow duration-200 hover:shadow-md">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className={cn("size-8", TONES[tone].icon)} aria-hidden />
                    <Badge className={cn("rounded-full text-label-caps uppercase", TONES[tone].badge)}>{badge}</Badge>
                  </div>
                  <h3 className="mb-3 text-title-md text-on-surface">{title}</h3>
                  <ul className="space-y-2.5 text-body-sm">
                    {rows.map((r) => (
                      <li key={r.label} className={cn("border-b border-border-delicate/60 pb-2 last:border-0 last:pb-0",
                        stacked ? "flex flex-col" : "flex items-start justify-between gap-3")}>
                        <span className={stacked ? "font-semibold text-primary" : "font-medium text-on-surface"}>{r.label}</span>
                        <span className={cn(stacked ? "text-on-surface-variant" : "font-semibold tabular-nums", !stacked && (r.accent ? "text-amber-700" : "text-primary"))}>
                          {r.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {note && <p className="mt-4 border-t border-border-delicate pt-3 text-body-sm italic text-outline">{note}</p>}
                {link && (
                  <Link href={link.href} className="mt-4 inline-flex items-center border-t border-border-delicate pt-3 text-body-sm font-medium text-secondary hover:underline">
                    {link.label} <ChevronRight className="ml-1 size-4" aria-hidden />
                  </Link>
                )}
              </article>
            ))}
          </div>

          {/* <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border-delicate pt-6 sm:grid-cols-3">
            {quickLinks.map(({ icon: Icon, label, hint, href }) => (
              <Link key={label} href={href} className="group flex items-center gap-3 rounded-xl bg-surface-cream p-3.5 transition-colors hover:bg-marian-light">
                <Icon className="size-6 text-secondary transition-transform group-hover:scale-110" aria-hidden />
                <span>
                  <span className="block text-sm font-semibold text-on-surface">{label}</span>
                  <span className="text-body-sm text-on-surface-variant">{hint}</span>
                </span>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}