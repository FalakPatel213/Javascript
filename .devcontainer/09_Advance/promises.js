const prom1 = new Promise(function (resolove, reject) {
    // Do async task...
    setTimeout(function () {
        console.log("Async task...");
        resolove();
    }, 1000)
});

prom1.then(function () {
    console.log("Promise...");
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 ...");
    }, 1000)
}).then(function () {
    console.log("Promise 2 ...");
})


const prom3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ usename: "Falak", email: "falak@gmail.com" });
    }, 1000)
})

prom3.then(function (user) {
    console.log(user);

})

const prom4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Patel", password: "123" });
        } else {
            reject("ERROR: Something went wrong...");
        }
    }, 1000)
})

prom4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log("Resolved...");
    })


const prom5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject("ERROR: JS went wrong...");
        }
    }, 1000)
})

async function consumeProm5() {
    try {
        const resopnse = await prom5;
        console.log(resopnse);
    } catch (error) {
        console.log(error);
    }
}

consumeProm5();

// async function getAllUser () {
//     try {
//         const resopnse = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await resopnse.json();
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);

//     }
// }

// getAllUser();

fetch("https://api.github.com/users/falakpatel213")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error);

    })