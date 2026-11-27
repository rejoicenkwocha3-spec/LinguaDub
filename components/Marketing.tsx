import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { MarketingNav } from "@/components/MarketingNav";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="border-t border-navy/10 bg-white py-8 text-center text-sm text-navy/50">© 2026 LinguaDub</footer>
    </>
  );
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: React.ReactNode }) {
  return (
    <div className="bg-navy text-white">
      <MarketingNav />
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-16 text-center sm:pt-20">
        <p className="mx-auto inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">{eyebrow}</p>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{text}</p>
        {children}
      </section>
    </div>
  );
}

export function CtaPair() {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Link href="/signup" className="btn-primary px-7 py-3 text-base">Get Started</Link>
      <Link href="/login" className="btn border border-white/25 px-7 py-3 text-base text-white hover:bg-white/10">Sign in</Link>
    </div>
  );
}

export function Heading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-navy/65">{text}</p>}
    </div>
  );
}

export function IconCard({ icon: Icon, title, text, note }: { icon: LucideIcon; title: string; text: string; note?: string }) {
  return (
    <div className="card p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lavender text-purple"><Icon className="h-5 w-5" /></span>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-navy/65">{text}</p>
      {note && <p className="mt-3 rounded-md bg-lavender px-3 py-2 text-xs font-medium text-purple">{note}</p>}
    </div>
  );
}

export function FinalCta({ title = "Ready to reach a global audience?" }: { title?: string }) {
  return (
    <section className="bg-navy py-20 text-center text-white">
      <h2 className="mx-auto max-w-2xl px-5 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <CtaPair />
    </section>
  );
}
