"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-emerald-radial px-6 py-14 text-center shadow-premium-lg sm:px-12 md:py-20"
        >
          {/* Decorative shapes */}
          <span className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/10" />
          <span className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-gold/10" />

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance md:text-4xl lg:text-[2.75rem]"
          >
            Looking For A Reliable Housekeeping Products Supplier?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-2xl text-base text-white/80 text-balance md:text-lg"
          >
            We help businesses maintain cleaner, safer and more professional
            environments.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/#contact" variant="gold" size="lg">
              Request A Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="ghostLight" size="lg">
              <Mail className="h-5 w-5" />
              Email Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
