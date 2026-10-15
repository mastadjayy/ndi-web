import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, id, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <p className="text-label-caps uppercase text-secondary">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-display text-headline-lg-mobile text-primary md:text-headline-lg">{title}</h2>
      {description && <p className="mt-3 text-body-md text-on-surface-variant">{description}</p>}
    </div>
  );
}