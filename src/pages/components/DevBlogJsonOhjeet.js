/*

1.  Paikallisen dev-serverin käynnistys komennolla terminaaliin:

    npm start

    Tämän avulla saat esikatseltua ja varmistettua että kaikki toimii ennen kuin pusket ne nettiin


2.  Lisää tyhjä template alta Json tiedoston alkuun, jälkeen [ ennen {
    Varmista että } jälkeen on pilkku (pitäisi herjata puutteesta automaattisesti jos käytät VisStudio)

    {
        "otsikko" : "",
        "paivaus" : "",
        "youtube" : "",
        "kuva" : "",
        "kirjoitus" : ""
    },

2.1 Youtube videon oltava muodossa:
    https://www.youtube.com/embed/<videon oma koodi>
    Ei mitään ylimääräisyyksiä linkissä!

2.2 Kuvan lisäämiseksi, lisää haluamasi kuva ensin projektin src/pages/img kansioon
    Kopioi kuvan nimi ja tiedostomuoto kuva osioon (case sensitive, pääset helpommalla kun vain kirjoitat kaiken pienellä, ei kannata käyttää välejä, käytä - välin sijaan)
    Kaikki normaalit tiedostomuodot pitäisi toimia mutta kokeiltu vain png kanssa, jos pidät tässä tiedostomuodossa ei pitäisi olla ongelmia toimivuuden kanssa

2.3 Jos haluat tekstiä uudelle riville, lisää <br/> tekstiin kohtaan mistä haluat uuden rivin, ilman välejä
    Esim:

    ...known by its project name.<br/>The Great War to end all wars...

    Jos haluat tekstin uudelle riville sekä tyhjän välin teksteille, lisää <br/><br/> samalla periaatteella


3   Kun olet todennut kaiken toimivaksi, klikkaa terminaali ja paina ctrl + C
    Kirjoita "Y" ja paina enter, sulkee paikallisen dev-serverin
    
    Nettisivun puskemiseksi nettiin, kirjoita terminaaliin:

    npm run deploy

    Puskee sivun gh-pages branchin puolelle ja sitä kautta julkiseksi nettiin, kestää muutamia minuutteja päivittyä

*/