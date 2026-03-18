# Rise of the Runelords - Muistiinpanojen käsittelyohje

Toimi tämän ohjeen mukaan, kun käyttäjä pyytää käsittelemään uuden pelisession muistiinpanot.

## 1. Tiedostojen haku ja OCR (Raw-vaihe)
- Etsi uusi PDF- tai kuvatiedosto kansiosta `00_Raw/`.
- Lue tiedoston sisältö ja muunna se tekstiksi (OCR).
- Tallenna teksti sellaisenaan tiedostoon `00_Raw/sessio_X_raw.md`.

## 2. Jalostus (Sessions-vaihe)
- Kirjoita muistiinpanot puhtaaksi tiedostoon `01_Sessions/Sessio X - [Otsikko].md`.
- Käytä selkeää suomen kieltä ja korjaa tunnistusvirheet (vrt. Pathfinder-lore).
- Lisää `[[Wikilinkit]]` kaikille hahmoille, paikoille ja tärkeille termeille.
- Päivitä `01_Sessions/Index.md` lisäämällä uusi sessio listaan.

## 3. Maailman päivittäminen (World-vaihe)
- Tunnista tekstistä uudet NPC:t, paikat ja lore-tiedot.
- Jos hahmolle/paikalle ei ole vielä tiedostoa `02_World/` -kansiossa, luo se.
- Päivitä kaikkiin mainittuihin maailman tiedostoihin (NPC, Locations, Lore) **Maininnat**-osio (backlinkit) kyseiseen sessioon.
- Päivitä tarvittavat `Index.md` -tiedostot `02_World/` alikansioissa.

## 4. Konventiot
- **Kieli:** Suomi.
- **Linkitys:** Käytä aina muotoa `[[TiedostonNimi]]`.
- **Nimeäminen:** Käytä virallisia Pathfinder (Rise of the Runelords) nimenkirjoitusasuja.
- **Rakenne:** Säilytä kansiorakenne `00_Raw`, `01_Sessions`, `02_World`.
