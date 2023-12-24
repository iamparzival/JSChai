/*
const score = 400
console.log(score) //400

const balance = new Number(300) //explicitly define number
console.log(balance) // [Number: 300]

//There are also some methods in Number object

console.log(balance.toString().length)  //3
console.log(balance.toFixed(2))  //300.00

const otherNumber = 23.89667
console.log(otherNumber.toPrecision(3))  //23.9

const anotherNumber = 1000000
console.log(anotherNumber.toLocaleString()) //1,000,000
console.log(anotherNumber.toLocaleString('en-IN')) //10,00,000
*/

//---------MATH Library-----------comes default with JS

console.log(Math)  //Object [Math] {}  (for detail value do this in browser'console)
//Popular Methods

console.log(Math.abs(-4))   //4
console.log(Math.round(4.4))  //4
console.log(Math.round(4.6))  //5
console.log(Math.ceil(4.1))   //5
console.log(Math.floor(4.9))  //4

console.log(Math.min(3, 5, 8, 10, 2));  //2
console.log(Math.max(3, 5, 8, 10, 2));  //10

console.log(Math.random());  //Always between 0-1
//use case
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)) + 1);
//Trick
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)