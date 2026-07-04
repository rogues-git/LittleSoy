"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { getProductsByCategory } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const categories = getProductsByCategory();

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
    >
      <nav className="container-px max-h-[calc(100vh-5rem)] space-y-1 overflow-y-auto py-5">
        {navLinks.map((link) =>
          link.hasMega ? (
            <div key={link.label} className="border-b border-black/5 pb-2">
              <button
                onClick={() => setProductsOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-base font-semibold text-emerald"
              >
                {link.label}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    productsOpen && "rotate-180"
                  )}
                />
              </button>
              {productsOpen && (
                <ul className="grid grid-cols-1 gap-2 pb-3 pt-1">
                  {categories.map((group) => (
                    <li key={group.category}>
                      <Link
                        href={`/products?category=${encodeURIComponent(group.category)}`}
                        onClick={onClose}
                        className="flex items-center justify-between rounded-lg bg-section-gray/70 px-3 py-2.5 text-sm font-medium text-emerald transition-colors hover:bg-section-gray"
                      >
                        {group.category}
                        <span className="text-xs text-ink/45">
                          {group.products.length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="block border-b border-black/5 py-3 text-base font-medium text-ink/80 transition hover:text-emerald"
            >
              {link.label}
            </Link>
          )
        )}
        <div className="pt-4">
          <Button href="/#contact" variant="gold" size="md" className="w-full">
            Get Quote
          </Button>
        </div>
      </nav>
    </motion.div>
  );
}
