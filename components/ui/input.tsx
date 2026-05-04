import { cn } from "@/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 bg-transparent border border-border px-3 py-2 text-sm text-foreground outline-none transition",
        "placeholder:text-muted-foreground",
        "focus:border-primary focus:ring-1 focus:ring-primary/30",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/30",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
