"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { UserProfile } from "@/components/layout/UserProfile";

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle sidebar"
          className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">DA</span>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <UserProfile />
      </div>
    </header>
  );
}
