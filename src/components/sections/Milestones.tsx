"use client";

import { motion } from "framer-motion";
import { Users, Package, Layers, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

const stats = [
  { Icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { Icon: Package, value: 1000, suffix: "+", label: "Products Supplied" },
  { Icon: Layers, value: 7, suffix: "+", label: "Industries Served" },
  { Icon: Award, value: 10, suffix: "+", label: "Years Experience" },
];

export function Milestones() {
  return (
    <section className="relative overflow-hidden bg-emerald-radial py-16 md:py-20">
      <div className="container-px relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map(({ Icon, value, suffix, label }) => (
            <motion.div
              key={label}
              variants={scaleIn}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
            >
              <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-emerald-900">
                <Icon className="h-6 w-6" />
              </span>
              <p className="font-display text-4xl font-extrabold text-white md:text-5xl">
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
