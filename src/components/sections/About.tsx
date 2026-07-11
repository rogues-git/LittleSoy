"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from "@/lib/motion";

const points = [
  "A dependable partner for your everyday operations",
  "Long-term relationships built on consistency",
  "Dedicated B2B support that grows with you",
];

export function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-premium">
            <Image
              src="/second.jpg"
              alt="Little Soe Revolution Product housekeeping solutions"
              width={800}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-2xl bg-gold/15" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow">About Us</span>
          <h2 className="mt-5 heading-lg">
            Every great transformation begins with a simple idea
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
            What if everyday business solutions could be delivered with greater
            reliability, stronger relationships and a commitment to excellence
            that goes beyond a transaction? That idea became{" "}
            <span className="font-semibold text-emerald">
              <span className="font-royal-hefana">Little Soe</span> Revolution
              Product
            </span>
            .
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Built on the belief that trust is earned through consistency and
            service, our journey began with a vision to create meaningful value
            for businesses seeking dependable partners for their everyday
            operational needs. To us, business isn&apos;t just about supplying
            products — it&apos;s about building relationships and becoming a
            trusted part of our customers&apos; growth.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 0.1} variants={fadeUp}>
                <span className="flex items-start gap-3 text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="font-medium">{point}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <p className="mt-7 rounded-2xl border-l-4 border-gold bg-section-gray px-5 py-4 text-base font-medium italic leading-relaxed text-emerald">
            Welcome to the{" "}
            <span className="font-royal-hefana not-italic">Little Soe</span> Family
            — where every partnership is valued,
            every relationship matters, and every step forward is a journey we
            take together.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/products" variant="primary">
              Explore Products
            </Button>
            <Button href="/#contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
