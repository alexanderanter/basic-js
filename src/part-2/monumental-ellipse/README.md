#Monumental ellips

Du ska skriva en konstruktorfunktion som skapar ett objekt av typen Ellipse där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjlight att ange halva storaxelns längd, som betecknas a, och halva lillaxelns längd, som betecknas b.  

![](https://upload.wikimedia.org/wikipedia/commons/2/24/Elipse.svg)

En ellipse area kan bestämmas med `Math.PI * a * b`, och dess omkrets approximativt med `Math.PI * Math.sqrt(2 * a * a + 2 * b * b)`.

##Typen Ellipse

Du ska komplettera filen Ellipse.js med kod som gör det möjligt att instansiera objekt av typen Ellipse. Dessutom ska det vara omöjligt att tilldela a och b ett värde som inte är ett tal eller ett värde mindre än 0.

###Egenskaper

- `a`, halva storaxelns längd.
- `b`, halva lillaxelns längd.

__OBS!__ Samtliga egenskaper ska implementeras med hjälp av _"getters"_ och _"setters"_. Det ska bara gå att tilldela egenskaperna tal sörre eller lika med 0. Vid försök att tilldela egenskaperna ett värde som inte kan tolkas som ett tal större eller lika med 0 ska ett undantag av typen `Error` kastas. 

###Metoder

Metoderna nedan ska vara genmsamma för samtliga objekt som instansieras av typen.

- `area`, ska returnera ellipsens area.
- `circumference`, ska returnera ellipsens omkrets.
- `toString`, ska returnera en sträng representerande ett objekt, med halva storaxelns längd satt till 42.7 och halva lillaxelns längd satt till 13.8, enligt `{ a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4 }` där arean respektive omkretsen ska avrundas till en decimal.

## Tips

Se föreläsning 5 och 6 och fokusera på designmönstret "Constructor/Prototype" samt "getters" och "setters".