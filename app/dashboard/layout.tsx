import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle();
  const name = profile?.full_name || (user.user_metadata?.full_name as string | undefined) || user.email!.split("@")[0];

  return (
    <div className="min-h-screen">
      <Sidebar name={name} email={user.email!} />
      <main className="px-5 py-8 lg:ml-64 lg:px-10">{children}</main>
    </div>
  );
}
