import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const pub = join(root, "public");
const products = JSON.parse(
  readFileSync(join(root, "data", "products.json"), "utf8")
);

const EMERALD = "#014D40";
const EMERALD_D = "#012620";
const EMERALD_L = "#02604f";
const GOLD = "#C5A06A";
const GOLD_L = "#E4D1AE";
const GRAY = "#F7F7F7";

function write(rel, content) {
  const full = join(pub, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + "\n");
}

/* Emblems are drawn within a ~300x280 box centred around (300,250). */
const emblems = {
  "Cleaning Machines": `
    <g transform="translate(300 250)">
      <rect x="-26" y="-110" width="14" height="120" rx="7" fill="${EMERALD}"/>
      <rect x="-70" y="-118" width="70" height="16" rx="8" fill="${EMERALD_D}"/>
      <ellipse cx="0" cy="40" rx="96" ry="34" fill="${EMERALD}"/>
      <ellipse cx="0" cy="32" rx="96" ry="34" fill="${EMERALD_L}"/>
      <ellipse cx="0" cy="30" rx="60" ry="20" fill="${GOLD}"/>
      <circle cx="0" cy="30" r="10" fill="${EMERALD_D}"/>
    </g>`,
  "Cleaning Tools & Accessories": `
    <g transform="translate(300 250)">
      <rect x="-7" y="-120" width="14" height="150" rx="7" fill="${EMERALD}"/>
      <path d="M-60 30h120l18 90H-78z" fill="${GOLD}"/>
      <g stroke="${EMERALD}" stroke-width="8" stroke-linecap="round">
        <line x1="-50" y1="40" x2="-66" y2="118"/><line x1="-20" y1="44" x2="-26" y2="120"/>
        <line x1="10" y1="44" x2="12" y2="120"/><line x1="40" y1="40" x2="56" y2="118"/>
      </g>
    </g>`,
  "Housekeeping Trolleys": `
    <g transform="translate(300 250)">
      <rect x="-90" y="-90" width="14" height="190" rx="6" fill="${EMERALD}"/>
      <rect x="76" y="-90" width="14" height="190" rx="6" fill="${EMERALD}"/>
      <rect x="-90" y="-94" width="180" height="16" rx="8" fill="${EMERALD_D}"/>
      <rect x="-78" y="-40" width="156" height="12" fill="${EMERALD}" opacity="0.5"/>
      <rect x="-78" y="30" width="156" height="12" fill="${EMERALD}" opacity="0.5"/>
      <path d="M-70 -76h140l-12 46H-58z" fill="${GOLD}"/>
      <circle cx="-66" cy="110" r="18" fill="${EMERALD_D}"/><circle cx="-66" cy="110" r="6" fill="${GOLD}"/>
      <circle cx="66" cy="110" r="18" fill="${EMERALD_D}"/><circle cx="66" cy="110" r="6" fill="${GOLD}"/>
    </g>`,
  "Cleaning Chemicals": `
    <g transform="translate(300 250)">
      <rect x="2" y="-120" width="54" height="40" rx="6" fill="${EMERALD_D}"/>
      <path d="M-2 -86l-46 -18 8 -22 46 16z" fill="${EMERALD}"/>
      <rect x="-18" y="-80" width="92" height="34" rx="8" fill="${EMERALD}"/>
      <path d="M-30 -46h116c12 0 22 10 22 22v124c0 16-12 28-28 28H-24c-16 0-28-12-28-28V-24c0-12 10-22 22-22z" fill="${EMERALD}"/>
      <rect x="-30" y="20" width="138" height="64" rx="6" fill="${GRAY}"/>
      <rect x="-14" y="36" width="80" height="12" rx="6" fill="${GOLD}"/>
      <rect x="-14" y="58" width="58" height="9" rx="4" fill="${EMERALD}" opacity="0.5"/>
    </g>`,
  "Tissue & Dispenser Solutions": `
    <g transform="translate(300 250)">
      <ellipse cx="0" cy="-50" rx="100" ry="34" fill="${EMERALD}"/>
      <rect x="-100" y="-50" width="200" height="120" fill="${EMERALD}"/>
      <ellipse cx="0" cy="70" rx="100" ry="34" fill="${EMERALD_L}"/>
      <ellipse cx="0" cy="-50" rx="60" ry="20" fill="${GOLD}"/>
      <ellipse cx="0" cy="-50" rx="26" ry="9" fill="${EMERALD_D}"/>
      <path d="M70 30c30 0 46 16 46 52h-46z" fill="${GRAY}"/>
    </g>`,
  "Washroom Hygiene": `
    <g transform="translate(300 250)">
      <path d="M0 -120c46 56 80 96 80 138a80 80 0 0 1-160 0c0-42 34-82 80-138z" fill="${EMERALD}"/>
      <path d="M0 -120c46 56 80 96 80 138a80 80 0 0 1-160 0c0-42 34-82 80-138z" fill="url(#wsh)" opacity="0.0"/>
      <path d="M-34 30a34 34 0 0 0 0 0c0 22 16 36 34 44" stroke="${GOLD_L}" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.7"/>
      <circle cx="34" cy="-30" r="10" fill="${GOLD}"/>
    </g>`,
  "Waste Management": `
    <g transform="translate(300 250)">
      <rect x="-66" y="-92" width="132" height="22" rx="8" fill="${EMERALD_D}"/>
      <rect x="-18" y="-108" width="36" height="18" rx="6" fill="${EMERALD_D}"/>
      <path d="M-56 -64h112l-14 158c-1 12-11 20-22 20H-20c-12 0-21-9-22-20z" fill="${EMERALD}"/>
      <g stroke="${GOLD}" stroke-width="8" stroke-linecap="round">
        <line x1="-22" y1="-30" x2="-18" y2="78"/><line x1="0" y1="-30" x2="0" y2="78"/><line x1="22" y1="-30" x2="18" y2="78"/>
      </g>
    </g>`,
  "Air Care Solutions": `
    <g transform="translate(300 250)">
      <rect x="-50" y="-110" width="100" height="200" rx="22" fill="${EMERALD}"/>
      <rect x="-50" y="-110" width="100" height="70" rx="22" fill="${EMERALD_L}"/>
      <circle cx="0" cy="-74" r="14" fill="${GOLD}"/>
      <g stroke="${GOLD}" stroke-width="9" stroke-linecap="round" fill="none">
        <path d="M64 -40c22 0 22 26 0 26"/><path d="M70 6c26 0 26 30 0 30"/><path d="M64 56c22 0 22 26 0 26"/>
      </g>
      <rect x="-30" y="10" width="60" height="40" rx="6" fill="${GRAY}"/>
    </g>`,
  "Safety & PPE": `
    <g transform="translate(300 250)">
      <path d="M0 -118c40 22 78 30 78 30v92c0 70-48 108-78 128-30-20-78-58-78-128v-92s38-8 78-30z" fill="${EMERALD}"/>
      <path d="M-34 6l26 28 52 -58" stroke="${GOLD}" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>`,
  "Hotel Amenities": `
    <g transform="translate(300 250)">
      <rect x="-86" y="20" width="100" height="56" rx="14" fill="${GOLD}"/>
      <rect x="-72" y="34" width="60" height="10" rx="5" fill="#ffffff" opacity="0.7"/>
      <rect x="34" y="-104" width="46" height="30" rx="6" fill="${EMERALD_D}"/>
      <path d="M30 -74h54c10 0 18 8 18 18v118c0 12-9 22-22 22H34c-12 0-22-10-22-22V-56c0-10 8-18 18-18z" fill="${EMERALD}"/>
      <rect x="20" y="-14" width="74" height="44" rx="6" fill="${GRAY}"/>
      <rect x="34" y="0" width="46" height="10" rx="5" fill="${GOLD}"/>
    </g>`,
};

function card(name, category) {
  const emblem = emblems[category] || emblems["Cleaning Chemicals"];
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" fill="none">
  <defs>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GOLD_L}"/><stop offset="1" stop-color="${GOLD}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="${GRAY}"/>
  <circle cx="300" cy="262" r="206" fill="#ffffff"/>
  <circle cx="300" cy="262" r="206" stroke="url(#ring)" stroke-width="3"/>
  <circle cx="300" cy="262" r="178" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4 7" opacity="0.5"/>
  ${emblem}
  <rect x="150" y="500" width="300" height="2" fill="${GOLD}" opacity="0.4"/>
  <text x="300" y="548" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="${EMERALD}" text-anchor="middle">${name}</text>
  <text x="300" y="578" font-family="Arial, sans-serif" font-size="17" font-weight="600" fill="${GOLD}" text-anchor="middle" letter-spacing="1.5">${category.toUpperCase()}</text>
</svg>`;
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

let count = 0;
for (const p of products) {
  const file = p.image.replace(/^\//, "");
  write(file, card(truncate(p.name, 26), p.category));
  count++;
}

console.log(`Generated ${count} product images.`);
