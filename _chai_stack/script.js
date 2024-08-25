// stack concept
let ourman = "@yuvraj"
let myman = ourman
myman = "Sushil"

// console.log(ourman)
// console.log(myman)


// heap concept using object
const user1 ={
    email:"yur@google.com",
    country:"India"
}

const user2 = user1

//update to existing property from object
user2.email="sushilChaudhary2059@gmail.com"
user2.country = "Nepal"

// console.log(user1)
// console.log(user2)


// heap concept using array
// both arr1 and arr2  are indicating to same heap data 
const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = arr1

// updating value of index in array 
arr2[5] = 15
arr2[6] = 16

// console.log(arr1)
// console.log(arr2)

function greeting(){
    console.log("I am from greeting.")
    sayHi()
}

function sayHi(){
    console.log("I am from sayHi .")
}

// greeting()


const ar1 = [1,2,3,4]
const ar2 = [5,6,7,8]
// console.log([...ar1,...ar2])

const num = "2345"
// console.log(num.padStart(10,"#"))
// console.log(num.padEnd(10,"#"))


const string ="Hello era I am coming"
// console.log(string.split(''))


// console.log(string.replace('am','was'))

const number = 1000
// console.log(number.toString())
// console.log(number.toFixed(2))


// toPrecision(precision) used to get precise value from number
// and returns string
const num2 = 123.9999
// console.log(num2.toPrecision(4))


const num3 = 100000
// console.log(`Binary number of 1000 is ${num3.toString(2)}`)
// console.log(num3.toLocaleString('en-IN'))

// to change negative value in positive -- Math.abs(negative_value)
// console.log(Math.abs(-10)) //


const min = 5
const max = 10

// console.log(Math.floor((Math.random()*(max-min + 1) + min)))

// console.log(Math.floor(Math.random()*6 + 1))

// console.log(Math.min(12,3,4,5))
// console.log(Math.max(12,3,4,5))

const date = new Date()
console.log(date)