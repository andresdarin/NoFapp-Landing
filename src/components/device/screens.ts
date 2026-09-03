export const productScreens = {
  home: { src: "/samsung/Home-portrait.png", alt: "No Fapp home screen showing a 37 day streak", device: "Samsung" },
  calendar: { src: "/IPhone/calendar-portrait.png", alt: "No Fapp calendar with daily check-ins", device: "iPhone" },
  leaderboard: { src: "/IPhone/leaderborad-portrait.png", alt: "No Fapp leaderboard with friends and streaks", device: "iPhone" },
  friends: { src: "/IPhone/friends-portrait.png", alt: "No Fapp friends screen with a ranked squad", device: "iPhone" },
  stats: { src: "/IPhone/stats-portrait.png", alt: "No Fapp stats screen tracking discipline", device: "iPhone" },
  profile: { src: "/IPhone/profile-portrait.png", alt: "No Fapp profile screen with rank and avatar", device: "iPhone" },
} as const;

export type ProductScreen = keyof typeof productScreens;
