import { useState } from "react";
import { getAllElements, ELEMENT_CATEGORIES, downloadElementAsPng, downloadSvg } from "@/components/DesignElements";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const BRAND_COLORS = [
  { name: "Veebikool Purple", hex: "#A2146A", rgb: "162, 20, 106" },
  { name: "Fox Orange", hex: "#EF8005", rgb: "239, 128, 5" },
  { name: "Dark Purple", hex: "#7B0F50", rgb: "123, 15, 80" },
  { name: "Black", hex: "#000000", rgb: "0, 0, 0" },
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255" },
];

const PASTEL_COLORS = [
  { name: "Pastel Pink", hex: "#ECD9E4", rgb: "236, 217, 228" },
  { name: "Pastel Orange", hex: "#FFC683", rgb: "255, 198, 131" },
  { name: "Pastel Blue", hex: "#EFF4F9", rgb: "239, 244, 249" },
  { name: "Pastel Green", hex: "#DAF8E9", rgb: "218, 248, 233" },
  { name: "Light BG", hex: "#F8F9FA", rgb: "248, 249, 250" },
];

const ACCENT_COLORS = [
  { name: "VM Orange", hex: "#E95A0C", rgb: "233, 90, 12" },
  { name: "VM Red", hex: "#FD3D3D", rgb: "253, 61, 61" },
  { name: "VM Green", hex: "#369D69", rgb: "54, 157, 105" },
  { name: "VM Blue", hex: "#4A90D9", rgb: "74, 144, 217" },
];

function ColorSwatch({ name, hex, rgb }: { name: string; hex: string; rgb: string }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copyValue = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    toast.success(`${label} kopeeritud!`);
    setTimeout(() => setCopied(null), 1500);
  };
  const isLight = hex === "#FFFFFF" || hex === "#F8F9FA" || hex === "#EFF4F9" || hex === "#DAF8E9" || hex === "#ECD9E4" || hex === "#FFC683";

  return (
    <div className="group">
      <div className="rounded-xl overflow-hidden shadow-sm border border-border transition-shadow hover:shadow-md" style={{ backgroundColor: hex, height: 80 }}>
        {isLight && <div className="w-full h-full border border-border/30 rounded-xl" />}
      </div>
      <div className="mt-2 space-y-1">
        <p className="font-heading font-bold text-xs text-foreground">{name}</p>
        <div className="flex gap-1">
          <button onClick={() => copyValue(hex, "HEX")} className="text-[10px] px-1.5 py-0.5 rounded bg-muted hover:bg-accent text-muted-foreground font-mono transition-colors">
            {copied === "HEX" ? <Check className="w-3 h-3 inline" /> : hex}
          </button>
          <button onClick={() => copyValue(rgb, "RGB")} className="text-[10px] px-1.5 py-0.5 rounded bg-muted hover:bg-accent text-muted-foreground font-mono transition-colors">
            {copied === "RGB" ? <Check className="w-3 h-3 inline" /> : "RGB"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string>("Kõik");
  const elements = getAllElements();
  const filtered = activeCategory === "Kõik" ? elements : elements.filter(e => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7B0F50, #A2146A, #EF8005)" }}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none">
            <circle cx="700" cy="80" r="60" stroke="white" strokeWidth="8" />
            <circle cx="100" cy="350" r="40" stroke="white" strokeWidth="6" />
            <path d="M400 50L440 80L410 75L405 40Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">veebikool</h1>
          <p className="mt-2 text-lg md:text-xl text-white/80 font-body">Brand Toolkit — Kujunduselementide kogu</p>
          <p className="mt-1 text-sm text-white/50 font-body">Lae alla iga element läbipaistva taustaga PNG-na</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Colors */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Värvid</h2>
          <h3 className="text-sm font-heading font-semibold text-primary mb-3">Põhivärvid</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
            {BRAND_COLORS.map(c => <ColorSwatch key={c.hex} {...c} />)}
          </div>
          <h3 className="text-sm font-heading font-semibold text-primary mb-3">Pastellvärvid</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
            {PASTEL_COLORS.map(c => <ColorSwatch key={c.hex} {...c} />)}
          </div>
          <h3 className="text-sm font-heading font-semibold text-primary mb-3">Aktsentvärvid</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACCENT_COLORS.map(c => <ColorSwatch key={c.hex} {...c} />)}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Tüpograafia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border p-6 bg-card">
              <p className="text-xs text-secondary font-heading font-bold uppercase tracking-wider mb-2">Pealkirjad</p>
              <p className="text-3xl font-heading font-extrabold text-foreground">Nunito Sans</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm text-muted-foreground font-body">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <p className="text-xs text-secondary font-heading font-bold uppercase tracking-wider mb-2">Body tekst</p>
              <p className="text-3xl font-body font-bold text-foreground">Overpass</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm text-muted-foreground font-body">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Kujunduselemendid</h2>
          <p className="text-sm text-muted-foreground mb-6">Kliki elemendil, et laadida alla PNG läbipaistva taustaga</p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant={activeCategory === "Kõik" ? "default" : "outline"} size="sm" onClick={() => setActiveCategory("Kõik")}>
              Kõik
            </Button>
            {ELEMENT_CATEGORIES.map(cat => (
              <Button key={cat} variant={activeCategory === cat ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(cat)}>
                {cat}
              </Button>
            ))}
          </div>

          {/* Elements grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map(el => (
              <div key={el.id} className="group relative rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center min-h-[120px] hover:shadow-md hover:border-primary/30 transition-all">
                <div id={`svg-${el.id}`} className="flex items-center justify-center mb-2">
                  {el.component}
                </div>
                <p className="text-[10px] text-muted-foreground text-center leading-tight">{el.name}</p>
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => downloadElementAsPng(el.id, el.component)} title="Lae alla PNG" className="p-1 rounded bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                    <Download className="w-3 h-3" />
                  </button>
                  <button onClick={() => downloadSvg(el.id)} title="Lae alla SVG" className="p-1 rounded bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors">
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Backgrounds */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Taustad</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Peamine", bg: "linear-gradient(135deg, #A2146A, #EF8005)" },
              { name: "Tume", bg: "linear-gradient(135deg, #7B0F50, #A2146A)" },
              { name: "Soe", bg: "linear-gradient(135deg, #EF8005, #FFC683)" },
              { name: "Sinine", bg: "linear-gradient(135deg, #A2146A, #4A90D9)" },
              { name: "Roosa", bg: "linear-gradient(135deg, #A2146A, #ECD9E4)" },
              { name: "Roheline", bg: "linear-gradient(135deg, #369D69, #DAF8E9)" },
            ].map(bg => (
              <div key={bg.name} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-28" style={{ background: bg.bg }} />
                <div className="p-3 bg-card border-x border-b border-border rounded-b-xl">
                  <p className="text-sm font-heading font-semibold text-foreground">{bg.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">veebikool · Täiustatud CVI · 2025</p>
      </footer>
    </div>
  );
}
