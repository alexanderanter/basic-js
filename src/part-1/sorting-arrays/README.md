## Sorting arrays
Denna uppgiften går ut på att sortera arrayer som innehåller heltal.
Funktionen SortingArrays.sortDescending sorterar på fallande ordning och returnerar den sorterade arrayen.
Funktionen SortingArrays.sortAscending sorterar på stigande ordning och returnerar den sorterade arrayen.

Arrayen som skickas med som parameter ska efter anropet till funktionerna inte vara modifierad dvs. se till
att skapa en kopia av arrayen som du modifierar och sedan skickar tillbaka.

Om funktionerna anropas med något som INTE är en array ska ett undantag av typen TypeError
kastas.

Om funktionerna anropas med annan datatyp än array ska undantaget av typen Error kastas

```
var arr = [2, 5, 1, 6];
var resArr = SortingArrays.sortDescending(arr); // returns [1, 2, 5, 6]
// arr !== resArr
SortingArrays.sortAscending(arr); // returns [6, 5, 2, 1]

SortingArrays.sortDescending(); // throws TypeError
SortingArrays.sortAscending(); // throws Type Error

SortingArrays.sortDescending([]); // throws Error
SortingArrays.sortAscending([]); // throws Error
```
