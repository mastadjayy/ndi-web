import Image from "next/image";
import Link from "next/link";
import { UsersRound } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { youthPrograms } from "@/lib/content";
import { cn } from "@/lib/utils";

interface YouthProps {
  /** Optional photo for the right panel; falls back to a branded gradient. */
  image?: string;
}

export function Youth({ image }: YouthProps) {
  return (
    <section id="jeunesse" aria-labelledby="jeunesse-title" className="container-page py-16 md:py-24">
      <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-primary text-white shadow-xl lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-6 p-8 md:p-12 lg:col-span-7">
          <div>
            <p className="text-label-caps uppercase text-liturgical-gold">Pastorale des jeunes</p>
            <h2 id="jeunesse-title" className="mb-4 mt-2 font-display text-headline-lg-mobile text-white md:text-headline-lg">
              Grandir, Prier &amp; Servir Ensemble
            </h2>
            <p className="text-body-md text-surface-container-high">
              La Paroisse Notre Dame de l&apos;Incarnation offre aux enfants, adolescents et jeunes adultes un cadre d&apos;épanouissement humain et spirituel : de l&apos;Éveil à la foi jusqu&apos;aux études supérieures.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {youthPrograms.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15">
                <h3 className="mb-1 flex items-center gap-1.5 text-title-md text-gold-subtle">
                  <Icon className="size-4 shrink-0" aria-hidden /> {title}
                </h3>
                <p className="text-body-sm text-surface-container-high">{text}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
                href="#"
                className={
                    cn(buttonVariants({ variant: "gold", size: "xl" }))
                }
            >
                Rejoindre les activités jeunes
            </Link>

            {/* <Link
                href="#"
                className={
                    cn(buttonVariants({ variant: "glass", size: "xl" }))
                }
            >
                Télécharger la fiche d&apos;inscription
            </Link> */}
          </div>
        </div>

        <div className="relative min-h-[300px] bg-linear-to-br from-primary-container via-primary to-inverse-surface lg:col-span-5 lg:min-h-full">
          {image ? (
            <Image src={image} alt="Jeunes de la paroisse rassemblés sur le parvis" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          ) : (
            <UsersRound className="absolute -bottom-8 -right-8 size-64 text-white/10" aria-hidden />
          )}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}