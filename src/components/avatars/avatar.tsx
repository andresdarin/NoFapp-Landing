import type { AvatarAccessory, AvatarId } from "@/data/avatars";

export function Avatar({ id, accessory, size = "md" }: { id: AvatarId; accessory: AvatarAccessory; size?: "sm" | "md" | "lg" }) {
  const px = size === "sm" ? "size-10" : size === "lg" ? "size-28" : "size-16";
  return <div className={`${px} relative shrink-0 overflow-hidden rounded-full bg-surface-soft`} aria-label={`${id} avatar`} role="img">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <circle cx="50" cy="54" r="29" fill="var(--foreground)" stroke="var(--primary-foreground)" strokeWidth="3" />
      <path d="M29 58 Q28 90 50 92 Q72 90 71 58" fill="var(--foreground)" stroke="var(--primary-foreground)" strokeWidth="3" />
      <circle cx="41" cy="54" r="3" fill="var(--primary-foreground)" /><circle cx="59" cy="54" r="3" fill="var(--primary-foreground)" />
      <path d="M45 66 Q50 70 55 66" fill="none" stroke="var(--primary-foreground)" strokeWidth="2" strokeLinecap="round" />
      {accessory === "glasses" && <path d="M34 53h14m4 0h14M36 49h8q4 0 4 5t-4 5h-8q-5 0-5-5t5-5m24 0h8q5 0 5 5t-5 5h-8q-4 0-4-5t4-5" fill="none" stroke="var(--primary-foreground)" strokeWidth="2" />}
      {accessory === "leaf" && <path d="M68 29q15-13 16 2-8 8-16-2Z" fill="var(--success)" stroke="var(--primary-foreground)" strokeWidth="2" />}
      {accessory === "hat" && <path d="M28 34h44M35 31q2-18 15-18t15 18" fill="var(--primary)" stroke="var(--primary-foreground)" strokeWidth="3" />}
      {accessory === "cowboy" && <path d="M23 35q27-13 54 0M35 31q4-19 15-19t15 19" fill="var(--surface-raised)" stroke="var(--primary-foreground)" strokeWidth="3" />}
      {accessory === "captain" && <><path d="M29 32h42l-5-15H34Z" fill="var(--foreground)" stroke="var(--primary-foreground)" strokeWidth="3" /><path d="M49 17v12" stroke="var(--primary)" strokeWidth="3" /></>}
      {accessory === "beanie" && <path d="M29 33q3-20 21-20t21 20Z" fill="var(--success)" stroke="var(--primary-foreground)" strokeWidth="3" />}
      {accessory === "flower" && <circle cx="72" cy="25" r="7" fill="var(--primary)" stroke="var(--primary-foreground)" strokeWidth="2" />}
      {accessory === "bandana" && <path d="M28 39h44l-4 9H32Z" fill="var(--primary)" stroke="var(--primary-foreground)" strokeWidth="2" />}
      {accessory === "headphones" && <path d="M27 50q0-28 23-28t23 28M26 49h9v14h-9zM65 49h9v14h-9z" fill="none" stroke="var(--primary-foreground)" strokeWidth="3" />}
    </svg>
  </div>;
}
