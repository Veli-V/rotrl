---
name: process_session
description: Päätyönkulku uuden pelisession muistiinpanojen jalostamiseksi ja maailman päivittämiseksi
---

# Työnkulku: Pelisession Muistiinpanojen Käsittely (`process_session`)

Tämä on pääohjeistus uuden pelisession ja sen muistiinpanojen käsittelyyn. Prosessi suoritetaan kolmessa peräkkäisessä vaiheessa käyttäen erikoistuneita aliagentteja tai vaiheittaisia prompteja.

---

## Vaihe 1: Raw-vaihe (OCR & Transkriptio)
- **Käytä agenttia / promptia:** [01_ocr_transcriber.md](file:///.agents/prompts/01_ocr_transcriber.md)
- **Tehtävä:** Lue uudet kuvat/PDF:ät kansiosta `00_Raw/` ja luo `00_Raw/sessio_X_raw.md`.
- **Tarkistus:** Varmista, että raakateksti on tallennettu ilman muutoksia ennen seuraavaan vaiheeseen siirtymistä.

---

## Vaihe 2: Sessions-vaihe (Jalostus & Editointi)
- **Käytä agenttia / promptia:** [02_session_editor.md](file:///.agents/prompts/02_session_editor.md)
- **Tehtävä:** Jalosta `00_Raw/sessio_X_raw.md` puhdistetuksi tiedostoksi `content/01_Sessions/Sessio X - [Otsikko].md`.
- **Tarkistus:** Varmista selkeä suomen kieli, Pathfinder-nimet, ensimmäisen maininnan `[[Wikilinkitykset]]` ja `01_Sessions/Index.md` päivittyminen.

---

## Vaihe 3: World-vaihe (Maailman & Loren Päivittäminen)
- **Käytä agenttia / promptia:** [03_world_updater.md](file:///.agents/prompts/03_world_updater.md)
- **Tehtävä:** Käy läpi uusi sessiotiedosto ja päivitä `content/02_World/`-kansion entiteetit, maininnat/backlinkit, indeksit, aikajana sekä pelaajahahmojen kohokohdat.
- **Tarkistus:** Varmista, että kaikkien mainittujen hahmojen/paikkojen sivuille on lisätty mainintalinkki uuteen sessioon.

---

## Yhteenveto Käyttäjälle
Kun kaikki kolme vaihetta on suoritettu, raportoi käyttäjälle:
1. Luodun session nimi ja käsitelty raakamateriaali.
2. Luodut tai päivitetyt hahmo-, paikka- ja loredokumentit.
3. Päivitetyt aikajanamerkinnät ja hahmostatukset.
