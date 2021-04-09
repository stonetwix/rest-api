# REST-API

API med funktionalitet för CRUD. Projektet baseras på ett admin-läge för en webbshop där produkterna läses ut i en lista, klicka på titeln för att hämta den specifika produktens detaljsida, under "edit" kan du uppdatera eller ta bort produkten. Klicka på knappen "Add product" för att lägga till en ny produkt.

## Följande krav är uppfyllda

### Krav för godkänt:
1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
3. Datan som API:et hanterar sparas lokalt i serverfilen
4. Git & GitHub har använts
5. Projektmappen innehåller en README.md fil
6. Uppgiften lämnas in i tid!

### Krav för väl godkänt:
1. Alla punkter för godkänt är uppfyllda
2. All data skall vara sparad i en JSON-fil istället för i serverfilen
3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
4. Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt
visa upp resultatet vid GET anrop
5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt


## Bygg och kör projektet

I projektets client- och server-mappar kör du:

### `npm i`
### `npm start`

Kör appen i utvecklingsläge.\
Öppna [http://localhost:3000](http://localhost:3000) för att se resultatet i din browser.

[GitHub-repot](https://github.com/stonetwix/rest-api)
