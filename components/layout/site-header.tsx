import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Clock, HandHeart, Menu, HandHeartIcon, ClockIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav, parish } from "@/lib/content";
import { cn } from "@/lib/utils";

const navItem = "flex items-center gap-1 py-2 text-on-surface-variant transition-colors hover:text-primary";
const activeItem = "border-b-2 border-liturgical-gold font-semibold text-primary";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-delicate bg-warm-ivory/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-warm-ivory/80">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <Image src="/images/logo-ndi.png" alt="" width={50} height={56} priority
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          {/* <span className="flex flex-col">
            <span className="text-title-md leading-tight tracking-wide text-primary">{parish.name}</span>
            <span className="text-label-caps uppercase text-outline">{parish.area}</span>
          </span> */}
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {nav.map((g) =>
            g.items ? (
              <DropdownMenu key={g.label}>
                <DropdownMenuTrigger className={cn(navItem, "group outline-none data-[state=open]:text-primary", g.active && activeItem)}>
                  {g.label}
                  <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-60 rounded-xl border-border-delicate py-2">
                  {g.items.map((i) => (
                    <DropdownMenuItem
                        key={i.label}
                        className="px-4 py-2 text-body-sm focus:bg-marian-light"
                        render={
                            <Link href={i.href}/>
                        }
                    >
                        {i.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={g.label} href={g.href!} className={navItem}>{g.label}</Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          {/* <Button asChild variant="outline" className="hidden h-10 rounded-xl border-primary/20 text-primary hover:bg-marian-light sm:inline-flex">
            <Link href="#horaires"><Clock aria-hidden /> Horaires des Messes</Link>
          </Button> */}
          {/* <Button asChild variant="gold" size="xl" className="h-11 tracking-wider">
            <Link href="#donner"><HandHeart aria-hidden /> DONNER</Link>
          </Button> */}
          <Link
            href="#horaires"
            className={
                cn(buttonVariants({ variant: "outline", className: "hidden h-10 rounded-xl border-primary/20 text-primary hover:bg-marian-light sm:inline-flex" }))
            }
          >
            <ClockIcon aria-hidden />
            Horaires des Messes
          </Link>

          <Link
            href="#donner"
            className={
                cn(buttonVariants({ variant: "gold", className: "h-10 tracking-wider" }))
            }
          >
            <HandHeartIcon className="size-4" aria-hidden />
            DONNER
          </Link>

          <Sheet>
            <SheetTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-11 text-primary lg:hidden"
                        aria-label="Ouvrir le menu"
                    />
                }
            >
                <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto bg-warm-ivory">
              <SheetHeader><SheetTitle className="font-display text-headline-sm text-primary">Menu</SheetTitle></SheetHeader>
              <nav aria-label="Navigation mobile" className="space-y-6 px-4 pb-8">
                {nav.map((g) => (
                  <div key={g.label}>
                    <p className="text-label-caps uppercase text-secondary">{g.label}</p>
                    <ul className="mt-2 divide-y divide-border-delicate">
                      {(g.items ?? [{ label: g.label, href: g.href! }]).map((i) => (
                        <li key={i.label}>
                          <SheetClose
                            render={
                                <Link
                                    href={i.href}
                                    className="block py-2.5 text-body-md text-on-surface hover:text-primary"
                                />
                            }
                          >
                                {i.label}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}