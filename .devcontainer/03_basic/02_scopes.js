
if(true){
    // Local scope
    let a = 10;
    const b = 20;
    var c = 30;
}

// {} are called as scope

// Global scope
// console.log(a);     // Error: a is not defined
// console.log(b);     // Error: b is not defined
// console.log(c);     // 30, Do not use var, use let or const instead


function one(){
    const username = "Falak";

    function two(){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website);
    
    two();
}

one();