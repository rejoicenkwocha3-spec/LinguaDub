import { Wand2, Languages, Library, Fingerprint, Smile, UserSearch, Globe2, Timer, Eye, Captions, Download } from "lucide-react";
import { Page, PageHero, CtaPair, Heading, IconCard, FinalCta } from "@/components/Marketing";

export const metadata = { title: "Features | LinguaDub" };

const LANGUAGES = ["English", "Spanish", "French", "German", "Portuguese", "Arabic", "Hindi", "Chinese", "Japanese", "Korean", "Italian", "Dutch", "Turkish", "Yoruba", "Hausa", "Igbo", "Swahili"];

const FEATURES = [
  { icon: Wand2, title: "AI video dubbing", text: "Upload a video, extract the audio, transcribe, translate, choose voices, generate audio, synchronise and export." },
  { icon: Languages, title: "Multilingual translation", text: "Translate scripts and dialogue into several languages with a configurable language catalogue.", note: "Only languages supported by your connected providers are offered." },
  { icon: Library, title: "AI voice library", text: "Browse, preview and filter voices by language, accent, gender presentation and speaking style. Save favourites." },
  { icon: Fingerprint, title: "Voice cloning", text: "Create voice profiles from uploaded recordings, preview them, manage and delete them.", note: "Explicit consent from the speaker is required. Impersonation is not permitted." },
  { icon: Smile, title: "Emotion based voice generation", text: "Choose excited, calm, sad, serious, friendly, dramatic, professional or enthusiastic delivery.", note: "Applied where the voice provider supports it." },
  { icon: UserSearch, title: "Speaker identification", text: "View detected speakers, rename them, assign voices, preview each one and keep voices consistent." },
  { icon: Globe2, title: "Accent control", text: "Select regional accents for generated speech.", note: "Availability depends on the selected voice provider." },
  { icon: Timer, title: "Audio synchronisation", text: "Adjust start time, end time, segment duration, speed, pauses and timing offsets so speech fits the picture." },
  { icon: Eye, title: "Lip synchronisation", text: "Lip sync is planned for use with authorised technology.", note: "Not available yet. It will only be offered once a real integration is connected." },
  { icon: Captions, title: "Subtitle generation", text: "Generate subtitles from original and translated dialogue, edit them and adjust timing. Export SRT and VTT." },
  { icon: Download, title: "Video export", text: "Export MP4 with the dubbed audio, standalone audio and subtitle files, keeping original resolution where possible." },
];

const STYLES = ["Professional", "Conversational", "Energetic", "Calm", "Documentary", "Educational", "Dramatic"];

export default function FeaturesPage() {
  return (
    <Page>
      <PageHero eyebrow="Features" title="Professional dubbing tools in one workspace"
        text="Control language, voice, emotion, timing and subtitles, then export a finished video."><CtaPair /></PageHero>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => <IconCard key={f.title} {...f} />)}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Heading title="Language catalogue" text="Popular languages we are configuring. Each one appears in your workspace only when your connected transcription, translation and voice providers support it." />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {LANGUAGES.map((l) => <span key={l} className="rounded-full bg-lavender px-4 py-2 text-sm font-medium text-purple">{l}</span>)}
          </div>
          <h3 className="mt-14 text-xl font-bold">Speaking styles</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {STYLES.map((s) => <span key={s} className="rounded-full border border-navy/15 px-4 py-2 text-sm font-medium">{s}</span>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </Page>
  );
}
