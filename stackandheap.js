// memory
// stack (primitive) and heap (non-primitive)

// no primitive mein jo bhi change wo refrence deta hai to original value mein change hhota aur jab bhi memory stack mein defined hoti h to uski ek copy declare hoti hai

let myName = "harshsharma"
let myfakename = myName
 myfakename = "munni"

console.log(myName)
console.log(myfakename)

let myemail={
    email: "nonidiya@gmail.com"
}

let oneemail = myemail
 oneemail.email = "ladononi@gmail.com"

 console.log(oneemail)
 console.log(myemail)

