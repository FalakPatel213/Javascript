// class User {
//     constructor (username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword () {
//         return `${this.password}abc`;
//     }

//     Capitalizeation () {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const falak = new User("falak", "falak@gmail.com", 3423);

// console.log(falak.encryptPassword());
// console.log(falak.Capitalizeation());


// Behind the scene.

function User (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.Capitalizeation = function () {
    return `${this.username.toUpperCase()}`;
}

const patel = new User ("patel", "patel@gmail.com", 1323);
console.log(patel.encryptPassword());
console.log(patel.Capitalizeation());
