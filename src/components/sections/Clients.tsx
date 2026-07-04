"use client";

import Image from "next/image";
import { clients } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-4 flex h-20 w-44 items-center justify-center rounded-xl border border-black/5 bg-white px-6 shadow-sm grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-card">
      <Image
        src={logo}
        alt={name}
        width={176}
        height={70}
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}

export function Clients() {
  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Clients"
          title="Our Valued Clients"
          description="Proudly partnering with leading institutions across healthcare, hospitality, education and industry."
        />
      </div>

      <div className="mt-12 space-y-5">
        <Marquee duration={38}>
          {firstRow.map((c) => (
            <LogoCard key={c.name} {...c} />
          ))}
        </Marquee>
        <Marquee duration={38} reverse>
          {secondRow.map((c) => (
            <LogoCard key={c.name} {...c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
