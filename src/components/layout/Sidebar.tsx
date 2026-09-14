"use client";

import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [{ href: "/dashboard", label: "Overview" }];

export function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={cn(
        "shrink-0 border-r border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-950",
        isOpen ? "w-56" : "w-16",
      )}
    >
      <nav className="flex flex-col gap-1 p-3">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {isOpen ? item.label : item.label[0]}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
