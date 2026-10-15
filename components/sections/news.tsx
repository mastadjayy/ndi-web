import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { news, type Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

const TAGS: Record<Tone, string> = {
  primary: "bg-primary text-white",
  gold: "bg-liturgical-gold text-primary",
  secondary: "bg-secondary text-white",
};

export function News() {
  return (
    <section id="actualites" aria-labelledby="actualites-title" className="container-page py-16 md:py-24">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <SectionHeading id="actualites-title" eyebrow="Vie de la communauté" title="Actualités & Événements Paroissiaux" />
        <Link href="#" className="mt-4 inline-flex items-center gap-2 text-title-md text-primary transition-colors hover:text-amber-700 md:mt-0">
          Toutes les publications <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {news.map((n) => (
          <Card key={n.title} className="group relative gap-0 overflow-hidden rounded-xl border-border-delicate py-0 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="relative h-56 overflow-hidden bg-linear-to-br from-primary via-primary-container to-inverse-surface">
              {n.image ? (
                <Image src={n.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <n.icon className="absolute -bottom-6 -right-4 size-40 text-white/10 transition-transform duration-500 group-hover:scale-110" aria-hidden />
              )}
              <Badge tone={n.tone}>{n.tag}</Badge>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="mb-2 flex items-center gap-2 text-body-sm text-outline">
                  <CalendarDays className="size-4" aria-hidden /> {n.date}
                </p>
                <h3 className="mb-3 font-display text-headline-sm text-on-surface transition-colors group-hover:text-primary">
                  <Link href="#" className="after:absolute after:inset-0">{n.title}</Link>
                </h3>
                <p className="line-clamp-3 text-body-md text-on-surface-variant">{n.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-border-delicate pt-4">
                <span className="inline-flex items-center text-sm font-semibold text-secondary transition-transform group-hover:translate-x-1">
                  {n.cta} <ArrowRight className="ml-1 size-4" aria-hidden />
                </span>
                <span className="text-body-sm text-outline">{n.meta}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={cn("absolute left-4 top-4 rounded-full px-3 py-1 text-label-caps uppercase", TAGS[tone])}>{children}</span>
  );
}