import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/content/copy";
import { getRegisterUrl } from "@/lib/site";
export function FinalCta() { return <section className="mx-5 mb-20 scroll-mt-24 rounded-[1.75rem] border border-primary/30 bg-surface-raised px-5 pb-24 pt-16 text-center shadow-lg sm:mx-auto sm:max-w-6xl sm:px-8 lg:mb-32 lg:pb-36"><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-primary">The only question left</p><h2 className="font-display text-7xl uppercase leading-[.8] sm:text-[10rem]">So...<br/><span className="text-primary">day one?</span></h2><Button href={getRegisterUrl()} size="lg" className="mt-10">{copy.final.cta}<ArrowUpRight className="ml-2 size-4"/></Button><p className="mt-5 text-xs text-muted">{copy.final.note}</p></section>; }
