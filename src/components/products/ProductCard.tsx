"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";
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
    <motion.article
      variants={fadeUp}
      layout
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-premium"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-section-gray">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-emerald">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/65">
          {product.description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-ink/55">
          <Factory className="h-3.5 w-3.5 text-gold" />
          <span className="line-clamp-1">{product.industries.join(", ")}</span>
        </div>

        <button
          onClick={() => onLearnMore(product)}
          className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald/15 px-5 py-2.5 text-sm font-semibold text-emerald transition-all duration-300 hover:border-emerald hover:bg-emerald hover:text-white"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}



