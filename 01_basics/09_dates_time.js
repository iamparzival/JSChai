//Dates
/*
const myDate = new Date()
console.log(myDate) //2023-12-24T16:24:50.934Z //Date Object 
console.log(myDate.toString()) //Sun Dec 24 2023 16:25:44 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()) //2023-12-24T16:26:55.479Z
console.log(myDate.toJSON()) //2023-12-24T16:27:16.236Z
console.log(myDate.toLocaleDateString()) //12/24/2023
console.log(myDate.toLocaleString())  //12/24/2023, 4:28:20 PM

console.log(typeof(myDate))  //object
*/

/*
//Create Custom Date
const myCreatedDate = new Date(2023, 0, 23) //Month starts from 0
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023

const anotherCreatedDate = new Date(2023, 1, 24, 6, 8)
console.log(anotherCreatedDate.toLocaleString()) //2/24/2023, 6:08:00 AM

const myCreatedDateOne = new Date("12-30-2023")
console.log(myCreatedDateOne.toLocaleString()); //12/30/2023, 12:00:00 AM
*/

/*
//TimeStamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1703436308534
console.log(myCreatedDate.getTime());  //1674432000000
//always done comparison in ms

//conversion in seconds
console.log(Math.floor(Date.now()/1000)) //1703437562
*/

let newDate = new Date()
console.log(newDate); //2023-12-24T17:08:52.271Z
console.log(newDate.getDate()); //24
console.log(newDate.getDay()); //0
console.log(newDate.getMonth()+1); //12

//Important Method
newDate.toLocaleString('default', {
    //to open suggestions press ctrl+space
    weekday: "long",
    timeZone: ""
})