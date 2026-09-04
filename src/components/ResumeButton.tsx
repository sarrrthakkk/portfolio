import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { config } from "@/lib/config";
import { trackPortfolioInteraction } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  label?: string;
  showIcon?: boolean;
};

const ResumeButton = ({
  variant = "outline",
  size = "lg",
  className,
  label = "Download Resume",
  showIcon = true,
}: ResumeButtonProps) => {
  return (
    <Button variant={variant} size={size} className={cn(className)} asChild>
      <a
        href={config.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPortfolioInteraction.resumeDownload()}
      >
        {showIcon && <FileDown className="mr-2 h-4 w-4" />}
        {label}
      </a>
    </Button>
  );
};

export default ResumeButton;
