"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { FormState } from "@/app/auth/actions";

export async function createProject(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const name = String(form.get("name") ?? "").trim();
  const source = String(form.get("source") ?? "").trim();
  const targets = String(form.get("targets") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (name.length < 2) return { error: "Give the project a name." };
  const { error } = await supabase.from("projects").insert({
    owner_id: user.id, name, source_language: source || null, target_languages: targets, status: "draft",
  });
  if (error) return { error: error.message };
  redirect("/dashboard/projects");
}
