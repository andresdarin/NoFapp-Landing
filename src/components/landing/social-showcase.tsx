import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { Badge } from "@/components/ui/badge";
import { AvatarVariant } from "@/components/avatars/variants";
import { friends } from "@/data/friends";
import { AvatarId } from "@/data/avatars";
import { Button } from "@/components/ui/button";
import { copy } from "@/content/copy";
import { getRegisterUrl } from "@/lib/site";

export function SocialShowcase() { return <section id="friends" className="mx-auto grid max-w-6xl scroll-mt-24 gap-16 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-40"><SectionHeading eyebrow={copy.social.eyebrow} title={copy.social.title} subcopy={copy.social.subcopy}/><div><Surface className="rotate-1 p-6 sm:p-8"><div className="flex items-center justify-between border-b border-border pb-5"><div><p className="font-display text-2xl">The Good Boys</p><p className="mt-1 text-xs text-muted">4 members · ranked by honesty</p></div><Badge>Live</Badge></div><ol className="divide-y divide-border">{friends.map((friend, index) => <li className="flex items-center gap-3 py-4" key={friend.name}><span className="w-5 text-xs text-muted">0{index + 1}</span><AvatarVariant id={friend.avatarId as AvatarId} size="sm"/><span className="flex-1 text-sm font-bold">{friend.name}</span><span className="font-display text-xl">{friend.days}<small className="ml-1 text-[10px] font-sans text-muted">DAYS</small></span><Badge tone={friend.status === "fallen" ? "fallen" : "active"}>{friend.status}</Badge></li>)}</ol></Surface><Button href={getRegisterUrl()} className="mt-6">{copy.social.cta}</Button></div></section>; }
