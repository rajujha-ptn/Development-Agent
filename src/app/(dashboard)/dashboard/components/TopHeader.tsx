import { Card } from "./Card";
import { DateRangeDropdown } from "./DateRangeDropdown";

export function TopHeader() {
  return (
    <Card className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full border border-[#fff] rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative z-50">
      <div>
        <h1 className="text-[22px] font-bold text-[#1a2b3c]">Welcome back, Tadesse</h1>
        <p className="text-[13px] text-[#4a5568] mt-1">
          <strong className="text-[#1a2b3c] font-semibold">Assigned:</strong> Kebeles - Kebele1, Kebele2 · Updated 2 minutes ago
        </p>
      </div>

      <DateRangeDropdown />
    </Card>
  );
}
