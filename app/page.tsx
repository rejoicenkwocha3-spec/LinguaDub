import Link from "next/link";
import { Globe2, AudioWaveform, Zap, Fingerprint, Captions, Users, Upload, FileText, Languages, Mic, Wand2, Download, Clapperboard, GraduationCap, Megaphone, Radio, Building2, Tv } from "lucide-react";
import { MarketingNav } from "@/components/MarketingNav";
import { DubDemo } from "@/components/DubDemo";

const BENEFITS = [
  { icon: Globe2, title: "Global reach", text: "Take one video to audiences in many countries and languages from a single project." },
  { icon: AudioWaveform, title: "Authentic voices", text: "Natural sounding delivery that keeps the emotion and personality of the original." },
  { icon: Zap, title: "Efficiency", text: "Translate and dub without booking a recording session for every language." },
];

const FEATURES = [
  { icon: Wand2, title: "AI video dubbing", text: "Upload, transcribe, translate and generate dubbed audio in one workspace." },
  { icon: Mic, title: "Voice library and cloning", text: "Browse voices by language, accent and style. Clone only voices you have consent to use." },
  { icon: Fingerprint, title: "Voice identity", text: "Keep each speaker sounding like the same person across every language." },
  { icon: Captions, title: "Subtitles", text: "Generate and edit subtitles, then export SRT and VTT files." },
  { icon: AudioWaveform, title: "Timing control", text: "Adjust start, end, duration and speed so speech lines up with the picture." },
  { icon: Users, title: "Team workflows", text: "Invite translators and reviewers, assign roles and approve finished dubs." },
];

const FLOW = [
  { icon: Upload, label: "Upload" }, { icon: FileText, label: "Transcribe" }, { icon: Languages, label: "Translate" },
  { icon: Mic, label: "Select voice" }, { icon: Wand2, label: "Generate dub" }, { icon: Download, label: "Export" },
];

const AUDIENCES = [
  { icon: Clapperboard, label: "Creators and studios" }, { icon: Megaphone, label: "Agencies" }, { icon: GraduationCap, label: "E learning" },
  { icon: Radio, label: "Podcasters and broadcasters" }, { icon: Building2, label: "Businesses" }, { icon: Tv, label: "Streaming platforms" },
];

export default function Home() {
  return (
    <>
      <div className="bg-navy text-white">
        <MarketingNav />
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 text-center sm:pt-24">
          <p className="mx-auto inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">Every Voice. Every Language. Everywhere.</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-6xl">
            Your Content. Every Language. <span className="text-[#8FB0FF]">One Platform.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            LinguaDub transforms videos and audio into natural sounding multilingual experiences using AI powered dubbing, voice translation and intelligent localization.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/signup" className="btn-primary px-7 py-3 text-base">Get Started</Link>
            <Link href="/login" className="btn border border-white/25 px-7 py-3 text-base text-white hover:bg-white/10">Sign in</Link>
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-left"><DubDemo /></div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">Break language barriers without rebuilding your content</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-lavender text-purple"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-navy/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">Voices that sound native in every market</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-7">
                <Icon className="h-6 w-6 text-electric" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-navy/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-3xl font-extrabold sm:text-4xl">A professional localization workflow</h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FLOW.map(({ icon: Icon, label }, i) => (
            <li key={label} className="card p-5 text-center">
              <Icon className="mx-auto h-6 w-6 text-purple" />
              <p className="mt-3 text-xs font-semibold text-navy/45">Step {i + 1}</p>
              <p className="font-semibold">{label}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Built for creators and businesses</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {AUDIENCES.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm"><Icon className="h-4 w-4 text-[#8FB0FF]" />{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="text-3xl font-extrabold sm:text-5xl">Ready to reach a global audience?</h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/65">Create your account and start your first dubbing project today.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="btn-primary px-7 py-3 text-base">Get Started</Link>
          <Link href="/platform" className="btn-secondary px-7 py-3 text-base">See the platform</Link>
        </div>
      </section>
      <footer className="border-t border-navy/10 py-8 text-center text-sm text-navy/50">© 2026 LinguaDub</footer>
    </>
  );
}
