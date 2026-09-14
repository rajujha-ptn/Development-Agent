"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ForgotPasswordModal } from "./ForgotPasswordModal";

export function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  // Automatically clear URL query parameters if they exist
  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="relative z-10 w-full max-w-lg">
      {/* SignInTab */}
      <div className="absolute -top-8 left-4 md:left-6 origin-bottom rounded-t-lg bg-[#E3B755] px-4 md:px-6 py-2 text-xs font-bold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-105 cursor-default">
        Agent Sign-In
      </div>

      <div className="flex flex-col gap-6 md:gap-8 rounded-2xl bg-[#FAFAFA] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
        {/* LoginCardHeader */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <div className="group flex cursor-default items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-white transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9M12 9c0-3.5 2.5-6 6-6-.5 3.5-2.5 6-6 6ZM12 13c0-3-2-5-6-5 .5 3 2 5 6 5Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 transition-colors duration-300 group-hover:text-emerald-600">Ethiopia Agent Portal</p>
              <p className="text-xl font-bold leading-tight text-zinc-900">OpenAgriNet</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Sign in to your account</h2>
            <p className="mt-1.5 text-sm text-zinc-500">Enter your credentials to access the agent portal.</p>
          </div>
        </div>

        {/* LoginForm */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-zinc-700" htmlFor="email">Email address</label>
            <Input id="email" name="email" type="email" placeholder="Enter your email address" required className="bg-white transition-shadow duration-300 hover:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-zinc-700" htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              required
              className="bg-white transition-shadow duration-300 hover:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.1)]"
              endAdornment={
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-zinc-400 transition-colors duration-300 hover:text-emerald-600 hover:scale-110 active:scale-95"
                >
                  {showPassword ? (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.5 5.2A9.8 9.8 0 0112 5c5 0 9 4 10 7a12 12 0 01-3.1 4.2M6.6 6.6C4.3 8 2.8 10 2 12c1 3 5 7 10 7 1.3 0 2.5-.2 3.6-.6" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              }
            />
          </div>

          <div className="mt-1 flex items-center justify-between text-sm">
            <label className="group flex cursor-pointer items-center gap-2 font-medium text-zinc-700">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  name="remember" 
                  defaultChecked 
                  className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded border-2 border-zinc-300 bg-white transition-all duration-300 checked:border-emerald-700 checked:bg-emerald-700 group-hover:border-emerald-500 group-hover:shadow-[0_0_0_4px_rgba(4,120,87,0.1)] group-active:scale-95" 
                />
                <svg 
                  className="pointer-events-none absolute h-3.5 w-3.5 scale-50 text-white opacity-0 transition-all duration-300 ease-out peer-checked:scale-100 peer-checked:opacity-100" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={3.5} 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="transition-colors duration-300 group-hover:text-emerald-800">Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => setIsForgotPasswordOpen(true)}
              className="font-semibold text-emerald-700 transition-all duration-300 hover:text-emerald-800 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" variant="brand" size="lg" className="mt-2 w-full rounded-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <span className='font-semibold'>Sign in</span>
          </Button>

          <div className="my-1 flex items-center gap-3 text-sm text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200" />
            or
            <span className="h-px flex-1 bg-zinc-200" />
          </div>

          <Button type="button" variant="brandOutline" size="lg" className="w-full gap-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]">
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16v11H4V10zM8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4" />
            </svg>
            <span className='font-semibold'>Sign in with FAYDA ID</span>
          </Button>

          <p className="mt-2 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-semibold text-emerald-700 transition-colors hover:text-emerald-800 hover:underline">
              Contact your administrator.
            </a>
          </p>
          <p className="m-0 text-center text-xs text-slate-400">
            Ministry of Agriculture — Ethiopia
          </p>
        </form>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
}
