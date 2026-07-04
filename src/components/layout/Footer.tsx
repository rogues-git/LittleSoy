import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Mail,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

const social = [
  { Icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { Icon: MessageCircle, href: siteConfig.social.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-emerald-radial text-white">
      <div className="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand / Company */}
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Premium housekeeping & cleaning products for hospitals, offices,
            schools, hotels and industrial facilities.
          </p>
          <div className="flex gap-3">
            {social.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-emerald-900 hover:shadow-gold"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-200">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><FooterLink href="/#about">About</FooterLink></li>
            <li><FooterLink href="/products">Products</FooterLink></li>
            <li><FooterLink href="/#industries">Industries</FooterLink></li>
            <li><FooterLink href="/#contact">Contact</FooterLink></li>
          </ul>
          <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-200">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><FooterLink href="/#home">Home</FooterLink></li>
            <li><FooterLink href="/#contact">Get Quote</FooterLink></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-200">
            Contact Information
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Business details */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-200">
            Business Details
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 shrink-0 text-gold" />
              <span>
                GST Registered
                <span className="block text-xs text-white/50">
                  {siteConfig.gst}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Building2 className="h-5 w-5 shrink-0 text-gold" />
              <span>{siteConfig.business}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Designed for cleaner, safer, more professional spaces.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-gold"
    >
      {children}
    </Link>
  );
}
