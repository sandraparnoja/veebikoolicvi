## Probleem

AI-juhendis on kolm konkreetset asja, mis viivad AI-d valedele radadele:

### 1. Tekstid alla 18px
Praegune juhend lubab:
- Kehatekst: **16px** (rida 103)
- Väike tekst: **14px** (rida 105)
- Kursuste kaardi mall kasutab 14px (rida 481)

→ AI järgib seda ja paneb pidevalt 14–16px teksti, kuigi sina tahad **min 18px**.

### 2. Hallikad tekstid kontrasti asemel
Praegune juhend ei rõhuta üldse, et kehatekst peab olema **must (#1A1A1A)** ega keela hallikate kasutamist. Pole "DON'T use gray body text" reeglit.

### 3. Tugev gradient hero taga
Praegune juhend ütleb otse vastupidist sinu soovile:
- Rida 62: "Peamine hero gradient: `#A2146A → #EF8005`" (tugev lilla→oranž)
- Rida 355: "Kasuta gradiente hero-sektsioonides ja CTA-des"
- Rida 357–425: Hero-sektsiooni mall kasutab tugevat lilla→oranž gradienti
- Rida 557: "Hero-sektsioonid kasutavad gradient-taustu"

→ AI paneb iga kord tugeva küllastunud gradiendi, kuigi peaks kasutama **pastelseid heledamaid taustasid** (mälu `style/varvid` ja `style/visuaalne-stiil` järgi).

---

## Parandused

### A. `public/brand/veebikool-ai-juhend.md`

**1. Tüpograafia tabel (sektsioon 4)** — muuda miinimumiks 18px:
- Eemalda "Kehatekst 16px" rida
- Tee `Kehatekst` = **18px / 400 / Overpass** (uus baas)
- Tee `Kehatekst suur` = **20px**
- Eemalda "Väike tekst 14px" — asenda `Meta/caption` = **16px** (kasutada AINULT timestampide, badge-tekstide jms jaoks, mitte kehatekstile)
- Lisa selge reegel ülaossa: **"⚠️ MIINIMUM kehateksti suurus on 18px. Ära kunagi kasuta 14px ega 16px lõikudele, kirjeldustele ega CTA-alateksti."**

**2. Lisa uus sektsioon "4.1 Värvi- ja kontrastireeglid"** kohe tüpograafia järele:
- ✅ Kehatekst on alati **#1A1A1A (must)** valgel/heledal taustal
- ✅ Pealkirjad: must `#1A1A1A` või lilla `#A2146A`
- ❌ **ÄRA KASUTA** halli (`#666`, `#888`, `#999`, `gray-500`, `text-muted` jne) kehatekstile
- ❌ Ära vähenda kontrasti opacity-ga (nt `opacity: 0.7`) loetava teksti puhul
- Minimaalne kontrast WCAG AA: 4.5:1 normaaltekstile

**3. Gradiendid (sektsioon 3)** — muuda hierarhiat:
- Eemalda või liiguta lõppu "Peamine hero gradient" lilla→oranž (märgi: "kasuta SÄÄSTLIKULT, ainult ühes elemendis lehe kohta, mitte hero taustana")
- Tõsta esikohale **eelistatud hero-taustad**:
  - `linear-gradient(135deg, #ECD9E4 0%, #FFFFFF 100%)` — pastel roosa
  - `linear-gradient(135deg, #EFF4F9 0%, #FFFFFF 100%)` — pastel sinine
  - `linear-gradient(135deg, #ECD9E4 0%, #EFF4F9 100%)` — pastel mix
  - Lihtsalt valge `#FFFFFF` või `#F8F9FA`
- Lisa selge reegel: **"Hero-sektsioonid KASUTAVAD pastel- või valgeid taustu. Tugevat küllastunud lilla-oranž gradienti kasuta AINULT väikestel CTA-nuppudel või badge'idel, MITTE suurte sektsioonide taustana."**

**4. Hero-sektsiooni JSON-mall (sektsioon 9)** — kirjuta ümber:
- Tausta värv: `#FFFFFF` (klassikaline) või pastel-gradient
- Pealkirja värv: `#1A1A1A` (must), mitte valge
- Kehateksti suurus: **20px** (mitte 18px ja kindlasti mitte 16px)
- Kehateksti värv: `#1A1A1A`

**5. Kursuste kaardi mall (sektsioon 9)** — kirjuta ümber:
- Kehateksti suurus muutu 14px → **18px**
- Värv jääb `#1A1A1A`

**6. Sektsioon 9 "Üldised reeglid"** — paranda punkt 7:
- Vana: "Kasuta gradiente hero-sektsioonides ja CTA-des"
- Uus: "Kasuta tugevaid gradiente AINULT väikestel CTA-nuppudel. Hero ja suurte sektsioonide taustana kasuta pastel-toonid või valge."
- Lisa punkt: "Kogu kehatekst on min 18px ja must (#1A1A1A)."

**7. KKK (sektsioon 12)** — paranda kaks vastust:
- "Milline taustavärv?" → eemalda "Hero-sektsioonid kasutavad gradient-taustu", asenda: "Hero kasutab valget või pastel-tausta. Tugev gradient on AINULT nuppudel."
- Lisa uus K: "Mis on miinimum teksti suurus?" → V: "18px kehatekstile, alati. 14–16px on KEELATUD lõikude jaoks."
- Lisa uus K: "Kas tohib kasutada halli teksti?" → V: "Ei. Kehatekst on alati #1A1A1A must. Halli ei kasutata."

### B. `public/brand/brand-config.json`

**Tüpograafia `sizes` blokk (read 64–73):**
- `body`: 16px → **18px**
- `bodyLarge`: 18px → **20px**
- `small`: 14px → **16px** + lisa `"usage": "AINULT meta/caption, mitte kehatekst"`
- Lisa uus väli `"minBodySize": "18px"` ja `"bodyColor": "#1A1A1A"` typography alla

**Gradients blokk (read 41–47):**
- Märgi `purpleToOrange.usage`: "AINULT väikesed CTA-nupud, mitte hero-tausta"
- Lisa uus eelistatud `heroBackground`: pastel-gradient või valge

**Lisa uus `rules` blokk** ülaossa (pärast `lastUpdated`):
```json
"rules": {
  "minBodyTextSize": "18px",
  "bodyTextColor": "#1A1A1A",
  "forbiddenBodyColors": ["#666", "#888", "#999", "gray", "muted"],
  "heroBackground": "Kasuta valget või pastel-gradienti, MITTE tugevat lilla-oranž gradienti",
  "strongGradientUsage": "Ainult väikesed CTA-nupud ja badge'id"
}
```

### C. `public/api/brand-config.json`
Sama muudatus mis B (kontrolli, kas need on identsed failid või erinevad — kui identsed, siis dubleeri muudatused).

### D. `bumpVersion` mõlemas JSON-is
- `version`: "1.2" → **"1.3"**
- `lastUpdated`: "2026-03-24" → tänane kuupäev

Markdowni jalusesse uuenda ka kuupäev (rida 564).

---

## Mida see ei muuda
- React UI lehte (Index.tsx) — Kopeeri AI-le nupp ise töötab, ainult sisu mida ta kopeerib paraneb
- SVG-faile, logosid, struktuuri
- Värvipaletti ennast (lilla #A2146A, oranž #EF8005 jäävad)
