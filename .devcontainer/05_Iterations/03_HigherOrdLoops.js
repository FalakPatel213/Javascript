// ################### For of ##################

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
//     console.log(val);
    
// }

const greeting = "Hello World";

// for(const greet of greeting){
//     console.log(greet);

// }

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ' :- ', value);
    
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ' :- ', value);
    
// }   // It is not iterable.

// ################### For in ##################

// for (const key in myObj) {
//     console.log(`${key} :- ${myObj[key]}`);
    
// }

const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//     console.log(programming[key]);    
// }

// ################### For each #######################

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val){
//     console.log(val);
    
// });

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);

