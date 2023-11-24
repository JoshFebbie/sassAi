"use client";

import { MessageSquare, ArrowRight, Music, ImageIcon,VideoIcon, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation"

// The tools array contains the data for each tool. Each tool has a label, icon, color, bgColor, and href.
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-[#ff6cab]",
    bgColor: "bg-[#19243c]",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-[#BA972F]",
    bgColor: "bg-[#19243c]",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-[#10498a]",
    bgColor: "bg-[#19243c]",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-[#7a108a]",
    bgColor: "bg-[#19243c]",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-[#3aa4e6]",
    bgColor: "bg-[#19243c]",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Prodigy is a platform that allows you to generate images, videos,
          music, code, and more using the power of AI
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
// The tools.map function iterates over each tool in the tools array and renders a Card component for each tool.
// The tool.href is the path to the tool's page. For example, the Conversation tool's page is located at /conversation.
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/8 flex items-center
            justify-between hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4 ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("h-6 w-6", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
