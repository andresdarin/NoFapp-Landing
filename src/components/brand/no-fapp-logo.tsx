import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
export function NoFappLogo({ compact = false, className }: { compact?: boolean; className?: string }) { return <Link href="/" aria-label="No Fapp home" className={cn("inline-flex items-center", className)}><Image src="/icons/logo-dark.png" alt="No Fapp logo" width={compact ? 76 : 96} height={compact ? 28 : 35} sizes={compact ? "76px" : "96px"} priority={compact} /></Link>; }
