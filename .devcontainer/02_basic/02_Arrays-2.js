const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Batman", "Superman", "Wonder"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);           // Output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Superman', 'Wonder' ] ]

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const all_new_Heros = [...marvelHeros, ...dcHeros];
// console.log(all_new_Heros);

const another_array = [1, 2 ,3, 4, 5, [6, 7 ,8], 9, 10, [6, 7, 8], 11, 12, [5, 6, [3, 4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Falak"));
// console.log(Array.from("Falak"));
// console.log(Array.from({name : "Falak"}));     // Empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
