import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { safeNext } from "@/lib/site";

export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  return (
    <>
      <h1 className="text-3xl font-extrabold">Welcome back</h1>
      <p className="mb-8 mt-2 text-navy/60">Sign in to your LinguaDub workspace.</p>
      <LoginForm next={safeNext(sp.next)} urlError={sp.error} verified={sp.verified === "1"} />
      <p className="mt-8 text-center text-sm text-navy/60">
        New to LinguaDub? <Link href="/signup" className="font-semibold text-electric hover:underline">Create an account</Link>
      </p>
    </>
  );
}
