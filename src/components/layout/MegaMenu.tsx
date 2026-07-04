"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, PackageOpen } from "lucide-react";
import { getProductsByCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = getProductsByCategory();

export function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) =>
        c.category.toLowerCase().includes(q) ||
        c.products.some((p) => p.name.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-[min(860px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-premium-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px]">
        {/* Products grid */}
        <div className="p-6">
          <div className="relative mb-5">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories…"
              className="w-full rounded-full border border-black/10 bg-section-gray py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/30"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10 text-center text-sm text-ink/50">
              <PackageOpen className="h-7 w-7 text-gold" />
              No categories match “{query}”.
            </div>
          ) : (
            <div className="thin-scroll grid max-h-[400px] grid-cols-1 gap-3 overflow-y-auto pr-2 sm:grid-cols-2">
              {filtered.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(gi * 0.03, 0.3) }}
                >
                  <Link
                    href={`/products?category=${encodeURIComponent(group.category)}`}
                    onClick={onNavigate}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-section-gray/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white hover:shadow-card"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-emerald">
                        {group.category}
                      </span>
                      <span className="text-xs text-ink/50">
                        {group.products.length} products
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Promo panel */}
        <div className="relative hidden flex-col justify-between gap-6 bg-emerald-radial p-6 text-white md:flex">
          <div>
            <span className="eyebrow border-gold/40 bg-white/10 text-gold-200">
              Full Catalogue
            </span>
            <h4 className="mt-4 font-display text-xl font-bold leading-snug">
              Everything you need to keep every space spotless.
            </h4>
            <p className="mt-2 text-sm text-white/70">
              Bulk supply, fast delivery and dedicated B2B support across
              {" "}all industries.
            </p>
          </div>
          <Link
            href="/products"
            onClick={onNavigate}
            className={cn(
              "group inline-flex items-center justify-between gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:-translate-y-0.5 hover:shadow-gold"
            )}
          >
            Browse all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
