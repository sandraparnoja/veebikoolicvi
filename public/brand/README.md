# Veebikool Brand Package — Claude Code juhend

## Kiirstart

See kaust sisaldab kõiki Veebikool brändiressursse masinloetavas formaadis.

### Failide struktuur
```
public/brand/
├── brand-config.json      ← PEAMINE FAIL: kõik värvid, fondid, gradientid, failviited
├── README.md              ← See juhend
├── svg/                   ← 45 SVG kujunduselementi
│   ├── curved-arrow-right-purple.svg
│   ├── badge-uus.svg
│   ├── blob-purple.svg
│   └── ...
├── logos/
│   ├── veebikool-logo.png       ← Täislogo
│   └── veebikool-logomark.png   ← Logomärk (ikoon)
└── backgrounds/
    ├── juhtimine-bg.png
    ├── juriidika-bg.png
    ├── turundus-bg.png
    ├── muuk-bg.png
    └── finantsid-bg.png
```

## Kuidas kasutada

### 1. Loe `brand-config.json`
See fail sisaldab:
- **colors** — kõik värvid HEX + RGB kujul koos kasutuskirjeldusega
- **gradients** — CSS-valmis gradient-definitsioonid
- **typography** — fondid, kaalud, suurused
- **logos/backgrounds/designElements** — failinimed ja kategooriad

### 2. Viita SVG-failidele
Kõik SVG-d on `svg/` kaustas. Kasuta neid Elementor JSON-is nii:
- Failitee: `brand/svg/[element-id].svg`
- URL: `https://[domain]/brand/svg/[element-id].svg`

### 3. Elementor JSON malli näide

```json
{
  "type": "section",
  "settings": {
    "background_background": "gradient",
    "background_color": "#A2146A",
    "background_color_b": "#EF8005",
    "background_gradient_angle": { "unit": "deg", "size": 135 },
    "padding": { "top": "80", "bottom": "80", "unit": "px" }
  },
  "elements": [
    {
      "type": "column",
      "settings": { "content_position": "center" },
      "elements": [
        {
          "type": "widget",
          "widgetType": "heading",
          "settings": {
            "title": "Õpi uusi oskusi",
            "typography_font_family": "Nunito Sans",
            "typography_font_weight": "800",
            "typography_font_size": { "unit": "px", "size": 48 },
            "title_color": "#FFFFFF"
          }
        },
        {
          "type": "widget",
          "widgetType": "text-editor",
          "settings": {
            "editor": "<p>Veebikool pakub kvaliteetseid koolitusi.</p>",
            "typography_font_family": "Overpass",
            "typography_font_weight": "400",
            "typography_font_size": { "unit": "px", "size": 18 },
            "text_color": "#FFFFFF"
          }
        },
        {
          "type": "widget",
          "widgetType": "button",
          "settings": {
            "text": "Alusta õppimist",
            "background_color": "#EF8005",
            "button_text_color": "#FFFFFF",
            "typography_font_family": "Nunito Sans",
            "typography_font_weight": "700",
            "border_radius": { "top": "50", "right": "50", "bottom": "50", "left": "50", "unit": "px" },
            "button_box_shadow_box_shadow": { "horizontal": 0, "vertical": 4, "blur": 12, "color": "rgba(162, 20, 106, 0.2)" }
          }
        },
        {
          "type": "widget",
          "widgetType": "image",
          "settings": {
            "image": { "url": "/brand/svg/curved-arrow-right-orange.svg" },
            "image_size": "custom",
            "width": { "unit": "px", "size": 80 }
          }
        }
      ]
    }
  ]
}
```

## Brändivärvilühend

| Nimi | HEX | Kasutus |
|------|------|---------|
| Purple | `#A2146A` | Põhivärv, pealkirjad, CTA |
| Orange | `#EF8005` | Sekundaarne, rõhutused |
| Dark Purple | `#7B0F50` | Hoverid, jalused |
| Pastel Pink | `#ECD9E4` | Taustad, kaardid |
| Pastel Blue | `#EFF4F9` | Neutraalsed sektsioonid |
| Green | `#369D69` | Edu, populaarne |
| Red | `#FD3D3D` | Live, vead |
| Blue | `#4A90D9` | Info, soovitused |
| Must tekst | `#1A1A1A` | Kehatekst |

## Fondid

- **Pealkirjad**: `Nunito Sans` (800/700/600)
- **Kehatekst**: `Overpass` (400/600)
- Google Fonts lingid on `brand-config.json`-is
