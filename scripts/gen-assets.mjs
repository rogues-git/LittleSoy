import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const pub = join(root, "public");

const EMERALD = "#014D40";
const EMERALD_DARK = "#012620";
const GOLD = "#C5A06A";
const GOLD_LIGHT = "#E4D1AE";
const GRAY = "#F7F7F7";

function write(rel, content) {
  const full = join(pub, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + "\n");
}

/* ---------- Logo ---------- */
function logo(mono = false) {
  const leaf = mono ? "#FFFFFF" : GOLD;
  const ring = mono ? "#FFFFFF" : EMERALD;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none">
  <rect x="2" y="2" width="52" height="52" rx="14" fill="${mono ? "none" : EMERALD}" stroke="${ring}" stroke-width="${mono ? 2 : 0}"/>
  <path d="M28 13c7 4 11 9 11 17a11 11 0 0 1-22 0c0-8 4-13 11-17z" fill="${leaf}"/>
  <path d="M28 19v18M22 27c3 1 4 3 6 4M34 27c-3 1-4 3-6 4" stroke="${mono ? EMERALD : EMERALD}" stroke-width="1.6" stroke-linecap="round" opacity="${mono ? 0.85 : 1}"/>
</svg>`;
}
write("logo.svg", logo(false));
write("logo-mono.svg", logo(true));

/* ---------- Favicon ---------- */
write(
  "favicon.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56">
  <rect width="56" height="56" rx="14" fill="${EMERALD}"/>
  <path d="M28 13c7 4 11 9 11 17a11 11 0 0 1-22 0c0-8 4-13 11-17z" fill="${GOLD}"/>
</svg>`
);

/* ---------- Hero ---------- */
write(
  "hero.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#02604f"/>
      <stop offset="0.55" stop-color="${EMERALD}"/>
      <stop offset="1" stop-color="${EMERALD_DARK}"/>
    </linearGradient>
    <radialGradient id="r" cx="0.2" cy="0.2" r="0.9">
      <stop offset="0" stop-color="${GOLD}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#g)"/>
  <rect width="1600" height="900" fill="url(#r)"/>
  <g opacity="0.10" stroke="#FFFFFF" stroke-width="1.5">
    ${Array.from({ length: 18 }, (_, i) => `<line x1="${i * 95}" y1="0" x2="${i * 95 + 300}" y2="900"/>`).join("")}
  </g>
  <g opacity="0.9">
    <circle cx="1240" cy="640" r="150" fill="#ffffff" opacity="0.04"/>
    <rect x="1140" y="430" width="120" height="320" rx="22" fill="${GOLD}" opacity="0.18"/>
    <rect x="1290" y="500" width="90" height="250" rx="18" fill="#ffffff" opacity="0.10"/>
  </g>
</svg>`
);

/* ---------- About ---------- */
write(
  "about.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 640" width="800" height="640" fill="none">
  <defs>
    <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${EMERALD}"/>
      <stop offset="1" stop-color="${EMERALD_DARK}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="640" rx="24" fill="url(#ag)"/>
  <circle cx="640" cy="120" r="180" fill="${GOLD}" opacity="0.16"/>
  <g transform="translate(150 170)">
    <path d="M250 40c70 36 110 88 110 168a110 110 0 0 1-220 0c0-80 40-132 110-168z" fill="${GOLD}" opacity="0.9"/>
    <path d="M250 100v200M180 200c40 14 50 40 70 50M320 200c-40 14-50 40-70 50" stroke="${EMERALD_DARK}" stroke-width="6" stroke-linecap="round"/>
  </g>
  <rect x="60" y="520" width="680" height="70" rx="16" fill="#ffffff" opacity="0.08"/>
</svg>`
);

/* ---------- Product placeholders ---------- */
const productList = [
  ["air-freshener", "Air Freshener"],
  ["acid-cleaner", "Acid Cleaner"],
  ["broom", "Broom"],
  ["cleaning-cloth", "Cleaning Cloth"],
  ["carpet-cleaner", "Carpet Cleaner"],
  ["detergent", "Detergent"],
  ["floor-cleaner", "Floor Cleaner"],
  ["mop", "Mop"],
  ["microfiber-mop", "Microfiber Mop"],
  ["tissue-roll", "Tissue Roll"],
  ["toilet-cleaner", "Toilet Cleaner"],
  ["waste-bin", "Waste Bin"],
  ["wiper", "Wiper"],
];

function bottle(label) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" fill="none">
  <rect width="600" height="600" fill="${GRAY}"/>
  <circle cx="300" cy="270" r="210" fill="#ffffff"/>
  <circle cx="300" cy="270" r="210" stroke="${GOLD_LIGHT}" stroke-width="2"/>
  <g transform="translate(238 130)">
    <rect x="34" y="0" width="56" height="34" rx="6" fill="${EMERALD}"/>
    <rect x="20" y="34" width="84" height="30" rx="8" fill="${EMERALD_DARK}"/>
    <path d="M14 64h96c10 0 18 8 18 18v158c0 14-11 25-25 25H21c-14 0-25-11-25-25V82c0-10 8-18 18-18z" fill="${EMERALD}"/>
    <rect x="14" y="120" width="96" height="78" rx="8" fill="#ffffff" opacity="0.92"/>
    <rect x="28" y="138" width="68" height="9" rx="4" fill="${GOLD}"/>
    <rect x="28" y="156" width="50" height="7" rx="3" fill="${EMERALD}" opacity="0.5"/>
    <rect x="28" y="170" width="58" height="7" rx="3" fill="${EMERALD}" opacity="0.5"/>
  </g>
  <text x="300" y="540" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="${EMERALD}" text-anchor="middle">${label}</text>
</svg>`;
}
for (const [slug, label] of productList) {
  write(`products/${slug}.svg`, bottle(label));
}

/* ---------- Industry images ---------- */
const industryList = [
  ["hospitals", "Hospitals"],
  ["corporate-offices", "Corporate Offices"],
  ["schools-colleges", "Schools & Colleges"],
  ["banquet-halls", "Banquet Halls"],
  ["hotels", "Hotels"],
  ["industrial-facilities", "Industrial Facilities"],
];
function industry(label, idx) {
  const hue = [EMERALD, "#02604f", "#024a3e", EMERALD_DARK, "#013b31", "#02564a"][idx % 6];
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" fill="none">
  <defs><linearGradient id="i${idx}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${hue}"/><stop offset="1" stop-color="${EMERALD_DARK}"/>
  </linearGradient></defs>
  <rect width="800" height="600" fill="url(#i${idx})"/>
  <circle cx="660" cy="120" r="170" fill="${GOLD}" opacity="0.14"/>
  <g opacity="0.12" fill="#ffffff">
    ${Array.from({ length: 6 }, (_, i) => `<rect x="${80 + i * 110}" y="${340 - (i % 3) * 60}" width="70" height="${220 + (i % 3) * 60}" rx="8"/>`).join("")}
  </g>
  <rect x="60" y="470" width="${label.length * 17 + 60}" height="70" rx="14" fill="#ffffff" opacity="0.10"/>
  <text x="92" y="515" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#ffffff">${label}</text>
</svg>`;
}
industryList.forEach(([slug, label], i) => write(`industries/${slug}.svg`, industry(label, i)));

/* ---------- Client logos ---------- */
const clientNames = [
  "MediCare", "Nexus", "Xavier", "Grand Banyan", "Celebration",
  "Vortex", "Apex", "Greenfield", "Summit", "Pinnacle",
];
function clientLogo(name, idx) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 110" width="280" height="110" fill="none">
  <rect width="280" height="110" rx="14" fill="#ffffff"/>
  <circle cx="55" cy="55" r="28" fill="${EMERALD}"/>
  <text x="55" y="64" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">${initials}</text>
  <text x="98" y="50" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="${EMERALD}">${name}</text>
  <rect x="98" y="62" width="${Math.min(name.length * 9, 150)}" height="6" rx="3" fill="${GOLD}"/>
</svg>`;
}
clientNames.forEach((n, i) => write(`clients/client-${i + 1}.svg`, clientLogo(n, i)));

/* ---------- Testimonial review screenshots ---------- */
const reviews = [
  ["Dr. Anjali Mehta", "Sunrise Multispeciality Hospital", "Hospital-grade disinfectants and microfiber systems that raised our infection-control standards.", 460],
  ["Rahul Verma", "Nexus Corporate Park", "Consistent quality, competitive pricing and great bulk support for our offices.", 360],
  ["Sister Maria Joseph", "St. Xavier's College", "Safe, effective and affordable supplies for our entire campus. Always on schedule.", 320],
  ["Imran Khan", "The Grand Banyan Hotel", "Premium products that match our hospitality standards. Audit scores improved.", 360],
  ["Priya Nair", "Celebration Banquets", "Spotless, guest-ready venues after every event. Fast delivery saved us more than once.", 460],
  ["Suresh Iyer", "Vortex Industries Ltd.", "Heavy-duty solutions that hold up to demanding industrial conditions. Dependable partner.", 360],
];
function review([name, company, text, h], idx) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + w).length > 34) { lines.push(line.trim()); line = ""; }
    line += w + " ";
  }
  if (line.trim()) lines.push(line.trim());
  const stars = "★★★★★";
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 ${h}" width="520" height="${h}" fill="none">
  <rect width="520" height="${h}" rx="20" fill="#ffffff"/>
  <rect width="520" height="${h}" rx="20" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.5"/>
  <rect x="0" y="0" width="520" height="96" rx="20" fill="${EMERALD}"/>
  <rect x="0" y="60" width="520" height="36" fill="${EMERALD}"/>
  <circle cx="56" cy="48" r="28" fill="${GOLD}"/>
  <text x="56" y="56" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${EMERALD_DARK}" text-anchor="middle">${initials}</text>
  <text x="100" y="42" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="#ffffff">${name}</text>
  <text x="100" y="68" font-family="Arial, sans-serif" font-size="15" fill="${GOLD_LIGHT}">${company}</text>
  <text x="40" y="150" font-family="Arial, sans-serif" font-size="26" fill="${GOLD}">${stars}</text>
  ${lines.map((l, i) => `<text x="40" y="${200 + i * 34}" font-family="Arial, sans-serif" font-size="21" fill="#333333">${l}</text>`).join("")}
  <text x="40" y="${h - 36}" font-family="Arial, sans-serif" font-size="14" fill="#999999">Verified client review</text>
</svg>`;
}
reviews.forEach((r, i) => write(`testimonials/review-${i + 1}.svg`, review(r, i)));

/* ---------- OG image ---------- */
write(
  "og.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
  <defs><linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${EMERALD}"/><stop offset="1" stop-color="${EMERALD_DARK}"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#og)"/>
  <circle cx="1050" cy="120" r="220" fill="${GOLD}" opacity="0.16"/>
  <path d="M150 120c40 22 64 50 64 96a64 64 0 0 1-128 0c0-46 24-74 64-96z" fill="${GOLD}"/>
  <text x="80" y="360" font-family="Arial, sans-serif" font-size="58" font-weight="800" fill="#ffffff">Little Soe Revolution Product</text>
  <text x="80" y="430" font-family="Arial, sans-serif" font-size="32" fill="${GOLD_LIGHT}">Professional Housekeeping Solutions for Every Space</text>
</svg>`
);

console.log("Assets generated.");
