"use client";

import { useActionState } from "react";
import { updatePassword } from "@/app/auth/actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export default function ResetPasswordPage() {
  const [state, action] = useActionState(updatePassword, undefined);
  return (
    <>
      <h1 className="text-3xl font-extrabold">Choose a new password</h1>
      <p className="mb-8 mt-2 text-navy/60">You will be signed in once it is saved.</p>
      <form action={action} className="space-y-4">
        <Field label="New password" name="password" type="password" autoComplete="new-password" required minLength={8} />
        <Field label="Confirm new password" name="confirm" type="password" autoComplete="new-password" required minLength={8} />
        <Notice state={state} />
        <SubmitButton>Update password</SubmitButton>
      </form>
    </>
  );
}
