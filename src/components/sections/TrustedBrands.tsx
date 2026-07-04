"use client";

import Image from "next/image";
import { clients } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";

export function TrustedBrands() {
  return (
    <section className="border-y border-black/5 bg-white py-12">
      <div className="container-px">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink/40">
Trusted By
        </p>
      </div>
      <Marquee duration={35}>
        {clients.map((c) => (
          <div
            key={c.name}
            className="mx-6 flex h-12 w-40 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={c.logo}
              alt={c.name}
              width={160}
              height={62}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
