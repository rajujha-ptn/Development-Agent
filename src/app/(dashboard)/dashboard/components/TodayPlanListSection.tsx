import { Card } from "./Card";

export function TodayPlanListSection() {
  const plans = [
    { time: "08:30", title: "Farm visit: Lelise Gudeta, Bako Tibe", desc: "Crop inspection", status: "UPCOMING" },
    { time: "09:00", title: "Farm visit: Tadesse, Ambo", desc: "Pest control assessment", status: "UPCOMING" },
    { time: "10:00", title: "Farm visit: Abebe Kebede, Gedo", desc: "Input distribution", status: "UPCOMING" },
    { time: "10:30", title: "Community Meeting", desc: "Discuss new irrigation schedule", status: "UPCOMING" },
    { time: "11:15", title: "Soil Analysis: Plot 42", desc: "Collect samples for pH testing", status: "UPCOMING" },
    { time: "13:00", title: "Submit weekly crop report", desc: "National agriculture statistics deadline", status: "DUE TODAY" },
    { time: "14:30", title: "Equipment Maintenance", desc: "Check tractor vitals", status: "UPCOMING" },
    { time: "15:30", title: "Farm visit: Chaltu Dinkesa, Lume", desc: "Follow-up", status: "UPCOMING" },
    { time: "16:15", title: "Team Sync", desc: "Weekly agronomist review", status: "UPCOMING" },
    { time: "17:00", title: "Seed Inventory", desc: "Count remaining hybrid seeds", status: "DUE TODAY" }
  ];

  return (
    <Card className="p-0 overflow-hidden border border-[#F1F3F4] rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-10 relative">
        <h3 className="font-bold text-[15px] text-[#1a2b3c]">Today&apos;s Plan</h3>
        <button className="text-[#037957] text-[13px] font-bold flex items-center gap-1 hover:underline transition-all">
          View calendar <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div className="flex flex-col max-h-[365px] overflow-y-auto green-scrollbar">
        {plans.map((plan, i) => (
          <div key={i} className="flex items-center px-6 py-4 border-b border-[#F1F3F4] last:border-0 hover:bg-[#F8FAFC] transition-colors cursor-pointer group">

            <div className="w-[85px] shrink-0">
              <span className="bg-[#F1F5F9] text-[#475569] font-bold text-[12px] px-3 py-1.5 rounded-full group-hover:bg-white group-hover:shadow-sm transition-all">
                {plan.time}
              </span>
            </div>

            <div className="flex-1 pr-4">
              <p className="font-bold text-[14.5px] text-[#1a2b3c]">{plan.title}</p>
              <p className="text-[13px] text-[#718096] mt-0.5">{plan.desc}</p>
            </div>

            <div>
              {plan.status === "UPCOMING" ? (
                <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-[#E6F0FD] text-[#3B82F6] border border-[#BFDBFE]">
                  {plan.status}
                </span>
              ) : (
                <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-[#FFF3C7] text-[#D97706] border border-[#FDE68A]">
                  {plan.status}
                </span>
              )}
            </div>

          </div>
        ))}
      </div>
    </Card>
  );
}
