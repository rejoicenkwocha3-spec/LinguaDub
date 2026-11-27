import Link from "next/link";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";

export async function MarketingNav({ dark = false }: { dark?: boolean }) {
  let signedIn = false;
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    signedIn = Boolean((await supabase.auth.getUser()).data.user);
  }
  const link = dark ? "text-white/80 hover:text-white" : "hover:text-electric";
  return (
    <header className={dark ? "bg-navy" : "border-b border-navy/10 bg-white"}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo light={dark} />
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/pricing" className={link}>Pricing</Link>
          {signedIn ? (
            <Link href="/dashboard" className="btn-primary">Dashboard</Link>
          ) : (
            <>
              <Link href="/login" className={link}>Sign in</Link>
              <Link href="/signup" className="btn-primary">Get Started</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
