import productsData from "../../data/products.json";
import testimonialsData from "../../data/testimonials.json";
import industriesData from "../../data/industries.json";
import clientsData from "../../data/clients.json";
import type {
  Product,
  Testimonial,
  Industry,
  Client,
  ProductCategoryGroup,
} from "@/types";

const ALL_PRODUCTS: Product[] = productsData as Product[];

/** Combined category name for the merged Washroom + Waste products. */
const COMBINED_WASHROOM_WASTE = "Washroom & Waste Management";

export const products: Product[] = ALL_PRODUCTS
  // Remove Air Care Solutions completely
  .filter((p) => p.category !== "Air Care Solutions")
  // Combine Washroom Hygiene and Waste Management into one category
  .map((p) =>
    p.category === "Washroom Hygiene" || p.category === "Waste Management"
      ? { ...p, category: COMBINED_WASHROOM_WASTE }
      : p
  );
export const testimonials: Testimonial[] = testimonialsData as Testimonial[];
export const industries: Industry[] = industriesData as Industry[];
export const clients: Client[] = clientsData as Client[];

/** Canonical display order for the product categories. */
export const CATEGORY_ORDER = [
  "Cleaning Machines",
  "Cleaning Tools & Accessories",
  "Housekeeping Trolleys",
  "Cleaning Chemicals",
  "Tissue & Dispenser Solutions",
  COMBINED_WASHROOM_WASTE,
  "Safety & PPE",
  "Hotel Amenities",
] as const;

function categoryRank(category: string): number {
  const i = CATEGORY_ORDER.indexOf(category as (typeof CATEGORY_ORDER)[number]);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category))).sort(
    (a, b) => categoryRank(a) - categoryRank(b)
  );
}

export function getAllIndustryNames(): string[] {
  return Array.from(new Set(products.flatMap((p) => p.industries))).sort();
}

/**
 * Flat list of products sorted alphabetically by name.
 */
export function getSortedProductLinks(): { name: string; slug: string }[] {
  return [...products]
    .map((p) => ({ name: p.name, slug: p.slug }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Groups products under their category (in canonical order) for the
 * mega-menu and mobile navigation.
 */
export function getProductsByCategory(): ProductCategoryGroup[] {
  return getProductCategories().map((category) => ({
    category,
    products: products
      .filter((p) => p.category === category)
      .map((p) => ({ name: p.name, slug: p.slug }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));
}
