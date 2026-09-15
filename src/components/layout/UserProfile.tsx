"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export function UserProfile() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="relative ml-2 w-fit" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 border transition-colors duration-200 bg-white group active:scale-[0.98] w-full ${isOpen ? 'rounded-t-[20px] rounded-b-none border-zinc-200 border-b-transparent shadow-[0_-4px_10px_-5px_rgba(0,0,0,0.05)] relative z-[61]' : 'rounded-full border-zinc-200 hover:border-zinc-300 hover:shadow-sm'
          }`}
      >
        <div className="h-10 w-10 rounded-full bg-zinc-200 overflow-hidden relative shrink-0 shadow-inner">
          <img
            src="/images/tadesse_profile.png"
            alt="Profile"
            className="w-full h-full object-cover group-hover:scale-[1.3] group-hover:rotate-12 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          />
        </div>
        <div className="hidden text-left sm:block">
          <p className="text-[15px] font-bold text-[#1a2b3c] leading-tight">
            {user?.name ?? "Tadesse Alemu"}
          </p>
          <p className="text-[13.5px] text-[#64748b] leading-tight mt-0.5">
            Development Agent
          </p>
        </div>
        <svg className={`w-4 h-4 text-[#1a2b3c] ml-1.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'rotate-180' : 'group-hover:translate-y-[2px]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-0 w-full bg-white rounded-b-[20px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-t-0 border-zinc-200 pt-0 pb-1.5 z-[60] animate-in fade-in duration-200">
          <div className="h-[1px] bg-zinc-200 w-full mb-1.5" />
          <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F8FAFC] transition-colors text-left group">
            <svg className="w-[22px] h-[22px] text-[#1a2b3c] group-hover:rotate-90 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-[15px] text-[#4a5568] group-hover:text-[#1a2b3c] transition-colors">Profile</span>
          </button>

          <div className="h-[1px] bg-[#F1F3F4] my-1.5 mx-0" />

          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-left group"
          >
            <svg className="w-[22px] h-[22px] text-[#ef4444] group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="font-semibold text-[15px] text-[#ef4444]">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
