// SingleTon
// Object.create

// Object lirarals

const mySym = Symbol("key1");
const JsUser = {
    name : "Falak",
    "full name" : "Falak Patel",
    [mySym] : "mykey1",                      // Symbol
    age : 19,
    city : "Ahmedabad",
    email: "falakpatel213@gmail.com",
    isLoggedIn : true,
    lastLoginDate : ["Monday", "Tuesday",]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "falak@google.com";
// console.log(JsUser);
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
