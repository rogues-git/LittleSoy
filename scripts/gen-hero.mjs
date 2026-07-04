import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const pub = join(process.cwd(), "public");
const EMERALD = "#014D40";
const EMERALD_D = "#012620";
const EMERALD_L = "#02604f";
const GOLD = "#C5A06A";
const GOLD_L = "#E4D1AE";
const CREAM = "#FAF6EF";

function write(rel, content) {
  const full = join(pub, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content.trim() + "\n");
}

const base = (inner, bg = CREAM) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="em" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${EMERALD_L}"/><stop offset="1" stop-color="${EMERALD_D}"/>
    </linearGradient>
    <linearGradient id="go" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GOLD_L}"/><stop offset="1" stop-color="${GOLD}"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#bg)"/>
  <circle cx="820" cy="180" r="220" fill="${GOLD}" opacity="0.12"/>
  <circle cx="160" cy="840" r="180" fill="${EMERALD}" opacity="0.08"/>
  ${inner}
</svg>`;

/* Scene 1 — housekeeping cart + mop & bucket + spray bottles */
write(
  "hero/hero-1.svg",
  base(`
  <!-- floor -->
  <ellipse cx="500" cy="860" rx="380" ry="50" fill="${EMERALD}" opacity="0.06"/>
  <!-- cleaning cart -->
  <g transform="translate(540 360)">
    <rect x="0" y="0" width="300" height="40" rx="10" fill="url(#em)"/>
    <rect x="20" y="40" width="16" height="380" fill="${EMERALD}"/>
    <rect x="264" y="40" width="16" height="380" fill="${EMERALD}"/>
    <rect x="0" y="150" width="300" height="14" fill="${EMERALD}" opacity="0.5"/>
    <rect x="0" y="290" width="300" height="14" fill="${EMERALD}" opacity="0.5"/>
    <!-- yellow bag -->
    <path d="M30 60h240l-20 80H50z" fill="url(#go)"/>
    <!-- bottles on top shelf -->
    <rect x="60" y="-70" width="44" height="70" rx="8" fill="${EMERALD}"/>
    <rect x="66" y="-92" width="14" height="26" rx="4" fill="${EMERALD_D}"/>
    <rect x="120" y="-60" width="40" height="60" rx="8" fill="${GOLD}"/>
    <rect x="200" y="-80" width="44" height="80" rx="8" fill="${EMERALD_L}"/>
    <rect x="206" y="-100" width="14" height="24" rx="4" fill="${EMERALD_D}"/>
    <!-- wheels -->
    <circle cx="36" cy="430" r="22" fill="${EMERALD_D}"/><circle cx="36" cy="430" r="8" fill="${GOLD}"/>
    <circle cx="264" cy="430" r="22" fill="${EMERALD_D}"/><circle cx="264" cy="430" r="8" fill="${GOLD}"/>
  </g>
  <!-- mop + bucket -->
  <g transform="translate(170 300)">
    <rect x="150" y="-40" width="14" height="430" rx="7" fill="${EMERALD}"/>
    <path d="M120 380h74l24 120H96z" fill="url(#em)"/>
    <ellipse cx="157" cy="380" rx="50" ry="16" fill="${GOLD}"/>
    <g stroke="${GOLD_L}" stroke-width="6" stroke-linecap="round">
      <line x1="120" y1="384" x2="110" y2="440"/><line x1="140" y1="386" x2="135" y2="450"/>
      <line x1="160" y1="386" x2="160" y2="452"/><line x1="180" y1="386" x2="190" y2="448"/>
      <line x1="195" y1="384" x2="205" y2="438"/>
    </g>
  </g>
  <!-- sparkle -->
  <g transform="translate(430 250)" fill="${GOLD}">
    <path d="M0 -34 L8 -8 L34 0 L8 8 L0 34 L-8 8 L-34 0 L-8 -8 Z"/>
  </g>
  <circle cx="360" cy="180" r="10" fill="${GOLD}"/>
  <circle cx="720" cy="300" r="8" fill="${EMERALD}" opacity="0.5"/>
  `)
);

/* Scene 2 — hospital / sanitised building with shield */
write(
  "hero/hero-2.svg",
  base(`
  <ellipse cx="500" cy="870" rx="360" ry="46" fill="${EMERALD}" opacity="0.06"/>
  <!-- building -->
  <g transform="translate(300 230)">
    <rect x="0" y="0" width="400" height="560" rx="18" fill="url(#em)"/>
    <rect x="170" y="380" width="60" height="180" rx="6" fill="${CREAM}"/>
    ${Array.from({ length: 4 }, (_, r) =>
      Array.from({ length: 4 }, (_, c) =>
        `<rect x="${40 + c * 90}" y="${50 + r * 80}" width="60" height="54" rx="6" fill="${GOLD_L}" opacity="${0.55 + (r + c) % 2 * 0.35}"/>`
      ).join("")
    ).join("")}
    <!-- cross sign -->
    <circle cx="200" cy="-40" r="46" fill="${GOLD}"/>
    <rect x="186" y="-66" width="28" height="52" rx="6" fill="${EMERALD_D}"/>
    <rect x="174" y="-54" width="52" height="28" rx="6" fill="${EMERALD_D}"/>
  </g>
  <!-- shield / hygiene -->
  <g transform="translate(640 520)">
    <path d="M90 0c42 22 80 30 80 30v90c0 70-50 110-80 130-30-20-80-60-80-130V30s38-8 80-30z" fill="url(#go)"/>
    <path d="M55 100l28 30 55-60" stroke="${EMERALD_D}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <g transform="translate(190 360)" fill="${GOLD}">
    <path d="M0 -28 L7 -7 L28 0 L7 7 L0 28 L-7 7 L-28 0 L-7 -7 Z"/>
  </g>
  <circle cx="240" cy="560" r="9" fill="${GOLD}"/>
  `)
);

/* Scene 3 — bulk supply boxes + delivery */
write(
  "hero/hero-3.svg",
  base(`
  <ellipse cx="500" cy="860" rx="380" ry="50" fill="${EMERALD}" opacity="0.06"/>
  <!-- stacked boxes -->
  <g transform="translate(180 430)">
    <rect x="0" y="120" width="220" height="200" rx="12" fill="url(#go)"/>
    <rect x="0" y="120" width="220" height="50" fill="${GOLD}"/>
    <rect x="90" y="120" width="40" height="200" fill="${EMERALD}" opacity="0.18"/>
    <rect x="60" y="-20" width="200" height="180" rx="12" fill="url(#em)"/>
    <rect x="60" y="-20" width="200" height="46" fill="${EMERALD_L}"/>
    <rect x="140" y="-20" width="40" height="180" fill="${GOLD}" opacity="0.3"/>
  </g>
  <!-- big product bottle -->
  <g transform="translate(600 360)">
    <rect x="60" y="-40" width="50" height="36" rx="6" fill="${EMERALD_D}"/>
    <rect x="40" y="-4" width="90" height="30" rx="8" fill="${EMERALD}"/>
    <path d="M30 26h110c12 0 22 10 22 22v260c0 16-12 28-28 28H36c-16 0-28-12-28-28V48c0-12 10-22 22-22z" fill="url(#em)"/>
    <rect x="30" y="120" width="110" height="92" rx="8" fill="${CREAM}"/>
    <rect x="48" y="142" width="74" height="12" rx="6" fill="${GOLD}"/>
    <rect x="48" y="166" width="56" height="9" rx="4" fill="${EMERALD}" opacity="0.5"/>
    <rect x="48" y="184" width="64" height="9" rx="4" fill="${EMERALD}" opacity="0.5"/>
  </g>
  <!-- check badge -->
  <g transform="translate(470 250)">
    <circle r="46" fill="${GOLD}"/>
    <path d="M-22 2l14 16 28-32" stroke="${EMERALD_D}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <circle cx="760" cy="700" r="10" fill="${GOLD}"/>
  <circle cx="300" cy="300" r="8" fill="${EMERALD}" opacity="0.5"/>
  `)
);

console.log("Hero slide images generated.");
