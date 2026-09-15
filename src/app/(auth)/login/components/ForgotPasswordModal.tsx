"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0); return () => clearTimeout(t);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[650px] rounded-xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-200 p-6">
          <div className="pr-4">
            <h2 className="text-[26px] font-bold text-zinc-900">Forgot password?</h2>
            <p className="mt-1 text-[15px] text-zinc-500">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>
          <button
            onClick={onClose}
            className="group mt-1 shrink-0 rounded-xl bg-zinc-50 p-2.5 text-zinc-500 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:shadow-sm active:scale-95"
            aria-label="Close"
          >
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <form className="flex flex-col gap-10" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-zinc-700" htmlFor="reset-email">Email address</label>
              <Input
                id="reset-email"
                type="email"
                placeholder="Enter your email address"
                required
                className="bg-white text-[15px] transition-shadow duration-300 hover:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]"
                startAdornment={
                  <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
              />
            </div>

            <Button type="submit" variant="brand" size="lg" className="w-full rounded-lg h-12 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <span className="font-semibold text-[15px]">Send reset link</span>
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 flex flex-col items-center gap-4 text-sm">
            <p className="text-zinc-600">
              Remember your password?{" "}
              <button type="button" onClick={onClose} className="font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
                Back to sign in
              </button>
            </p>
            <p className="text-xs text-slate-400">
              Ministry of Agriculture — Ethiopia
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
