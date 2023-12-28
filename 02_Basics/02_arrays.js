const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heroes[3][1]) //flash

/*
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//Note:
//  "push" append elements in existing array and "concat" return a new array

//Alternative Method of concat is "Spread Operator"
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
*/

/*
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [2, 3, [4, 5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array); 
*/

/*
console.log(Array.isArray("Yash")); //false
console.log(Array.from("Yash")); //[ 'Y', 'a', 's', 'h' ]

console.log(Array.from({name: "Yash"})); //[] returns an empty array, here we have to tell what to return in array key or value otherwise it will return []
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

//Learn more about Array.of, Array.isArray, Array.from
