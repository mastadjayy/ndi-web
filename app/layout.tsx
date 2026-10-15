import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Paroisse Notre Dame de l'Incarnation - Riviera Palmeraie",
  description: "Horaires des messes, sacrements, jeunesse et activités - Paroisse Notre  Dame de l'Incarnation, Abidjan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
        <body>
            <a href="#main" className="sr-only z-[100] rounded-xl bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
                Aller au contenu
            </a>
            {children}
        </body>
    </html>
  );
}
