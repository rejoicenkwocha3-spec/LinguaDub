import { createClient } from "@/lib/supabase/server";
import { ProfileForm } from "./ProfileForm";

export default async function Settings() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from("profiles").select("full_name,company").eq("id", user!.id).maybeSingle();
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-extrabold">Settings</h1>
      <p className="mt-2 text-navy/60">Signed in as {user!.email}</p>
      <ProfileForm fullName={profile?.full_name ?? (user!.user_metadata?.full_name as string) ?? ""} company={profile?.company ?? ""} />
    </div>
  );
}
