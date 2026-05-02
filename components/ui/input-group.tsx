"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/* ---------------- INPUT GROUP ROOT ---------------- */

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group relative flex w-full items-center border border-border bg-white shadow-none transition",

        // height
        "h-10 has-[>textarea]:h-auto",

        // focus
        "focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30",

        // error state
        "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-1 has-[[aria-invalid=true]]:ring-destructive/30",

        className,
      )}
      {...props}
    />
  );
}

/* ---------------- ADDON VARIANTS ---------------- */

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex items-center justify-center gap-2 text-sm font-medium select-none",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3",
        "inline-end": "order-last pr-3",
        "block-start": "w-full justify-start px-3 py-2",
        "block-end": "w-full justify-start px-3 py-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

/* ---------------- ADDON ---------------- */

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

/* ---------------- BUTTON VARIANTS ---------------- */

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex items-center gap-2",
  {
    variants: {
      size: {
        xs: "h-6 px-2",
        sm: "h-8 px-3",
        "icon-xs": "size-6 p-0",
        "icon-sm": "size-8 p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

/* ---------------- BUTTON ---------------- */

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      variant={variant}
      data-size={size}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

/* ---------------- TEXT ---------------- */

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm",
        className,
      )}
      {...props}
    />
  );
}

/* ---------------- INPUT ---------------- */

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
}

/* ---------------- TEXTAREA ---------------- */

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
}

/* ---------------- EXPORT ---------------- */

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
