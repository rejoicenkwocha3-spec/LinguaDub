import Link from "next/link";
import { FolderKanban, CheckCircle2, Loader, Languages as LangIcon, Clock } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

type Project = { id: string; name: string; status: string; source_language: string | null; target_languages: string[] | null; duration_seconds: number | null; created_at: string };

export default async function Overview({ searchParams }: { searchParams: Promise<{ reset?: string }> }) {
  const { reset } = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("id,name,status,source_language,target_languages,duration_seconds,created_at")
    .order("created_at", { ascending: false });
  const projects = (data ?? []) as Project[];

  const processing = ["queued", "uploading", "transcribing", "translating", "generating_voice", "synchronising", "rendering"];
  const langs = new Set(projects.flatMap((p) => p.target_languages ?? []));
  const minutes = Math.round(projects.reduce((s, p) => s + (p.duration_seconds ?? 0), 0) / 60);
  const stats = [
    { label: "Total projects", value: projects.length, icon: FolderKanban },
    { label: "Completed", value: projects.filter((p) => p.status === "completed").length, icon: CheckCircle2 },
    { label: "Processing", value: projects.filter((p) => processing.includes(p.status)).length, icon: Loader },
    { label: "Minutes processed", value: minutes, icon: Clock },
    { label: "Languages used", value: langs.size, icon: LangIcon },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-3xl font-extrabold">Overview</h1>
      {reset && <p className="mt-4 rounded-lg bg-electric/10 px-3.5 py-2.5 text-sm text-electric">Your password has been updated.</p>}
      {error && <p className="mt-4 rounded-lg bg-coral/10 px-3.5 py-2.5 text-sm text-[#b3382b]">Could not load projects: {error.message}. Run the SQL in supabase/migrations on your project.</p>}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-5">
            <Icon className="h-5 w-5 text-purple" />
            <p className="mt-3 font-display text-3xl font-extrabold">{value}</p>
            <p className="text-sm text-navy/60">{label}</p>
          </div>
        ))}
      </div>

      <section className="card mt-8 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Recent projects</h2>
          <Link href="/dashboard/projects/new" className="btn-primary">New project</Link>
        </div>
        {projects.length === 0 ? (
          <p className="py-10 text-center text-navy/60">No projects yet. Create your first dubbing project to get started.</p>
        ) : (
          <ul className="mt-4 divide-y divide-navy/10">
            {projects.slice(0, 6).map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3 text-sm">
                <span className="font-medium">{p.name}</span>
                <span className="rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold capitalize text-purple">{p.status.replace("_", " ")}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
