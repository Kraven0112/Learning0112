// Higher order function
// function doubleAndAdd(x,fn){
//     return fn(x*2)
// }
// function addThree(y){
//     return y+3
// }
// console.log(doubleAndAdd(5,addThree)) //output is 13

// Higher order function having multiple functions as an argument
// function myfun(a,f1,f2,f3){
//     return f1(a*12),f2(a+24),f3(a-1)
// }

// function myfun1(x){
//     return(x*5)
// }
// function myfun2(y){
//     return(y*5)
// }
// function myfun3(z){
//     return(z*5)
// }

// console.log(myfun(5,myfun1,myfun2,myfun3))




//Asynchronous callback function
// function f1(){
//     console.log("I am from f1 function")
// }

// function f2(callback){
//      console.log("Starting")
//      setTimeout(()=>{
//         callback()
//      },2000)
//      console.log("Ending")
// }
// f2(f1)

// Synchronous callback function
// function fun1(){
//     console.log("I am from fun1")
// }

// function fun2(callback){
//     console.log("Starting the journey.")
//     callback()
//     console.log("Ending the journey.")
// }
// fun2(fun1)

// const radius = [3,2,4,1,5]

// const calculateArea = function(radius){
//     const output = []
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output
// }
// console.log(calculateArea(radius))


// const circumference = function(radius){
//     const output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }
// console.log(circumference(radius))

// const radius = [3,2,4,1,5]

const calculateArea = function(radius){
    return Math.PI*radius*radius
}

const circumference = function(radius){
    return 2*Math.PI*radius
}

const diameter = function(radius){
    return 2*radius
}

// const output = function(radius,method){
//     const array = []
//     for(let i=0; i<radius.length; i++){
//         array.push(method(radius[i]))
//     }
//     return array
// }

// // Area of circle
// console.log(output(radius,calculateArea))

// //circumstance of circle
// console.log(output(radius,circumference))

// //Diameter of circle
// console.log(output(radius,diameter))

// //using map method 
// console.log(radius.map(calculateArea))

// console.log(radius.reduce(calculateArea))


// const num = [12,13,14,15]

// Array.prototype.calculate = function(method){
//     const array = []
//     for(let i=0; i<this.length; i++){
//         array.push(method(this[i]))
//     }
//     return array
// }

// console.log(num.calculate(calculateArea))
// console.log(num.calculate(circumference))
// console.log(num.calculate(diameter))



// String.prototype.capitalForm = function(){
//     return this.toUpperCase()
// }

// String.prototype.smallForm = function(){
//     return this.toLowerCase()
// }

// const myname = "sushil"
// const myname1 = "SUSHIL"

// console.log(myname.capitalForm())
// console.log(myname.smallForm())
// console.log("i am from nepal".capitalForm())


function get(){
    return function my(){
        console.log(x)
    }
}
let x = 20
const output = get()()
console.log(window.x)


function moon(){
    function moon(){
        console.log(x)
    }
    let x =20
    moon()
}
moon()




