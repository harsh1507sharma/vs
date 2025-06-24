//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false //boolean h ye
const outsideTemp = null 
let userEmail; // ye undefined h

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array hai ye

let myObj = {
    name: "diya",
    age: 2,
} // curly braces ke andar hamesha object hote hai andar dataype kuch bhi ho

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
console.log(typeof outsideTemp)
// null ka datatype object aata hai 