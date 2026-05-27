import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "whale" | "vip" | "success" | "warning" | "danger";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all",
          {
            "bg-gradient-to-r from-ai-purple/20 to-neon-pink/20 border border-ai-purple/30 text-ai-purple":
              variant === "default",
            "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400":
              variant === "whale",
            "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400":
              variant === "vip",
            "bg-success/20 border border-success/30 text-success": variant === "success",
            "bg-warning/20 border border-warning/30 text-warning": variant === "warning",
            "bg-danger/20 border border-danger/30 text-danger": variant === "danger",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
