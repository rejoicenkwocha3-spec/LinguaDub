import Link from "next/link";
import { MarketingNav } from "@/components/MarketingNav";

export default function Home() {
  return (
    <>
      <MarketingNav />
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">Your Content. Every Language. One Platform.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/70">
          LinguaDub transforms videos and audio into natural sounding multilingual experiences using AI powered dubbing, voice translation and intelligent localization.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/signup" className="btn-primary">Start Dubbing</Link>
          <Link href="/pricing" className="btn-secondary">Explore Platform</Link>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-navy/50">© 2026 LinguaDub</footer>
    </>
  );
}
