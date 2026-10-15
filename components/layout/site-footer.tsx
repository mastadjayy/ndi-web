import Image from "next/image";
import Link from "next/link";
import { BookOpen, ExternalLink, Mail, Map, MapPin, Phone, Share2 } from "lucide-react";
import { footerColumns, parish } from "@/lib/content";
import { cn } from "@/lib/utils";

const social = [
  { icon: Share2, label: "Partager" },
  { icon: BookOpen, label: "Feuille de messe" },
  { icon: Map, label: "Localisation" },
];
const heading = "text-label-caps uppercase text-liturgical-gold";
const link = "text-surface-container-high transition-colors duration-200 hover:text-liturgical-gold";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-container bg-primary text-white">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-primary-container pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-white p-1">
                <Image src="/images/logo-ndi.png" alt="" width={40} height={46} className="h-11 w-auto" />
              </span>
              <span>
                <span className="block text-title-md text-liturgical-gold">{parish.name}</span>
                <span className="text-label-caps uppercase text-surface-variant">Riviera Palmeraie</span>
              </span>
            </div>
            <p className="text-body-sm text-surface-container-high">
              Paroisse catholique de l&apos;Archidiocèse d&apos;Abidjan. Lieu de recueillement, de prière et de vie fraternelle au service de tous.
            </p>
            <div className="flex gap-3 pt-2">
              {social.map(({ icon: Icon, label }) => (
                <Link key={label} href="#" aria-label={label}
                  className="grid size-11 place-items-center rounded-lg bg-primary-container text-gold-subtle transition-colors hover:text-white">
                  <Icon className="size-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-3">
              <h2 className={heading}>{col.title}</h2>
              <ul className="space-y-2 text-body-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} {...(l.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className={cn(link, "inline-flex items-center gap-1", l.highlight && "font-semibold text-liturgical-gold underline")}>
                      {l.label} {l.external && <ExternalLink className="size-3" aria-hidden />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div id="contacts" className="space-y-3">
            <h2 className={heading}>Contact &amp; Accueil</h2>
            <address className="space-y-2 text-body-sm not-italic text-surface-container-high">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-liturgical-gold" aria-hidden />{parish.address}</p>
              <p className="flex items-center gap-2"><Phone className="size-4 text-liturgical-gold" aria-hidden />{parish.phone}</p>
              <p className="flex items-center gap-2"><Mail className="size-4 text-liturgical-gold" aria-hidden />{parish.email}</p>
              <p className="pt-1 text-xs text-surface-variant">Secrétariat ouvert du mardi au samedi de 8h30 à 12h30 et de 15h00 à 18h00.</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-body-sm text-surface-variant md:flex-row">
          <p>© {new Date().getFullYear()} Paroisse Notre Dame de l&apos;Incarnation (Riviera - Palmeraie). Tous droits réservés.</p>
          <ul className="flex items-center gap-6 text-xs">
            {["Politique de confidentialité", "Plan du site", "Accès pastoral"].map((l) => (
              <li key={l}><Link href="#" className="transition-colors hover:text-liturgical-gold">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}