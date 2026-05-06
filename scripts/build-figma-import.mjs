// Builds a single large SVG containing all brand assets, laid out
// in labelled sections like a Figma artboard. Drag this SVG into
// Figma to get every logo, color, font sample, background and
// design element on one page.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/brand");
const OUT = path.resolve("public/brand/veebikool-figma-import.svg");

const COLORS = [
  ["Purple", "#A2146A"], ["Orange", "#EF8005"], ["Dark Purple", "#7B0F50"],
  ["Pastel Pink", "#ECD9E4"], ["Pastel Blue", "#EFF4F9"],
  ["Green", "#369D69"], ["Red", "#FD3D3D"], ["Blue", "#4A90D9"],
  ["Black Text", "#1A1A1A"], ["White", "#FFFFFF"],
];

const SVG_DIR = path.join(ROOT, "svg");
const svgFiles = fs.readdirSync(SVG_DIR).filter(f => f.endsWith(".svg")).sort();

// Group helpers
const groups = {
  "Nooled": svgFiles.filter(f => /(arrow|curved|loop|s-curve|diagonal|wavy-arrow|zigzag-arrow|spiral|bouncing|circle-arrow|u-arrow)/.test(f)),
  "Sildid (badges)": svgFiles.filter(f => f.startsWith("badge-")),
  "Kujundid": svgFiles.filter(f => /(blob|ring|dots|scatter|wave-|wave\.|airplane|star|hexagon|diamond|cross|triangle|semicircle|concentric|highlight)/.test(f) && !f.startsWith("frame-")),
  "Raamid": svgFiles.filter(f => f.startsWith("frame-")),
  "Ikoonid": svgFiles.filter(f => f.startsWith("icon-")),
  "Jooned": svgFiles.filter(f => /(dotted|dashed-(orange|purple)|solid-(orange|purple)|double-purple|gradient-line|wavy-line|wave-line|zigzag-line|dashdot|scallop|thickthin|bracket|crosshatch|arrow-line|straight-dashed)/.test(f)),
};
// Ensure no duplicates and gather leftovers
const seen = new Set();
for (const k of Object.keys(groups)) groups[k] = groups[k].filter(f => !seen.has(f) && (seen.add(f), true));
const leftovers = svgFiles.filter(f => !seen.has(f));
if (leftovers.length) groups["Muud"] = leftovers;

// Read each SVG inner contents and inline them within a viewBox-preserved <svg>
function readInline(file) {
  const raw = fs.readFileSync(path.join(SVG_DIR, file), "utf8");
  // Strip XML declaration if present
  return raw.replace(/<\?xml[^>]*\?>/, "").trim();
}

// Layout config
const PAGE_W = 2400;
const MARGIN = 80;
const TITLE_FONT = "Nunito Sans, Arial, sans-serif";
const BODY_FONT = "Overpass, Arial, sans-serif";

const TILE = 140; // svg tile size
const GAP = 28;
const COLS = 12;

let y = MARGIN;
const parts = [];

// Header
parts.push(`<g>
  <text x="${MARGIN}" y="${y + 60}" font-family="${TITLE_FONT}" font-weight="800" font-size="64" fill="#1A1A1A">Veebikool — Brand Import Sheet</text>
  <text x="${MARGIN}" y="${y + 100}" font-family="${BODY_FONT}" font-weight="400" font-size="20" fill="#1A1A1A">Lohista see SVG Figmasse — kõik logod, värvid, fondid, taustad ja kujunduselemendid ühel lehel.</text>
</g>`);
y += 160;

// Section: Logos (placed as <image> referring to public files; Figma will embed when dragged in)
function section(title, height, body) {
  parts.push(`<g transform="translate(0 ${y})">
    <text x="${MARGIN}" y="40" font-family="${TITLE_FONT}" font-weight="800" font-size="32" fill="#A2146A">${title}</text>
    <line x1="${MARGIN}" y1="56" x2="${PAGE_W - MARGIN}" y2="56" stroke="#A2146A" stroke-width="2"/>
    <g transform="translate(0 90)">${body}</g>
  </g>`);
  y += 90 + height + 60;
}

// Logos as embedded base64 (Figma drag-and-drop friendly)
function fileToDataUrl(p, mime) {
  const b = fs.readFileSync(p).toString("base64");
  return `data:${mime};base64,${b}`;
}
const logoFull = fileToDataUrl(path.join(ROOT, "logos/veebikool-logo.png"), "image/png");
const logoMark = fileToDataUrl(path.join(ROOT, "logos/veebikool-logomark.png"), "image/png");

section("Logod", 220, `
  <rect x="${MARGIN}" y="0" width="700" height="200" rx="16" fill="#FFFFFF" stroke="#ECD9E4" stroke-width="2"/>
  <image href="${logoFull}" x="${MARGIN + 40}" y="40" width="620" height="120" preserveAspectRatio="xMidYMid meet"/>
  <text x="${MARGIN + 40}" y="190" font-family="${BODY_FONT}" font-size="16" fill="#1A1A1A">veebikool-logo.png · täislogo</text>

  <rect x="${MARGIN + 740}" y="0" width="320" height="200" rx="16" fill="#A2146A"/>
  <image href="${logoMark}" x="${MARGIN + 800}" y="30" width="200" height="140" preserveAspectRatio="xMidYMid meet"/>
  <text x="${MARGIN + 760}" y="190" font-family="${BODY_FONT}" font-size="16" fill="#FFFFFF">veebikool-logomark.png · ikoon</text>
`);

// Colors
{
  const sw = 200, sh = 160, gap = 24;
  const perRow = 5;
  let body = "";
  COLORS.forEach(([name, hex], i) => {
    const col = i % perRow, row = Math.floor(i / perRow);
    const x = MARGIN + col * (sw + gap);
    const cy = row * (sh + gap);
    const textColor = ["#FFFFFF", "#ECD9E4", "#EFF4F9"].includes(hex) || hex === "#FFFFFF" ? "#1A1A1A" : "#FFFFFF";
    const stroke = hex === "#FFFFFF" ? `stroke="#ECD9E4" stroke-width="2"` : "";
    body += `<g transform="translate(${x} ${cy})">
      <rect width="${sw}" height="${sh}" rx="14" fill="${hex}" ${stroke}/>
      <text x="20" y="36" font-family="${TITLE_FONT}" font-weight="700" font-size="20" fill="${textColor}">${name}</text>
      <text x="20" y="${sh - 24}" font-family="${BODY_FONT}" font-size="18" fill="${textColor}">${hex}</text>
    </g>`;
  });
  const rows = Math.ceil(COLORS.length / perRow);
  section("Värvipalett", rows * (sh + gap) - gap, body);
}

// Typography sample
section("Tüpograafia", 320, `
  <g transform="translate(${MARGIN} 0)">
    <text y="60" font-family="${TITLE_FONT}" font-weight="800" font-size="72" fill="#1A1A1A">Nunito Sans · Pealkirjad</text>
    <text y="100" font-family="${BODY_FONT}" font-size="18" fill="#1A1A1A">800 / 700 / 600 — H1, H2, H3, CTA, Badge</text>

    <text y="180" font-family="${BODY_FONT}" font-weight="400" font-size="32" fill="#1A1A1A">Overpass · Kehatekst</text>
    <text y="220" font-family="${BODY_FONT}" font-size="18" fill="#1A1A1A">400 / 600 — Lõigud, kirjeldused, vormid (min 18px, värv #1A1A1A)</text>

    <text y="290" font-family="${BODY_FONT}" font-size="16" fill="#7B0F50">Google Fonts: fonts.google.com/specimen/Nunito+Sans · fonts.google.com/specimen/Overpass</text>
  </g>
`);

// Backgrounds
{
  const bgs = ["juhtimine", "juriidika", "turundus", "muuk", "finantsid"];
  const bw = 420, bh = 240, gap = 24;
  let body = "";
  bgs.forEach((name, i) => {
    const url = fileToDataUrl(path.join(ROOT, `backgrounds/${name}-bg.png`), "image/png");
    const x = MARGIN + i * (bw + gap);
    body += `<g transform="translate(${x} 0)">
      <clipPath id="bg-clip-${i}"><rect width="${bw}" height="${bh}" rx="16"/></clipPath>
      <image href="${url}" width="${bw}" height="${bh}" clip-path="url(#bg-clip-${i})" preserveAspectRatio="xMidYMid slice"/>
      <text x="16" y="${bh + 30}" font-family="${BODY_FONT}" font-weight="600" font-size="18" fill="#1A1A1A">${name}-bg.png</text>
    </g>`;
  });
  section("Taustapildid (kategooriad)", bh + 50, body);
}

// SVG element groups
for (const [groupName, files] of Object.entries(groups)) {
  if (!files.length) continue;
  const rows = Math.ceil(files.length / COLS);
  const height = rows * (TILE + GAP + 24);
  let body = "";
  files.forEach((f, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const x = MARGIN + col * (TILE + GAP);
    const ty = row * (TILE + GAP + 24);
    const inner = readInline(f);
    // Wrap inside a fixed-size svg viewport so each tile scales uniformly.
    body += `<g transform="translate(${x} ${ty})">
      <rect width="${TILE}" height="${TILE}" rx="12" fill="#FFFFFF" stroke="#ECD9E4" stroke-width="1"/>
      <svg x="10" y="10" width="${TILE - 20}" height="${TILE - 20}" overflow="hidden">${inner.replace(/^<svg([^>]*)>/, '<svg$1 preserveAspectRatio="xMidYMid meet">')}</svg>
      <text x="${TILE / 2}" y="${TILE + 18}" text-anchor="middle" font-family="${BODY_FONT}" font-size="11" fill="#1A1A1A">${f.replace(/\.svg$/, "")}</text>
    </g>`;
  });
  section(`${groupName} (${files.length})`, height, body);
}

// Footer
parts.push(`<g transform="translate(0 ${y})">
  <line x1="${MARGIN}" y1="0" x2="${PAGE_W - MARGIN}" y2="0" stroke="#ECD9E4" stroke-width="2"/>
  <text x="${MARGIN}" y="40" font-family="${BODY_FONT}" font-size="16" fill="#1A1A1A">Veebikool · Brand Import Sheet · veebikoolicvi.lovable.app</text>
</g>`);
const PAGE_H = y + 80;

const out = `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_W}" height="${PAGE_H}" viewBox="0 0 ${PAGE_W} ${PAGE_H}">
<rect width="${PAGE_W}" height="${PAGE_H}" fill="#FFFFFF"/>
${parts.join("\n")}
</svg>`;

fs.writeFileSync(OUT, out);
console.log("Wrote", OUT, (out.length / 1024).toFixed(1), "KB", "page height:", PAGE_H);
