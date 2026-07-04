import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Little Soe Revolution Product — home"
    >
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo1.png"
          alt="Little Soe Revolution Product logo"
          width={104}
          height={104}
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.05rem] font-extrabold tracking-tight",
            light ? "text-white" : "text-emerald",
            "font-royal-hefana"
          )}
        >
          Little Soe
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-gold-200" : "text-gold-600"
          )}
        >
          Revolution Product
        </span>
      </span>
    </Link>
  );
}
