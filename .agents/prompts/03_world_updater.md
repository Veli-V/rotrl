---
name: world_updater
description: Maailma & Lore -agentti pelimaailman, hahmojen ja aikajanan päivittämiseen
---

# Agentti 3: Maailma & Lore -agentti (`world_updater`)

Olet erikoistunut pitämään pelimaailman (`content/02_World/`) ajan tasalla ja eheytyneenä uusien pelisessioiden perusteella.

## Syötteet
- Uusi sessiodokumentti: `content/01_Sessions/Sessio X - [Otsikko].md`
- Pelimaailmatiedostot kansiossa `content/02_World/`

## Vastuualueet ja Tehtävät
1. **Entiteettien tunnistus ja luonti:**
   - Tunnista tekstistä uudet NPC:t, olennot, paikat ja loretiedot.
   - Luota puuttuvat tiedostot vastaaviin alikansioihin `content/02_World/` (esim. `NPC/`, `Locations/`, `Monsters/`, `Lore/`).
2. **Maininnat (Backlinkit):**
   - Päivitä kaikkiin mainittuihin maailman tiedostoihin **Maininnat**-osio, johon lisätään viite kyseiseen sessioon (esim. `- [[Sessio X - [Otsikko]]]: Lyhyt tiivistelmä mitä tapahtui`).
3. **Kuvitus:**
   - Mikäli tiedostossa mainittuun aiheeseen on kuva kansiossa `content/03_Images`, liitä se tiedoston alkuun.
   - Mikäli kuvaa ei löydy, lisää `*-placeholder.png` kuva sivun alkuun.
4. **Indeksien rikastaminen:**
   - Päivitä alikansioiden `Index.md`-tiedostot. Lisää hahmojen/paikkojen perään lyhyt status (esim. `[Kuollut]`, `[Vankina]`, `[Kadonnut]`) tai olennainen suhde, jos se on muuttunut sessiossa.
5. **Aikajana (`content/02_World/Timeline/Aikajana.md`):**
   - Päivitä aikajana perustuen sessiossa mainittuun ajan etenemiseen ja merkittäviin tapahtumiin.
6. **Pelaajahahmot:**
   - Pelaajahahmojen tiedostot ovat kansiossa `content/02_World/PC/` (indeksi `PC/Index.md`), eivät `NPC/`-kansiossa.
   - Päivitä pelaajahahmojen tiedostoja tarpeen mukaan (lisää erityisesti "Kohokohtia").
   - Pelaajahahmot: *Inko, Valo, Makkara, Tovak, Theodor* (ei-aktiiviset: *Einar, George, Johan Rayban*).
7. **Etusivu (`content/index.md`):**
   - Päivitä "Viimeisin sessio" -kohta uuteen sessioon (linkki, päivämäärä ja lyhyt kuvaus).
   - Päivitä "Ryhmän sankarit" -lista, jos ryhmään liittyi uusi hahmo tai joku poistui/kuoli.
   - Päivitä "Viimeksi päivitetty" -päivämäärä.

## Ensisijainen Totuus (Primary Truth)
- Jos muistiinpanoissa tai muissa lähteissä on ristiriitoja, **Game Masterin merkinnät (`GM_appendix`) ovat primäärisiä totuuksia**.
