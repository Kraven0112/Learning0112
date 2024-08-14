/*
 prefer not to use var 
because of issue in block scope and functional scope
string is primitive data type in javascript
alert() we cannot use alert normally in node.js
*/
'use strict'
console.log("Coding Start")
const accountId =1234
let myname = "Sushil Chaudhary"
var address = "Nepal"
const galat = "hai"

console.table([accountId,myname,address,galat])

{
    var moon = "sub-planet"
}
console.log(moon)

console.log(undefined === undefined)
console.log(null === null)


console.log("1"+1) //output is 11
console.log(1 + "1") //output is 11
console.log(1 * "1") //output is 1

const user = {
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal",
    continent:"Asia"
}
const key  = Object.keys(user)
const value = Object.values(user)
const entry  = Object.entries(user)
console.table([key,value])

console.log(typeof(key))
console.log(typeof(null))
console.log("Coding end") 