

## Plaan: Gradient-taustade heledamaks muutmine

Praegu on gradient-taustad (read 278-292) tugevate, küllastunud värvidega (nt `#A2146A → #EF8005`). Muudan need heledateks pastellseteks versioonideks, mis sobivad kokku ülejäänud lehe valge/heleda stiiliga.

### Muudatused failis `src/pages/Index.tsx` (read 278-285)

Asendan praegused gradientvärvid heledamate variantidega:

| Nimi | Praegu | Uus |
|------|--------|-----|
| Peamine | `#A2146A → #EF8005` | `#ECD9E4 → #FFC683` |
| Tume | `#7B0F50 → #A2146A` | `#E8D0DE → #ECD9E4` |
| Soe | `#EF8005 → #FFC683` | `#FFC683 → #FFF0DC` |
| Sinine | `#A2146A → #4A90D9` | `#ECD9E4 → #EFF4F9` |
| Roosa | `#A2146A → #ECD9E4` | `#F3E4ED → #FAF5F8` |
| Roheline | `#369D69 → #DAF8E9` | `#DAF8E9 → #F0FBF5` |

Tulemus: kõik gradient-taustad on heledad pastelltoonides, kooskõlas lehe üldise minimalistliku stiiliga.

