"use client";

import { useState } from "react";
import { Play, Pause, Check } from "lucide-react";

const STEPS = ["Original video", "Language", "Voice", "Dubbed video"] as const;
const LANGS = [
  { name: "English", line: "Welcome to our product launch." },
  { name: "Spanish", line: "Bienvenidos al lanzamiento de nuestro producto." },
  { name: "French", line: "Bienvenue au lancement de notre produit." },
  { name: "German", line: "Willkommen zur Markteinführung unseres Produkts." },
  { name: "Portuguese", line: "Bem vindo ao lançamento do nosso produto." },
  { name: "Hindi", line: "हमारे उत्पाद लॉन्च में आपका स्वागत है।" },
];
const VOICES = ["Professional", "Conversational", "Energetic", "Calm"];
const BARS = Array.from({ length: 56 }, (_, i) => 18 + Math.round(Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.23)) * 70));

export function DubDemo() {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(1);
  const [voice, setVoice] = useState(0);
  const [playing, setPlaying] = useState(false);
  const dubbed = step === 3;
  const caption = dubbed || step >= 1 ? LANGS[lang].line : LANGS[0].line;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1330] p-4 shadow-2xl sm:p-6">
      <div className="flex flex-wrap gap-2">
        {STEPS.map((s, i) => (
          <button key={s} onClick={() => setStep(i)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${step === i ? "bg-white text-navy" : "bg-white/10 text-white/70 hover:bg-white/15"}`}>
            <span className="mr-1.5 opacity-60">{i + 1}</span>{s}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-xl bg-navy ring-1 ring-white/10">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#1B2A63] to-[#0B1330]">
            <span className="absolute left-3 top-3 rounded bg-white/10 px-2 py-1 text-xs text-white/80">
              {dubbed ? `Dubbed: ${LANGS[lang].name}, ${VOICES[voice]}` : "Original: English"}
            </span>
            <button aria-label={playing ? "Pause preview" : "Play preview"} onClick={() => setPlaying(!playing)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-electric text-white transition hover:scale-105">
              {playing ? <Pause className="h-7 w-7" /> : <Play className="ml-1 h-7 w-7" />}
            </button>
            <p className="absolute inset-x-4 bottom-4 rounded-md bg-black/55 px-3 py-2 text-center text-sm text-white">{caption}</p>
          </div>
          <div className="flex h-16 items-center gap-[3px] px-4" aria-hidden>
            {BARS.map((h, i) => (
              <span key={i} style={{ height: `${h}%`, animationDelay: `${(i % 9) * 90}ms` }}
                className={`w-full rounded-full ${dubbed ? "bg-purple" : "bg-electric"} ${playing ? "animate-pulse" : ""}`} />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/5 p-4 text-white ring-1 ring-white/10">
          {step === 0 && (
            <>
              <h3 className="font-bold">Upload your content</h3>
              <p className="mt-2 text-sm text-white/70">Add a video or audio file. LinguaDub extracts the audio and transcribes the original speech.</p>
            </>
          )}
          {step === 1 && (
            <>
              <h3 className="font-bold">Choose a target language</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {LANGS.slice(1).map((l, i) => (
                  <button key={l.name} onClick={() => setLang(i + 1)}
                    className={`rounded-full px-3 py-1.5 text-sm ${lang === i + 1 ? "bg-electric text-white" : "bg-white/10 text-white/80 hover:bg-white/15"}`}>{l.name}</button>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h3 className="font-bold">Pick a delivery style</h3>
              <ul className="mt-3 space-y-2">
                {VOICES.map((v, i) => (
                  <li key={v}>
                    <button onClick={() => setVoice(i)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${voice === i ? "bg-purple text-white" : "bg-white/10 text-white/80 hover:bg-white/15"}`}>
                      {v}{voice === i && <Check className="h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {step === 3 && (
            <>
              <h3 className="font-bold">Review and export</h3>
              <p className="mt-2 text-sm text-white/70">Edit the translation, adjust timing, preview, then export MP4 with subtitle files.</p>
            </>
          )}
          <div className="mt-5 flex justify-between text-sm">
            <button disabled={step === 0} onClick={() => setStep(step - 1)} className="text-white/60 disabled:opacity-30">Back</button>
            <button disabled={step === 3} onClick={() => setStep(step + 1)} className="font-semibold text-white disabled:opacity-30">Next</button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/40">Interface preview with sample text. Real projects run on the speech and voice providers you connect.</p>
    </div>
  );
}
