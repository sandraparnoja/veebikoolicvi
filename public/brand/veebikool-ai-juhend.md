# Veebikool CVI — Täielik AI juhend

> See juhend on mõeldud AI-le (Claude, ChatGPT, Copilot jt), et genereerida Veebikool brändile vastavaid maandumislehti, e-kirju, bännereid ja muid materjale.

---

## 1. Brändi ülevaade

**Veebikool** on Eesti suurim e-õppe platvorm, mis pakub koolitusi ettevõtjatele ja spetsialistidele. Bränd on professionaalne, soe ja kutsuv — mitte korporatiivne ega külm.

### Toon ja stiil
- **Sõbralik ja julgustav** — "Sa saad hakkama!"
- **Professionaalne, aga mitte formaalne** — kasuta "sina" vormi
- **Selge ja konkreetne** — väldi ähmast korporatiivset keelt
- **Eestikeelne** — kõik tekstid eesti keeles, v.a tehniline terminoloogia

---

## 2. Värvid

### Põhivärvid
| Nimi | HEX | RGB | Elementor muutuja | Kasutus |
|------|------|-----|-------------------|---------|
| Purple (põhivärv) | `#A2146A` | 162, 20, 106 | `var(--e-global-color-primary)` | Logo, pealkirjad, CTA nupud, peamine rõhk |
| Orange (sekundaarne) | `#EF8005` | 239, 128, 5 | `var(--e-global-color-secondary)` | Ikoonid, rõhuasetused, hover-efektid |

### Laiendatud värvid
| Nimi | HEX | RGB | Elementor muutuja | Kasutus |
|------|------|-----|-------------------|---------|
| Dark Purple | `#7B0F50` | 123, 15, 80 | `var(--e-global-color-dark-purple)` | Hoverid, jalused, tumedad sektsioonid |
| Light Purple | `#C94D94` | 201, 77, 148 | `var(--e-global-color-light-purple)` | Heledam variant, ääred |

### Pastelltoonid (taustad)
| Nimi | HEX | RGB | Elementor muutuja | Kasutus |
|------|------|-----|-------------------|---------|
| Pastel Pink | `#ECD9E4` | 236, 217, 228 | `var(--e-global-color-pastel-pink)` | Kaartide taustad, pehmed sektsioonid |
| Pastel Orange | `#FFC683` | 255, 198, 131 | `var(--e-global-color-pastel-orange)` | Esiletõstmised |
| Pastel Blue | `#EFF4F9` | 239, 244, 249 | `var(--e-global-color-pastel-blue)` | Neutraalsed sektsioonid, vaikimisi taust |
| Pastel Green | `#DAF8E9` | 218, 248, 233 | `var(--e-global-color-pastel-green)` | Edusõnumid, positiivne tagasiside |

### Rõhuvärvid
| Nimi | HEX | RGB | Elementor muutuja | Kasutus |
|------|------|-----|-------------------|---------|
| Accent Orange | `#E95A0C` | 233, 90, 12 | `var(--e-global-color-accent-orange)` | Hoiatused, esiletõstmised |
| Red | `#FD3D3D` | 253, 61, 61 | `var(--e-global-color-accent-red)` | LIVE badge, vead, kiireloomulised |
| Green | `#369D69` | 54, 157, 105 | `var(--e-global-color-accent-green)` | Edu, populaarsus, kinnitused |
| Blue | `#4A90D9` | 74, 144, 217 | `var(--e-global-color-accent-blue)` | Info, soovitused, lingid |

### Neutraalsed
| Nimi | HEX | Kasutus |
|------|------|---------|
| Valge | `#FFFFFF` | Põhitaust |
| Hele taust | `#F8F9FA` | Alternatiivne sektsioonitaust |
| Must tekst | `#1A1A1A` | Kehatekst, lõigud |

---

## 3. Gradiendid ja taustad

> ⚠️ **TÄHTIS REEGEL:** Hero-sektsioonid ja suured sektsioonide taustad KASUTAVAD pastel-toonid või valget. **Tugevat küllastunud lilla→oranž gradienti ÄRA kasuta** suurte sektsioonide taustana — see sobib AINULT väikestele CTA-nuppudele või badge'idele. Visuaalne stiil on minimalistlik ja puhas, palju valget ruumi, must tekst loetavuse tagamiseks.

### ✅ EELISTATUD hero- ja sektsioonitaustad

```css
/* Vaikimisi: puhas valge */
background: #FFFFFF;

/* Alternatiiv: hele neutraalne */
background: #F8F9FA;

/* Pehme pastel-roosa hero */
background: linear-gradient(135deg, #ECD9E4 0%, #FFFFFF 100%);

/* Pehme pastel-sinine hero */
background: linear-gradient(135deg, #EFF4F9 0%, #FFFFFF 100%);

/* Pastel mix */
background: linear-gradient(135deg, #ECD9E4 0%, #EFF4F9 100%);

/* Edu-sektsioon */
background: linear-gradient(135deg, #DAF8E9 0%, #FFFFFF 100%);
```

### ✅ Lubatud AINULT väikestel CTA-nuppudel ja badge'idel

```css
/* CTA-nupp (mitte sektsiooni taust!) */
background: linear-gradient(135deg, #A2146A 0%, #EF8005 100%);

/* Tume nupp */
background: linear-gradient(135deg, #A2146A 0%, #7B0F50 100%);

/* Oranž esiletõstmine (väike element) */
background: linear-gradient(135deg, #EF8005 0%, #FFC683 100%);
```

### ❌ ÄRA TEE
- ❌ Ära pane tugevat lilla→oranž gradienti hero-sektsiooni taustaks
- ❌ Ära kasuta küllastunud lilla→sinine gradienti suurte alade taga
- ❌ Ära kata tervet sektsiooni `#A2146A` või `#EF8005` ühtlaselt — need värvid on rõhuasetuste jaoks

---

## 4. Tüpograafia

> ⚠️ **MIINIMUM kehateksti suurus on 18px.** Ära KUNAGI kasuta 14px ega 16px lõikudele, kirjeldustele, CTA-alateksti, kursuste kirjeldustele ega muule kehatekstile. 14–16px on lubatud AINULT badge-tekstidele, ajatemplitele ja meta-infole (nt "5 min lugemist").

### Fondid
| Kasutus | Font | Google Fonts | Elementor muutuja |
|---------|------|-------------|-------------------|
| Pealkirjad (H1–H6), nupud | **Nunito Sans** | [Link](https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap) | `var(--e-global-typography-primary-font-family)` |
| Kehatekst, lõigud | **Overpass** | [Link](https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;600;700&display=swap) | `var(--e-global-typography-text-font-family)` |

### Suurused
| Element | Suurus | Kaal | Reavahemik | Font |
|---------|--------|------|------------|------|
| H1 | 48px | 800 (ExtraBold) | 1.2 | Nunito Sans |
| H2 | 36px | 700 (Bold) | 1.25 | Nunito Sans |
| H3 | 28px | 700 (Bold) | 1.3 | Nunito Sans |
| H4 | 22px | 600 (SemiBold) | 1.35 | Nunito Sans |
| **Kehatekst (baas)** | **18px** | 400 (Regular) | 1.6 | Overpass |
| Kehatekst suur | 20px | 400 (Regular) | 1.6 | Overpass |
| Meta / caption (AINULT) | 16px | 400 (Regular) | 1.5 | Overpass |
| Nupu tekst | 18px | 700 (Bold) | 1 | Nunito Sans |

---

## 4.1 Värvi- ja kontrastireeglid (KOHUSTUSLIK)

> AI peab neid reegleid järgima IGAS genereeritud kujunduses. Need on tähtsamad kui esteetilised eelistused.

### ✅ TEE
- **Kehatekst on alati `#1A1A1A` (must)** valgel või heledal taustal
- Pealkirjad: `#1A1A1A` (must) või `#A2146A` (lilla brändivärv)
- Valgel gradient-taustal (nt nupp): `#FFFFFF`
- Hoia WCAG AA kontrast: vähemalt **4.5:1** normaaltekstile

### ❌ ÄRA TEE
- ❌ **ÄRA KASUTA halli kehateksti** — keelatud on `#666`, `#777`, `#888`, `#999`, `#aaa`, `gray-400`, `gray-500`, `gray-600`, `text-muted`, `text-secondary` jms
- ❌ Ära vähenda teksti kontrasti `opacity: 0.6/0.7/0.8` kaudu — kui tekst on vähem oluline, tee seda väiksemaks (kuid ikka min 18px) või kasuta hierarhiat suuruse/kaalu kaudu, mitte värvi tuhmistamise teel
- ❌ Ära pane tumedat teksti tumedale taustale ega heledat heledale

---


---

## 5. Kujunduselemendid (SVG)

Kõik SVG-d asuvad kataloogis `/brand/svg/` ja on ligipääsetavad URL-i kaudu: `https://[domeen]/brand/svg/[id].svg`

### 5.1 Nooled (Arrows)
Kasuta maandumislehtedel sektsioonide vahel, CTA-de juures ja sammude näitamiseks.

| ID | Kirjeldus |
|----|-----------|
| `curved-arrow-right-purple` | Kaardus nool paremale (lilla) |
| `curved-arrow-right-orange` | Kaardus nool paremale (oranž) |
| `curved-arrow-left-purple` | Kaardus nool vasakule (lilla) |
| `curved-arrow-left-orange` | Kaardus nool vasakule (oranž) |
| `straight-arrow-purple` | Sirge nool (lilla) |
| `straight-arrow-orange` | Sirge nool (oranž) |
| `wavy-arrow-purple` | Laineline nool (lilla) |
| `wavy-arrow-orange` | Laineline nool (oranž) |
| `dashed-curved-up-black` | Katkendlik kaardus nool üles (must) |
| `dashed-curved-up-purple` | Katkendlik kaardus nool üles (lilla) |
| `dashed-curved-up-orange` | Katkendlik kaardus nool üles (oranž) |
| `dashed-curved-down-black` | Katkendlik kaardus nool alla (must) |
| `dashed-loop-black` | Katkendlik silmusnool (must) |
| `dashed-loop-purple` | Katkendlik silmusnool (lilla) |
| `solid-curved-up-purple` | Pidev kaardus nool üles (lilla) |
| `solid-curved-up-orange` | Pidev kaardus nool üles (oranž) |
| `solid-curved-down-purple` | Pidev kaardus nool alla (lilla) |
| `straight-dashed-black` | Sirge katkendlik nool (must) |
| `diagonal-up-purple` | Diagonaalne nool üles (lilla) |
| `diagonal-down-orange` | Diagonaalne nool alla (oranž) |
| `bouncing-arrow-purple` | Põrkav nool (lilla) |
| `circle-arrow-purple` | Ringjas nool (lilla) |
| `spiral-arrow-orange` | Spiraalnool (oranž) |
| `zigzag-arrow-purple` | Siksak-nool (lilla) |
| `u-arrow-orange` | U-kujuline nool (oranž) |
| `s-curve-black` | S-kõver (must) |

### 5.2 Badge'id (Badges)
Kasuta kursuste kaartidel, hinnasiltidel ja esiletõstmistel. Kõik tekstid eesti keeles.

| ID | Tekst | Stiil |
|----|-------|-------|
| `badge-uus` | UUS | Solid (lilla taust) |
| `badge-tasuta` | TASUTA | Solid (roheline taust) |
| `badge-populaarne` | POPULAARNE | Solid (lilla taust) |
| `badge-pro` | PRO | Solid (must taust) |
| `badge-live` | LIVE | Solid (punane taust) |
| `badge-soovitatud` | SOOVITATUD | Solid (sinine taust) |
| `badge-preemium` | PREEMIUM | Solid (gradient lilla-oranž) |
| `badge-bestseller` | BESTSELLER | Solid (oranž taust) |
| `badge-soodne` | SOODNE | Solid (roheline taust) |
| `badge-piiratud` | PIIRATUD | Solid (punane taust) |
| `badge-tunnistus` | TUNNISTUS | Solid (lilla taust) |
| `badge-ekspert` | EKSPERT | Solid (tume lilla taust) |
| `badge-algaja` | ALGAJA | Solid (sinine taust) |
| `badge-edasijoudnud` | EDASIJÕUDNUD | Solid (oranž taust) |
| `badge-interaktiivne` | INTERAKTIIVNE | Solid (lilla taust) |
| `badge-sertifikaat` | SERTIFIKAAT | Solid (kuldne taust) |
| `badge-outline-uus` | UUS | Outline (lilla ääris) |
| `badge-outline-tasuta` | TASUTA | Outline (roheline ääris) |
| `badge-outline-preemium` | PREEMIUM | Outline (gradient ääris) |
| `badge-dot-live` | ● LIVE | Dot-stiil (punane punkt) |
| `badge-dot-populaarne` | ● POPULAARNE | Dot-stiil (lilla punkt) |

### 5.3 Kujundid (Shapes)
Dekoratiivsed elemendid sektsioonide rikastamiseks.

| ID | Kirjeldus |
|----|-----------|
| `ring-purple-orange` | Poolik ring (lilla-oranž) |
| `ring-purple-blue` | Poolik ring (lilla-sinine) |
| `ring-green` | Poolik ring (roheline) |
| `dots-purple-orange` | Punktimuster (lilla-oranž) |
| `scatter-dots` | Hajutatud punktid |
| `blob-purple` | Orgaaniline kujund (lilla) |
| `blob-orange` | Orgaaniline kujund (oranž) |
| `blob-pink` | Orgaaniline kujund (roosa) |
| `blob2-purple` | Orgaaniline kujund 2 (lilla) |
| `blob3-orange` | Orgaaniline kujund 3 (oranž) |
| `wave-purple` | Laine (lilla) |
| `wave-orange` | Laine (oranž) |
| `airplane-purple` | Lennuk (lilla) |
| `airplane-orange` | Lennuk (oranž) |
| `star-orange` | Täht (oranž) |
| `star-purple` | Täht (lilla) |
| `hexagon-purple` | Kuusnurk (lilla) |
| `diamond-orange` | Romb (oranž) |
| `cross-purple` | Rist (lilla) |
| `triangle-orange` | Kolmnurk (oranž) |
| `semicircle-purple` | Poolring (lilla) |
| `concentric-purple` | Kontsentrilised ringid (lilla) |
| `highlight-purple` | Esiletõstmise joon (lilla) |
| `highlight-orange` | Esiletõstmise joon (oranž) |

### 5.4 Raamid (Frames)
Kasuta piltide, tsitaatide ja sisublokide ümber.

| ID | Kirjeldus |
|----|-----------|
| `frame-solid-purple` | Pidev raam (lilla) |
| `frame-solid-orange` | Pidev raam (oranž) |
| `frame-dashed-purple` | Katkendlik raam (lilla) |
| `frame-dashed-orange` | Katkendlik raam (oranž) |
| `frame-double-purple` | Topeltraam (lilla) |
| `frame-rounded-purple` | Ümarate nurkadega raam (lilla) |
| `frame-rounded-orange` | Ümarate nurkadega raam (oranž) |
| `frame-circle-orange` | Ümmargune raam (oranž) |
| `frame-circle-dashed-purple` | Katkendlik ümmargune raam (lilla) |
| `frame-circle-double-orange` | Topelt ümmargune raam (oranž) |
| `frame-dotted-purple` | Punktiirne raam (lilla) |
| `frame-ticket-purple` | Pileti-stiilis raam (lilla) |
| `frame-wavy-orange` | Laineline raam (oranž) |
| `frame-cornerdots-purple` | Nurgapunktidega raam (lilla) |
| `frame-squircle-orange` | Squircle raam (oranž) |
| `frame-shield-purple` | Kilbiraam (lilla) |
| `frame-heart-purple` | Südameraam (lilla) |
| `frame-hexagon-orange` | Kuusnurga raam (oranž) |

### 5.5 Ikoonid (Icons)
Hariduse ja äri teemadel. Kasuta funktsioonide, eeliste ja kategooriate juures.

| ID | Kirjeldus |
|----|-----------|
| `icon-book-purple` | Raamat (lilla) |
| `icon-book-green` | Raamat (roheline) |
| `icon-graduation-purple` | Lõputseremoonia müts (lilla) |
| `icon-graduation-blue` | Lõputseremoonia müts (sinine) |
| `icon-lightbulb-orange` | Lambipirn (oranž) |
| `icon-lightbulb-red` | Lambipirn (punane) |
| `icon-pencil-orange` | Pliiats (oranž) |
| `icon-pencil-purple` | Pliiats (lilla) |
| `icon-laptop-purple` | Sülearvuti (lilla) |
| `icon-laptop-orange` | Sülearvuti (oranž) |
| `icon-certificate-orange` | Sertifikaat (oranž) |
| `icon-chart-purple` | Diagramm (lilla) |
| `icon-calendar-orange` | Kalender (oranž) |
| `icon-clock-purple` | Kell (lilla) |
| `icon-target-orange` | Sihtmärk (oranž) |
| `icon-trophy-orange` | Karikas (oranž) |
| `icon-microphone-purple` | Mikrofon (lilla) |
| `icon-globe-blue` | Maakera (sinine) |
| `icon-rocket-orange` | Rakett (oranž) |
| `icon-users-purple` | Inimesed (lilla) |
| `icon-star-orange` | Täht (oranž) |
| `icon-heart-purple` | Süda (lilla) |
| `icon-play-orange` | Play-nupp (oranž) |
| `icon-checkbadge-green` | Kinnitatud märk (roheline) |
| `icon-mail-purple` | Kiri (lilla) |
| `icon-camera-orange` | Kaamera (oranž) |
| `icon-shield-green` | Kilp (roheline) |
| `icon-wifi-blue` | WiFi (sinine) |
| `icon-bell-orange` | Kell/teavitus (oranž) |
| `icon-settings-purple` | Seaded (lilla) |

### 5.6 Jooned (Lines)
Kasuta sektsioonide eraldajatena ja dekoratiivsete elementidena.

| ID | Kirjeldus |
|----|-----------|
| `dotted-purple` | Punktiirjoon (lilla) |
| `dotted-orange` | Punktiirjoon (oranž) |
| `dashed-purple` | Katkendlik joon (lilla) |
| `dashed-orange` | Katkendlik joon (oranž) |
| `solid-purple` | Pidev joon (lilla) |
| `solid-orange` | Pidev joon (oranž) |
| `double-purple` | Topeltjoon (lilla) |
| `gradient-line` | Gradient joon (lilla→oranž) |
| `wavy-line-purple` | Laineline joon (lilla) |
| `wave-line-blue` | Laineline joon (sinine) |
| `zigzag-line-orange` | Siksakjoon (oranž) |
| `dashdot-purple` | Kriips-punkt joon (lilla) |
| `scallop-purple` | Kaarekestega joon (lilla) |
| `thickthin-orange` | Jäme-õhuke joon (oranž) |
| `bracket-purple` | Sulgudega joon (lilla) |
| `crosshatch-purple` | Ristjoonega joon (lilla) |
| `arrow-line-orange` | Nooleotsadega joon (oranž) |

---

## 6. Logod

| Fail | URL | Kasutus |
|------|-----|---------|
| Täislogo (PNG) | `/brand/logos/veebikool-logo.png` | Päis, dokumentatsioon, esitlused |
| Logomärk (PNG) | `/brand/logos/veebikool-logomark.png` | Favicon, väikesed kohad, ikoon |

### Logo kasutamise reeglid
- ❌ Ära moonuta ega venita logot
- ❌ Ära muuda logo värve
- ❌ Ära kasuta logot liiga väikselt (min 80px laius)
- ✅ Kasuta valget tausta või heledal taustal
- ✅ Jäta logo ümber piisavalt vaba ruumi (min 16px igast küljest)

---

## 7. Taustapildid

Kategooriate illustratsioonid kursuste kaartidele ja maandumislehtedele.

| Kategooria | URL |
|-----------|-----|
| Juhtimine | `/brand/backgrounds/juhtimine-bg.png` |
| Juriidika | `/brand/backgrounds/juriidika-bg.png` |
| Turundus | `/brand/backgrounds/turundus-bg.png` |
| Müük | `/brand/backgrounds/muuk-bg.png` |
| Finantsid | `/brand/backgrounds/finantsid-bg.png` |

---

## 8. Spacing ja border-radius

### Vahekaugused
| Parameeter | Väärtus |
|-----------|---------|
| Sektsiooni padding | `80px 0` |
| Konteineri max laius | `1200px` |
| Kaardi padding | `32px` |
| Nupu padding | `16px 32px` |
| Elementide vahe (gap) | `24px` |

### Ümarad nurgad
| Element | border-radius |
|---------|--------------|
| Nupud | `50px` (pill-kujulised) |
| Kaardid | `16px` |
| Badge'id | `18px` |
| Pildid | `12px` |

### Varjud
| Element | CSS |
|---------|-----|
| Kaart | `0 4px 20px rgba(162, 20, 106, 0.08)` |
| Nupp | `0 4px 12px rgba(162, 20, 106, 0.2)` |
| Hover | `0 8px 30px rgba(162, 20, 106, 0.15)` |

---

## 9. Elementor JSON mallide genereerimine

### Üldised reeglid
1. Kasuta alati **Nunito Sans** pealkirjadele ja **Overpass** kehatekstile
2. Nupud on **pill-kujulised** (border-radius: 50px). Tugevaid gradiente kasuta AINULT nuppudel ja väikestel CTA-elementidel
3. Sektsioonide padding on vähemalt **80px** ülevalt ja alt
4. Kasuta **dekoratiivseid SVG-elemente** (nooled, kujundid) sektsioonide rikastamiseks
5. **Badge'id** kursuste kaartidel on kohustuslikud
6. Sektsioonitaustad: **valge (#FFFFFF), hele (#F8F9FA) või pastel-gradient** (#ECD9E4, #EFF4F9). MITTE tugev lilla→oranž gradient
7. **Kogu kehatekst on min 18px ja must (#1A1A1A)** — halli värvi ei kasutata kunagi
8. Hero-sektsioonid kasutavad valget või pastel-tausta, MITTE küllastunud gradienti

### Hero sektsiooni mall

```json
{
  "type": "section",
  "settings": {
    "background_background": "gradient",
    "background_color": "#ECD9E4",
    "background_color_b": "#FFFFFF",
    "background_gradient_angle": {"unit": "deg", "size": 135},
    "padding": {"top": "100", "bottom": "100", "unit": "px"}
  },
  "elements": [
    {
      "type": "column",
      "settings": {"content_position": "center", "_column_size": 60},
      "elements": [
        {
          "type": "widget",
          "widgetType": "heading",
          "settings": {
            "title": "Arenda oma oskusi professionaalsete koolitustega",
            "typography_font_family": "Nunito Sans",
            "typography_font_weight": "800",
            "typography_font_size": {"unit": "px", "size": 48},
            "title_color": "#1A1A1A"
          }
        },
        {
          "type": "widget",
          "widgetType": "text-editor",
          "settings": {
            "editor": "<p>Veebikool pakub üle 200 kvaliteetkoolituse juhtimise, turunduse, müügi ja finantside valdkonnas.</p>",
            "typography_font_family": "Overpass",
            "typography_font_size": {"unit": "px", "size": 20},
            "text_color": "#1A1A1A"
          }
        },

        {
          "type": "widget",
          "widgetType": "button",
          "settings": {
            "text": "Alusta õppimist →",
            "background_color": "#EF8005",
            "button_text_color": "#FFFFFF",
            "typography_font_family": "Nunito Sans",
            "typography_font_weight": "700",
            "border_radius": {"top": "50", "right": "50", "bottom": "50", "left": "50", "unit": "px"}
          }
        }
      ]
    },
    {
      "type": "column",
      "settings": {"_column_size": 40},
      "elements": [
        {
          "type": "widget",
          "widgetType": "image",
          "settings": {
            "image": {"url": "/brand/svg/curved-arrow-right-orange.svg"},
            "image_size": "custom",
            "width": {"unit": "px", "size": 120}
          }
        }
      ]
    }
  ]
}
```

### Kursuste kaardi mall

```json
{
  "type": "widget",
  "widgetType": "container",
  "settings": {
    "background_background": "classic",
    "background_color": "#FFFFFF",
    "border_radius": {"top": "16", "right": "16", "bottom": "16", "left": "16", "unit": "px"},
    "box_shadow_box_shadow": {"horizontal": 0, "vertical": 4, "blur": 20, "color": "rgba(162, 20, 106, 0.08)"},
    "padding": {"top": "0", "right": "0", "bottom": "24", "left": "0", "unit": "px"}
  },
  "elements": [
    {
      "type": "widget",
      "widgetType": "image",
      "settings": {
        "image": {"url": "/brand/backgrounds/turundus-bg.png"},
        "image_size": "full",
        "border_radius": {"top": "16", "right": "16", "bottom": "0", "left": "0", "unit": "px"}
      }
    },
    {
      "type": "widget",
      "widgetType": "image",
      "settings": {
        "image": {"url": "/brand/svg/badge-populaarne.svg"},
        "image_size": "custom",
        "width": {"unit": "px", "size": 100},
        "_position": "absolute",
        "_offset_y": {"unit": "px", "size": -12},
        "_offset_x": {"unit": "px", "size": 16}
      }
    },
    {
      "type": "widget",
      "widgetType": "heading",
      "settings": {
        "title": "Digitaalse turunduse kursus",
        "typography_font_family": "Nunito Sans",
        "typography_font_weight": "700",
        "typography_font_size": {"unit": "px", "size": 22},
        "title_color": "#1A1A1A",
        "padding": {"top": "16", "right": "24", "bottom": "0", "left": "24", "unit": "px"}
      }
    },
    {
      "type": "widget",
      "widgetType": "text-editor",
      "settings": {
        "editor": "<p>Õpi Google Ads, SEO, sotsiaalmeedia ja e-maili turundust.</p>",
        "typography_font_family": "Overpass",
        "typography_font_size": {"unit": "px", "size": 18},
        "text_color": "#1A1A1A",
        "padding": {"top": "8", "right": "24", "bottom": "16", "left": "24", "unit": "px"}
      }
    },
    {
      "type": "widget",
      "widgetType": "button",
      "settings": {
        "text": "Vaata lähemalt",
        "background_color": "#A2146A",
        "button_text_color": "#FFFFFF",
        "typography_font_family": "Nunito Sans",
        "typography_font_weight": "700",
        "border_radius": {"top": "50", "right": "50", "bottom": "50", "left": "50", "unit": "px"},
        "padding": {"top": "0", "right": "24", "bottom": "0", "left": "24", "unit": "px"}
      }
    }
  ]
}
```

---

## 10. Masinloetav konfiguratsioon

Täielik JSON-konfiguratsioon on saadaval aadressil:
```
/api/brand-config.json
```

See fail sisaldab kõiki värvide, fontide, logode, taustade, kujunduselementide ja spacing-väärtuste andmeid struktureeritud JSON-formaadis.

---

## 11. Failide URL-id

Kõik failid on avalikult ligipääsetavad:

```
# Logod
/brand/logos/veebikool-logo.png
/brand/logos/veebikool-logomark.png

# Taustapildid
/brand/backgrounds/juhtimine-bg.png
/brand/backgrounds/juriidika-bg.png
/brand/backgrounds/turundus-bg.png
/brand/backgrounds/muuk-bg.png
/brand/backgrounds/finantsid-bg.png

# SVG kujunduselemendid
/brand/svg/[element-id].svg

# JSON konfiguratsioon
/api/brand-config.json
/brand/brand-config.json
```

---

## 12. Korduma kippuvad küsimused AI-le

**K: Milline font pealkirjadele?**
V: Nunito Sans, kaal 700-800.

**K: Milline font kehatekstile?**
V: Overpass, kaal 400.

**K: Milliseid värve kasutada nuppudel?**
V: Põhiline CTA: lilla (#A2146A) või gradient (lilla→oranž). Sekundaarne: oranž (#EF8005).

**K: Kuidas kasutada badge'e?**
V: Lisa badge SVG kursuse kaardi ülanurka. Kasuta `badge-populaarne` populaarsetele, `badge-uus` uutele, `badge-tasuta` tasuta kursustele.

**K: Milline taustavärv kasutada?**
V: Vaheldumisi valge (#FFFFFF), pastel-roosa (#ECD9E4), pastel-sinine (#EFF4F9). Hero-sektsioonid kasutavad VALGET või pastel-tausta — MITTE tugevat lilla→oranž gradienti. Tugev gradient on AINULT väikestel CTA-nuppudel.

**K: Mis on miinimum teksti suurus?**
V: **18px kehatekstile, alati.** 14px ja 16px on KEELATUD lõikude, kirjelduste ja CTA-alateksti jaoks. 14–16px on lubatud AINULT badge-tekstidele ja meta-infole (timestamps, "5 min lugemist" jne).

**K: Kas tohib kasutada halli teksti?**
V: **Ei.** Kehatekst on alati `#1A1A1A` must. Halli värve (#666, #888, #999, gray-500, text-muted jne) ei kasutata kunagi — need rikuvad kontrasti ja loetavust. Hierarhiat tekita suuruse ja kaalu, mitte värvi tuhmistamise kaudu.

**K: Kuidas lisada dekoratiivseid elemente?**
V: Kasuta SVG nooli sektsioonide vahel, blob-kujundeid nurkades ja jooni eraldajatena. Ära kasuta liiga palju — 1-2 dekoratiivset elementi sektsiooni kohta.

---

*Versioon 1.3 · Genereeritud: 2026-04-26 · Veebikool CVI Brand Toolkit*
