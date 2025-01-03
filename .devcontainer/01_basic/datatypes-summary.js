// Primitive

//  7 types :  String, Number, Boolean, Null, Undifined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLogedIn = false;
const outsideTemp = null;

const id = Symbol("123");
const anotherId = Symbol("123");

const bigNumber = 5459035594923454434n;

// Reference(Non Primitive)

// Array, Object, Functions

// Array

const heros = ["Shaktimam", "Naagraj", "Doga"];

// Object

let myObj = {
    name : "Falak",
    age : 19,
}

// Function

let myFunction = function(){
    console.log("Hello World");
}




// ***********************************************************************

//  Stack(Primitive), Heap(Non Primitive)

let myGitName = "FalakPatel213"

let anotherName = myGitName;

anotherName = "FalakPatel";

console.log(myGitName); // FalakPatel213
console.log(anotherName); // FalakPatel

let userOne = {
    email : "falakpatel213@gmail.com",
    upi : "falak@icici"
}

let userTwo = userOne;

userTwo.email = "falak@google.com";

console.log(userOne.email);
console.log(userTwo.email);    //Both will be same because both are pointing to same memory location

