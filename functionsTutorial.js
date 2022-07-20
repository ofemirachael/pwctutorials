function addNum(a, b){
    return a+b
}

console.log(addNum(3,2));

function multiplyNum(a,b){
    return a * b
}

function subtractNum(a, b){
    return a - b
}

function divideNum(a, b){
    return a / b
}

console.log(multiplyNum(2,4))
console.log(subtractNum(4,3))
console.log(divideNum(15/3))

//arrow function
const sqrNum = (n) =>{
    return n*n
}

sqr = sqrNum(4)
console.log(sqr)

const numMod = (n) =>{
    return n % 2
}

console.log("numMod is", numMod(5))

for (let i = 2; i <=20; i+=2){
    console.log(i)
}

let someWords = "Adamu"

console.log(someWords.split())

let someArray = ["a", "b", "c", "d", "e", "f"]
console.log(someArray.reverse())

//function that will convert a given string to an array

const stringToArray = (s) => {
    let toArray = s.split('').reverse()

    return toArray

}

console.log(stringToArray("ajanlekoko"))

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}

console.log(isPalindrome("sola"))

function intPalindrome(num){
   let strValue = num.toString()
   return strValue === strValue.split("").reverse().join("")
}
console.log(intPalindrome(43324))