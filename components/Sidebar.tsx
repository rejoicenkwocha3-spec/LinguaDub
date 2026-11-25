"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, FolderKanban, PlusCircle, Film, AudioLines, Mic, Fingerprint, FileText,
  Languages, Captions, Download, Users, Bell, CreditCard, Settings, LogOut, Menu, X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { signOut } from "@/app/auth/actions";

export const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "My Projects", icon: FolderKanban },
  { href: "/dashboard/projects/new", label: "New Dubbing Project", icon: PlusCircle },
  { href: "/dashboard/video-library", label: "Video Library", icon: Film },
  { href: "/dashboard/audio-library", label: "Audio Library", icon: AudioLines },
  { href: "/dashboard/voice-library", label: "Voice Library", icon: Mic },
  { href: "/dashboard/voice-cloning", label: "Voice Cloning", icon: Fingerprint },
  { href: "/dashboard/transcriptions", label: "Transcriptions", icon: FileText },
  { href: "/dashboard/translations", label: "Translations", icon: Languages },
  { href: "/dashboard/subtitles", label: "Subtitles", icon: Captions },
  { href: "/dashboard/export-history", label: "Export History", icon: Download },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar({ name, email }: { name: string; email: string }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/dashboard" ? path === href : path === href || (path.startsWith(href + "/") && href !== "/dashboard/projects"));

  return (
    <>
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-navy/10 bg-white px-4 py-3 lg:hidden">
        <Logo href="/dashboard" />
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <aside className={`${open ? "block" : "hidden"} fixed inset-x-0 bottom-0 top-[61px] z-20 overflow-y-auto bg-navy text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col`}>
        <div className="hidden p-5 lg:block"><Logo href="/dashboard" light /></div>
        <nav className="flex-1 space-y-0.5 px-3 py-3 lg:overflow-y-auto">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${active(href) ? "bg-electric text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
              <Icon className="h-4 w-4" />{label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <p className="truncate text-sm font-semibold">{name}</p>
          <p className="truncate text-xs text-white/50">{email}</p>
          <form action={signOut} className="mt-3">
            <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white">
              <LogOut className="h-4 w-4" />Log out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
