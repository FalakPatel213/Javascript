function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("K");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

// console.log(addTwoNumbers(10, 20));

function loginUserMsg(username = "Falak"){
    if(!username){
        console.log("Please enter the username.");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMsg());

