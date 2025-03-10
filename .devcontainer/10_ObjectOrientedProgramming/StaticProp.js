class User {
    constructor (username) {
        this.username = username;
    }

    logMe () {
        console.log(`USERNAME: ${this.username}`);
    }
    static createId() {
        return 123;
    }

}

const falak = new User("falak");
// console.log((falak.createId()));

class Teacher extends User {
    constructor (username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
console.log(iphone.logMe());

