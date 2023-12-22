let score = "33aad"

console.log(typeof (score))
console.log(typeof score)

let valueInNumber = Number(score) 
console.log(typeof (valueInNumber)) //number
console.log(valueInNumber)  //NaN if score = "33aad"/ undefined
console.log(valueInNumber) // 0 if score is null

//Boolean conversion

//1 => true
//0 => false
//"" => false //empty string
//"yash" => true

//String conversion (mostly browser gives string values)

let someNumber = 33

let stringNumber = String(someNumber)