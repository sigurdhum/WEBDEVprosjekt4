# 🧀🍿 cHEDDAr & Chill 🍿🧀
#### En del av prosjektene i IT2810 webutvikling ved NTNU høsten 2022

🚩Vil informere om at vi fikk en ukes utsettesle for dette prosjektet🚩
**OPPDARTERT:** Dette er ferdig torsdag 24.11 kl 15:45

# Prosjekt 4

Vi fikk som tilbakemelding på prosjekt 3 at brukeropplevelsen ikke var optimal. Derfor valgte vi å fokusere på punkt **D: "Bearbeide klienten i prosjekt 3 så den tilfredsstiller kravene til WAD og WCAG 2.1 (kravene som blir gjeldende fra 2023)".**

Vi har i tillegg lagd litt forbedringer på server-siden 😍

Dermed er dette mer en vidreutvikling av Prosjekt 3, fremfor et helt nytt prosjekt. 

## Innhold

* [Oppsett](#oppsett)
* [Generell info](#generell-info)
* [Tilbakemeldinger og forbedringer etter Prosjekt 3](#tilbakemeldinger-og-forbedringer-etter-prosjekt-3)
* [WCAG](#wcag)
  * [A](#a)
  * [AA](#aa)
  * [AAA](#aaa)
* [WAD](#wad)
* [Leksene som er gjort](#leksene-som-er-gjort)
* [Til ettertanke](#til-ettertanke)
* [Men skal det være sånn da?](#men-skal-det-være-sånn-da)
* [Appendiks](#appendiks)

Du kan åpne nettsiden vår på: [Lenke til virtuell maskin](http://it2810-38.idi.ntnu.no/project4/)
Gitt at du bruker skole-nettet eller [VPN til skolen](https://i.ntnu.no/wiki/-/wiki/Norsk/installere+vpn)

# Oppsett

For å kunne kjøre prosjektet lokalt må du ha Node med NPM, og react.

Etter å ha clonet prosjektet ned til maskinen din lokalt, kan man kjøre prosjektet. For å kjøre det fra egen maskin må du gjøre dette:

## For å kjøre backend:
1. cd inn i backend-mappen: `cd backend`
2. Installere ts-node hvis det mangler med `npm install -g ts-node`
3. Installere pakker og npm-krav: `npm i`
4. Hoste prosjektet lokalt: `npm start`

Åpne en ny terminal, for å kjøre frontenden:

## For å kjøre frontend:
1. cd inn i frontend-mappen: `cd frontend`
2. Installere pakker og npm-krav: `npm i`
3. Hoste prosjektet lokalt: `npm start`

Du er nå klar til å kjøre prosjektet vårt ❤️

For å kjøre testene:

## For å kjøre testene:
**For å kjøre end-to-end testene:**

* Gå inn i mappen: `cd frontend`
* Last ned Cypress lokalt: `npm install cypress`
* Hoste prosjektet lokalt: `npm start` 
* Deretter i en ny terminal starter man testene ved: `npx cypress open`

**For å kjøre enhetstester:**

* Gå inn i mappen: `cd frontend`
* Deretter: `npm test`


# Generell info

Siden dette er vidreutvkling av Prosjekt 3, bees dere sjekke ut [Hedda's and Chill prosjektet](https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-38/heddasandchill), for grunnleggende informasjon om prosjektet.

Dette er en nettside laget av [Hedda Hovland](https://gitlab.stud.idi.ntnu.no/heddalh), [Hedda Skåre](https://gitlab.stud.idi.ntnu.no/heddsk), [Jørgen Selsøyvold](https://gitlab.stud.idi.ntnu.no/jorgse) og [Sigurd Humerfelt](https://gitlab.stud.idi.ntnu.no/sigurhu).

På grunn av at 50% på gruppen heter Hedda, har vi gjennom faget hatt navn som representerer Hedda på en god måte. I prosjekt 2 het vi **cHEDDAr**, og i prosjekt 3 het vi **Hedda's and Chill**. Siden vår oppgave er en god blanding av disse prosjektene, ble navnet vårt denne gangen **cHEDDAr and Chill**!

Etter et par litt trause dokumentasjoner, følte vi at det var på tide å lage en litt mer _"artig"_ dokumentasjon. Du er herved advart, og vi håper du liker den! 😉


# Tilbakemeldinger og forbedringer etter Prosjekt 3

Her kommer en lang liste som er sammensatt av ulike punkter som vi fikk i tilbakemeldingene våre på Prosjekt 3. I tillegg er det lagt ved noen av de samme punktene som ligger under "TIL ETTERTANKE" på Prosjekt 3:

1. Det var mange scrollbars på nettsiden på Windows. Dette gjaldt ikke på macOS, hvor vi prøvde på Safari, Chrome og FireFox.
2. Man kunne ikke scrolle i modalen, bare Review-delen av modalen. Dette gjorde det umulig å se anmeldelsene på små skjermer, med mindre man zoomet ut.
3. Man kunne endre valgt sjanger når man søkte på en film, uten at det endret resultatet. I prosjekt 3 valgte vi å vise filmene man søkte på, uavhengig om hvilken kategori. Eksempelvis kunne man søke på "Shrek" og få opp Shrek, selv med kategori som "Thriller" valgt.
4. Filreringsmulighetene var basert på dummy data, og ikke de faktiske ulike sjangrene i databasen.
5. Man kunne ikke tabbe seg gjennom siden, slik at man kan bruke nettsiden kun med tastatur. 

# WCAG

[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) er en samling av retningslinjer for hvordan man skal lage en tilgjenglig og brukervennlig nettside. WCAG er en lang, og til dels avansert samling å sette seg inn i. Derfor så vi en del på youtube-videoer, blant annet: [denne](https://www.youtube.com/watch?v=s_azyLSFRME), [denne](https://www.youtube.com/watch?v=6V0zl-pSCSs), [denne](https://www.youtube.com/watch?v=qr0ujkLLgmE&t=0s) og [denne sjekk-listen](https://usability.yale.edu/web-accessibility/articles/wcag2-checklist) før vi leste oss gjennom WCAG i sin helhet. 

Derfra fikk vi en grunnleggende forståelse for at WCAG er delt opp i tre ulike nivåer: A, AA og AAA. Dette henviser også til vansklighetsgrden; A er lettest, AA er litt vanskligere, og AAA har veldig begrensede og utfordrende krav.

For å nå et nivå i WCAG må absolutt **alle** kravene i gitt nivå være nådd. Slik at en nettside som klarer 99% av alle nivåene, ikke er WCAG-godkjent i det hele tatt. I WCAG 2.1 har nivå _A 30 krav_, og _AA har 20_ ekstra. Slik er det 50 krav for å være AA-godkjent. _AAA har 28_ ekstra oppå det igjen, som gir en total på **78 krav**! 

Her skal vi gå gjennom de ulike nivåene, og fortelle om de viktigste bemerkningene, og forklare hva vi gjorde for å forbedre nettsidens tilgjenglighet:

## A 🪫

Det er som sagt 30 krav for å nå nivå A i WCAG-beskrivelsen, her er noen av de som var viktigst for dette prosjektet:

### 2.4.1 Bypass Blocks

**KRAV:** Ha en lenke for å hoppe til hovedinnholdet som den første fokuserbare lenken på siden.

**LØSNING:** Etter å ha sett [denne videoen](https://www.youtube.com/watch?v=jDDaOFr9nqQ) var det riemlig enkelt å implementere en knapp som var det første som ble fokusert på. Vi valgte å plassere denne knappen i headeren, slik at den var lett tilgjengelig for brukeren. Vi definerer også film-listen som hovedinnholdet, og den linker derfor videre dit. 

### 2.4.3 Focus Order

**KRAV:**  Sette fokus på elementer i en naturlig rekkefølge ved tab. Unngå å bruke Tabindex høyere enn 0.

**LØSNING:** Fokus er satt i naturlig rekkefølge fra topp til tå i nettsiden, og det er ikke nyttet tabindex større enn 0. Dette er naturlig rekkefølge å komme seg gjennom nettsiden på og gjør det dermed lettere for folk som bruker tastaturet

## AA 🪫+🪫

Det er som sagt 20 ekstra krav for å nå nivå AA i WCAG-beskrivelsen, her er noen av de som var viktigst for dette prosjektet:

### 1.4.10 Reflow
**KRAV:** Gi responsive stilark slik at innhold kan vises i 320px bred uten horisontal rulling. (Innhold som må vises i to dimensjoner, for eksempel kart og datatabeller, kan ha horisontal rulling.)

**LØSNING:** I starten av prosjektet lagde vi mobil-versjonen slik at det var horisontal-scrolling. Etter at vi hadde oppfattet punkt 1.4.10, måtte vi gjøre endringer. Denne endringen var ikke annet enn å bruke den samme `.listView` klasse, bare med mindre kolonner. Dette ble en fin løsning, og vi har nå vertikal scrolling på mobil-versjonen.

### 2.4.7 Focus Visible

**KRAV:** Gi tastaturfokusstiler som er godt synlige, og sørg for at et synlig element har fokus til enhver tid når du bruker et tastatur. Ikke stol på nettleserens standard fokusstiler.

**LØSNING:** Har valgt å vise at elementet er i focus ved å sette en tykk hvit linje rundt elementet. Denne er tydelig og står i stor kontrast til resten av fargene på nettsiden. Dette ble tidligere nevnt under [punkt 2.4.3 i A](#243-focus-order). På grunnlag av [denne youtube-videoen til Kevin Powell](https://www.youtube.com/watch?v=j68WvpUX41c) valgte vi å bruke `:focus-visible`-taggen for å angi hvor bruekeren er. 
### 3.1.2 Language of Page
**KRAV:** Hvis en del av siden er på et annet språk, bruk lang-attributtet på den delen.

**LØSNING:** Vi har alle tekster på nettsiden på norsk så dette var ikke et problem. Titlene på noen av filmene er engelske, men de ønsker vi ikke at skal endres da dette anser vi som egetnavn.

### 3.2.3 Consistent Navigation
**KRAV:** Når komponenter gjentas på tvers av nettsider, bør de vises i samme relative rekkefølge med hensyn til andre gjentatte komponenter på hver nettside der de vises.

**LØSNING:** Dette var noe som allerede var implementert riktig fra Prosjekt 3. Blant annet kommer filmene på samme kolonne fra venstre til høyre (hvis det er plass). Og er kronologisk nedover med at de nyeste anmeldelsene kommer øverst.

## AAA 🔋

Det er som sagt 28 ekstra krav for å nå nivå AAA i WCAG-beskrivelsen. Disse er veldig spesifikke, og ikke mange som vi har klart/ønsket å oppnå i dette prosjektet. For å finne en sjekk-liste for AAA brukte vi [denne](https://kma.global/wp-content/uploads/2019/07/WCAG_2.1_Checklist.pdf). I følge [denne youtube-videoen](https://www.youtube.com/watch?v=s_azyLSFRME) er AAA-kravene laget for spesialiserte nettsider for funksjonshemmende brukere. Eksempel på dette er [blindeforbundet](https://www.blindeforbundet.no). Derfor så vi det fornuftig å bruke tiden vår på andre deler av nettsiden. Likevel har vi et par kommentarer om AAA-kravene:

### 1.4.6 Contrast (Enhanced)

Kontrast-kravet på nivå AAA er veldig skjerpende. Det krever at kontrasten mellom tekst og bakgrunn skal være på minst 7:1. Dette er en veldig streng krav, og vi derfor ikke klart dette. Vi har derimot valgt å ha en kontrast på 4.5:1, som er kravet for AA. Se vedlagt screenshots av dette:

![Kontrastsjekk på hvit teskt med rød bakgrunn](/frontend/src/static/img/kontrastR%C3%B8d.png)

![Kontrastsjekk på hvit tekst på grå bakgrunn](/frontend/src/static/img/kontrastSort.png)

![Kontrastsjekk på rød tekst på sort bakgrunn](/frontend/src/static/img/kontrastTittel.png)

Her ser vi at får underkjent på knappene, og på navbaren. Vi så det ikke hensiktsmessig å endre dette, så vi valgte å ignorere dette kravet. Og slik nettsiden er blitt, er kontrast-kravett for AA oppfylt.


_Totalt sett ble dette, slik vi ser det en AA-godkjent nettside, i grunnlag av at vi har godkjent alle krav fra både nivå A og AA!_
# WAD

WAD er EU´s webdirktiv. Mye av infoen vi lærte kommer fra [uutilsynet](https://www.uutilsynet.no/webdirektivet-wad/eus-webdirektiv-wad/265). Dette angir hvordan nettsider skal formes. Dette ble, sammen med WCAG, gjeldene i Norge fra 1. februar 2022, men det er lag opp en overgangsperiode på et år. Dette er fordi det er mange nettsider som ikke er tilpasset dette, og trenger tilpasninger.

Konkret sier WAD at alle offentlige nettsider skal være både A og AA-godkjent fra WCAG 2.1. Det stilles ingen krav til AAA-godkjenning. Slik er vår nettside også, som er både A og AA-godkjent, slik vi ser det. 

# Leksene som er gjort 📚

## Skriftemål, et skriftemål om duplikater 🛐

Gjennom Prosjekt 3 var det seg slik at det dukket opp en del duplikater i databasen. Dette var vi oppmerksomme på, og prøvde å finne en løsning for. Ettersom tiden gikk, og vi ikke fant en løsning, valgte vi å gå for den lettvinte løsningen: "Its not a bug, its a feature"! 

Til vår store forferdelse _(kremt kremt: ironi)_ var Prosjekt 4 en utvidelse, til Prosjekt 3. Dette var en perfekt anledning for å be om tilgivelse. I stedet for å bekjenne oss til presten valgte vi å rette opp i våre feil, og fikse duplikatene. Etter mange grå hår, og en del frustrasjon, kom vi over en bok med en løsning på ~~ alle våre  problemer~~ et av våre problem! Boken det hintes til her er boken hvor alt flyter over. Det er ikke Heraklit, men [stack overflow](https://stackoverflow.com/questions/44692075/mongo-db-duplication-issue-while-using-sorting-with-limit-and-skip-in-aggregatio).

## Fokus, focus, :focus 🧘‍♀️

Det er laget en naturlig rekkefølge for hvilke elementer som skal bli satt i fokus. Først har man en knapp som tar deg direkte til listen med filmer, om du ønsker, deretter kommer man til søkeboksen som ligger øverst på siden. Etter det kommer du inn i filterknappene hvor du kan styre med pilene frem og tilbake på det filteret du ønsker. Deretter kan du tabbe deg videre til sort knappen som du kan trykke på med å bruke enter. Videre tabber du deg gjennom movie listen og kan opne en film når som helst ved å trykke enter. Da vil fokuset komme på input feltet hvor du kan skrive inn en rewiev og legge til ved å tabbe deg videre til send inn knappen. For å kunne ut av modalen trykker du `escape` eller tabbe deg til lukke knappen.

Lukke knappen er plassert i midten på toppen alltid i modalen, fordi dette var en plassering som er lett tilgjengelig, og lett å se.

Når man tabber seg rundt i filmene vil man ikke kunne nå "Scroll-til-toppen"-knappen. Derfor har vi lagt inn at man kan trykke `t` eller `d` for å komme seg til toppen eller bunnen av siden. Dette er for å gjøre det enklere å navigere seg rundt på siden.

Det er ikke brukt tabindex større enn null. I stedenfor er det brukt funksjoner som opner og lukker ved onKeyDown kommandoen.

## Blitt skrullete av å scrolle! 🛝

Etter å blitt slaktet (på en forståelig måte) av en del medelever for å ha mange scroll-bars på siden, var dette noe av det første vi tok for oss.

For å være vår egen forsvarsadvokat fra Prosjekt 3: Vi testet nettsiden på macOS på Chrome, Safari og Firefox, og fant ingen av scroll-barsene. Det viste seg dessverre at dette var et problem på Windows, og det var herfra alle tilbakemeldingene på det kom fra. Slik så nettsiden ut på windows:

![scroll-bars på windows, første bilde](/frontend/src/static/img/scrollBarFromHell1.png)

![scroll-bars på windows, andre bilde](/frontend/src/static/img/scrollBarFromHell2.png)

derimot så nettsiden slik ut på macOS:

![utseende på macOS, første bilde](/frontend/src/static/img/macOS1.png)

![utseende på macOS, andre bilde](/frontend/src/static/img/macOS2.png)

Derfor tok vi en julevask, og fjernet alle de overflødige `overflow: scroll` fra CSSen. Vi la også til en `display: flex-wrap` på filterne, slik at det tilpasser seg veldig bra på små skjermer.
## Rem-søvn er viktig! 🛌

Et viktig poeng med universell utforming er å bruke enheten _**REM**_ fremfor _px_. Vi har gjennom prosjektet brukt _REM_, og det har fungert veldig bra. Det er også enklere å endre tesktstørrelsen for en bruker, dette vil da gå gjennom systemvalgene man har.
## DaVinci, Munch og The Hedda´s 🎨😱
Vi har brukt sort og rødt farge-tema gjennom begge prosjektene. Vi synes dette er en veldig kul farge-combo. I tillegg gjør dette at OLED-skjermer sparer energi når nettsiden brukes, siden det ikke er like lyssterkt. Det vil da også være lettere å bruke i mørket, noe det kan være når man _Netflix & Chill´er_ ;) <br />
Vi har brukt sort `#000000`, grå `#1E1E1E` og rødt `#E50914` farge-tema gjennom begge prosjektene. Vi synes dette er en veldig kul farge-trio, som funker godt sammen. I tillegg gjør dette at OLED-skjermer sparer energi når nettsiden brukes, siden det ikke er like lyssterkt. Det vil da også være lettere å bruke i mørket, noe det ofte er når man _Netflix & Chill´er_ ;)

## Sparer kunsten (!!) &  miljøet 🌲 🪣 🖼

Du kan lese mer om vår begrunnelse for hvorfor vi brukte LazyLoading i Prosjekt 3.

Til forskjell fra mange miljøaktivister nå om dagen, setter vi stor pris på både kunst og miljø. Vi jobbet iherdig med å ikke ha for mange unødvendige kall til databsen. 

I prosjekt 3 tok vi et bevisst valg om at vi ønsket å ha databasekall med en gang man endret en bokstav i søkefeltet. Dette gjorde at det ble mange database-kall. Vi endret det derfor til at man kun gjør et database-kall et sekund etter man er ferdig med å skrive. Dette gjorde vi takket være [denne linken](https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing).

Vi brukte også ressursser på å lage filterne dynamiske, samtidig som man sendte et begrenset antall kall til databasen, som du kan lese om i neste punkt.

## Dekke på med filt(er)-duk 🧵

På prosjekt 3 brukte vi dummydata for å sette opp filterknappene. I dette prosjektet ønsker vi heller å bruke filterknapper basert på sjangerne som finnes i databasen. Dette er løst ved å lage en ny query som kun henter en liste va de distinkte sjangrene i databasen. Dette skjer hver gang nettsiden startes på nytt. På denne måten vil det være minst en film under hver sjanger, noe vi setter stor pris på. I tillegg til at det er få krevende spørringer til databasen.


## Ring meg! 📱

Et viktig fokus med WCAG og WAD er det å lage nettsider som er tilgjenglige for alle, uavhengig av størrelse på enheten. Vi lagde derfor mediaqueries som gjorde nettsiden representativ på mobil. Dette kan du lese mer om på [punkt 1.4.10](#1410-reflow) og [TODO LEGG TIL HER]. 

## Klippe gress med saks, og ikke gressklipper 🧑‍🌾

Det ble gjort flere små Quality-of-Life-forbedringer på siden vår. Blant annet lagde vi bakgrunnsfargen på filterknappene sånn at det matchet kortene. Vi endret også marginen mellom disse knappene, slik at det er lettere å bruke. I tillegg lagde vi SearchBaren sticky, sånn at det alltid er lett tilgjenglig å søke etter filmer. Vi endret også mappe-navnene til `frontend` og `backend`, fremfor `server` og `heddasandchill`. Dette gjorde det lettere å forstå hva som var hva. I tillegg har vi fjernet masse unødvendig kode som vi brukte i starten av Prosjekt 3.

## Testing

Det er brukt cypress testing for å teste E2E. Her blir nettsiden testet på startsiden. Det blir testet at man kan åpne en modal og filterknappene blir testet. 
For å teste de nye tabbefunksjonene har vi brukt brukertesting der alle har testet at det funket likt på de ulike dataene og i ulike nettlesere. Ellers er det noen få komponenttester under _test_. Alt i alt er de nye endringene godt testet.

# Til ettertanke 🤔

Dette er tanker vi har gjort oss gjennom proosjektet, på godt og vondt:
1. Vi synes vi har jobbet vesentlig mer jevnt i dette prosjektet enn i de tidligere prosjektene. Slik at vi unngå det store skippertaket 
2. De som har hatt mulighet til det, har gått i Studass-timer. Dette har hjulpet oss videre i prosjektet, og vi har fått god hjelp, tips og råd.
3. Lese **hele** WCAG før vi går i gang med prosjektet. Slik ville vi fått med oss at vi ikke trengte å perfeksjonere horisontal scrolling på mobil. Dette kan du lese mer om [under punkt 1.4.10](#1410-reflow)
4. Personlig (Sigurd her) var jeg bedre på å lage spesifikke brancher for hver enkelt Issue denne gangen. Det hendte jeg ble revet med, og glemte å lage dette. Totalt sett synes jeg det har vært en forbedring.
5. Ha en bedre fordeling mellom arbeidet. Mye ble gjort av en person, og det hadde vært bedre om det var mer jevnt fordelt.


## Men skal det være sånn da?

Etter å tittet på nettsiden, har du kanskje noen av disse spørsmålene:

**Q:** Jeg får ikke til å bruke nettsiden kun med TAB-knappen! <br />
**A:** Det kan være flere grunner til dette. Eksemepelvis tok det lang tid for oss å finne ut at Safari krevde en endring i innstillingene. Dette kan man endre på under Valg -> Avansert; og huke av på "Trykk på Tab for å velge objekter på en nettside". Dette var ikke standard fra Safari sin side. Vedlagt screenshot av dette. 

![Bilde av riktig Tab-innstilling som må være valgt i Safari](/frontend/src/static/img/tabValgSafari.png)

**Q:** Det var ikke lett å navigere med kun TAB når man åpner modalene, og har kommet forbi lukke-knappen? <br />
**A:** Etter samtale med Studass, hvor de prøvde å hjelpe, fant vi ut at det ikke var nødvendig å perfeksjonere dette. Slik det er et sluttprodukt vi er fornøyd med.

**Q:** Når jeg legger inn review kommer den ikke alltid opp før jeg refresher siden? <br />
**A:** Dette har med at reviewen _i noen få tilfeller_ blir sendt til databasen etter at komponenten er refetchet. Dette vil man oppdage, hvis man legger inn enda en reivew, og den man la inn først kommer opp.

## Appendiks

#### Inspirasjon:

Siden vi het **Hedda's and Chill** måtte vi ta noe inspirasjon fra netflix. Dette kan dere lese fra Prosjekt 3 sin Readme. Resultatet fra dette prosjektet ble slik:

### Starten av Prosjekt 4:

![Bilde av Prosjekt 3](/frontend/src/static/img/startProsjekt4.png)


### Sluttproduktet ble slik (tab-et til bypass-knappen):

![Bilde av **cHEDDAr and Chill** i produksjon](/frontend/src/static/img/sluttProdukt.png)

Sluttproduktet kan også finnes på [denne siden](http://it2810-38.idi.ntnu.no/project4/)



