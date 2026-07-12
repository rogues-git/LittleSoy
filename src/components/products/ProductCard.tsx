"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/types";
import { fadeUp } from "@/lib/motion";

export function ProductCard({
  product,
  onLearnMore,
}: {
  product: Product;
  onLearnMore: (product: Product) => void;
}) {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      layout
      onClick={() => onLearnMore(product)}
      aria-label={`View details for ${product.name}`}
      className="group relative block overflow-hidden rounded-2xl border border-black/5 bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-premium"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-section-gray">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald shadow-sm backdrop-blur">
          {product.category}
        </span>

        {/* Hover overlay with Learn More */}
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/0 opacity-0 transition-all duration-300 group-hover:bg-emerald-900/35 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-emerald-900 shadow-gold">
            <Plus className="h-4 w-4" />
            Learn More
          </span>
        </div>

        {/* Name on gradient */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/45 to-transparent p-4 pt-14">
          <span className="mb-2 block h-[3px] w-8 rounded-full bg-gold transition-all duration-300 group-hover:w-14" />
          <h3 className="font-display text-[1.05rem] font-bold leading-tight tracking-tight text-white line-clamp-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
            {product.name}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}
