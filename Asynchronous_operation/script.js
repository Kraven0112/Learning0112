// 'use strict'
// // event loupe in javascript
// console.log("I am from outer world")
// function get(){
//     console.log(" I am the first one.")
//     setTimeout(function(){
//         console.log("I am from settimeout.")
//     },2000)
//     console.log("I am the second one.")
// }
// get()
// // setTimeout(function xyz(){
// //     console.log("I am from xyz")
// //     xyz()
// // },5000)


//microtask-queue operation
    const api = fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => console.log(data[0].name))
.catch(error=>console.log(error))

//macrotask-queue operation
setTimeout(function xyz(){
    console.log("I am from setTimeout.")
},5000)

// synchronous 
console.log("I am from synchronous task")