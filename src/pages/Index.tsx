import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllElements, ELEMENT_CATEGORIES, downloadElementAsPng, downloadSvg } from "@/components/DesignElements";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check, Package, Bot, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import veebikoolLogo from "@/assets/veebikool-logo.png";
import veebikoolLogomark from "@/assets/veebikool-logomark.png";
import bgJuhtimine from "@/assets/bg-juhtimine.png";
import bgJuriidika from "@/assets/bg-juriidika.png";
import bgTurundus from "@/assets/bg-turundus.png";
import bgMuuk from "@/assets/bg-muuk.png";
import bgFinantsid from "@/assets/bg-finantsid.png";

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
  const isLight = ["#FFFFFF", "#F8F9FA", "#EFF4F9", "#DAF8E9", "#ECD9E4", "#FFC683"].includes(hex);

  return (
    <div className="group">
      <div
        className="rounded-2xl overflow-hidden border transition-shadow hover:shadow-sm"
        style={{
          backgroundColor: hex,
          height: 72,
          borderColor: isLight ? "#e5e7eb" : "transparent",
        }}
      />
      <div className="mt-2.5 space-y-1">
        <p className="font-heading font-bold text-xs text-black">{name}</p>
        <div className="flex gap-1">
          <button
            onClick={() => copyValue(hex, "HEX")}
            className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-500 font-mono transition-colors"
          >
            {copied === "HEX" ? <Check className="w-3 h-3 inline text-black" /> : hex}
          </button>
          <button
            onClick={() => copyValue(rgb, "RGB")}
            className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-500 font-mono transition-colors"
          >
            {copied === "RGB" ? <Check className="w-3 h-3 inline text-black" /> : "RGB"}
          </button>
        </div>
      </div>
    </div>
  );
}

function downloadImage(src: string, filename: string) {
  const link = document.createElement("a");
  link.href = src;
  link.download = filename;
  link.click();
}

const BRAND_API_URL = "https://veebikoolicvi.lovable.app/brand/brand-config.json";
const AI_GUIDE_PATH = "/brand/veebikool-ai-juhend.md";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<string>("Kõik");
  const [copiedAi, setCopiedAi] = useState(false);
  const [copiedApi, setCopiedApi] = useState(false);
  const elements = getAllElements();
  const filtered = activeCategory === "Kõik" ? elements : elements.filter((e) => e.category === activeCategory);

  const handleCopyForAi = async () => {
    try {
      const res = await fetch(AI_GUIDE_PATH);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedAi(true);
      toast.success("AI brändijuhend kopeeritud lõikelauale! 📋");
      setTimeout(() => setCopiedAi(false), 2000);
    } catch (err) {
      toast.error("Kopeerimine ebaõnnestus");
    }
  };

  const handleCopyApiLink = async () => {
    await navigator.clipboard.writeText(BRAND_API_URL);
    setCopiedApi(true);
    toast.success("API link kopeeritud! 🔗");
    setTimeout(() => setCopiedApi(false), 2000);
  };

  const backgrounds = [
    { name: "Juhtimine", src: bgJuhtimine, file: "juhtimine-bg.png" },
    { name: "Juriidika", src: bgJuriidika, file: "juriidika-bg.png" },
    { name: "Turundus", src: bgTurundus, file: "turundus-bg.png" },
    { name: "Müük", src: bgMuuk, file: "muuk-bg.png" },
    { name: "Finantsid", src: bgFinantsid, file: "finantsid-bg.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header — clean, airy */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-10 flex items-center gap-6">
          <img src={veebikoolLogomark} alt="Veebikool" className="h-14 w-auto" />
          <div className="flex-1">
            <h1 className="text-3xl font-heading font-extrabold text-black tracking-tight">Brand Toolkit</h1>
            <p className="text-sm text-gray-400 font-body mt-0.5">Kujunduselementide kogu · Veebikool CVI</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyForAi}
              className="gap-2 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-gray-300"
            >
              {copiedAi ? <Check className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              {copiedAi ? "Kopeeritud!" : "Kopeeri AI-le"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyApiLink}
              className="gap-2 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-gray-300"
            >
              {copiedApi ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
              {copiedApi ? "Kopeeritud!" : "API link"}
            </Button>
            <Link to="/downloads">
              <Button variant="outline" size="sm" className="gap-2 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-gray-300">
                <Package className="w-4 h-4" />
                Allalaadimised
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-16 space-y-20">
        {/* Logo Section */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">Logo</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Täislogo ja logomärk. Allalaetavad PNG-na</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group relative rounded-2xl border border-gray-100 bg-gray-50/40 p-10 flex items-center justify-center min-h-[140px] hover:bg-gray-50 transition-colors">
              <img src={veebikoolLogo} alt="Veebikool täislogo" className="max-h-16 w-auto" />
              <button
                onClick={() => downloadImage(veebikoolLogo, "veebikool-logo.png")}
                title="Lae alla"
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-white border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:shadow"
              >
                <Download className="w-3.5 h-3.5 text-black" />
              </button>
              <p className="absolute bottom-3 left-4 text-[10px] text-gray-400 font-body">Täislogo</p>
            </div>
            <div className="group relative rounded-2xl border border-gray-100 bg-gray-50/40 p-10 flex items-center justify-center min-h-[140px] hover:bg-gray-50 transition-colors">
              <img src={veebikoolLogomark} alt="Veebikool logomärk" className="max-h-16 w-auto" />
              <button
                onClick={() => downloadImage(veebikoolLogomark, "veebikool-logomark.png")}
                title="Lae alla"
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-white border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:shadow"
              >
                <Download className="w-3.5 h-3.5 text-black" />
              </button>
              <p className="absolute bottom-3 left-4 text-[10px] text-gray-400 font-body">Logomärk</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">Värvid</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Kliki värvi koodi kopeemiseks</p>

          <h3 className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Põhivärvid</h3>
          <div className="grid grid-cols-5 gap-5 mb-12">
            {BRAND_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Pastelltoonid</h3>
          <div className="grid grid-cols-5 gap-5 mb-12">
            {PASTEL_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mb-4">Aktsentvärvid</h3>
          <div className="grid grid-cols-4 gap-5">
            {ACCENT_COLORS.map((c) => (
              <ColorSwatch key={c.hex} {...c} />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">Tüpograafia</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Kaks fonti — pealkirjad ja body tekst</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-8">
              <p className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest mb-4">Pealkirjad</p>
              <p className="text-4xl font-heading font-extrabold text-black leading-tight">Nunito Sans</p>
              <p className="text-sm text-gray-300 mt-4 font-body">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm text-gray-300 font-body">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8">
              <p className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest mb-4">Body tekst</p>
              <p className="text-4xl font-body font-bold text-black leading-tight">Overpass</p>
              <p className="text-sm text-gray-300 mt-4 font-body">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm text-gray-300 font-body">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">Kujunduselemendid</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Lae alla PNG (läbipaistev taust) või SVG</p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Button
              variant={activeCategory === "Kõik" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("Kõik")}
              className={activeCategory === "Kõik" ? "bg-black text-white hover:bg-black/90 border-black" : "border-gray-200 text-gray-500 hover:text-black hover:border-gray-300 bg-white"}
            >
              Kõik
            </Button>
            {ELEMENT_CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "bg-black text-white hover:bg-black/90 border-black" : "border-gray-200 text-gray-500 hover:text-black hover:border-gray-300 bg-white"}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((el) => (
              <div
                key={el.id}
                className="group relative rounded-2xl border border-gray-100 bg-white p-5 flex flex-col items-center justify-center min-h-[130px] hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div id={`svg-${el.id}`} className="flex items-center justify-center mb-3">
                  {el.component}
                </div>
                <p className="text-[10px] text-gray-400 text-center leading-tight font-body">{el.name}</p>
                <div className="absolute top-2.5 right-2.5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => downloadElementAsPng(el.id, el.component)}
                    title="Lae alla PNG"
                    className="p-1 rounded-md bg-white border border-gray-100 hover:border-gray-200 text-black transition-colors shadow-sm"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => downloadSvg(el.id)}
                    title="Lae alla SVG"
                    className="p-1 rounded-md bg-white border border-gray-100 hover:border-gray-200 text-black transition-colors shadow-sm"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Backgrounds */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">Taustad</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Kategooriate taustad — kliki allalaadimiseks</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {backgrounds.map((bg) => (
              <div
                key={bg.name}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-sm transition-shadow cursor-pointer"
                onClick={() => downloadImage(bg.src, bg.file)}
              >
                <img src={bg.src} alt={bg.name} className="w-full h-32 object-cover" />
                <div className="p-3 flex items-center justify-between">
                  <p className="text-sm font-heading font-semibold text-black">{bg.name}</p>
                  <Download className="w-3.5 h-3.5 text-gray-300 group-hover:text-black transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient backgrounds */}
          <h3 className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest mt-12 mb-4">Gradient-taustad</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Peamine", bg: "linear-gradient(135deg, #ECD9E4, #FFC683)" },
              { name: "Tume", bg: "linear-gradient(135deg, #E8D0DE, #ECD9E4)" },
              { name: "Soe", bg: "linear-gradient(135deg, #FFC683, #FFF0DC)" },
              { name: "Sinine", bg: "linear-gradient(135deg, #ECD9E4, #EFF4F9)" },
              { name: "Roosa", bg: "linear-gradient(135deg, #F3E4ED, #FAF5F8)" },
              { name: "Roheline", bg: "linear-gradient(135deg, #DAF8E9, #F0FBF5)" },
            ].map((g) => (
              <div key={g.name} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="h-28" style={{ background: g.bg }} />
                <div className="p-3">
                  <p className="text-sm font-heading font-semibold text-black">{g.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Access */}
        <section>
          <h2 className="text-lg font-heading font-bold text-black mb-2">AI ligipääs</h2>
          <p className="text-sm text-gray-400 font-body mb-8">Jaga brändijuhendit AI tööriistadega — Claude, ChatGPT, Replit, Cursor jt</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-4 h-4 text-gray-400" />
                <p className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest">AI brändijuhend</p>
              </div>
              <p className="text-sm text-gray-500 font-body mb-5">
                Markdown-formaadis juhend, mis sisaldab kõiki värve, fonte, tooni ja kujunduselemente. Kopeeri ja kleebi otse AI vestlusesse.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyForAi}
                className="gap-2 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-gray-300"
              >
                {copiedAi ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedAi ? "Kopeeritud!" : "Kopeeri lõikelauale"}
              </Button>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-4 h-4 text-gray-400" />
                <p className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest">API endpoint</p>
              </div>
              <p className="text-sm text-gray-500 font-body mb-3">
                Masinloetav JSON — kasuta otse koodis või anna AI-le URL.
              </p>
              <code className="block text-xs font-mono bg-gray-50 rounded-lg px-3 py-2 text-gray-600 mb-4 break-all">{BRAND_API_URL}</code>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyApiLink}
                className="gap-2 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-gray-300"
              >
                {copiedApi ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedApi ? "Kopeeritud!" : "Kopeeri link"}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-10">
        <p className="text-center text-xs text-gray-300 font-body">veebikool · Brand Toolkit · 2025</p>
      </footer>
    </div>
  );
}
