//Singleton way to declare objects:

//const tinderUser = {}
const tinderUser = new Object() //singleton object

tinderUser.id = "123abc"
tinderUser.name = "Emma"
tinderUser.isLoggedIn = false

// console.log(tinderUser) 

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Yash",
            lastname: "Pathak"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);  //Pathak

//Combining 2 objects using Object.assign
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
//{} used as an optional parameter which is target and others are source objects

//Using Spread Operator:
const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);

//Values we get from the database is Array of Objects

const users = [
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 2,
        email: "ay@gmail.com"
    },
    {
        id: 3,
        email: "yas@gmail.com"
    }
]

users[1].email

console.log(tinderUser) //{ id: '123abc', name: 'Emma', isLoggedIn: false }
//Some Methods
console.log(Object.keys(tinderUser)); //Array//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Emma', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Emma' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true