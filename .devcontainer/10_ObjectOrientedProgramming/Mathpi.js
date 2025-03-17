const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const falak = {
    name: "Falak",
    age: 25,
    isAvailable: true,
}

// console.log(Object.getOwnPropertyDescriptor(falak, "name"));

// Object.defineProperty(falak, "name", {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(falak, "name"));

for (let [key, value] of Object.entries(falak)) {
    console.log(`${key}: ${value}`);
}
