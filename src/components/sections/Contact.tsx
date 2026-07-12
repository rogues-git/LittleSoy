"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, BadgeCheck, Building2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

const info = [
  {
    Icon: MapPin,
    label: "Address",
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
  },
  {
    Icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { Icon: Building2, label: "Business Type", value: siteConfig.business },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-section-gray">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's discuss your housekeeping requirements"
          description="Reach out for bulk pricing, product details or a tailored supply plan for your facility."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left — inquiry form (shown first) */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-black/5 bg-white p-7 shadow-card md:p-8"
          >
            <h3 className="font-display text-xl font-bold text-emerald">
              Inquiry Form
            </h3>
            <p className="mt-1 text-sm text-ink/55">
              Fill in the form and our team will respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>

          {/* Right — company info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-card">
              <h3 className="font-display text-xl font-bold text-emerald">
                Company Information
              </h3>
              <ul className="mt-6 space-y-5">
                {info.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald/5 text-emerald">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium text-ink transition-colors hover:text-gold-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-black/5 pt-4 text-sm text-ink/55">
                {siteConfig.proprietor}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
