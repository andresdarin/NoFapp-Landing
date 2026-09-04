const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

export const APP_URL = configuredAppUrl ?? "";

/**
 * Resolves the primary site URL with support for Vercel preview/production deployments
 * and graceful fallback to localhost for development/testing.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    return envUrl.startsWith("http://") || envUrl.startsWith("https://")
      ? envUrl.replace(/\/$/, "")
      : `https://${envUrl.replace(/\/$/, "")}`;
  }

  const vercelUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

export const SITE_URL = getSiteUrl();

/**
 * Returns a guaranteed valid URL instance for Next.js metadataBase.
 */
export function getMetadataBase(): URL {
  try {
    return new URL(getSiteUrl());
  } catch {
    return new URL("http://localhost:3000");
  }
}

/**
 * Resolves the login redirect URL.
 */
export function getLoginUrl(): string {
  return configuredAppUrl ? `${configuredAppUrl}/login` : "/login";
}

/**
 * Resolves the registration redirect URL.
 */
export function getRegisterUrl(): string {
  return configuredAppUrl ? `${configuredAppUrl}/register` : "/register";
}
