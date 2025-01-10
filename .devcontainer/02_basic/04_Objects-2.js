const tinderuser = {};
tinderuser.id = "123abc";
tinderuser.name = "Sam";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularuser = {
    email: "sone@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Falak",
            lastname: "Patel",
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstName);

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        id: 1,
        name: "Sam",
        age: 25
    },
    {
        id: 2,
        name: "John",
        age: 30
    }
];
// console.log(user[0].name);

console.log(tinderuser);
console.log(tinderuser.hasOwnProperty("id"));
