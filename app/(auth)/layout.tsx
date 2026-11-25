import { Logo } from "@/components/Logo";
import { isSupabaseConfigured } from "@/lib/env";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-navy p-12 text-white lg:flex">
        <Logo light />
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-tight">Every Voice. Every Language. Everywhere.</h2>
          <p className="mt-4 max-w-md text-white/70">Translate, dub and distribute your video and audio content across languages from one workspace.</p>
        </div>
        <p className="text-sm text-white/50">© 2026 LinguaDub</p>
      </aside>
      <main className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden"><Logo /></div>
          {!isSupabaseConfigured && (
            <p className="mb-6 rounded-lg bg-coral/10 px-3.5 py-2.5 text-sm text-[#b3382b]">
              Supabase is not configured. Copy .env.example to .env.local and add your project URL and anon key.
            </p>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
