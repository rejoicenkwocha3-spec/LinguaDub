import Link from "next/link";

export function Logo({ href = "/", light = false }: { href?: string; light?: boolean }) {
  return (
    <Link href={href} className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.jpg" alt="" className="h-9 w-9 rounded-lg object-cover" />
      <span className={`font-display text-lg font-extrabold ${light ? "text-white" : "text-navy"}`}>LinguaDub</span>
    </Link>
  );
}
