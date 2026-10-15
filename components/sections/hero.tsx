"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ArrowRightIcon, ChevronLeft, ChevronRight, Church, Heart, Pause, Play, Sparkles, Users } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import type { HeroSlide } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS = { church: Church, sparkles: Sparkles, users: Users, heart: Heart } as const;

interface HeroProps { slides: HeroSlide[]; intervalMs?: number }

export function Hero({ slides, intervalMs = 6500 }: HeroProps) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hold, setHold] = useState(false); // hover / keyboard focus
  const [reduced, setReduced] = useState(false);

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || hold || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [playing, hold, reduced, count, intervalMs]);

  const autoplaying = playing && !hold && !reduced;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Bannière principale"
      className="relative overflow-hidden bg-inverse-surface text-white"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="relative h-[580px] md:h-[680px]">
        {slides.map((s, i) => {
          const Icon = ICONS[s.icon];
          const Heading = i === 0 ? "h1" : "h2";
          const active = i === index;
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} sur ${count}`}
              inert={!active}
              className={cn(
                "absolute inset-0 flex items-center transition-opacity duration-700 ease-in-out",
                active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <div className="absolute inset-0 -z-0">
                {s.image ? (
                  <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-container to-inverse-surface" />
                    <div className="absolute -right-24 top-1/4 size-[28rem] rounded-[50%] bg-liturgical-gold/10 blur-3xl" />
                  </>
                )}
                <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-transparent" />
              </div>

              <div className="container-page relative z-10">
                <div className="max-w-2xl space-y-6">
                  {/* <span className="inline-flex items-center gap-2 rounded-full border border-liturgical-gold/40 bg-liturgical-gold/20 px-3.5 py-1 text-label-caps uppercase text-gold-subtle backdrop-blur-sm">
                    <Icon className="size-4 text-liturgical-gold" aria-hidden /> {s.eyebrow}
                  </span> */}
                  <Heading className="font-display text-display-hero-mobile text-white md:text-display-hero">{s.title}</Heading>
                  <p className="text-body-md text-surface-container-high md:text-body-lg">{s.text}</p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                        href={s.primary.href}
                        className={
                            cn(buttonVariants({ variant: "gold", size: "xl" }))
                        }
                    >
                        {s.primary.label}
                    </Link>

                    {/* <Link
                        href={s.secondary.href}
                        className={
                            cn(buttonVariants({ variant: "glass", size: "xl", className: "gap-2" }))
                        }
                    >
                        {s.secondary.label}
                        <ArrowRight className="size-4" aria-hidden/>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-page relative z-20 -mt-16 flex items-center justify-between pb-8">
        <div role="group" aria-label="Choisir une diapositive"
          className="flex items-center gap-4 rounded-full border border-white/10 bg-inverse-surface/80 px-4 py-2 backdrop-blur-md">
          {slides.map((s, i) => (
            <button key={s.id} type="button" aria-label={`Diapositive ${i + 1}`} aria-current={i === index}
              onClick={() => go(i)}
              className={cn(
                "relative size-3 cursor-pointer rounded-full transition-all duration-300 before:absolute before:-inset-2",
                i === index ? "bg-liturgical-gold ring-2 ring-liturgical-gold/50" : "bg-white/40 hover:bg-white/80",
              )} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {[
            { label: autoplaying ? "Mettre en pause le défilement" : "Reprendre le défilement", onClick: () => setPlaying((p) => !p), icon: autoplaying ? Pause : Play },
            { label: "Diapositive précédente", onClick: () => go(index - 1), icon: ChevronLeft },
            { label: "Diapositive suivante", onClick: () => go(index + 1), icon: ChevronRight },
          ].map(({ label, onClick, icon: I }) => (
            <button key={label} type="button" aria-label={label} onClick={onClick}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20">
              <I className="size-5" aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live={autoplaying ? "off" : "polite"}>Diapositive {index + 1} sur {count}</p>
    </section>
  );
}