const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

export const APP_URL = configuredAppUrl ?? "";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function getLoginUrl() {
  return configuredAppUrl ? `${configuredAppUrl}/login` : "/login";
}

export function getRegisterUrl() {
  return configuredAppUrl ? `${configuredAppUrl}/register` : "/register";
}
