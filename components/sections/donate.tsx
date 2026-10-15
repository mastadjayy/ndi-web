import { CircleCheck } from "lucide-react";
import { DonationForm } from "@/components/sections/donation-form";
import { Badge } from "@/components/ui/badge";

const assurances = [
  "Traitement et sécurité des dons assurés par le diocèse.",
  "Paiement disponible par Mobile Money (Orange, MTN, Moov, Wave) et Carte Bancaire.",
];

export function Donate() {
  return (
    <section id="donner" aria-labelledby="donner-title" className="border-t border-border-delicate bg-warm-ivory py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 rounded-xl border border-liturgical-gold/50 bg-white p-8 shadow-md md:p-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <Badge className="rounded-full bg-gold-subtle px-3.5 py-1 text-label-caps uppercase text-tertiary-container">
              Participer à la vie de la paroisse
            </Badge>
            <h2 id="donner-title" className="font-display text-headline-lg-mobile text-primary md:text-headline-lg">
              Le Denier de l&apos;Église &amp; Soutien des Projets
            </h2>
            <p className="text-body-md text-on-surface-variant">
              L&apos;Église ne vit que de vos dons ! Votre générosité permet d&apos;assurer la vie matérielle des prêtres, l&apos;entretien de notre église, le fonctionnement du catéchisme et les œuvres caritatives envers les plus démunis de la Palmeraie.
            </p>
            <ul className="space-y-3 pt-2">
              {assurances.map((a) => (
                <li key={a} className="flex items-center gap-3 text-body-sm text-on-surface">
                  <CircleCheck className="size-5 shrink-0 text-liturgical-gold" aria-hidden /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5"><DonationForm /></div>
        </div>
      </div>
    </section>
  );
}