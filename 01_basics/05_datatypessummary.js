// the way in which we store the data in memory and access it. on this basis there are 2 types of datatypes

/*1. Primitive Datatypes :: Call by value not by reference 
7:
String, Number, Boolean, null, undefined, Symbol(used to make value unique), BigInt

const id = Symbol('123')
const anotherId = Symbol('123') 
///These values are not same because symbol made it unique 

const bigNumber = 32478326847632874732n

*/

/*2. Non Primitive Datatypes/ Reference Datatypes
Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"] //Array

//Objects
{
    name: "Yash",
    age: 25,
}
can store in variable

let myObj = {

}

functions:
1. treated as variable

const myFunction = function(){
    cosole.log("Hello World!!");
}

*/

//JS is dynamically typed not statically typed
// const score = 100; //js
// const score:number = 100;  //ts


//typeof(null)   object
//typeof(function)   function(objectFunction)
//typeof(array)    object
//typeof(object)  object
//---- SO basically all non primitive datatypes return object
//typeof(symbol)   symbol

// const heroes = ["Shaktiman", "Naagraj", "Doga"] 
// console.log(typeof(heroes))