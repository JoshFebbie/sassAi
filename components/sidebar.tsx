"use client";

import Link from "next/link";
import Image from "next/image";
import { Goldman } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react"

const goldman = Goldman({
  weight: "700",
  subsets: ["latin"],
});

const routes = [
  {
  lable: "Dashboard",
  icon: LayoutDashboard,
  href: "/dashboard",
  color: "text-[#00ff6f]"
  },
]

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-2 py-1 flex-1">
        <Link
          href="/dashboard"
          className="flex
             items-center  mb-14"
        >
          <div className="relative w-28 h-28 mr-4 rounded-lg">
            <Image fill alt="Logo" src="/logo1.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-[#00ff6f]",goldman.className)}>
            PRODIGY.
          </h1>
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
