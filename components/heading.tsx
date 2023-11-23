import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"


interface HeadingProps {
    title: string;
    description: string;
    icon: any;
    iconColor?: string;
    bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor
  }: HeadingProps) => {
    return (
  
    <div className="px-4 lg:px-8 flex
    items-center gap-x-3 mb-8">
        <div>
            <MessageSquare className={cn("w-14 h-14 text-[#ff6cab]  p-2 rounded-md",bgColor, iconColor )} />
        </div>
    
    <div>
      <h2 className="text-3xl font-bold">
          {title}
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg">
          {description}
      </p>
    </div>
    </div>
  
  )
}
