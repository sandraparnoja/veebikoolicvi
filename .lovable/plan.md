## Eesmärk

Lahendada probleem, kus välised AI tööriistad (Claude, ChatGPT jt) ei saa brändifaile (logod, SVG-d, taustad) automaatselt kätte — nad näevad ainult `brand-config.json` ja `veebikool-ai-juhend.md`.

## Mida teen

### 1. ZIP-pakk kõikidest brändifailidest
- Loon skripti `scripts/build-brand-kit-zip.mjs`, mis pakib kokku:
  - `public/brand/logos/` (logo + logomärk)
  - `public/brand/svg/` (130+ kujunduselementi)
  - `public/brand/backgrounds/` (5 kategooria tausta)
  - `brand-config.json` + `veebikool-ai-juhend.md` + `README.md`
- Väljund: `public/brand/veebikool-brand-kit.zip` (üks fail, mille AI saab alla laadida ja lahti pakkida)

### 2. Asset URL-i loend AI juhendisse
Lisan `veebikool-ai-juhend.md` lõppu uue sektsiooni **"Asset URL-id"**:
- Baas-URL: `https://veebikoolicvi.lovable.app/brand/`
- Logod: täislogo + logomärk PNG-na
- Kõikide 130+ SVG-de täielik URL-i loend (grupitud kategooriate kaupa: badge, ikoon, joon, raam, kuju jne)
- Taustapildid 5 kategooriale
- ZIP-paki link

### 3. Index.tsx — uuendan AI ligipääsu sektsiooni
- "Kopeeri AI-le" nupp jääb (kopeerib markdown-juhendi, mis nüüd sisaldab kõiki URL-e)
- Lisan kolmanda kaardi **"Lae alla brändipakk (ZIP)"** koos selgitusega, et AI tööriistad saavad selle alla laadida ja lahti pakkida
- Selgem juhend kasutajale: "Kui AI ei näe assette → jaga ZIP-i linki või kopeeri juhend (sisaldab kõiki URL-e)"

### 4. Downloads.tsx
- Lisan uue sektsiooni "Brändipakk AI-le" → ZIP allalaadimise nupp + lühike juhend

## Failid

**Loon:**
- `scripts/build-brand-kit-zip.mjs` (Node + adm-zip)
- `public/brand/veebikool-brand-kit.zip` (genereeritud)

**Muudan:**
- `public/brand/veebikool-ai-juhend.md` (lisan Asset URL-id)
- `src/pages/Index.tsx` (kolmas AI-kaart + selgemad juhised)
- `src/pages/Downloads.tsx` (ZIP-i nupp)

## Tulemus
AI tööriistad saavad nüüd brändifailid kahel viisil:
1. **Lihtne**: kasutaja kopeerib markdown-juhendi → AI näeb kõiki URL-e ja saab `fetch` teha
2. **Põhjalik**: kasutaja jagab ZIP-i linki → AI laeb alla ja näeb kõiki faile lokaalselt
