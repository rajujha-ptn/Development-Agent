import { Metadata } from "next";
import { TopHeader } from "./components/TopHeader";
import { SummarySection } from "./components/SummarySection";
import { TodayPlanListSection } from "./components/TodayPlanListSection";
import { QuickActionsSection } from "./components/QuickActionsSection";

export const metadata: Metadata = {
  title: "Dashboard | OpenAgriNet",
  description: "Overview of your agricultural tasks and progress.",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <TopHeader />
      <SummarySection />
      <TodayPlanListSection />
      <QuickActionsSection />
    </div>
  );
}
