//Function Definition

function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

//Function Call
//sayMyName  //function reference
// sayMyName() //function execution

// function addTwoNumbers(number1, number2){  //number1 and number2 are parameters
//     console.log(number1 + number2)
// }

// addTwoNumbers() //NaN
// addTwoNumbers(2, 7) //9 //2, 7 are arguments
// addTwoNumbers(2, "4") //24
// addTwoNumbers(2, "s") //2s
// addTwoNumbers(3, null) //3

//Store values in variable
const  result = addTwoNumbers(4,8)
// console.log("Result:", result) //Result: undefined //Cause currently function is not returning any value 
//Now return a value
function addTwoNumbers(number1, number2){  //number1 and number2 are parameters
    let result = number1 + number2
    return result //now u can store this value in variable
    //return number1+number2
    console.log("yaaasss");///return must be the last statement after that nothing execute
}
//console.log("Result:", result) //Result: 12

//Other ways to passing values
function loginUserMessage(username){
    if(username === undefined){ //same as (!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("yash")) //yash just logged in
// console.log(loginUserMessage(""))// just logged in
// console.log(loginUserMessage()) //undefined just logged in

console.log(loginUserMessage()); 