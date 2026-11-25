"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { resendVerification, signIn } from "@/app/auth/actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export function LoginForm({ next, urlError, verified }: { next: string; urlError?: string; verified?: boolean }) {
  const [state, action] = useActionState(signIn, undefined);
  const [resendState, resendAction] = useActionState(resendVerification, undefined);
  const [email, setEmail] = useState("");
  const needsVerify = state?.error?.includes("verify your email");

  return (
    <div className="space-y-5">
      <form action={action} className="space-y-4">
        {verified && <p className="rounded-lg bg-electric/10 px-3.5 py-2.5 text-sm text-electric">Check your inbox to verify your email, then sign in.</p>}
        {urlError && !state && <Notice state={{ error: urlError }} />}
        <input type="hidden" name="next" value={next} />
        <Field label="Email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
        <div>
          <Field label="Password" name="password" type="password" autoComplete="current-password" required />
          <div className="mt-1.5 text-right text-sm">
            <Link href="/forgot-password" className="font-medium text-electric hover:underline">Forgot password?</Link>
          </div>
        </div>
        <Notice state={state} />
        <SubmitButton>Sign in</SubmitButton>
      </form>

      {needsVerify && (
        <form action={resendAction} className="space-y-3 rounded-lg bg-lavender p-4">
          <input type="hidden" name="email" value={email} />
          <Notice state={resendState} />
          <SubmitButton className="btn-secondary w-full">Resend verification email</SubmitButton>
        </form>
      )}
    </div>
  );
}
