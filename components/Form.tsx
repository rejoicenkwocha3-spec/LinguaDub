"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import type { FormState } from "@/app/auth/actions";

export function SubmitButton({ children, className = "btn-primary w-full" }: { children: React.ReactNode; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}

export function Field({ label, name, type = "text", ...rest }: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input name={name} type={type} className="input" {...rest} />
    </label>
  );
}

export function Notice({ state }: { state: FormState }) {
  if (!state?.error && !state?.message) return null;
  const bad = Boolean(state.error);
  return (
    <p role={bad ? "alert" : "status"} className={`rounded-lg px-3.5 py-2.5 text-sm ${bad ? "bg-coral/10 text-[#b3382b]" : "bg-electric/10 text-electric"}`}>
      {state.error ?? state.message}
    </p>
  );
}
