// debugger
console.log("I am script.js file")
console.log("I am also from script.js")

import { animals,userData,getFullName } from "./module.js"

console.log(animals)
console.log(userData)

//destructure in javascript
const[animal1,animal2,...animal3] = animals

console.log(animal1) //separate value
console.log(animal2) //separate value
const output = animal3.map((animal)=>{
    console.log(animal)
})

//array element form
const [firstName,lastName] = userData.userName.split(' ')

//object key value form
const{0:myName,1:mySurname} = userData.userName.split(' ')

console.log(firstName)
console.log(lastName)
console.log(myName)
console.log(mySurname)

//accessing regular method
const fullName = getFullName("Sushil","Chaudhary")
console.log(fullName)

//accessing set method from object
userData.presetAddress="Bangalore,India"
console.log(userData.nowIn)

//accessing get method
console.log(userData.getdetail)
