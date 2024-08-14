'use strict'
console.log("Coding Start")
console.log("--------------------------")

/*
Destructre in javascript
 */
const user={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal"
}


const{firstName:username,lastName:usersurname,age:userage,country:usercountry} = user
// console.table([username,usersurname,userage,usercountry])


const  strNum = null
// console.log(typeof(strNum))
// console.log(typeof strNum)

let value = Number(strNum)
// console.log(value)
// console.log(typeof value)
// console.log(typeof(value))


const isBoolean = " "
console.log(Boolean(isBoolean))

console.log("--------------------------")
console.log("Coding end") 