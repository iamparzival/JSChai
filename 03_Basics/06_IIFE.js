//IIFE--Immediately Invoked Function Expressions
//Why-- we want to execute immediately
//Ex- we want to connect our db immediately after app start
//ex- we don't want our function to pollute with parent/global function or parent scope

//Normal Way
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

//iife way
(function chai(){ //named iife
    console.log(`DB CONNECTED`);
})(); //use ; to end the context so that second iife can run

((name) => { //unnamed iife
    console.log(`Two DB CONNNECTED ${name}`);
})("hitesh")