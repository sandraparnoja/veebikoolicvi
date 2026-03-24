

# Veebikool CVI — API Endpoint + Downloads leht + Elementor muutujad

## Mida teeme

1. **`/api/brand-config` endpoint** — kuna see on client-side React rakendus (ilma backendita), loome selle **staatilise JSON failina** `public/api/brand-config.json`, mis on avalikult ligipääsetav URL-i `/api/brand-config.json` kaudu. See sisaldab Elementor CSS muutujate nimesid (`--e-global-color-*`, `--e-global-typography-*`) kõigi värvide ja fontide jaoks.

2. **`/downloads` leht** — uus React leht, kus:
   - "Laadi alla kõik CVI failid (ZIP)" nupp (kasutab JSZip teeki kliendipoolseks ZIP-genereerimiseks)
   - Eraldi allalaadimislingid: logo PNG, logomark PNG, kõik taustapildid, brand-config.json
   - Kõik SVG-d allalaetavad

3. **Pildifailid juba avalikud** — `public/brand/` kaustas on logo, logomark ja taustad juba olemas. Lisame puuduvad viited ja tagame korrektsed URL-id.

4. **brand-config.json täiustamine** — lisame:
   - Elementor muutujate nimed igale värvile ja fondile
   - Avalikud URL-id (suhteline tee) kõigile logodele ja taustadele
   - Spacing ja border-radius väärtused (juba olemas `elementorGuidelines` all, aga struktureerime ümber)

## Tehniline teostus

### Uued failid
- `public/api/brand-config.json` — laiendatud JSON koos Elementor muutujatega
- `src/pages/Downloads.tsx` — allalaadimiste leht

### Muudetavad failid
- `src/App.tsx` — lisame `/downloads` route
- `public/brand/brand-config.json` — lisame Elementor muutujad ja avalikud URL-id

### Sõltuvused
- **JSZip** — kliendipoolne ZIP-genereerimine (npm pakett)

### brand-config.json struktuur (täiustatud)
```text
colors.primary.purple:
  hex: "#A2146A"
  elementorVar: "var(--e-global-color-primary)"
  
typography.headingFont:
  family: "Nunito Sans"
  elementorVar: "var(--e-global-typography-primary)"

logos:
  full: { url: "/brand/logos/veebikool-logo.png" }
  logomark: { url: "/brand/logos/veebikool-logomark.png" }

backgrounds:
  juhtimine: { url: "/brand/backgrounds/juhtimine-bg.png" }
  ...
```

### Downloads lehe ülesehitus
- Hero sektsioon brändivärvidega
- "Laadi alla kõik (ZIP)" suur nupp
- Kategooriate kaupa: Logod, Taustad, Kujunduselemendid (SVG), brand-config.json
- Iga faili kõrval allalaadimise ikoon

