"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Wallet,
  Network,
  Boxes,
  Truck,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const reasons = [
  {
    Icon: BadgeCheck,
    title: "Quality Assured Products",
    desc: "Every product meets strict quality and safety standards for institutional use.",
  },
  {
    Icon: Wallet,
    title: "Competitive Pricing",
    desc: "Transparent, value-driven pricing that scales with your bulk requirements.",
  },
  {
    Icon: Network,
    title: "Reliable Supply Chain",
    desc: "A robust, well-managed supply network you can depend on, every time.",
  },
  {
    Icon: Boxes,
    title: "Bulk Order Support",
    desc: "Flexible bulk ordering tailored to large facilities and multi-site operations.",
  },
  {
    Icon: Truck,
    title: "Fast Delivery",
    desc: "Prompt, dependable delivery that keeps your operations running smoothly.",
  },
  {
    Icon: Headphones,
    title: "Dedicated Customer Support",
    desc: "A responsive B2B support team committed to your long-term success.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-section-gray">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for businesses that demand reliability"
          description="We combine premium products, competitive pricing and dependable service to keep your spaces spotless."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium"
            >
              <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald text-gold transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-emerald-900">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-emerald">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/65">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
