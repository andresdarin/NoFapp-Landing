import { productScreens } from "./screens";

type Screen = { src: string; alt: string; device: "iPhone" | "Samsung"; rotate?: number; scale?: number; className?: string };
type PlatformGroup = { platform: "iphone" | "samsung" | "mixed"; screens: Screen[] };

// Keeping platform at the group level makes a mixed composition an explicit decision.
export const mockupGroups: Record<string, PlatformGroup> = {
  hero: { platform: "iphone", screens: [productScreens.calendar, productScreens.leaderboard, productScreens.profile] },
  daily: { platform: "iphone", screens: [productScreens.calendar] },
  calendar: { platform: "samsung", screens: [productScreens.home, { src: "/samsung/theme-left.png", alt: "Samsung No Fapp theme and progress screen", device: "Samsung" }] },
  social: { platform: "iphone", screens: [productScreens.leaderboard, productScreens.friends] },
  stats: { platform: "iphone", screens: [productScreens.stats] },
  profile: { platform: "iphone", screens: [productScreens.profile] },
  platforms: { platform: "mixed", screens: [productScreens.home, productScreens.profile] },
  showcase: { platform: "iphone", screens: [productScreens.calendar, productScreens.friends, productScreens.profile, productScreens.leaderboard, productScreens.stats] },
};
