

## Plaan: Veebikool brändi eksport Sivi API-sse

### Mida teeme
Lisame CVI lehele nupu "Ekspordi Sivisse", mis saadab sinu brändi andmed (värvid, logo, fondid, kirjeldus) Sivi API `set-brand-manual` endpointi. Pärast seda tunneb Sivi sinu brändi ja genereerib disaine sinu stiilis.

### Sammud

**1. Sivi API võtme salvestamine**
- Küsime sinult Sivi API võtit (saad selle aadressilt https://instant.sivi.ai/#/settings)
- Salvestame selle turvalise secretina

**2. Edge function: `export-brand-to-sivi`**
- Loeme brändi andmed request bodyst
- Saadame Sivi API-sse `POST https://connect.sivi.ai/api/prod/v2/general/set-brand-manual`
- Header: `sivi-api-key: <secret>`
- Request body mappib sinu brand-config.json andmed Sivi formaati:

```text
brand-config.json          →  Sivi API
─────────────────────────────────────────
brand: "Veebikool"         →  brandName
colors.primary.*           →  brandColors
typography.headingFont     →  brandFonts
logos[0].file               →  brandLogo (avalik URL)
```

**3. UI nupp Index.tsx lehel**
- Lisame "Ekspordi Sivisse" nupu CVI lehe ülaossa
- Nupp kutsub edge functionit
- Näitab toast-teadet edu/vea korral

### Tehniline detail
- Sivi `set-brand-manual` endpoint ootab: `brandName`, `brandDescription`, `brandColors` (hex massiiv), `brandFonts` (massiiv), `brandLogo` (URL), `brandUrl`
- Logo URL peab olema avalikult ligipääsetav — kasutame sinu published URL-i: `https://veebikoolicvi.lovable.app/brand/logos/veebikool-logo.png`
- Eeldab Lovable Cloud olemasolu edge function jaoks

