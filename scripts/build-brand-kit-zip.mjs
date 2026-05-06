#!/usr/bin/env node
// Builds public/brand/veebikool-brand-kit.zip with all brand assets
import { readFileSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import AdmZip from "adm-zip";

const ROOT = new URL("..", import.meta.url).pathname;
const BRAND_DIR = join(ROOT, "public/brand");
const OUT = join(BRAND_DIR, "veebikool-brand-kit.zip");

const zip = new AdmZip();

function addDir(absDir, zipDir) {
  for (const name of readdirSync(absDir)) {
    const abs = join(absDir, name);
    const st = statSync(abs);
    if (st.isDirectory()) addDir(abs, `${zipDir}/${name}`);
    else if (name !== "veebikool-brand-kit.zip") {
      zip.addFile(`${zipDir}/${name}`, readFileSync(abs));
    }
  }
}

// Top-level files
for (const f of ["brand-config.json", "veebikool-ai-juhend.md", "README.md"]) {
  try { zip.addFile(f, readFileSync(join(BRAND_DIR, f))); } catch {}
}
// Asset folders
for (const d of ["logos", "svg", "backgrounds"]) {
  try { addDir(join(BRAND_DIR, d), d); } catch {}
}

zip.writeZip(OUT);
const size = (statSync(OUT).size / 1024).toFixed(1);
console.log(`✓ ${relative(ROOT, OUT)} — ${size} KB`);
