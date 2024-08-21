// for in loop in array indicates index and indicates keys in object
// for of loop in javascript indicates values
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

const arr1 = [1, 2, 3, 4, 5, 6]

for (let index in arr1) {
  // console.log(arr1[index])
}

const object1 = {
  username: "Sushil Chaudhary",
  userage: 21,
  usercountry: "Nepal",
}

for (let key in object1) {
  // console.log(object1[key])
}

const arr2 = [10, 20, 30, 40, 50]
for (num of arr2) {
  // console.log(num)
}

const object2 = {
  username: "Sushil Chaudhary",
  userage: 21,
  usercountry: "Nepal",
}
for (let keys of Object.keys(object2)) {
  // console.log(keys)
}

// console.log("----------------")

for (let values of Object.values(object2)) {
  // console.log(values)
}

// while loop in javascript

let index = 0

while (index <= 10) {
  // console.log("while_loop")
  index = index + 1
}

const arr3 = ["flash", "shaktiman", "superman", "batman"]

let i = 0

while (i < arr3.length) {
  // console.log(arr3[i])
  i = i + 1
}

// Do_while loop in javascript

let score = 11

do {
  // console.log(`Value is ${score}`)
  score++
} while (score <= 10)

const string = "Sushil_Chaudhary"

for (const character of string) {
  // console.log(character)
}

// Map in javascript ==> used for unique value
const map = new Map()

// ---> insertion method in map
map.set("a", 100)
map.set("b", 200)
map.set("c", 300)
map.set("d", 400)

//----> get method in map
// console.log(map.get('c')) //output 300

for (const [key, value] of map) {
  // console.log(key,":",value)
}

const object3 = {
  username: "Mohan",
  userage: 30,
  useremail: "moham@gmail.com",
}

for (const [key] of Object.keys(object3)) {
  // console.log(key) //first character of keys
}

for (const key of Object.values(object3)) {
  // console.log(key)
}

// forEach loop in javascript
const programming = ["Java", "Js", "Python", "Ruby"]

// programming.forEach(function(item) {console.log(item)})

// programming.forEach((item)=>{console.log(item)})

function printElement(item, index, array) {
  console.log(item, index, array)
}

// programming.forEach(printElement) //reference providing

const obj = [
  {
    language: "Java",
    languageFile: "java",
  },
  {
    language: "Python",
    languageFile: "py",
  },
  {
    language: "Javascript",
    languageFile: "js",
  },
  {
    language: "Ruby",
    languageFile: "rb",
  },
]

const output = obj.forEach((item) => {
  // console.log(item)
  return "foreach"
})

// console.log(output) //always return undefined

// filter method in javascript --returns array of the element of specified condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// implicit return
const output1 = numbers.filter((number) => number > 4)

//explicit return
const output2 = numbers.filter((number) => {
  return number > 4
})

// console.log(output1)
// console.log(output2)

const users = [
  {
    username: "Mukesh Rana",
    country: "Nepal",
    email: "mukesh@gmail.com",
  },
  {
    username: "Saroj Chaudhary",
    country: "Nepal",
    email: "saroj@gmail.com",
  },
  {
    username: "Bikash Singh",
    country: "India",
    email: "bikash@gmail.com",
  },
  {
    username: "John Scheward",
    country: "USA",
    email: "jonsch@gmail.com",
  },
  {
    username: "Philipe bourne",
    country: "Australia",
    email: "philip@gmail.com",
  },
]

let userOutput = users.filter((item) => {
  return item.username.includes("p")
})

userOutput = users.filter((item) => {
  return item.country === "Australia"
})

// console.log(userOutput)

//infinite function call in javascrpt not recommended
function f1() {
  console.log("f1")
  f2()
}

function f2() {
  console.log("f2")
  f3()
}

function f3() {
  console.log("f3")
  f1()
}
// f3()

// map method in javascript
const evenNum = [2, 4, 6, 8, 10]

const newNUm = evenNum.map((num) => num * 20)

// console.log(newNUm)





//Method chaining in javscript

const oddNum = [1,3,5,7,9]
const result1 = oddNum.map((num) => num * 20)
                        .map((num) => num + 1)
                        .filter((num) => num >= 10)
// console.log(result1)



// reduce method in javascript

const favNum = [2,4,6,8,10]

const result2 = favNum.reduce()