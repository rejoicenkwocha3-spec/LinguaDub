"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import { safeNext, siteUrl } from "@/lib/site";

export type FormState = { error?: string; message?: string } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (f: FormData, k: string) => String(f.get(k) ?? "").trim();
const NOT_CONFIGURED = "Authentication is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.";

function passwordProblem(p: string) {
  if (p.length < 8) return "Password must be at least 8 characters.";
  if (!/[a-z]/i.test(p) || !/\d/.test(p)) return "Password must include letters and at least one number.";
  return null;
}

export async function signUp(_: FormState, form: FormData): Promise<FormState> {
  if (!isSupabaseConfigured) return { error: NOT_CONFIGURED };
  const fullName = str(form, "fullName");
  const email = str(form, "email").toLowerCase();
  const password = String(form.get("password") ?? "");
  if (fullName.length < 2) return { error: "Please enter your full name." };
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
  const pw = passwordProblem(password);
  if (pw) return { error: pw };
  if (password !== String(form.get("confirm") ?? "")) return { error: "Passwords do not match." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${await siteUrl()}/auth/callback?next=/dashboard`,
    },
  });
  if (error) return { error: error.message };

  // Supabase hides existing accounts: a user object with no identities means the email is taken.
  if (data.user && data.user.identities?.length === 0) {
    return { error: "An account with this email already exists. Try signing in instead." };
  }
  // Email confirmation disabled in the project: a session is returned immediately.
  if (data.session) redirect("/dashboard");
  redirect(`/check-email?email=${encodeURIComponent(email)}`);
}

export async function signIn(_: FormState, form: FormData): Promise<FormState> {
  if (!isSupabaseConfigured) return { error: NOT_CONFIGURED };
  const email = str(form, "email").toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
  if (!password) return { error: "Please enter your password." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    if (/not confirmed/i.test(error.message)) {
      return { error: "Please verify your email first. Check your inbox, or request a new verification email below." };
    }
    if (/invalid login/i.test(error.message)) return { error: "Incorrect email or password." };
    return { error: error.message };
  }
  redirect(safeNext(str(form, "next")));
}

export async function resendVerification(_: FormState, form: FormData): Promise<FormState> {
  if (!isSupabaseConfigured) return { error: NOT_CONFIGURED };
  const email = str(form, "email").toLowerCase();
  if (!EMAIL_RE.test(email)) return { error: "Enter your email address above first." };
  const supabase = await createClient();
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
    options: { emailRedirectTo: `${await siteUrl()}/auth/callback?next=/dashboard` },
  });
  if (error) return { error: error.message };
  return { message: "Verification email sent. Check your inbox and spam folder." };
}

export async function forgotPassword(_: FormState, form: FormData): Promise<FormState> {
  if (!isSupabaseConfigured) return { error: NOT_CONFIGURED };
  const email = str(form, "email").toLowerCase();
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${await siteUrl()}/auth/callback?next=/reset-password`,
  });
  if (error) return { error: error.message };
  return { message: "If an account exists for that email, a reset link is on its way." };
}

export async function updatePassword(_: FormState, form: FormData): Promise<FormState> {
  const password = String(form.get("password") ?? "");
  const pw = passwordProblem(password);
  if (pw) return { error: pw };
  if (password !== String(form.get("confirm") ?? "")) return { error: "Passwords do not match." };
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Your reset link has expired. Request a new one." };
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: error.message };
  redirect("/dashboard?reset=1");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function updateProfile(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const fullName = str(form, "fullName");
  const company = str(form, "company");
  if (fullName.length < 2) return { error: "Please enter your full name." };
  const { error } = await supabase
    .from("profiles")
    .upsert({ id: user.id, full_name: fullName, company: company || null, updated_at: new Date().toISOString() });
  if (error) return { error: `Could not save profile: ${error.message}` };
  await supabase.auth.updateUser({ data: { full_name: fullName } });
  return { message: "Profile saved." };
}
