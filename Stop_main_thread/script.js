// console.log("start")

// setTimeout(()=>{
//     console.log("I ma from settimeout")
// },5000)

// console.log("End")

// // stoping main thread
// let starttime = new Date().getTime()
// let endtime = starttime
// while(endtime < starttime + 10000){
//     endtime = new Date().getTime()
// }
// console.log("Hello sushil")
// console.log("I am from global")

// async function foo(){
//     return "Hello World";
// }
// const res = foo()
// console.log(res);

// function get (para1,para2){
//     console.log(para1) //output function f1(){}
//     console.log(para2) //output function f2(){}
//     return para1 !== para2
// }

// function f1(){
//     console.log(" I am from function 1.")
// }

// function f2(){
//     console.log(" I am from function 2.")
// }

// const func1 = get(f1,f2)
// console.log(func1)

// console.dir(this) //indicates window object


// currying in javascript having closure
// function f1(x){
//     return function(y){
//         return function(z){
//             console.log(x*y*z)
//         }
//     }
// }

// const func1 = f1(20)
// const func2 = func1(30)
// const func3 = func2(40)

//closure in javascript
// function f1(munni){
//     let mini = munni
//     function f2(){
//         console.log(mini)
//     }
// }
// const fun1 = f1("Groot")
// console.log(fun1) //output ids undefined

// first class function and first class citizen
// function regular(){
//     return "I am software developer."
// }

// function iget(param1){
//      console.log(param1())
//      return param1 //returning from function
// }

// //passing as a argument and using as a vlaue
// const output = iget(regular) 
// console.log(output)


