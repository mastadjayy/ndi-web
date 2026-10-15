import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { sacraments } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Sacraments() {
  return (
    <section id="sacrements" aria-labelledby="sacrements-title" className="border-y border-border-delicate bg-surface-container-low py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          id="sacrements-title" align="center" className="mb-14"
          eyebrow="Chemin de vie chrétienne" title="Les Sacrements de l'Église"
          description="Signes visibles de la grâce de Dieu, les sacrements ponctuent les étapes majeures de l'existence. La paroisse vous accueille avec bienveillance."
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sacraments.map(({ icon: Icon, title, text, cta, bg, fg }) => (
            <li key={title}>
              <Card className="h-full gap-0 rounded-xl border-border-delicate p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-liturgical-gold">
                <div className={cn("mb-4 grid size-12 place-items-center rounded-xl", bg, fg)}>
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="mb-2 text-title-md text-primary">{title}</h3>
                <p className="mb-4 flex-1 text-body-sm text-on-surface-variant">{text}</p>
                <Link href="#" className="inline-flex items-center text-body-sm font-medium text-secondary hover:underline">
                  {cta} <ArrowRight className="ml-1 size-4" aria-hidden />
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}