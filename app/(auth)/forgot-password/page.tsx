"use client";

import Link from "next/link";
import { useActionState } from "react";
import { forgotPassword } from "@/app/auth/actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export default function ForgotPasswordPage() {
  const [state, action] = useActionState(forgotPassword, undefined);
  return (
    <>
      <h1 className="text-3xl font-extrabold">Reset your password</h1>
      <p className="mb-8 mt-2 text-navy/60">Enter your email and we will send you a link to choose a new password.</p>
      <form action={action} className="space-y-4">
        <Field label="Email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        <Notice state={state} />
        <SubmitButton>Send reset link</SubmitButton>
      </form>
      <p className="mt-8 text-center text-sm text-navy/60">
        <Link href="/login" className="font-semibold text-electric hover:underline">Back to sign in</Link>
      </p>
    </>
  );
}
