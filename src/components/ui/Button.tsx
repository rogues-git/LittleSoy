import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald text-white shadow-premium hover:bg-emerald-700 hover:shadow-premium-lg hover:-translate-y-0.5",
        gold: "bg-gold-gradient text-emerald-900 shadow-gold hover:-translate-y-0.5 hover:shadow-premium-lg",
        outline:
          "border-2 border-emerald/20 bg-white text-emerald hover:border-emerald hover:bg-emerald hover:text-white",
        ghostLight:
          "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-emerald",
        link: "text-emerald underline-offset-4 hover:text-gold-600 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      if (external || href.startsWith("http") || href.startsWith("#")) {
        return (
          <a
            href={href}
            className={classes}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
