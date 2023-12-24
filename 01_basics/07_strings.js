/*
String Interpolation(Using Backticks)

---Declare a String
let myName = "Yash"
let myAge = 25
console.log(`My name is ${myName} and my age is ${myAge}`)
*/

//Another way of Declare a String,(Behind the scene above method is also invoke an object)
const gameName = new String("Yash")

console.log(gameName) //[String: 'Yash']
console.log(gameName[0])  //Y
console.log(gameName.__proto__)  //{}
//For more details see in console 

console.log(gameName.length);  //we can directly use prototype methods like this no need to write .__proto__.length
console.log(gameName.charAt(2))  //s
console.log(gameName.indexOf('y')) //-1
console.log(gameName.indexOf('Y'))  //0
//try to learn more and more methods about String
const newName = new String("Yash Pathak")
const newString = newName.substring(0, 6)  //index 6 not included
console.log(newString)

const anotherString = newName.slice(-8, 3) //Can give negative value
console.log(anotherString)

const newStringOne = "    yash   "
console.log(newStringOne)
console.log(newStringOne.trim()) //removes  whitespaces and line terminators(\n)

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes("hitesh")) //true

const anotherName = new String("Hey-there-how-are-you");
console.log(anotherName.split('-'))

