console.log("2">1)  //true //js converted "2" into 2
// Typescript provide strict rules(not to compare different datatypes) to follow so that above situation not arises 
console.log("02">1) //true

console.log(null>0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
// Comparison operator treated null as 0 while equality operator == not

// for undefined result is always false

// Strict Check === Checks value and data types 
