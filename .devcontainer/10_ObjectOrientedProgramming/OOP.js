const user = {
    username: "Falak",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function () {
        // console.log("Userdetails...");
        // console.log(this.username);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User (usename, loginCount, signedIn) {
    this.usename = usename;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}

const userOne = new User("Falak", 8, true);
const userTwo = new User("Patel", 9, true);
console.log(userOne);
console.log(userTwo);

