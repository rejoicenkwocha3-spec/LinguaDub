import Link from "next/link";
import { MailCheck } from "lucide-react";
import { ResendForm } from "./ResendForm";

export default async function CheckEmailPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email = "" } = await searchParams;
  return (
    <div className="text-center">
      <MailCheck className="mx-auto h-12 w-12 text-electric" />
      <h1 className="mt-5 text-3xl font-extrabold">Verify your email</h1>
      <p className="mt-3 text-navy/60">
        We sent a verification link{email ? <> to <strong className="text-navy">{email}</strong></> : ""}. Open it to activate your account and enter your dashboard.
      </p>
      <div className="mt-8"><ResendForm email={email} /></div>
      <p className="mt-6 text-sm text-navy/60">
        Already verified? <Link href="/login" className="font-semibold text-electric hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
