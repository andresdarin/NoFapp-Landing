import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children, align = "left" }: { eyebrow: string; title: ReactNode; children?: ReactNode; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-[clamp(2.8rem,6vw,6.5rem)] uppercase leading-[.84] tracking-[-.035em]">{title}</h2>{children && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{children}</p>}</div>;
}
