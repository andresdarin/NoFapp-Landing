import { cn } from "@/lib/utils";
export function Surface({ children, className }: { children: React.ReactNode; className?: string }) { return <div className={cn("relative rounded-xl border border-border bg-surface shadow-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/[0.03]", className)}>{children}</div>; }
