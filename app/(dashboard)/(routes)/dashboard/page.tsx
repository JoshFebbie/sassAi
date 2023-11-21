"use client";

import { MessageSquare, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// The tools array contains the data for each tool. Each tool has a label, icon, color, bgColor, and href.
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/30",
    href: "/conversation",
  },
];

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Prodigy is a platform that allows you to generate images, videos,
          music, code, and more using the power of AI.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
// The tools.map function iterates over each tool in the tools array and renders a Card component for each tool.
          <Card
// The tool.href is the path to the tool's page. For example, the Conversation tool's page is located at /conversation.
            key={tool.href}
            className="p-4 border-black flex items-center
            justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4 ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
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
