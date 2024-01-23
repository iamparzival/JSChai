//Arrow Functions
//This Keyword -- tell us about current context(current key value pairs)

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`); //to access username, we use this keyword i.e to access variables of current context we use this keyword
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();
// console.log(this); //{} empty object because there is no context in global. In "node env.", we get {} Empty Object in return
//+++++++++++++ Note ++++++++++++++++
//If we do console.log(this) in "browser env.", we get window{} object in return. In browser we have global object window{} object.

/*
function chai(){
    let username = "hitesh"
    console.log(this.username); //undefined //So we can't access username using this as we do in object.
    console.log(this); //here we get global object  in return with some methods we can use
}
chai()

const chai = function(){
    let username = "hitesh"
    console.log(this.username); //undefined// in the case of function expression 
}
chai()
*/

//Arrow Function---remove function keyword and add => symbol in front of paranthesis
//Basic syntax- "() => {}"
/*
const chai = () => {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); //here we get {} object in return while in case of regular expression we get global object
    //that means we can use this with regular function not with arrow function
}
chai()
*/
//Basic Arrow Function--Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit Return-- remove paranthesis and return keyword if we have only one line statement
// const addTwo = (num1, num2) => num1 + num2

//For better readability --- wrap in curly braces not in paranthesis otherwise use return
// const addTwo = (num1, num2) => (num1 + num2) //this technique used widely in ReactJS

// const addTwo = (num1, num2) => {username: "hitesh"}//undefined (can't return object like this)

// const addTwo = (num1, num2) => ({username: "hitesh"})//{ username: 'hitesh' }


console.log(addTwo(3,5))

//Arrow Function use in loop

const myArray = [2, 4, 3, 1, 7]

myArray.forEach( () => {} )