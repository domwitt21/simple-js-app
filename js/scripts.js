// Declaring a variable and assigning it an array containing pokemon objects
let pokemonList = [
    {name: 'Charizard', height: 1.7, weight: 90.5, type: ['Fire', 'Flying']},
    {name: 'Tyranitar', height: 2, weight: 202, type: ['Dark', 'Rock']},
    {name: 'Gengar', height: 1.5, weight: 40.5, type: ['Ghost', 'Poison']}
];
// Logging the array to the console to test code
console.log(pokemonList);

// for loop iterating over the pokemonList array objects
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 2) {
        document.write('<h5> Name: </h5>' + pokemonList[i].name + '<h5> Height: </h5>' + pokemonList[i].height + ' \-\- Wow. that\'s big!');
    } else {
        document.write('<h5> Name: </h5>' + pokemonList[i].name + '<h5> Height: </h5>' + pokemonList[i].height);
    }
}