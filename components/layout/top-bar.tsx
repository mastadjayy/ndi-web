import Link from "next/link";
import { BookOpen, Clock, Mail, Phone } from "lucide-react";
import { parish } from "@/lib/content";

export function TopBar() {
  return (
    <aside className="hidden bg-primary text-body-sm text-surface-variant md:block">
      <div className="container-page flex items-center justify-between py-2">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2 font-medium">
            <Clock className="size-4 text-liturgical-gold" aria-hidden /> Aujourd&apos;hui : Messe à 12h15 &amp; 19h00
          </li>
          <li>
            <a href={`tel:${parish.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="size-4 text-celestial-sky" aria-hidden /> {parish.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${parish.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="size-4 text-celestial-sky" aria-hidden /> {parish.email}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4 text-label-caps">
          <Link href="#horaires" className="flex items-center gap-1.5 text-gold-subtle transition-colors hover:text-white">
            <BookOpen className="size-4 text-liturgical-gold" aria-hidden /> Feuille de chants du dimanche
          </Link>
          <span aria-hidden>|</span>
          <span className="uppercase">Archidiocèse d&apos;Abidjan</span>
        </div>
      </div>
    </aside>
  );
}