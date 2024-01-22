//DOM-- How to manipulate html web using JS
//Closure -- child function can access variables of parent function

//Nested Scopes

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(`${username} - ${website}`);
    }
    // console.log(website);
}
// console.log(username);
//+++++++++++++++++ interesting ++++++++++++++++

//Simple Function
console.log(addOne(5)); //This called Hoisting
function addOne(num){
    return num + 1
}
// console.log(addOne(5));

//Function Expression(another way to define function and hold it in a variable)
console.log(addTwo(5)); //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));