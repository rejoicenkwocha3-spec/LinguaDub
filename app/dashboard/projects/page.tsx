import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Projects() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">My Projects</h1>
        <Link href="/dashboard/projects/new" className="btn-primary">New project</Link>
      </div>
      {error && <p className="mt-4 rounded-lg bg-coral/10 px-3.5 py-2.5 text-sm text-[#b3382b]">{error.message}</p>}
      <div className="card mt-6 p-2">
        {!projects?.length ? (
          <p className="py-16 text-center text-navy/60">No projects yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="text-navy/50"><tr><th className="p-3">Name</th><th className="p-3">Source</th><th className="p-3">Targets</th><th className="p-3">Status</th><th className="p-3">Created</th></tr></thead>
            <tbody className="divide-y divide-navy/10">
              {projects.map((p) => (
                <tr key={p.id}>
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3">{p.source_language ?? "Not set"}</td>
                  <td className="p-3">{(p.target_languages ?? []).join(", ") || "Not set"}</td>
                  <td className="p-3 capitalize">{p.status.replace("_", " ")}</td>
                  <td className="p-3">{new Date(p.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
