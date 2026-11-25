import { MarketingNav } from "@/components/MarketingNav";

// Plan names, prices and billing frequency are intentionally not invented.
// Selar pages could not be read from the build environment; fill these from the Selar listings.
const PLANS = [
  { label: "Plan 1", href: "https://selar.com/47plan?currency=USD" },
  { label: "Plan 2", href: "https://selar.com/57plan?currency=USD" },
  { label: "Plan 3", href: "https://selar.com/97plan?currency=USD" },
];

export default function Pricing() {
  return (
    <>
      <MarketingNav />
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h1 className="text-center text-4xl font-extrabold">Pricing</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.href} className="card flex flex-col p-7">
              <h2 className="text-xl font-bold">{p.label}</h2>
              <p className="mt-2 flex-1 text-sm text-navy/60">Plan details and price are shown at checkout on Selar.</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Choose plan</a>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-navy/50">© 2026 LinguaDub</footer>
    </>
  );
}
