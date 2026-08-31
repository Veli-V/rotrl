---
id: GEMINI
aliases: []
tags: []
---

# Rise of the Runelords - Muistiinpanojen käsittelyohje

Tämä repositorioportaali käyttää moduloiatua moniagenttiarkkitehtuuria muistiinpanojen ja pelimaailman automaattiseen jalostamiseen sekä tiedonhakuun.

## Orkestrointi ja Työnkulku

Kun käyttäjä pyytää käsittelemään uuden pelisession muistiinpanot, noudata [process_session.md](file:///.agents/workflows/process_session.md) -työnkulkuohjetta.

Käsittely koostuu kolmesta erillisestä vaiheesta, jotka voidaan suorittaa aliagenteilla (`invoke_subagent`) tai vaiheittaisilla tehtävillä:

1. **[01_ocr_transcriber](file:///.agents/prompts/01_ocr_transcriber.md):** Luetaan raakamateriaali kansiosta `00_Raw/` ja luodaan `sessio_X_raw.md`.
2. **[02_session_editor](file:///.agents/prompts/02_session_editor.md):** Jalostetaan raakatekstistä puhdas `content/01_Sessions/Sessio X - [Otsikko].md`, korjataan nimet (esim. Nualia -> Nelli) ja lisätään wikilinkit.
3. **[03_world_updater](file:///.agents/prompts/03_world_updater.md):** Päivitetään `content/02_World/`-kansion NPC:t, paikat, maininnat (backlinkit), indeksien hahmostatukset, aikajana sekä pelaajahahmojen kohokohdat.

## Haku ja Tietopalvelu
4. **[04_search_agent](file:///.agents/prompts/04_search_agent.md):** Kun käyttäjä haluaa etsiä tietoa tietystä hahmosta, paikasta tai tapahtumasta (esim. `haku-agentti Makkara`), käytetään tätä agenttia lukemaan indeksit ja entiteettisivut sekä antamaan tiivistelmä ja vastaamaan jatkokysymyksiin.

## Yleiset Konventiot
- **Kieli:** Suomi.
- **Linkitys:** Käytä muotoa `[[TiedostonNimi]]`.
- **Nimeäminen:** Käytä virallisia Pathfinder (Rise of the Runelords) nimenkirjoitusasuja.
- **Rakenne:** Säilytä kansiorakenne `00_Raw`, `content/01_Sessions`, `content/02_World`.
- **Primäärinen totuus:** Game Masterin merkinnät (`GM_appendix`) ovat ensisijaisia totuuksia mahdollisissa ristiriidoissa.
