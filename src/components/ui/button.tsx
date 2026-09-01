import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-emerald text-ivory hover:bg-emerald-deep",
        secondary:
          "border border-emerald/20 bg-transparent text-emerald hover:border-emerald/50 hover:bg-emerald/5",
        gold: "bg-gold text-emerald-deep hover:bg-gold-soft",
        inverse: "bg-ivory text-emerald hover:bg-paper",
        ghost: "text-emerald hover:bg-emerald/6",
        link: "h-auto rounded-none px-0 text-emerald underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 rounded-[10px] px-4 text-sm",
        md: "h-12 rounded-[12px] px-6 text-sm",
        lg: "h-14 rounded-[14px] px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
