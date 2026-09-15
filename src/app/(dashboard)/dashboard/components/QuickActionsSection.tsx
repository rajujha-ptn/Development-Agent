import { Card } from "./Card";

export function QuickActionsSection() {
  const actions = [
    { title: "Register Farmer", desc: "Add new household profile", icon: "user-add" },
    { title: "Submit Crop Report", desc: "Log yield and pest surveys", icon: "clipboard-list" },
    { title: "Start Farm Visit", desc: "Activate GPS route and inspection logs", icon: "location" }
  ];

  return (
    <Card className="p-0 overflow-hidden border border-[#F1F3F4] rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-1px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h3 className="font-bold text-[15px] text-[#1a2b3c]">Quick actions</h3>
        <button className="bg-[#037957] hover:bg-[#026146] text-white text-[13px] font-bold py-2 px-4 rounded-md shadow-sm transition-all active:scale-95">
          Update Existing
        </button>
      </div>
      <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {actions.map((act, i) => (
          <div key={i} className="flex items-center gap-4 p-5 border border-[#edf0f3] rounded-xl hover:border-[#037957]/20 hover:shadow-md transition-all cursor-pointer group hover:-translate-y-0.5 bg-white">
            <div className="w-[48px] h-[48px] rounded-xl bg-[#E6F5F0] text-[#037957] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              {act.icon === "user-add" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_707_7138)">
                    <path d="M16.0011 21V19C16.0011 17.9391 15.5797 16.9217 14.8295 16.1716C14.0792 15.4214 13.0618 15 12.0008 15H6.00032C4.93937 15 3.92187 15.4214 3.17167 16.1716C2.42146 16.9217 2 17.9391 2 19V21M19.0014 8V14M22.0016 11H16.0011M13.0009 7C13.0009 9.20914 11.2099 11 9.00056 11C6.79124 11 5.00024 9.20914 5.00024 7C5.00024 4.79086 6.79124 3 9.00056 3C11.2099 3 13.0009 4.79086 13.0009 7Z" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_707_7138">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              )}
              {act.icon === "clipboard-list" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_707_7149)">
                    <path d="M15.9988 3.99918H17.9986C18.529 3.99918 19.0376 4.20991 19.4127 4.58502C19.7877 4.96012 19.9984 5.46887 19.9984 5.99934V20.0005C19.9984 20.5309 19.7877 21.0397 19.4127 21.4148C19.0376 21.7899 18.529 22.0006 17.9986 22.0006H5.9998C5.46942 22.0006 4.96076 21.7899 4.58573 21.4148C4.21069 21.0397 4 20.5309 4 20.0005V5.99934C4 5.46887 4.21069 4.96012 4.58573 4.58502C4.96076 4.20991 5.46942 3.99918 5.9998 3.99918H7.9996M11.9992 10.9997H15.9988M11.9992 16.0001H15.9988M7.9996 10.9997H8.0096M7.9996 16.0001H8.0096M8.9995 1.99902H14.9989C15.5511 1.99902 15.9988 2.44677 15.9988 2.9991V4.99926C15.9988 5.55159 15.5511 5.99934 14.9989 5.99934H8.9995C8.44727 5.99934 7.9996 5.55159 7.9996 4.99926V2.9991C7.9996 2.44677 8.44727 1.99902 8.9995 1.99902Z" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_707_7149">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              )}
              {act.icon === "location" && (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[14.5px] text-[#1a2b3c] group-hover:text-[#037957] transition-colors">{act.title}</h4>
              <p className="text-[12.5px] text-[#718096] mt-0.5 leading-snug">{act.desc}</p>
            </div>
            <div className="text-[#CBD5E1] group-hover:text-[#037957] group-hover:translate-x-1 transition-all">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
