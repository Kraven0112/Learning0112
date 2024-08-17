const object1 = {
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal",
}

const object2 = {
    firstName:"Anurag",
    lastName:"Singh",
    age :28,
    country:"India"
}


// You should never do it because this is not effective
// object2.__proto__ = object1

// Prototype for an object in javascript

// Object.prototype.makeString = function(){
//     return this.toString()
// }

// Object.prototype.getFullName = function(){
//     return `My name is ${this.firstName} ${this.lastName}.`
// }
// Object.prototype.getAge = function(){
//     return `I am ${this.age} years old.`
// }

// Object.prototype.getCountry = function(){
//     return `I am from ${this.country}.`
// }

// Object.prototype.getFullDetail = function(){
//     return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am from ${this.country}.`
// }


// Prototype for function in javascript


// function get(){}

// const proto = new get()
// console.log(Object.getPrototypeOf(proto))
// console.log(get.prototype)

// const sum1 = eval("2+2")
// console.log(typeof(sum1)) //number
// console.log(eval("2+2") == eval("2+2")) //true

Array.prototype.getAllElement= function(){
    for(let i=0; i<this.length; i++){
        console.log(this[i])
    }
}

const arr1 = [1,2,3,4,5,6]
const arr2 = "Sushil".split('')

// console.log(arr2)
// console.log(arr2.getAllElement())
// console.log(arr1.getAllElement())
