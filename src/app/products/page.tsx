import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full range of premium housekeeping and cleaning products from Little Soe Revolution Product — filter by category and industry.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-radial pt-32 pb-16 md:pt-40 md:pb-20">
        <span className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-gold/10" />
        <div className="container-px relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            Our Catalogue
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white text-balance md:text-5xl">
            Premium Housekeeping Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75 text-balance">
            Quality-assured cleaning and maintenance supplies for hospitals,
            offices, schools, hotels and industrial facilities.
          </p>
        </div>
      </section>

      <section className="section-pad bg-section-gray">
        <Suspense fallback={<ExplorerFallback />}>
          <ProductsExplorer />
        </Suspense>
      </section>

      <CTA />
    </>
  );
}

function ExplorerFallback() {
  return (
    <div className="container-px">
      <div className="h-24 animate-pulse rounded-3xl bg-white/60" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl bg-white/60"
          />
        ))}
      </div>
    </div>
  );
}
