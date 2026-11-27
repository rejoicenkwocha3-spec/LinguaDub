"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ links, signedIn }: { links: { href: string; label: string }[]; signedIn: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="text-white">{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="absolute inset-x-0 top-full z-40 space-y-1 border-t border-white/10 bg-navy px-5 py-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-white/80">{l.label}</Link>
          ))}
          <Link href={signedIn ? "/dashboard" : "/login"} className="block py-2 text-white/80">{signedIn ? "Dashboard" : "Sign in"}</Link>
          {!signedIn && <Link href="/signup" className="btn-primary mt-2 w-full">Get Started</Link>}
        </div>
      )}
    </div>
  );
}
