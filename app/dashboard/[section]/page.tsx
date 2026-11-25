import { notFound } from "next/navigation";
import { NAV } from "@/components/Sidebar";

export default async function Section({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const item = NAV.find((n) => n.href === `/dashboard/${section}`);
  if (!item) notFound();
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold">{item.label}</h1>
      <div className="card mt-6 p-10 text-center text-navy/60">
        This section is not built yet. It will be connected to real data in a later phase.
      </div>
    </div>
  );
}
