const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
//Access object props using Object Destructuring
// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh
//Also Define Alias
const {courseInstructor: instructor} = course
console.log(instructor);//hitesh

//API Concepts
/*
Aapke pas values aati hai backend se, un values ko kaise aap likhte hai--yeh hai api
phle xml format m value aati thi
ab mostly JSON m aati hain
{
    "name": "yash",
    "age": 25,
    "location": "Mathura"
}
or in Array format
[
    {},
    {},
    {}
]
//tools to understand api response: JSON Formatter
*/