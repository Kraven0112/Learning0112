// // function statement / function declaration
// // we can access it before its declaration because of hoisting
// myName()
// function myName(){
//     console.log("20"-20) //output is 0
// }
// myName()

// // function expression in javascript
// const func = function(){
//     console.log("I am function expression")
// }
// func()

// // Anonymous function
// const anonymous = function(){ //this is anonymous function
//     console.log("I am anonymous function.")
// }
// anonymous()


// // Named function expression
// const named  = function get(){
//     console.log("I am from named function expression.")
// }
// named()

// // first class function is ability of using function as a value, pass an argument and return from any function in javascript.
// // first_class_function / first_class_citizen
// // regular function
// function myfunction(){
//     console.log("I am from regular function.")
// }

// //first class function
// function firstClass(para1){
//     console.log(para1) 
// }
// firstClass(myfunction)


// const resolveBtn = document.querySelector('.resolve')
// const rejectBtn = document.querySelector('.reject')


// //promise in javascipt
// const promise = new Promise((resolve,reject)=>{
//     resolveBtn.addEventListener('click',()=>{
//         resolve("I got resolved")
//     })
//     rejectBtn.addEventListener('click',()=>{
//         reject("I am rejected")
//     })
// }).then((output)=>{console.log(output)})
// .catch((error)=>{console.log(error)})
// //if click rejectBtn, it will print rejected message
// // if click resolveBtn. it will print resolve message 