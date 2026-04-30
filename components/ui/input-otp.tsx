"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------------- INPUT OTP ROOT ---------------- */

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

/* ---------------- GROUP ---------------- */

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

/* ---------------- SLOT ---------------- */

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);

  const slot = inputOTPContext?.slots?.[index];

  const char = slot?.char;
  const hasFakeCaret = slot?.hasFakeCaret;
  const isActive = slot?.isActive;

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center text-sm outline-none transition",

        // base style
        "bg-white border border-border",

        // layout (OTP blocks collés)
        "border-r first:border-l",

        // focus / active state
        "data-[active=true]:border-primary data-[active=true]:ring-1 data-[active=true]:ring-primary/30 data-[active=true]:z-10",

        // error state
        "aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/30",

        className,
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px" />
        </div>
      )}
    </div>
  );
}

/* ---------------- SEPARATOR ---------------- */

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className="px-1 text-muted-foreground"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

/* ---------------- EXPORT ---------------- */

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
