import { Check } from "lucide-react";
import { Page, PageHero } from "@/components/Marketing";

export const metadata = { title: "Pricing | LinguaDub" };

// Prices and billing frequency read from the Selar checkout pages (USD, monthly).
// Selar does not publish minutes, languages or storage per plan, so none are shown here.
const PLANS = [
  { name: "Plan 1", price: "$47", href: "https://selar.com/47plan?currency=USD" },
  { name: "Plan 2", price: "$57", href: "https://selar.com/57plan?currency=USD" },
  { name: "Plan 3", price: "$97", href: "https://selar.com/97plan?currency=USD" },
];

const INCLUDED = [
  "AI video and audio dubbing workspace",
  "Translation editor and subtitle export",
  "Voice library with accent and style filters",
  "Authorised voice cloning with consent",
  "Team roles and project sharing",
  "MP4, audio and subtitle exports",
];

export default function PricingPage() {
  return (
    <Page>
      <PageHero eyebrow="Pricing" title="Simple monthly plans" text="Choose a plan and check out securely on Selar. Billing is monthly in US dollars." />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`card flex flex-col p-8`}>
                      <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-4"><span className="font-display text-5xl font-extrabold">{p.price}</span><span className="text-navy/60"> per month</span></p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {INCLUDED.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />{i}</li>)}
              </ul>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">Subscribe on Selar</a>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
