// deep copy does not allow same reference
// shallow copy allows same reference

// shallow copy of an object
const obj1 = {
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal"
}

const obj2 = obj1

// console.log(obj1)
// console.log(obj2)

// update propert{key:value}
obj2.firstName="Anush"
obj2.lastName = "Singh"
obj2.age = 22
obj2.country = "India"

// console.log(obj1)
// console.log(obj2)
// console.log(obj1 === obj2) // true

// deep copy of an object

const object1 = {
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal"
}

const object2 = JSON.parse(JSON.stringify(object1))

// console.log(object1)
// console.log(object2)

//update property{key:value}
object2.lastName = "Singh"
object2.age = 22
object2.country = "India"
object2.firstName="Anush"

// console.log(object1)
// console.log(object2)
// console.log(object1 === object2) // false

// const object = new Object({name:"Sushil Chaudhary",age:21})
// console.log(object)



const mySym =  Symbol("key1")

const objs = {
    [mySym]:"mysymbol"
}
objs.greet = function(){
    // console.log("Hello users")
    return "from function"
}

// console.log(typeof objs[mySym])
// console.log(objs.greet())



const user1 = {
    username1:"Mukesh Ambani",
    age1:21,
    country1:"Indai"
}

const user2 = {
    username2:"Anurag Thakurathi",
    age2:26,
    country2:"Nepal"
}

const user3 = {
    username3:"Resham Chaudhary",
    age3:22,
    country3:"Nepal"
}

const output1 ={...user1,...user2,...user3}
const output2 = Object.assign({},user1,user2,user3)

console.log(output1)
console.log(output2)