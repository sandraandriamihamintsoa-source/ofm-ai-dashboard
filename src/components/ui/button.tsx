import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-purple/50 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-ai-purple to-neon-pink text-white shadow-glow-purple hover:shadow-glow-pink hover:scale-105":
              variant === "default",
            "hover:bg-white/10": variant === "ghost",
            "border border-white/10 hover:bg-white/5": variant === "outline",
            "h-10 px-4 py-2": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-12 px-6 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
