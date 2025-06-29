//DATE

const date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof date)


let createdate = new Date(2480,4,9,6,5)
let mycreatedate = new Date("01/05/2500")

// month 0 se chalu hot hai

console.log (createdate.toDateString())
console.log (createdate.toLocaleString())
console.log (mycreatedate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(createdate.getTime())
// ye ab tak ke saare mili seconds de dega from 1 jan 1979 se , time hamesha miliseconds mein aat ahi

console.log(date.getMonth())




// iske baare mein aage detail mein padhenge
console.log(mycreatedate.toLocaleString('Default',{
    weekday:"long"
}))