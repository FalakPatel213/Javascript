function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("K");
};

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// };

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
};

// console.log(addTwoNumbers(10, 20));

function loginUserMsg(username = "Falak"){
    if(!username){
        console.log("Please enter the username.");
        return;
    }
    return `${username} just logged in`;
};

// console.log(loginUserMsg());

const user = {
    username : "Falak",
    price: 300,
};

function handleObject(anyObj){
    console.log(`The username is ${anyObj.username} and price is ${anyObj.price}`);
};

// handleObject(user);

// handleObject({
//     username: "Sam",
//     price: 500
// });

const myArray = [1, 2, 3, 4, 5];

function returnSecondVal(getArray){
    return getArray[1];
};

// console.log(returnSecondVal(myArray));
// console.log(returnSecondVal([1, 3, 4, 5, 6]));

