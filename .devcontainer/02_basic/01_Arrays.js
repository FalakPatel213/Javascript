//  Arrays

const myArr = [1, 2, 3, 4, 5, 6];
// const heros = ['Superman', 'Batman'];
// const newArr = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

//  Array Methods

// myArr.push(7);
// myArr.push(8);
// myArr.pop(8);

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const nArr = myArr.join();
// console.log(nArr);
// console.log(typeof nArr);


// SLice and Splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);    // Manipulates the original array
console.log("C", myArr);
console.log(myn2);
