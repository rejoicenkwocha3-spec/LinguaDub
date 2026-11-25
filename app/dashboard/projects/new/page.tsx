"use client";

import { useActionState } from "react";
import { createProject } from "./actions";
import { Field, Notice, SubmitButton } from "@/components/Form";

export default function NewProject() {
  const [state, action] = useActionState(createProject, undefined);
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-extrabold">New Dubbing Project</h1>
      <p className="mt-2 text-navy/60">Create a draft project. Media upload and the dubbing pipeline are added in later phases.</p>
      <form action={action} className="card mt-6 space-y-4 p-6">
        <Field label="Project name" name="name" required placeholder="Product launch video" />
        <Field label="Source language" name="source" placeholder="English" />
        <Field label="Target languages (comma separated)" name="targets" placeholder="Spanish, French" />
        <Notice state={state} />
        <SubmitButton>Save draft</SubmitButton>
      </form>
    </div>
  );
}
