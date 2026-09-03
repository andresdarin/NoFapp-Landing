"use client";
import { useEffect, useState } from "react";
import { NoFappLogo } from "@/components/brand/no-fapp-logo";
import { Button } from "@/components/ui/button";
import { copy } from "@/content/copy";
import { getLoginUrl, getRegisterUrl } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 12); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${scrolled ? "border-b border-border/60 bg-[#150709]/85 backdrop-blur-md shadow-sm" : "bg-[#150709]/40 backdrop-blur-[2px]"}`}>
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2.5 sm:py-3 lg:px-8" aria-label="Main navigation">
        <NoFappLogo compact />
        <div className="flex items-center gap-3">
          <a href={getLoginUrl()} className="hidden text-xs font-bold text-muted transition-colors hover:text-foreground sm:block">
            {copy.nav.signIn}
          </a>
          <Button href={getRegisterUrl()} size="sm" className="min-h-8 px-3.5 text-xs">
            {copy.nav.cta}
          </Button>
        </div>
      </nav>
    </header>
  );
}
