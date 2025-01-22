// For

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);   

// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Outer ${i} and inner ${j}`);
        
//     }
// }

let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// Break, Continue

// for (let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log("Detected");
//         break;
//     }
//     console.log(i);
    
// }

for (let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("Detected");
        continue;
    }
    console.log(i);
    
}