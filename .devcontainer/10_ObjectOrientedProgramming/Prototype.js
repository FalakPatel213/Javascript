// let myName = "Falak      ";

// console.log(myName.length);


let myHeros = ["Thor", "Spiderman"];

let heroPowers = {
    Thor : "hammmer",
    Spiderman : "sling",

    getSpidetPower : function () {
        console.log(this.Spiderman);
        
    }
}

Object.prototype.Falak = function () {
    console.log("I am Falak");
    
}

// heroPowers.Falak();

// myHeros.Falak();


// Inheritance

const Teacher = {
    makeVidoe: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport
}

TeachingSupport.__proto__ = Teacher;


Object.setPrototypeOf(TASupport, TeachingSupport);

let anotherName = "FalakPatel       ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);  
}

anotherName.trueLength();

"Falak   ".trueLength();