import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";

export const LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export async function MarketingNav() {
  let signedIn = false;
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    signedIn = Boolean((await supabase.auth.getUser()).data.user);
  }
  return (
    <header className="relative bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo light />
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/75 transition hover:text-white">{l.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 text-sm font-medium md:flex">
          {signedIn ? (
            <Link href="/dashboard" className="btn-primary">Dashboard</Link>
          ) : (
            <>
              <Link href="/login" className="text-white/75 hover:text-white">Sign in</Link>
              <Link href="/signup" className="btn-primary">Get Started</Link>
            </>
          )}
        </div>
        <MobileMenu links={LINKS} signedIn={signedIn} />
      </div>
    </header>
  );
}
