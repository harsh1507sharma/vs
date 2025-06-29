const score =300
const balance = new Number(200)

console.log(score)

console.log(balance)
console.log(balance.toString())
// ab ye string ban gaya hai to string wale saari properties laga sake hai

console.log(balance.toString().length)

console.log(balance.toFixed(2))

const othernumber = 38365.56415
console.log(othernumber.toPrecision(6))
console.log(othernumber.toPrecision(5))
console.log(othernumber.toPrecision(4))

const hundreds = 1000000

// for amereican number system
console.log(hundreds.toLocaleString())

// for indian number system
console.log(hundreds.toLocaleString('en-IN'))


//***********************MATHS****************** */
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.max(5,4,7,8,9))
console.log(Math.min(5,4,7,8,9))
console.log(Math.ceil(45.1))
console.log(Math.floor(-78.9))
console.log(Math.round(45.9))

console.log (Math.random())
// this gives value between 0 and 1
console.log (Math.random()*10)

// if we multiply this by 10 , we should get value between 1 and 10

console.log (Math.floor(Math.random()*10) +1 )
// if we want ki hame 0 wala case avoid karna hai to uske liye


const max =20
const min = 10
console.log ( Math.floor(Math.random()*(max - min +1))  + min)













