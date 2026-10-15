import { GraduationCap, MessagesSquare, UsersRound, Church, Cross, Download, Droplets, Flame, Heart, HeartPulse, MapPin, PenLine, Sun, Wheat, type LucideIcon } from "lucide-react";

export type Tone = "primary" | "secondary" | "gold";
export interface Cta { label: string; href: string }

export const parish = {
  name: "Notre Dame de l'Incarnation",
  area: "Riviera — Palmeraie",
  phone: "+225 27 22 49 18 30",
  email: "contact@ndi-palmeraie.org",
  address: "Boulevard de France, Riviera Palmeraie, Cocody, Abidjan, Côte d'Ivoire",
};

export interface NavGroup { label: string; href?: string; active?: boolean; items?: Cta[] }
export const nav: NavGroup[] = [
  { label: "Infos pratiques", items: [
    { label: "Horaires des Messes", href: "#horaires" }, { label: "Adoration & Confessions", href: "#horaires" },
    { label: "Accueil & Secrétariat", href: "#contacts" }, { label: "Demande d'intention", href: "#contacts" } ] },
  { label: "Prier & Célébrer", items: [
    { label: "Messes dominicales", href: "#horaires" }, { label: "Messes de semaine", href: "#horaires" },
    { label: "Adoration du Saint-Sacrement", href: "#horaires" }, { label: "Groupes de prière & Chœur", href: "#horaires" } ] },
  { label: "Sacrements", items: [
    { label: "Baptême", href: "#sacrements" }, { label: "Première Communion", href: "#sacrements" },
    { label: "Confirmation", href: "#sacrements" }, { label: "Mariage", href: "#sacrements" } ] },
  { label: "Jeunesse", items: [
    { label: "Catéchisme (CE1-CM2)", href: "#jeunesse" }, { label: "Aumônerie Collège & Lycée", href: "#jeunesse" },
    { label: "Servants d'Autel", href: "#jeunesse" }, { label: "Scouts & Guides", href: "#jeunesse" } ] },
  { label: "Activités paroissiales", items: [
    { label: "Entraide & Diaconie", href: "#actualites" }, { label: "Chantiers-Éducation", href: "#actualites" },
    { label: "Dimanche en Paroisse", href: "#actualites" } ] },
  //{ label: "Concerts", href: "#concerts" },
];

export interface HeroSlide {
  id: string; icon: "church" | "sparkles" | "users" | "heart"; eyebrow: string;
  title: string; text: string; primary: Cta; secondary: Cta; image?: string;
}
export const heroSlides: HeroSlide[] = [
  { id: "accueil", icon: "church", eyebrow: "Bienvenue en notre communauté", image: "/images/NDI.jpg",
    title: "Bienvenue à la Paroisse Notre Dame de l'Incarnation",
    text: "Une communauté vivante, fraternelle et priante au cœur de la Riviera Palmeraie. Venez vivre la joie de l'Évangile et fortifier votre foi.",
    primary: { label: "Horaires des Messes", href: "#horaires" }, secondary: { label: "Nous Découvrir", href: "#actualites" } },
  { id: "liturgie", icon: "sparkles", eyebrow: "Sainte Liturgie & Sacrements",
    title: "Vivre la Liturgie & les Sacrements",
    text: "Rejoignez-nous chaque dimanche et en semaine pour célébrer la Sainte Eucharistie, source et sommet de toute vie chrétienne.",
    primary: { label: "Consulter les Célébrations", href: "#horaires" }, secondary: { label: "Feuille liturgique", href: "#horaires" } },
  { id: "jeunesse", icon: "users", eyebrow: "Pastorale des Jeunes & Familles",
    title: "Jeunesse & Dynamisme Paroissial",
    text: "Catéchisme, Aumônerie, Servants d'Autel, Scouts et mouvements pour grandir ensemble dans l'espérance et le service du prochain.",
    primary: { label: "Inscriptions 2025-2026", href: "#jeunesse" }, secondary: { label: "Canal Jeunes", href: "#jeunesse" } },
  { id: "adoration", icon: "heart", eyebrow: "Silence, Paix & Miséricorde",
    title: "Adoration & Sacrement de Réconciliation",
    text: "Des temps de prière silencieuse, d'adoration eucharistique et d'écoute fraternelle pour vous ressourcer spirituellement au quotidien.",
    primary: { label: "Créneaux de Confession", href: "#horaires" }, secondary: { label: "Chapelle d'Adoration", href: "#horaires" } },
];

export interface MassCard {
  title: string; badge: string; icon: LucideIcon; tone: Tone; stacked?: boolean;
  rows: { label: string; value: string; accent?: boolean }[]; note?: string; link?: Cta;
}
export const massTimes: MassCard[] = [
  { title: "Messes Dominicales", badge: "Dimanche", icon: Church, tone: "primary",
    rows: [
      { label: "Samedi (Messe anticipée)", value: "18h30" }, { label: "Dimanche Matin (Aube)", value: "07h00" },
      { label: "Grand-Messe Paroissiale", value: "09h00", accent: true }, { label: "Messe des Familles", value: "11h00" },
      { label: "Messe du Soir", value: "18h30" } ],
    note: "* Garderie d'enfants disponible à la messe de 09h00." },
  { title: "Messes en Semaine", badge: "Semaine", icon: Sun, tone: "secondary",
    rows: [
      { label: "Mardi au Vendredi (Matin)", value: "06h45" }, { label: "Mercredi (Messe de midi)", value: "12h15" },
      { label: "Mardi au Vendredi (Soir)", value: "19h00" }, { label: "Samedi Matin", value: "07h00" },
      { label: "Laudes & Prière du matin", value: "06h15", accent: true } ],
    note: "* Chapelet médité 30 min avant chaque messe du soir." },
  { title: "Adoration & Confessions", badge: "Miséricorde", icon: Heart, tone: "gold", stacked: true,
    rows: [
      { label: "Adoration du Saint-Sacrement", value: "Mardi, Jeudi & Vendredi : 17h30 — 18h45" },
      { label: "Confessions & Écoute", value: "Mardi au Vendredi : 18h00 — 18h45" },
      { label: "Permanence de Réconciliation", value: "Samedi : 10h00 — 12h00" } ],
    link: { label: "Prendre rendez-vous avec un prêtre", href: "#contacts" } },
];

export const quickLinks: (Cta & { icon: LucideIcon; hint: string })[] = [
  { icon: Download, label: "Feuille de Chants & Prières", hint: "Télécharger le livret dominical (PDF)", href: "#" },
  { icon: PenLine, label: "Intention de Messe", hint: "Confier une intention au secrétariat", href: "#contacts" },
  { icon: MapPin, label: "Venir à la Paroisse", hint: "Riviera Palmeraie, Abidjan", href: "#contacts" },
];

export interface NewsItem { tag: string; tone: Tone; date: string; title: string; excerpt: string; cta: string; meta: string; icon: LucideIcon; image?: string }
export const news: NewsItem[] = [
  { tag: "Événements", tone: "primary", date: "18 Mars 2025", icon: Church,
    title: "La Lettre Pastorale de Monseigneur : « Cheminer ensemble dans la foi »",
    excerpt: "Découvrez les orientations pastorales pour notre doyenné et les invitations à fortifier la communion fraternelle au sein de nos familles et quartiers.",
    cta: "Lire la suite", meta: "4 min de lecture" },
  { tag: "Catéchisme", tone: "gold", date: "14 Mars 2025", icon: Droplets,
    title: "Inscriptions au Catéchisme & Éveil à la Foi pour l'année",
    excerpt: "Les dossiers d'inscriptions et de réinscriptions pour les enfants du CE1 au CM2 ainsi que l'Éveil à la foi sont désormais ouverts au secrétariat paroissial.",
    cta: "Modalités d'inscription", meta: "Secrétariat" },
  { tag: "Concerts", tone: "secondary", date: "Ce Samedi • 20h00", icon: Sun,
    title: "Concert Spirituel : Les Plus Grands Chœurs Sacrés",
    excerpt: "Notre Chœur Paroissial Sainte Cécile vous convie à une grande soirée de méditation musicale avec œuvres de Mozart, Bach et chants traditionnels ivoiriens.",
    cta: "Entrée libre & Dons", meta: "Nef Principale" },
];

export interface Sacrament { icon: LucideIcon; title: string; text: string; cta: string; bg: string; fg: string }
export const sacraments: Sacrament[] = [
  { icon: Droplets, title: "Baptême", cta: "Préparer le baptême", bg: "bg-marian-light", fg: "text-primary",
    text: "Petits enfants (moins de 3 ans), enfants d'âge scolaire ou catéchuménat des adultes. Démarches et réunions de préparation." },
  { icon: Wheat, title: "Première Communion", cta: "En savoir plus", bg: "bg-gold-subtle", fg: "text-amber-700",
    text: "Accompagnement des enfants et adultes vers le banquet du Seigneur dans le cadre du catéchisme paroissial." },
  { icon: Flame, title: "Confirmation", cta: "Parcours de confirmation", bg: "bg-surface-container-high", fg: "text-primary",
    text: "Recevoir la force de l'Esprit Saint pour devenir témoin de l'Évangile. Pour adolescents (collège/lycée) et adultes." },
  { icon: Heart, title: "Mariage", cta: "Guide des fiancés", bg: "bg-marian-light", fg: "text-secondary",
    text: "Prendre contact 6 à 9 mois avant la date envisagée pour participer aux sessions du Centre de Préparation au Mariage (CPM)." },
  { icon: HeartPulse, title: "Sacrement des Malades", cta: "Demander une visite", bg: "bg-surface-container-high", fg: "text-primary",
    text: "Soutien et onction sainte pour les personnes éprouvées par la maladie ou le grand âge. Visite des prêtres à domicile ou hôpital." },
  { icon: Cross, title: "Obsèques Chrétiennes", cta: "Accompagnement du deuil", bg: "bg-surface-cream", fg: "text-on-surface-variant",
    text: "L'équipe pastorale du deuil accompagne les familles dans la prière et l'adieu dans l'espérance de la Résurrection." },
];

export const footerColumns: { title: string; links: (Cta & { external?: boolean; highlight?: boolean })[] }[] = [
  { title: "Prière & Liturgie", links: [
    { label: "Horaires des Messes", href: "#horaires" }, { label: "Confessions & Adoration", href: "#horaires" },
    { label: "Demande de Sacrement", href: "#sacrements" }, { label: "Denier de l'Église", href: "#donner", highlight: true } ] },
  { title: "Église & Diocèse", links: [
    { label: "Archidiocèse d'Abidjan", href: "https://archidiocesedabidjan.org", external: true },
    { label: "Catéchisme et Aumônerie", href: "#jeunesse" }, { label: "Actualités Paroissiales", href: "#actualites" },
    { label: "Mentions Légales", href: "#" } ] },
];

export const youthPrograms: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: GraduationCap, title: "Catéchisme & Aumônerie", text: "Du CE1 au Lycée, rencontres hebdomadaires et temps forts d'adoration." },
  { icon: UsersRound, title: "Scouts & Guides", text: "Pédagogie scoute catholique, service, vie en plein air et fraternité." },
  { icon: Cross, title: "Servants d'Autel", text: "Beauté de la liturgie au service de la sainte table eucharistique." },
  { icon: MessagesSquare, title: "Chantiers-Éducation", text: "Lieu d'échange et d'écoute entre parents pour grandir dans sa mission éducative." },
];