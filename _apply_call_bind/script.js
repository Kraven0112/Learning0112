// //example-1 of call and apply method in javascript
// const object1 = {
//     firstName:"Sushil",
//     lastName:"Chaudhary",
//     age:21,
//     country:"Nepal",
//     getFullName(){
//         return`My name is ${this.firstName} ${this.lastName}.`
//     }
// }

// const object2 = {
//     firstName:"Akshay",
//     lastName:"Saini"
// }

// const output1 = object1.getFullName.call(object2)
// const output2 = object1.getFullName.apply(object2)

// console.log(output1)
// console.log(output2)

// //example-2 of call apply method in javascript

// const oneObj = {
//     firstName:"Arun",
//     lastName:"Chaudhary",
//     age:22,
//     country:"Nepal"
// }

// const getFullDetail = function(){
//     return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am from ${this.country}`
// }


// const result1 = getFullDetail.call(oneObj)
// const result2 = getFullDetail.apply(oneObj)

// console.log(result1)
// console.log(result2)


// for only call method in javascript

const getDetail = function(para1,para2,para3){
    console.log(this)
    console.log(para1)
    console.log(para2)
    console.log(para3)
    return "getDetail"
}

const res1 = getDetail.call(this,"grab","pakad0","getting")
console.log(res1)


// for only apply method in javascript
const getDetail1 = function(para1,para2,para3){
    console.log(this)
    console.log(para1)
    console.log(para2)
    console.log(para3)
    return "getDetail1"
}

const res2 = getDetail1.apply(this,["gulllak","matchbox","Boxes"])


const res3 = getDetail1.bind(this,"god","devil","devotee")
console.log(res3())