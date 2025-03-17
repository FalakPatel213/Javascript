// class user {
//     constructor (email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get email () {
//         return this._email.toUpperCase();
//     }

//     set email (val1) {
//         this._email = val1;
//     }

//     get password () {
//         return this._password.toUpperCase();
//     }

//     set password (val2) {
//         this._password = val2;
//     }
// }

// const falak = new user("falak@gmail.com", "abc");

// console.log(falak.password);


function user (email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (val1) {
            this._email = val1;
        }
    })

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (val1) {
            this._password = val1;
        }
    })
}

const falak = new user("hello@123", "abc");
console.log(falak.email);