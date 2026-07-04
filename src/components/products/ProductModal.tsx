"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import { Button } from "@/components/ui/Button";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-emerald-900/75 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-premium-lg md:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-emerald shadow-sm transition hover:bg-emerald hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-square bg-section-gray md:aspect-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col overflow-y-auto p-7">
              <span className="eyebrow w-fit">{product.category}</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-emerald">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {product.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  Suitable Industries
                </p>
                <ul className="mt-3 space-y-2">
                  {product.industries.map((ind) => (
                    <li
                      key={ind}
                      className="flex items-center gap-2 text-sm text-ink/75"
                    >
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <Button href="/#contact" variant="gold" className="w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
