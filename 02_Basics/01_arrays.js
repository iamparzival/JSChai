//Array
//Shallow Copy vs Deep Copy
//Declare an Array(two ways)
const myArr = [0, 1, 2, 3, 4, 5] //arrays are resizable and can contain a mix different of datatypes
// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

//Methods:
/*
myArr.push(6) //add at end
myArr.push(7)
myArr.pop()  //removes last element
myArr.unshift(9) //add at first index and shift all elements
myArr.shift() //removes first index element

console.log(myArr.includes(9));  //false
console.log(myArr.indexOf(11)); //-1(element doesn't exist)
console.log(myArr.indexOf(1)); // 1 (returns the index value)

const newArr = myArr.join() //values converted into string separated by commas
console.log(newArr); //0,1,2,3,4,5 //typeof-string
*/

//Slice and Splice

console.log("A ", myArr) //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //starts with index 1 to index 3(not included)
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1) //[ 1, 2 ]


const myn2 = myArr.splice(1, 3) ////starts with index 1 to index 3(included)
console.log("C ", myArr); //C  [ 0, 4, 5 ] //Splice manipulate the original array but slice doesn't
console.log(myn2); //[ 1, 2, 3 ]

