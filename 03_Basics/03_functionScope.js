//let, var & const
// let a = 10
// const b = 20
// var c = 30

// curly-braces {} are scopes in most programming languages
// var c= 3000 //global scope
let a = 3932

if(true){ //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log(`Inner a: ${a}`);
    //c =30 //same thing
}

//

console.log(a);
// console.log(b);
// console.log(c);