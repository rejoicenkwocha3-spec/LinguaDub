import { Upload, AudioLines, FileText, Languages, Mic, Wand2, SlidersHorizontal, Download, Users, Fingerprint, Smile, Globe2, Headphones, UserSearch, Timer, Library } from "lucide-react";
import { Page, PageHero, CtaPair, Heading, IconCard, FinalCta } from "@/components/Marketing";

export const metadata = { title: "Platform | LinguaDub" };

const FLOW = [
  { icon: Upload, label: "Upload Content", text: "Add video or audio files to a project." },
  { icon: FileText, label: "Transcribe Audio", text: "Speech is converted to a timed transcript." },
  { icon: Languages, label: "Translate Script", text: "Dialogue is translated into your target languages." },
  { icon: Mic, label: "Select Voice", text: "Choose a library voice or an authorised cloned voice." },
  { icon: Wand2, label: "Generate Dub", text: "Dubbed speech is generated for every segment." },
  { icon: SlidersHorizontal, label: "Review and Edit", text: "Edit text, timing and delivery before export." },
  { icon: Download, label: "Export Video", text: "Export MP4, audio and subtitle files." },
];

const CAPS = [
  { icon: Wand2, title: "AI video dubbing", text: "One workspace takes a video from upload to a finished dubbed export." },
  { icon: Languages, title: "Audio translation", text: "Translate spoken content into multiple languages from the same project." },
  { icon: Headphones, title: "Speech recognition", text: "Automatic speech recognition turns original dialogue into text." },
  { icon: FileText, title: "Automatic transcription", text: "Get an editable transcript with timing for every segment." },
  { icon: Fingerprint, title: "Voice cloning", text: "Create voice replicas only from recordings the speaker has consented to." },
  { icon: Smile, title: "Emotion based generation", text: "Set delivery such as calm, serious or enthusiastic for generated speech." },
  { icon: Globe2, title: "Accent control", text: "Pick regional accents where your voice provider offers them." },
  { icon: UserSearch, title: "Speaker identification", text: "Detect speakers, name them and keep their voices consistent." },
  { icon: Timer, title: "Audio synchronisation", text: "Align generated speech with the timing of the original video." },
  { icon: Library, title: "Multilingual voice library", text: "Browse and preview voices by language, accent and style." },
  { icon: Download, title: "Video export", text: "Deliver MP4 files, audio tracks and SRT or VTT subtitles." },
  { icon: Users, title: "Team collaboration", text: "Invite translators and reviewers with roles and approvals." },
];

export default function PlatformPage() {
  return (
    <Page>
      <PageHero eyebrow="Platform" title="One platform from original video to localized release"
        text="LinguaDub connects transcription, translation, voice generation and rendering into a single workflow your whole team can use."><CtaPair /></PageHero>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Heading title="How LinguaDub works" text="Seven stages, each with a real processing status so you always know where a project stands." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map(({ icon: Icon, label, text }, i) => (
            <li key={label} className="card relative p-6">
              <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-navy/10">{i + 1}</span>
              <Icon className="h-6 w-6 text-electric" />
              <h3 className="mt-4 font-bold">{label}</h3>
              <p className="mt-2 text-sm text-navy/65">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Heading title="Everything a localization team needs" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPS.map((c) => <IconCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>
      <FinalCta />
    </Page>
  );
}
