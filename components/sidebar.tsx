"use client";

import Link from "next/link";
import Image from "next/image";
import { Exo } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react"

const exo = Exo ({
  weight: "500",
  subsets: ["latin"],
});

const routes = [
  {
  lable: "Dashboard",
  icon: LayoutDashboard,
  href: "/dashboard",
  color: "text-[#00ff6f]"
  },
  {
  lable: "Conversation",
  icon: MessageSquare,
  href: "/conversation",
  color: "text-[#ff6cab]"
  },
  {
  lable: "Image Generation",
  icon: ImageIcon,
  href: "/image",
  color: "text-[#7a108a]"
  },
  {
  lable: "Video Generation",
  icon: VideoIcon,
  href: "/video",
  color: "text-[#10498a]"
  },
  {
  lable: "Music Generation",
  icon: Music,
  href: "/music",
  color: "text-[#7a108a]"
  },
  {
  lable: "Code Generation",
  icon: Code,
  href: "/code",
  color: "text-[#ff6cab]"
  },
  {
  lable: "Settings",
  icon: Settings,
  href: "/settings",
  color: "text-[#00ff6f]"
  },
]

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3  flex-1">
        <Link
          href="/dashboard"
          className="flex
             items-center  mb-14"
        >
          <div className="relative w-24 h-24 mr-4 rounded-lg">
            <Image fill alt="Logo" src="/logo1.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-[#00ff6f]", exo.className)}>
            PRODI-G
          </h1>
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#1F2937] transition duration-200 ease-in-out"
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.lable}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
