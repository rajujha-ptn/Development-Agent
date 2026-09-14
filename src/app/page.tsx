import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">DA (All Pages)</h1>
      <div className="flex gap-3">
        <Link href="/login">
          <Button variant="primary">Sign in</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
