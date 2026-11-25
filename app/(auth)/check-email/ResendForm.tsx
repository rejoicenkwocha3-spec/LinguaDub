"use client";

import { useActionState } from "react";
import { resendVerification } from "@/app/auth/actions";
import { Notice, SubmitButton } from "@/components/Form";

export function ResendForm({ email }: { email: string }) {
  const [state, action] = useActionState(resendVerification, undefined);
  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="email" value={email} />
      <Notice state={state} />
      <SubmitButton className="btn-secondary w-full">Resend verification email</SubmitButton>
    </form>
  );
}
