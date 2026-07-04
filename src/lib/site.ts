export const siteConfig = {
  name: "Little Soe Revolution Product",
  shortName: "Little Soe",
  tagline: "Professional Housekeeping Solutions for Every Space",
  description:
    "Trusted supplier of premium housekeeping and cleaning products for hospitals, corporate offices, schools, hotels and commercial facilities.",
  url: "https://littlesoerevolution.com",
  email: "rogues.cbe@gmail.com",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "919876543210",
  address: {
    line1: "No. 12, Industrial Estate Road",
    line2: "Coimbatore, Tamil Nadu 641004",
    country: "India",
  },
  gst: "",
  business: "Proprietorship Firm",
  proprietor: "Proprietor: Little Soe Revolution Product",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31334.30!2d76.95!3d11.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzM2LjAiTiA3NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/919876543210",
  },
} as const;

export type SiteConfig = typeof siteConfig;
