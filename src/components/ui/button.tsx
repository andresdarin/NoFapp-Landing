import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = { variant?: "primary" | "ghost"; size?: "sm" | "md" | "lg"; children: ReactNode; className?: string };
type Props = SharedProps &
  ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href" | "children"> |
    { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">);

export function Button({ href, variant = "primary", size = "md", className, children, ...props }: Props) {
  const styles = cn("group inline-flex min-w-0 items-center justify-center rounded-lg font-bold transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 active:translate-y-0 active:scale-[.985] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:group-hover:translate-x-1", variant === "primary" ? "bg-primary text-primary-foreground shadow-md hover:bg-primary-dark" : "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary", size === "sm" ? "min-h-9 px-4 text-xs" : size === "lg" ? "min-h-14 px-7 text-sm" : "min-h-11 px-5 text-sm", className);
  if (href) return <Link href={href} {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">)} className={styles}>{children}</Link>;
  return <button {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)} className={styles}>{children}</button>;
}
