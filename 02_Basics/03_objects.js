//Two ways to declare objects: 1. Object Literals way 2. Constructor Way
//Concept of Singleton: when we use constructor way then a singleton object(only one object) is created (Object.create)
//Singleton object doesn't create when we declare in literals way

/*

*/
//Object Literals:

const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    "fullName": "Yash Pathak",
    // mySym: "mykey1", //this way typeof(mySym) return String
    [mySym]: "mykey1", //symbol Syntax
    age: 25,
    location: "Indore",
    email: "yash.pathak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
/*
//ways to access values in object
console.log(JsUser.email);
console.log(JsUser["email"]); //bydefault key are treates as string
console.log(JsUser["fullName"]); //Yash Pathak
console.log(JsUser.fullName); //Yash Pathak
console.log(JsUser.mySym); //mykey1 (return undefined if defined as a symbol)
console.log(JsUser[mySym]); //mykey1


JsUser.email = "yash.chatgpt@gmail.com"
console.log(JsUser.email); //yash.chatgpt@gmail.com
Object.freeze(JsUser.email) //to freeze the changes
*/

//Function 

JsUser.greeting = function(){
    console.log("Hey there!! How are you??");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);//Use "this" keyword to reference the same object
}
console.log(JsUser.greeting()); //Hey there!! How are you??//undefined
// console.log(JsUser.greeting); //[Function (anonymous)] //this is the reference of function

console.log(JsUser.greetingTwo()); //Hello JsUser, Yash //Undefined

