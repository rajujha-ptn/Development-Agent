import { cn } from "@/lib/utils";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-[#F1F3F4] bg-white p-5 dark:bg-zinc-950", className)}>
      {children}
    </div>
  );
}
