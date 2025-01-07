// Dates

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

let myCreatedDate = new Date(2025, 3, 18);
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let myDate = new Date();
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);

newDate.toLocalString('default',{
    Weekday: 'long',
});