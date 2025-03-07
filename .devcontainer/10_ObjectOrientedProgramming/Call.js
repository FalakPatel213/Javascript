function SetUsername (username) {
    this.username = username;
}

function createUser (username, email, passwerd) {
    SetUsername.call(this, username);

    this.email = email;
    this.passwerd = passwerd;
}

const falak = new createUser("falak", "falak@gmail.com", "12345");
console.log(falak);