---
id: GEMINI
aliases: []
tags: []
---

# Rise of the Runelords - Muistiinpanojen käsittelyohje

Toimi tämän ohjeen mukaan, kun käyttäjä pyytää käsittelemään uuden pelisession muistiinpanot.

## 1. Tiedostojen haku ja OCR (Raw-vaihe)
- Etsi uusi PDF- tai kuvatiedosto kansiosta `00_Raw/`.
- Lue tiedoston sisältö ja muunna se tekstiksi (OCR).
- Tallenna teksti sellaisenaan tiedostoon `00_Raw/sessio_X_raw.md`.
- Tarkista myös 00_Raw/ kansiossa olevat appendix_X_.md tiedostot onko niihin tullut muutoksia tai uusia.
    - Nämä appendix tiedostot ovat dungeon masterin lisäämiä lisätietoja, joten käsittele ne kuten muistiinpanot. Jos muistiinpanoissa tai muissa lähteissä on ristiriitoja, dungeon masterin muistiinpanot ovat primäärisiä totuuksia.
    - **Huom:** Appendix-numerointi on itsenäinen eikä liity sessioiden numeroihin. Käsittele ne erillisinä päivityksinä.

## 2. Jalostus (Sessions-vaihe)
- Kirjoita muistiinpanot puhtaaksi tiedostoon `content/01_Sessions/Sessio X - [Otsikko].md`.
- Käytä selkeää suomen kieltä ja korjaa tunnistusvirheet (vrt. Pathfinder-lore).
- Lisää `[[Wikilinkit]]` kaikille hahmoille, paikoille ja tärkeille termeille.
    - **Käytäntö:** Linkitä pääsääntöisesti vain termin ensimmäinen maininta sivulla tai kun se on kontekstin selkeyden kannalta oleellista, välttääksesi turhaa linkkien paljoutta.
- Päivitä `content/01_Sessions/Index.md` lisäämällä uusi sessio listaan.

## 3. Maailman päivittäminen (World-vaihe)
- Tunnista tekstistä uudet NPC:t, paikat ja lore-tiedot.
- Jos hahmolle/paikalle ei ole vielä tiedostoa `content/02_World/` -kansiossa, luo se.
- Päivitä kaikkiin mainittuihin maailman tiedostoihin (NPC, Locations, Lore) **Maininnat**-osio (backlinkit) kyseiseen sessioon.
- Päivitä tarvittavat `Index.md` -tiedostot `content/02_World/` alikansioissa.
- Päivitä `Aikajana.md` `content/02_World/Timeline/` alikansiossa perustuen sessiossa mainittuun ajan etenemiseen.

## 4. Konventiot
- **Kieli:** Suomi.
- **Linkitys:** Käytä aina muotoa `[[TiedostonNimi]]`.
- **Nimeäminen:** Käytä virallisia Pathfinder (Rise of the Runelords) nimenkirjoitusasuja.
- **Rakenne:** Säilytä kansiorakenne `00_Raw`, `content/01_Sessions`, `content/02_World`.
