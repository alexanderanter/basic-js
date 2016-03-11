#_"It figures"_

Du ska skriva tre konstruktorfunktioner som skapar objekt av typen Ellipse eller Rectangle där arean och omkretsen ska kunna beräknas. Den tredje typen, Shape, ska samla de medlemmar som är gemensamma för Ellipse och Rectangle (typerna Ellipse och Rectangle ska med andra ord ärva från Shape).  

I samband med att objekt skapas av respektive typ ska det vara möjlight att ange figurens längd och bredd.  

En ellipse area kan bestämmas med `Math.PI * length / 2 * height / 2`, och dess omkrets approximativt med `Math.PI * Math.sqrt(length * length / 2 + height * height / 2)`.

En rektangels area kan bestämmas med `length * height`, och dess omkrets med `2 * length + 2 * height`.

Du ska komplettera filen Shape.js med kod för de tre typer som gör det möjligt att instansiera objekt av typerna Ellipse och Rectangle.

Samtliga medlemmar ska vara publika och metoder ska vara kopplade till respektive prototyp och inte till instanser av Ellipse eller Rectangle.   

##Typen Shape

Konstruktorn ska ha två parametrar, `length` och `height`.

###Egenskaper
- `length`, figurens längd.
- `height`, figurens bredd.

###Metoder
- `toString`, ska returnera en sträng representerande ett objekt. Skapas ett Ellipse-objekt med längden 12 och höjden 19,4, ska strängen, där arean respektive omkretsen ska avrundas till en decimal, `längd: 12, höjd: 19.4, omkrets: 50.7, area: 182.8` returneras. Ett Rectangle-objekt med länged 63 och bredden 18.4 ska ge `längd: 63, höjd: 18.4, omkrets: 162.8, area: 1159.2`.

**OBS!** Metoden `toString` kan anropa samtliga publika metoder tillhörande det objekt för vilken `toString` anropas, d.v.s. det går bra att anropa `area` respektive `circumference` trots att dessa metoder saknas i `Shape`.   

##Typen Ellipse

Konstruktorn ska ha två parametrar, `length` och `height`. Ska ärva från Shape varför inga ytterligare egenskaper behövs.

###Metoder

Metoderna nedan ska vara genmsamma för samtliga objekt som instansieras av typen.

- `area`, ska returnera ellipsens area.
- `circumference`, ska returnera ellipsens omkrets.

##Typen Rectangle

Konstruktorn ska ha två parametrar, `length` och `height`. Ska ärva från Shape varför inga ytterligare egenskaper behövs.

###Metoder

Metoderna nedan ska vara genmsamma för samtliga objekt som instansieras av typen.

- `area`, ska returnera rektangelns area.
- `circumference`, ska returnera rektangelns omkrets.

## Tips

Se föreläsning 5 och 6 och fokusera på designmönstret "Constructor/Prototype" samt arv.
