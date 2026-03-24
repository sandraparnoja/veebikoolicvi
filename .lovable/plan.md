

# Plaan: Masinloetav brändifailide pakett Claude Code jaoks

## Probleem
Claude Code ei pääse veebilehe kaudu ligi SVG-failidele, värvikoodidele ega pildiressurssidele. Ta vajab struktureeritud faile, mida saab otse lugeda ja kasutada Elementor JSON mallide genereerimiseks.

## Lahendus
Loon `public/brand/` kausta, kuhu paigutatakse kõik brändiressursid masinloetavas formaadis:

### 1. `public/brand/brand-config.json`
Täielik brändijuhis JSON-formaadis:
- Kõik värvid (põhi, pastel, aktsent) HEX + RGB kujul
- Fondid ja tüpograafia reeglid (suurused, kaalud)
- Gradientide definitsioonid (CSS-valmis)
- Elementide nimekiri koos viitega SVG-failidele
- Taustapiltide nimekiri koos failinimede ja kategooriatega
- Logode nimekiri

### 2. `public/brand/svg/` — Kõik SVG-d eraldi failidena
Iga kujunduselement salvestatakse eraldi `.svg` failina:
- `curved-arrow-right-purple.svg`, `curved-arrow-right-orange.svg`
- `badge-uus.svg`, `badge-tasuta.svg`, `badge-populaarne.svg` jne
- `blob-purple.svg`, `wave-purple.svg`, `frame-solid-purple.svg` jne
- Kõik ~45 elementi `DesignElements.tsx`-st

### 3. `public/brand/logos/` — Logod
- Kopeeritakse `src/assets/` logofailid siia (avalikult ligipääsetav)

### 4. `public/brand/backgrounds/` — Taustad
- Kopeeritakse `src/assets/` taustapildid siia

### 5. `public/brand/README.md`
Lühijuhend Claude Code'ile:
- Kuidas lugeda `brand-config.json`
- Kuidas viidata SVG/PNG failidele
- Elementor JSON malli struktuur ja näide

## Tehniline teostus
- SVG-d genereeritakse `DesignElements.tsx` komponentidest staatiliste failidena
- `brand-config.json` sisaldab kõiki värve, fonte ja failiviiteid
- Kõik failid `public/` kaustas = ligipääsetavad URL-i kaudu (nt `https://site.com/brand/svg/blob-purple.svg`)
- Claude Code saab lugeda nii failisüsteemist otse kui ka URL-i kaudu

## Tulemus
Claude Code saab:
1. Lugeda `brand-config.json` → teab kõiki värve, fonte, gradiente
2. Kasutada SVG-faile otse Elementor JSON-is piltidena
3. Genereerida Elementor JSON maandumislehti, mis järgivad CVI-d täpselt

