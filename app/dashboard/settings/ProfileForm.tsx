"use client";

import { useActionState } from "react";
import { updateProfile } from "@/app/auth/actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export function ProfileForm({ fullName, company }: { fullName: string; company: string }) {
  const [state, action] = useActionState(updateProfile, undefined);
  return (
    <form action={action} className="card mt-6 space-y-4 p-6">
      <Field label="Full name" name="fullName" defaultValue={fullName} required />
      <Field label="Company" name="company" defaultValue={company} />
      <Notice state={state} />
      <SubmitButton>Save profile</SubmitButton>
    </form>
  );
}
