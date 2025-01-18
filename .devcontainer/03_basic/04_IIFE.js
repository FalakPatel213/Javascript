// Immediately Invoke Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // Normal IIFE
    console.log(`DB CONNECTED ${name}`);
})("Falak");

