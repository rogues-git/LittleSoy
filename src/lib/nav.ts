export interface NavLink {
  label: string;
  href: string;
  hasMega?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products", hasMega: true },
  { label: "Industries Served", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];
