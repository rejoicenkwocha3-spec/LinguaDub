import Link from "next/link";
import { Youtube, Sparkles, Clapperboard, Megaphone, GraduationCap, Podcast, Radio, Tv, Building2, MonitorPlay } from "lucide-react";
import { Page, PageHero, CtaPair, FinalCta } from "@/components/Marketing";

export const metadata = { title: "Solutions | LinguaDub" };

const SOLUTIONS = [
  { icon: Youtube, name: "YouTube Creators", problem: "Great videos reach only the viewers who speak your language.", benefit: "Publish dubbed versions for new audiences without re recording every video." },
  { icon: Sparkles, name: "Content Creators", problem: "Hiring voice talent for every language is slow and costly.", benefit: "Translate and voice your content yourself, in your own workflow." },
  { icon: Clapperboard, name: "Film and Television Studios", problem: "Localizing dialogue demands long studio schedules and tight coordination.", benefit: "Keep each character consistent across languages with speaker tracks and timing control." },
  { icon: Megaphone, name: "Marketing Agencies", problem: "Campaigns need many language versions on short deadlines.", benefit: "Run multi language deliveries from one project with review and approval built in." },
  { icon: GraduationCap, name: "E Learning Companies", problem: "Courses lose learners who cannot follow the narration.", benefit: "Dub lessons and add subtitles so every learner can follow along." },
  { icon: Podcast, name: "Podcasters", problem: "Audio shows stay locked inside one language market.", benefit: "Translate episodes and keep a recognisable voice across languages." },
  { icon: Radio, name: "Broadcasters", problem: "Programming must be localized quickly and consistently.", benefit: "Use timing aligned dubs and team review to keep schedules on track." },
  { icon: Tv, name: "Advertising Agencies", problem: "Each market needs a message that sounds natural, not translated.", benefit: "Adjust emotion, accent and pacing so adverts feel native in every market." },
  { icon: Building2, name: "Businesses", problem: "Training, product and internal videos are hard to share globally.", benefit: "Localize company video with roles, permissions and a clear approval trail." },
  { icon: MonitorPlay, name: "Streaming Platforms", problem: "Large catalogues need dubbing and subtitles at scale.", benefit: "Manage many projects with organised libraries, statuses and exports." },
];

export default function SolutionsPage() {
  return (
    <Page>
      <PageHero eyebrow="Solutions" title="Localization that fits the way you publish"
        text="Whether you are one creator or a global media company, LinguaDub removes the language barrier from your content."><CtaPair /></PageHero>
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map(({ icon: Icon, name, problem, benefit }) => (
            <article key={name} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lavender text-purple"><Icon className="h-5 w-5" /></span>
              <h2 className="mt-5 text-xl font-bold">{name}</h2>
              <p className="mt-3 text-sm"><strong>The problem:</strong> <span className="text-navy/65">{problem}</span></p>
              <p className="mt-2 flex-1 text-sm"><strong>How LinguaDub helps:</strong> <span className="text-navy/65">{benefit}</span></p>
              <Link href="/signup" className="btn-secondary mt-6 self-start">Get Started</Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCta title="Find out what your content sounds like in a new language" />
    </Page>
  );
}
