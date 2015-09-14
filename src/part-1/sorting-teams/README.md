## Sorting teams
Nivå: A

Denna uppgiften går ut på att sortera en Array innehållande objekt.
Uppgiften läser in en så kallad json-fil (JavaScript Object Notation - http://json.org/).
Den koden är dock redan skriven i funktionen readTeamsFromFile

JSON-filen innehåller uppgifter om fotbollslag. Uppgifterna är namn, smeknamn och antal poäng. Uppgiften går ut
på att få en Array innehållandes dess objekt och sortera dessa med avsende på poäng

```
var arr = [
    {name: "Arsenal", nickname: "The Gunners", points: 1},
    {name: "Tottenhamn Hotspur FC", nickname: "Spurs", points: 20},
    {name: "Liverpool", nickname: "The reds", points: 10}
];

var sortedArray = SortingTeams.sortTeams(arr);

// sortedArray should be
/*
[
    {name: "Tottenhamn Hotspur FC", nickname: "Spurs", points: 20},
    {name: "Liverpool", nickname: "The reds", points: 10},
    {name: "Arsenal", nickname: "The Gunners", points: 1}
]
*/
```
I kodexemplet ovan har arrayen sorterats om då Tottenhamn har flest poäng,
Liverpool har näst flest och Arsenal har minst.

### Tips
Det finns flera sätt att sortera men kolla gärna upp den inbyggda funktionen Array.sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
