"use client";

import Link from "next/link";
import { useActionState } from "react";
import { signUp } from "@/app/auth/actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export default function SignUpPage() {
  const [state, action] = useActionState(signUp, undefined);
  return (
    <>
      <h1 className="text-3xl font-extrabold">Create your account</h1>
      <p className="mb-8 mt-2 text-navy/60">Start dubbing your content into new languages.</p>
      <form action={action} className="space-y-4">
        <Field label="Full name" name="fullName" autoComplete="name" required placeholder="Ada Okafor" />
        <Field label="Work email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        <Field label="Password" name="password" type="password" autoComplete="new-password" required minLength={8} placeholder="At least 8 characters, with a number" />
        <Field label="Confirm password" name="confirm" type="password" autoComplete="new-password" required minLength={8} />
        <Notice state={state} />
        <SubmitButton>Create account</SubmitButton>
      </form>
      <p className="mt-8 text-center text-sm text-navy/60">
        Already have an account? <Link href="/login" className="font-semibold text-electric hover:underline">Sign in</Link>
      </p>
    </>
  );
}
