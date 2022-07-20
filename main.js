// Data types
/*
* we have the following datatype in JS
* string: example "femi", "Tolu is going to school", "abuja"
* numbers: e.g 27, 6.5, 30
* undefined: whenever you declare a variable without giving it a value it is undefined
* null: empty
* string methods: toUpperCase(), toLowerCase()

*/



let name = "Oluwafemi" //string
let age = 26 //number
let c = null //null
let y // undefined
let isMarried = true 
let favcolor = ["red", "blue", "royal-blue", "royal-purple", "pink"]

console.log(age)
console.log(name)
console.log(typeof y)
console.log(typeof isMarried)

//Strings
let s = "Hello World!"
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.length)

//Concatenation
let m = "I am"
let n = "I go to PWC Bootcamp"
let p = "I love to learn JavaScript"

console.log(m + " " + name + " " + n + " and " + p);
// string literal
console.log(`${m} ${name} ${n} and ${p}`)

console.warn("this is a warning")
console.error("this is an error")

let fruits = ['apple', 'banana', 'orange']
fruits.push('grape')
fruits.push('strawberry')
fruits.pop()
fruits.shift()
fruits.unshift('kiwi')
fruits[4] = 'mangos'
console.log(fruits)

//object literal
const person = {
    name: 'femi',
    age: 26,
    height: 6.0,
    weight: 180,
    hobbies: ['music', 'movies', 'sports'],
    isMarried: false,
    greetings: function() {
        console.log("hello")
    }
}

console.log(person.name)

