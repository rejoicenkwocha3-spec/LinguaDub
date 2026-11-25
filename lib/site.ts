import { headers } from "next/headers";

/** Base URL for links inside auth emails. Prefers the configured site URL, falls back to the request origin. */
export async function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

/** Only allow same-site relative redirects. */
export function safeNext(next: string | null | undefined, fallback = "/dashboard") {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : fallback;
}
