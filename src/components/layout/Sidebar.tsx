"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MENU_ITEMS = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4993 2.5H11.666V8.33333H17.4993V2.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.33333 11.667H2.5V17.5003H8.33333V11.667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4993 11.667H11.666V17.5003H17.4993V11.667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    ),
  },
];

const FARMER_MANAGEMENT = [
  {
    title: "New Farmer",
    href: "/farmers/new",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3327 17.5V15.8333C13.3327 14.9493 12.9815 14.1014 12.3564 13.4763C11.7313 12.8512 10.8834 12.5 9.99935 12.5H4.99935C4.11529 12.5 3.26745 12.8512 2.64233 13.4763C2.01721 14.1014 1.66602 14.9493 1.66602 15.8333V17.5" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.49935 9.16667C9.3403 9.16667 10.8327 7.67428 10.8327 5.83333C10.8327 3.99238 9.3403 2.5 7.49935 2.5C5.6584 2.5 4.16602 3.99238 4.16602 5.83333C4.16602 7.67428 5.6584 9.16667 7.49935 9.16667Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.834 6.66699V11.667" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.334 9.16699H13.334" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
  },
  {
    title: "My Farmers",
    href: "/farmers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1673 17.5V15.8333C14.1673 14.9493 13.8161 14.1014 13.191 13.4763C12.5659 12.8512 11.718 12.5 10.834 12.5H4.16732C3.28326 12.5 2.43542 12.8512 1.8103 13.4763C1.18517 14.1014 0.833984 14.9493 0.833984 15.8333V17.5" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.49935 9.16667C9.3403 9.16667 10.8327 7.67428 10.8327 5.83333C10.8327 3.99238 9.3403 2.5 7.49935 2.5C5.6584 2.5 4.16602 3.99238 4.16602 5.83333C4.16602 7.67428 5.6584 9.16667 7.49935 9.16667Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.166 17.5001V15.8334C19.1655 15.0948 18.9196 14.3774 18.4672 13.7937C18.0147 13.2099 17.3811 12.793 16.666 12.6084" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.334 2.6084C14.051 2.79198 14.6865 3.20898 15.1403 3.79366C15.5942 4.37833 15.8405 5.09742 15.8405 5.83757C15.8405 6.57771 15.5942 7.2968 15.1403 7.88147C14.6865 8.46615 14.051 8.88315 13.334 9.06673" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Update Existing",
    href: "/farmers/update",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_707_6940)">
          <path d="M9.16602 3.33301H3.33268C2.89065 3.33301 2.46673 3.5086 2.15417 3.82116C1.84161 4.13372 1.66602 4.55765 1.66602 4.99967V16.6663C1.66602 17.1084 1.84161 17.5323 2.15417 17.8449C2.46673 18.1574 2.89065 18.333 3.33268 18.333H14.9993C15.4414 18.333 15.8653 18.1574 16.1779 17.8449C16.4904 17.5323 16.666 17.1084 16.666 16.6663V10.833" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.416 2.0832C15.7475 1.75168 16.1972 1.56543 16.666 1.56543C17.1349 1.56543 17.5845 1.75168 17.916 2.0832C18.2475 2.41472 18.4338 2.86436 18.4338 3.3332C18.4338 3.80204 18.2475 4.25168 17.916 4.5832L9.99935 12.4999L6.66602 13.3332L7.49935 9.99986L15.416 2.0832Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_707_6940">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
  },
  {
    title: "Visits",
    href: "/visits",
    icon: (

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9416 3.89746H2.84377C2.28608 3.89746 1.83398 4.34956 1.83398 4.90725V13.9953C1.83398 14.553 2.28608 15.0051 2.84377 15.0051H12.9416C13.4993 15.0051 13.9514 14.553 13.9514 13.9953V4.90725C13.9514 4.34956 13.4993 3.89746 12.9416 3.89746Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" />
        <path d="M4.35742 2.38281V5.41217M11.4259 2.38281V5.41217" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M1.83398 6.92676H13.9514" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" />
        <path d="M4.86328 9.95608L6.88285 11.9757L10.4171 8.44141" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.961 18.0343C17.1918 18.0343 19.0002 16.2259 19.0002 13.9952C19.0002 11.7644 17.1918 9.95605 14.961 9.95605C12.7303 9.95605 10.9219 11.7644 10.9219 13.9952C10.9219 16.2259 12.7303 18.0343 14.961 18.0343Z" fill="#066E4F" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" />
        <path d="M14.9609 11.9756V13.9952L16.4756 15.0049" stroke="white" strokeOpacity="0.9" strokeWidth="1.25" strokeLinecap="round" />
      </svg>

    ),
  },
  {
    title: "Internal Feedback",
    href: "/feedback",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 8.16667L10 10.6667L13.3333 6.5" stroke="white" strokeOpacity="0.9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Grievances",
    href: "/grievances",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.57465 3.21635L1.51632 14.9997C1.37079 15.2517 1.29379 15.5374 1.29298 15.8284C1.29216 16.1195 1.36756 16.4056 1.51167 16.6585C1.65579 16.9113 1.86359 17.122 2.11441 17.2696C2.36523 17.4171 2.65032 17.4965 2.94132 17.4997H17.058C17.349 17.4965 17.6341 17.4171 17.8849 17.2696C18.1357 17.122 18.3435 16.9113 18.4876 16.6585C18.6317 16.4056 18.7071 16.1195 18.7063 15.8284C18.7055 15.5374 18.6285 15.2517 18.483 14.9997L11.4247 3.21635C11.2761 2.97144 11.0669 2.76895 10.8173 2.62842C10.5677 2.48789 10.2861 2.41406 9.99965 2.41406C9.71321 2.41406 9.43159 2.48789 9.18199 2.62842C8.93238 2.76895 8.72321 2.97144 8.57465 3.21635Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7.5V10.8333" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14.167H10.0083" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>


    ),
  },
];

const PERFORMANCE = [
  {
    title: "My Performance",
    href: "/performance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 16.6668V8.3335" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16.6668V3.3335" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 16.6665V11.6665" stroke="white" strokeOpacity="0.9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
  },
];

export function Sidebar() {
  const { isOpen } = useSidebar();
  const pathname = usePathname();

  // For collapsible sections
  const [farmerManagementOpen, setFarmerManagementOpen] = useState(true);
  const [performanceOpen, setPerformanceOpen] = useState(true);

  return (
    <aside
      className={cn(
        "shrink-0 flex flex-col h-full bg-gradient-to-b from-[#037957] to-[#023324] text-white transition-all overflow-y-auto sidebar-scrollbar border-r border-[#023B2A]",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Brand Header */}
      <div className={cn("flex items-center gap-3 p-4 shrink-0 border-b border-[#045d44] h-[72px]", !isOpen && "justify-center")}>
        <div className="w-10 h-10 shrink-0 bg-white rounded-lg flex items-center justify-center text-[#047857]">
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_707_6903)">
              <path d="M10.4993 7.152V5.25C10.4993 4.45435 10.8153 3.69129 11.3778 3.12868C11.9404 2.56607 12.7034 2.25 13.499 2.25H14.6238C14.7233 2.25 14.8187 2.28951 14.889 2.35984C14.9593 2.43016 14.9988 2.52554 14.9988 2.625V3.75C14.9988 4.54565 14.6828 5.30871 14.1202 5.87132C13.5577 6.43393 12.7947 6.75 11.9991 6.75C11.2035 6.75 10.4405 7.06607 9.87799 7.62868C9.31544 8.19129 8.9994 8.95435 8.9994 9.75M8.9994 9.75C8.9994 11.25 9.74933 12 9.74933 13.5C9.74933 14.3114 9.48618 15.1009 8.9994 15.75M8.9994 9.75C8.9994 9.05358 8.80549 8.37092 8.4394 7.77851C8.0733 7.1861 7.54949 6.70735 6.92666 6.3959C6.30382 6.08445 5.60657 5.95261 4.91304 6.01515C4.2195 6.0777 3.55708 6.33215 3 6.75C3 7.44642 3.19391 8.12908 3.56 8.72149C3.9261 9.3139 4.44991 9.79265 5.07274 10.1041C5.69558 10.4156 6.39283 10.5474 7.08636 10.4848C7.7799 10.4223 8.44232 10.1679 8.9994 9.75ZM3.74993 15.75H14.2489" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_707_6903">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        {isOpen && (
          <div className="flex flex-col whitespace-nowrap overflow-hidden">
            <span className="text-[10px] font-bold text-[#E8B84B] tracking-wider">ETHIOPIA AGENT PORTAL</span>
            <span className="text-xl font-bold leading-tight">OpenAgriNet</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-0 flex flex-col">
        {/* Main Menu */}
        <div className="flex flex-col">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 transition-all duration-300 ease-in-out border-y",
                  isActive
                    ? "bg-white/[0.15] border-t-white/30 border-b-white/30 font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    : "border-white/10 hover:bg-white/15",
                  !isOpen && "justify-center px-0"
                )}
                title={!isOpen ? item.title : undefined}
              >
                <div className={cn("shrink-0", isActive ? "text-white" : "text-[#93BBAF]")}>
                  {item.icon}
                </div>
                {isOpen && (
                  <span className={cn("font-medium", isActive ? "text-white" : "text-[#D1E5DE]")}>
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Farmer Management Section */}
        <div className="flex flex-col">
          {isOpen && (
            <div
              className="flex items-center justify-between px-5 py-3 cursor-pointer group select-none border-y border-white/10 hover:bg-white/5 transition-colors"
              onClick={() => setFarmerManagementOpen(!farmerManagementOpen)}
            >
              <span className="text-xs font-bold text-[#D1E5DE] tracking-wider uppercase group-hover:text-white transition-colors">
                Farmer Management
              </span>
              <svg
                className={cn("w-4 h-4 text-[#93BBAF] transition-transform", !farmerManagementOpen && "-rotate-90")}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {(farmerManagementOpen || !isOpen) && (
            <div className="flex flex-col">
              {FARMER_MANAGEMENT.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3 transition-all duration-300 ease-in-out border-y",
                      isActive
                        ? "bg-white/[0.15] border-t-white/30 border-b-white/30 font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                        : "border-white/10 hover:bg-white/15",
                      !isOpen && "justify-center px-0"
                    )}
                    title={!isOpen ? item.title : undefined}
                  >
                    <div className={cn("shrink-0", isActive ? "text-white" : "text-[#93BBAF]")}>
                      {item.icon}
                    </div>
                    {isOpen && (
                      <span className={cn("font-medium", isActive ? "text-white" : "text-[#D1E5DE]")}>
                        {item.title}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Performance Section */}
        <div className="flex flex-col">
          {isOpen && (
            <div
              className="flex items-center justify-between px-5 py-3 cursor-pointer group select-none border-y border-white/10 hover:bg-white/5 transition-colors"
              onClick={() => setPerformanceOpen(!performanceOpen)}
            >
              <span className="text-xs font-bold text-[#D1E5DE] tracking-wider uppercase group-hover:text-white transition-colors">
                Performance
              </span>
              <svg
                className={cn("w-4 h-4 text-[#93BBAF] transition-transform", !performanceOpen && "-rotate-90")}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {(performanceOpen || !isOpen) && (
            <div className="flex flex-col">
              {PERFORMANCE.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3 transition-all duration-300 ease-in-out border-y",
                      isActive
                        ? "bg-white/[0.15] border-t-white/30 border-b-white/30 font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                        : "border-white/10 hover:bg-white/15",
                      !isOpen && "justify-center px-0"
                    )}
                    title={!isOpen ? item.title : undefined}
                  >
                    <div className={cn("shrink-0", isActive ? "text-white" : "text-[#93BBAF]")}>
                      {item.icon}
                    </div>
                    {isOpen && (
                      <span className={cn("font-medium", isActive ? "text-white" : "text-[#D1E5DE]")}>
                        {item.title}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
