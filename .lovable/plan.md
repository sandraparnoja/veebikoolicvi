

## Plaan: Eemalda Sivi eksport, lisa "Kopeeri AI-le" funktsioon

### Mida teeme
1. Eemaldame Sivi ekspordi nupu ja edge functioni
2. Asendame selle **"Kopeeri AI-le"** nupuga, mis kopeerib kogu brändi info (värvid, fondid, toon, juhised) lõikelauale formaadis, mida saab otse Claude'ile, Replitile vms kleepida
3. Lisame ka **avaliku API endpointi** — `brand-config.json` on juba `public/` kaustas ligipääsetav, aga lisame lehele selge "API URL" sektsiooni koos kopeerimise nupuga

### Sammud

**1. Eemalda Sivi edge function**
- Kustuta `supabase/functions/export-brand-to-sivi/index.ts`

**2. Uuenda Index.tsx**
- Eemalda "Ekspordi Sivisse" nupp ja `handleExportToSivi` loogika
- Eemalda `supabase` import (kui mujal ei kasutata)
- Lisa kaks uut nuppu:
  - **"Kopeeri AI-le"** — kopeerib lõikelauale `veebikool-ai-juhend.md` sisu (markdown formaadis brändijuhend, mis on juba AI-dele optimeeritud)
  - **"API link"** — kopeerib published URL-i `https://veebikoolicvi.lovable.app/brand/brand-config.json`

**3. Lisa "AI ligipääs" sektsioon lehele**
- Uus sektsioon kujunduselementide all:
  - Selgitab, et brändi andmed on masinloetavad
  - Näitab API URL-i koos kopeerimisnupuga
  - Näitab AI juhendi eelvaadet koos "Kopeeri kõik" nupuga
  - Mainib, et saab kasutada Claude, ChatGPT, Replit, Cursor jt tööriistadega

### Tehniline detail
- `public/brand/veebikool-ai-juhend.md` (564 rida) on juba olemas ja sisaldab täielikku AI-le optimeeritud brändijuhendit
- `public/api/brand-config.json` ja `public/brand/brand-config.json` on juba avalikult ligipääsetavad — API võtit pole vaja, sest need on staatilised failid
- Kopeerimine toimub `navigator.clipboard.writeText()` kaudu, API võtit pole tarvis

