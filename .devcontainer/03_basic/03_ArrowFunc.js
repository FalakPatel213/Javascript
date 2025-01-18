const user = {
    username : "falak",
    price : 999,
    welcomemsg : function (){
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
    }
}

// user.welcomemsg();
// user.username = "Sam";
// user.welcomemsg();

// console.log(this);        // Empty

// function chai(){
//     let username = "falak";
//     console.log(this.username);
// }
// chai();

// Arrow Function

// const chai = () => {
//     let username = "Falak";
//     console.log(this);   
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// No need to use return keyword if {} are not used. It is called implicit return
// If {} is used then we need to use return keyword. It is called explicit return

const  addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(4,5));
