"use client";

import { useAuthStore } from "@/store/useAuthStore";

export function UserProfile() {
  const user = useAuthStore((state) => state.user);

  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white dark:bg-white dark:text-zinc-900">
        {initials ?? "?"}
      </div>
      <div className="hidden text-sm sm:block">
        <p className="font-medium text-zinc-900 dark:text-zinc-50">{user?.name ?? "Guest"}</p>
        <p className="text-zinc-500 dark:text-zinc-400">{user?.email ?? "Not signed in"}</p>
      </div>
    </div>
  );
}
