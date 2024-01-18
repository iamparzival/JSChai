//more ways to passing parameters if we have undefined arguments

function calculateCartPrice(...num1){
    return num1
}
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

console.log(calculateCartPrice(2));//2
console.log(calculateCartPrice(100, 200, 300)); //[ 100, 200, 300 ]//if we are passing more arguments 
console.log(calculateCartPrice(100, 200, 300, 400, 500)); //[ 300, 400, 500 ]
//Use Rest Operator  in parameters ... just like spread operator but called by different name according to use cases

//How to pass object in function and use it

const user = {
    name: "Yash",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`); //Username is Yash and price is 999
}

// handleObject(user) //pass object
//direct pass object 
handleObject({
    name:"peter",
    price: 444
})

//Pass an array in function

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray)); //100
//direct pass array
console.log(returnSecondValue([500,300,1100,700,300])); //1100
