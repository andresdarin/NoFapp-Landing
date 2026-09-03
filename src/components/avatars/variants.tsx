import { Avatar } from "./avatar";
import { avatars, type AvatarId } from "@/data/avatars";
export function AvatarVariant({ id, size = "md" }: { id: AvatarId; size?: "sm" | "md" | "lg" }) { const item = avatars[id]; return <Avatar id={id} accessory={item.accessory} size={size} />; }
export const Flora = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="flora" {...p} />;
export const Milo = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="milo" {...p} />;
export const Felix = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="felix" {...p} />;
export const Franco = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="franco" {...p} />;
export const Clint = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="clint" {...p} />;
export const Otto = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="otto" {...p} />;
export const Bruno = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="bruno" {...p} />;
export const Pierre = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="pierre" {...p} />;
export const Nico = (p: { size?: "sm" | "md" | "lg" }) => <AvatarVariant id="nico" {...p} />;
