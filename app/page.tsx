import { TopBar } from "@/components/layout/top-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { MassTimes } from "@/components/sections/mass-times";
import { News } from "@/components/sections/news";
import { Sacraments } from "@/components/sections/sacraments";
import { Youth } from "@/components/sections/youth";
import { Donate } from "@/components/sections/donate";
import { Concerts } from "@/components/sections/concerts";
import { heroSlides } from "@/lib/content";

export default function Page() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <main id="main">
        <Hero slides={heroSlides} />
        <MassTimes />
        <News />
        <Sacraments />
        <Youth />
        <Donate />
        {/* <Concerts /> */}
      </main>
      <SiteFooter />
    </>
  );
}