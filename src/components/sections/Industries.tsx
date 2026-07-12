"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries Served"
          title="Tailored cleaning solutions for every environment"
          description="From critical-care hospitals to demanding industrial floors, we supply the right products for every standard."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.article
              key={industry.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-premium"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-white">
                  {industry.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-ink/65">
                  {industry.description}
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors hover:text-gold-600"
                >
                  Enquire for this sector
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
