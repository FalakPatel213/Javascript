class User {
    constructor (username) {
        this.username = username;
    }

    logMe () {
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCources () {
        console.log(`A new course has been added by ${this.username}`);
    }
}

const falak = new Teacher("Falak", "falak@gmail.com", 24324);
falak.logMe();
falak.addCources();