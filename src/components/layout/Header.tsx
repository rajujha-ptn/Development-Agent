"use client";

import { useState, useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { UserProfile } from "@/components/layout/UserProfile";
import { SearchModal } from "@/components/layout/SearchModal";
import { NotificationsPanel } from "@/components/layout/NotificationsPanel";

export function Header() {
  const { toggle, isOpen } = useSidebar();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="relative z-[60] flex h-[72px] items-center justify-between border-b border-zinc-200 bg-white px-10 pl-8 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle sidebar"
          className="group rounded-xl p-2.5 -ml-2.5 text-[#1a2b3c] hover:bg-[#F8FAFC] hover:text-emerald-600 transition-colors duration-300 active:scale-95 flex items-center justify-center"
        >
          <svg className="w-[26px] h-[26px] transition-colors duration-300" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1.5 7L27.5 33C27.5 33 30.5 36 36.5 40.5C42.5 45 48 33.5 41.5 33C35 32.5 2 33 2 33" 
              stroke="currentColor" 
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{ strokeDasharray: 104, strokeDashoffset: isOpen ? 68 : -71 }}
            />
            <path 
              d="M2 33L28 7C28 7 33.5 1 37 1C40.5 1 43 6.20692 40 7C37 7.79308 1 7 1 7" 
              stroke="currentColor" 
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{ strokeDasharray: 104, strokeDashoffset: isOpen ? 68 : -71 }}
            />
            <path 
              d="M1.5 20H28.5" 
              stroke="currentColor" 
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{ strokeDasharray: isOpen ? 43 : 41, strokeDashoffset: isOpen ? 130 : -82 }}
            />
          </svg>
        </button>
        <span className="text-xl font-bold text-[#1a2b3c]">Dashboard</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block cursor-text" onClick={() => setIsSearchOpen(true)}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-[#4a5568]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            placeholder="Search portal..."
            className="w-[280px] pl-9 pr-4 py-2 bg-[#F8FAFC] border border-zinc-200 rounded-lg text-sm text-[#4a5568] placeholder:text-[#a0aec0] font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-text pointer-events-none"
          />
        </div>
        
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Notifications */}
        <button 
          onClick={() => setIsNotificationsOpen(true)}
          className="relative p-2 rounded-full border border-zinc-200 hover:bg-zinc-50 text-[#4a5568] transition-colors ml-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E53E3E] text-[11px] font-bold text-white border-2 border-white">
            3
          </span>
        </button>

        <NotificationsPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

        {/* User Profile */}
        <UserProfile />
      </div>
    </header>
  );
}
