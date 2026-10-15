import Link from "next/link";
import { ListMusic } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Concerts() {
  return (
    <section id="concerts" aria-labelledby="concerts-title" className="container-page py-16">
      <div className="flex flex-col items-center justify-between gap-8 rounded-xl border border-border-delicate bg-surface-container-low p-8 md:flex-row md:p-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-label-caps uppercase text-secondary">Concerts &amp; Art sacré</p>
          <h2 id="concerts-title" className="font-display text-headline-md text-primary">
            Un Lieu de Rayonnement Spirituel et Musical
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Grâce à une acoustique remarquable, l&apos;église Notre Dame de l&apos;Incarnation accueille régulièrement des récitals d&apos;orgue, des ensembles polyphoniques chrétiens et des veillées d&apos;adoration musicale.
          </p>
        </div>
        {/* <Button asChild size="xl" className="shrink-0 bg-primary text-white transition-colors hover:bg-secondary">
          <Link href="#actualites"><ListMusic aria-hidden /> Programmation Musicale</Link>
        </Button> */}

        <Link
            href="#actualites"
            className={
                cn(buttonVariants({ variant: "outline", size: "xl", className: "shrink-0 bg-primary text-white transition-colors hover:bg-secondary" }))
            }
        >
            <ListMusic aria-hidden />
            Programmation Musicale
        </Link>
      </div>
    </section>
  );
}