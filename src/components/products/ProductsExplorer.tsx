"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, PackageOpen, X } from "lucide-react";
import type { Product } from "@/types";
import {
  products,
  getProductCategories,
  getAllIndustryNames,
} from "@/lib/data";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/motion";

const categories = getProductCategories();
const industryNames = getAllIndustryNames();

export function ProductsExplorer() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [active, setActive] = useState<Product | null>(null);

  // Deep-link from mega menu: /products?product=slug or ?category=Name
  useEffect(() => {
    const slug = params.get("product");
    if (slug) {
      const match = products.find((p) => p.slug === slug);
      if (match) {
        setActive(match);
        setQuery("");
      }
    }
    const cat = params.get("category");
    if (cat && categories.includes(cat)) {
      setCategory(cat);
    }
  }, [params]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCategory = category === "All" || p.category === category;
      const matchesIndustry =
        industry === "All" || p.industries.includes(industry);
      return matchesQuery && matchesCategory && matchesIndustry;
    });
  }, [query, category, industry]);

  const hasFilters = query || category !== "All" || industry !== "All";

  return (
    <>
      <div className="container-px">
        {/* Controls */}
        <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-card md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-full border border-black/10 bg-section-gray py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Select
                label="Category"
                value={category}
                onChange={setCategory}
                options={["All", ...categories]}
              />
              <Select
                label="Industry"
                value={industry}
                onChange={setIndustry}
                options={["All", ...industryNames]}
              />
              {hasFilters && (
                <button
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                    setIndustry("All");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink/60 transition hover:text-emerald"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-6 text-sm text-ink/55">
          Showing <span className="font-semibold text-emerald">{filtered.length}</span>{" "}
          of {products.length} products
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onLearnMore={setActive} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-black/10 py-20 text-center"
            >
              <PackageOpen className="h-10 w-10 text-gold" />
              <p className="font-semibold text-emerald">No products found</p>
              <p className="max-w-sm text-sm text-ink/55">
                Try adjusting your search or filters to find what you need.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald/50" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`Filter by ${label}`}
        className={cn(
          "appearance-none rounded-full border border-black/10 bg-white py-3 pl-10 pr-9 text-sm font-medium text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
        )}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "All" ? `All ${label === "Category" ? "Categories" : "Industries"}` : opt}
          </option>
        ))}
      </select>
    </div>
  );
}
