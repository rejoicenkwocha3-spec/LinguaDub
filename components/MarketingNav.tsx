import Link from "next/link";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";

export async function MarketingNav() {
  let signedIn = false;
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    signedIn = Boolean((await supabase.auth.getUser()).data.user);
  }
  return (
    <header className="border-b border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/pricing" className="hover:text-electric">Pricing</Link>
          {signedIn ? (
            <Link href="/dashboard" className="btn-primary">Dashboard</Link>
          ) : (
            <>
              <Link href="/login" className="hover:text-electric">Log in</Link>
              <Link href="/signup" className="btn-primary">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
