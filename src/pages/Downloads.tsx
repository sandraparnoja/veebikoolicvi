import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileJson, Image, Package, ArrowLeft, Loader2, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const LOGO_FILES = [
  { name: "Täislogo (PNG)", path: "/brand/logos/veebikool-logo.png", filename: "veebikool-logo.png" },
  { name: "Logomärk (PNG)", path: "/brand/logos/veebikool-logomark.png", filename: "veebikool-logomark.png" },
];

const BACKGROUND_FILES = [
  { name: "Juhtimine", path: "/brand/backgrounds/juhtimine-bg.png", filename: "juhtimine-bg.png" },
  { name: "Juriidika", path: "/brand/backgrounds/juriidika-bg.png", filename: "juriidika-bg.png" },
  { name: "Turundus", path: "/brand/backgrounds/turundus-bg.png", filename: "turundus-bg.png" },
  { name: "Müük", path: "/brand/backgrounds/muuk-bg.png", filename: "muuk-bg.png" },
  { name: "Finantsid", path: "/brand/backgrounds/finantsid-bg.png", filename: "finantsid-bg.png" },
];

const SVG_FILES = [
  // Arrows
  "dashed-curved-up-black", "dashed-curved-up-purple", "dashed-curved-up-orange", "dashed-curved-down-black",
  "dashed-loop-black", "dashed-loop-purple", "solid-curved-up-purple", "solid-curved-up-orange", "solid-curved-down-purple",
  "straight-arrow-purple", "straight-arrow-orange", "straight-dashed-black",
  "diagonal-up-purple", "diagonal-down-orange", "wavy-arrow-purple", "wavy-arrow-orange",
  "bouncing-arrow-purple", "circle-arrow-purple", "spiral-arrow-orange", "zigzag-arrow-purple", "u-arrow-orange", "s-curve-black",
  // Badges
  "badge-uus", "badge-tasuta", "badge-populaarne", "badge-pro", "badge-live", "badge-soovitatud",
  "badge-preemium", "badge-bestseller", "badge-soodne", "badge-piiratud", "badge-tunnistus",
  "badge-ekspert", "badge-algaja", "badge-edasijoudnud", "badge-interaktiivne", "badge-sertifikaat",
  "badge-outline-uus", "badge-outline-tasuta", "badge-outline-preemium",
  "badge-dot-live", "badge-dot-populaarne",
  // Shapes
  "ring-purple-orange", "ring-purple-blue", "ring-green", "dots-purple-orange", "scatter-dots",
  "blob-purple", "blob-orange", "blob-pink", "blob2-purple", "blob3-orange",
  "wave-purple", "wave-orange", "airplane-purple", "airplane-orange",
  "star-orange", "star-purple", "hexagon-purple", "diamond-orange", "cross-purple", "triangle-orange",
  "semicircle-purple", "concentric-purple", "highlight-purple", "highlight-orange",
  // Frames
  "frame-solid-purple", "frame-solid-orange", "frame-dashed-purple", "frame-dashed-orange", "frame-double-purple",
  "frame-rounded-purple", "frame-rounded-orange", "frame-circle-orange", "frame-circle-dashed-purple",
  "frame-circle-double-orange", "frame-dotted-purple", "frame-ticket-purple", "frame-wavy-orange",
  "frame-cornerdots-purple", "frame-squircle-orange", "frame-shield-purple", "frame-heart-purple", "frame-hexagon-orange",
  // Icons
  "icon-book-purple", "icon-book-green", "icon-graduation-purple", "icon-graduation-blue",
  "icon-lightbulb-orange", "icon-lightbulb-red", "icon-pencil-orange", "icon-pencil-purple",
  "icon-laptop-purple", "icon-laptop-orange", "icon-certificate-orange", "icon-chart-purple",
  "icon-calendar-orange", "icon-clock-purple", "icon-target-orange", "icon-trophy-orange",
  "icon-microphone-purple", "icon-globe-blue", "icon-rocket-orange", "icon-users-purple",
  "icon-star-orange", "icon-heart-purple", "icon-play-orange", "icon-checkbadge-green",
  "icon-mail-purple", "icon-camera-orange", "icon-shield-green", "icon-wifi-blue", "icon-bell-orange", "icon-settings-purple",
  // Lines
  "dotted-purple", "dotted-orange", "dashed-purple", "dashed-orange",
  "solid-purple", "solid-orange", "double-purple", "gradient-line",
  "wavy-line-purple", "wave-line-blue", "zigzag-line-orange", "dashdot-purple",
  "scallop-purple", "thickthin-orange", "bracket-purple", "crosshatch-purple", "arrow-line-orange",
];

function downloadFile(path: string, filename: string) {
  const link = document.createElement("a");
  link.href = path;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Downloads() {
  const [isZipping, setIsZipping] = useState(false);

  const downloadAllAsZip = async () => {
    setIsZipping(true);
    try {
      const zip = new JSZip();

      // Fetch and add brand-config.json
      const configRes = await fetch("/api/brand-config.json");
      const configText = await configRes.text();
      zip.file("brand-config.json", configText);

      // Fetch and add AI guide
      const guideRes = await fetch("/brand/veebikool-ai-juhend.md");
      const guideText = await guideRes.text();
      zip.file("veebikool-ai-juhend.md", guideText);

      // Fetch and add logos
      const logosFolder = zip.folder("logos");
      for (const logo of LOGO_FILES) {
        const res = await fetch(logo.path);
        const blob = await res.blob();
        logosFolder!.file(logo.filename, blob);
      }

      // Fetch and add backgrounds
      const bgFolder = zip.folder("backgrounds");
      for (const bg of BACKGROUND_FILES) {
        const res = await fetch(bg.path);
        const blob = await res.blob();
        bgFolder!.file(bg.filename, blob);
      }

      // Fetch and add SVGs
      const svgFolder = zip.folder("svg");
      for (const svgName of SVG_FILES) {
        const res = await fetch(`/brand/svg/${svgName}.svg`);
        const text = await res.text();
        svgFolder!.file(`${svgName}.svg`, text);
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "veebikool-brand-kit.zip");
      toast.success("ZIP-fail allalaetud!");
    } catch (err) {
      console.error(err);
      toast.error("Viga ZIP-faili loomisel");
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Tagasi Brand Toolkit'i
          </Link>
          <h1 className="text-3xl font-heading font-extrabold text-foreground tracking-tight">Allalaadimised</h1>
          <p className="text-sm text-muted-foreground font-body mt-1">Kõik Veebikool CVI failid — logod, taustad, kujunduselemendid ja seadistused</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-16 space-y-16">
        {/* Download All ZIP */}
        <section className="rounded-2xl border border-border bg-muted/30 p-10 text-center">
          <Package className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-heading font-bold text-foreground mb-2">Laadi alla kõik CVI failid</h2>
          <p className="text-sm text-muted-foreground font-body mb-6 max-w-md mx-auto">
            Üks ZIP-fail sisaldab logosid, taustapilte, kõiki SVG kujunduselemente ja brand-config.json seadistusfaili.
          </p>
          <Button
            onClick={downloadAllAsZip}
            disabled={isZipping}
            className="rounded-full px-8 py-3 text-base font-heading font-bold"
            size="lg"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Pakendamine...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Laadi alla kõik (ZIP)
              </>
            )}
          </Button>
        </section>

        {/* AI Guide */}
        <section>
          <h2 className="text-lg font-heading font-bold text-foreground mb-2">AI juhend</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">Täielik juhend AI-le (Claude, ChatGPT, Copilot) maandumislehtede ja mallide genereerimiseks</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => downloadFile("/brand/veebikool-ai-juhend.md", "veebikool-ai-juhend.md")}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all"
            >
              <BookOpen className="w-8 h-8 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-bold text-foreground">veebikool-ai-juhend.md</p>
                <p className="text-xs text-muted-foreground">Värvid, fondid, SVG elemendid, Elementor JSON mallid, reeglid</p>
              </div>
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground ml-auto transition-colors" />
            </button>
            <a
              href="/brand/veebikool-ai-juhend.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all"
            >
              <BookOpen className="w-8 h-8 text-secondary shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-bold text-foreground">Vaata brauseris</p>
                <p className="text-xs text-muted-foreground">/brand/veebikool-ai-juhend.md</p>
              </div>
            </a>
          </div>
        </section>

        {/* Brand Config JSON */}
        <section>
          <h2 className="text-lg font-heading font-bold text-foreground mb-2">Seadistus</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">JSON-formaadis brändikonfiguratsioon Elementor muutujatega</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => downloadFile("/api/brand-config.json", "brand-config.json")}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all"
            >
              <FileJson className="w-8 h-8 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-bold text-foreground">brand-config.json</p>
                <p className="text-xs text-muted-foreground">Värvid, fondid, Elementor muutujad, kõik URL-id</p>
              </div>
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground ml-auto transition-colors" />
            </button>
            <a
              href="/api/brand-config.json"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all"
            >
              <FileJson className="w-8 h-8 text-secondary shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-bold text-foreground">API Endpoint</p>
                <p className="text-xs text-muted-foreground">/api/brand-config.json — avalik JSON</p>
              </div>
            </a>
          </div>
        </section>

        {/* Logos */}
        <section>
          <h2 className="text-lg font-heading font-bold text-foreground mb-2">Logod</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">PNG-formaadis logofailid</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {LOGO_FILES.map((logo) => (
              <button
                key={logo.filename}
                onClick={() => downloadFile(logo.path, logo.filename)}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all text-left"
              >
                <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center shrink-0">
                  <img src={logo.path} alt={logo.name} className="max-h-10 max-w-12 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-heading font-bold text-foreground">{logo.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{logo.filename}</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </section>

        {/* Backgrounds */}
        <section>
          <h2 className="text-lg font-heading font-bold text-foreground mb-2">Taustapildid</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">Kursuste kategooriate taustapildid</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BACKGROUND_FILES.map((bg) => (
              <button
                key={bg.filename}
                onClick={() => downloadFile(bg.path, bg.filename)}
                className="group rounded-2xl overflow-hidden border border-border hover:shadow-sm transition-all text-left"
              >
                <div className="h-28 overflow-hidden">
                  <img src={bg.path} alt={bg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-heading font-bold text-foreground">{bg.name}</p>
                    <p className="text-xs text-muted-foreground">{bg.filename}</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SVG Design Elements */}
        <section>
          <h2 className="text-lg font-heading font-bold text-foreground mb-2">Kujunduselemendid (SVG)</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">{SVG_FILES.length} SVG-faili — nooled, badge'id, kujundid, raamid, ikoonid</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SVG_FILES.map((name) => (
              <button
                key={name}
                onClick={() => downloadFile(`/brand/svg/${name}.svg`, `${name}.svg`)}
                className="group rounded-2xl border border-border bg-white p-4 flex flex-col items-center gap-3 hover:border-primary/20 hover:shadow-sm transition-all min-h-[120px]"
              >
                <div className="flex-1 flex items-center justify-center">
                  <img src={`/brand/svg/${name}.svg`} alt={name} className="max-h-10 max-w-full" />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[10px] text-muted-foreground truncate max-w-[100px]">{name}</p>
                  <Download className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <p className="text-center text-xs text-muted-foreground font-body">Veebikool · Brand Toolkit · Allalaadimised · 2026</p>
      </footer>
    </div>
  );
}
