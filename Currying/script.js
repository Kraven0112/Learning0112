//function currying using bind() method
// let multiply = function (x,y){
//     console.log(x*y)
//     console.log(x)
//     console.log(y)
// }

// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(5)//output is 10

// let multiplyByThree = multiply.bind(this,4)
// multiplyByThree(5) //output is 20

//function currying using closure in javascript
// function sum(a){
//     return function(b){
//         return function(c){
//             return function (d){
//                 console.log(a+b+c+d)
//             }
//         }
//     }
// }

// const sum1 = sum(10) //return function(b){}
// const sum2 = sum1(20)//return function(c){}
// const sum3 = sum2(30)//return function(d){}
// const sum4 = sum3(40)//output is 100


// debugger
let moon = function(a){
    return function(b){
        console.log(a)
        console.log(b)
        return a*b
        
    }
}

let get1 = moon.bind(this,20) // here 20 is value of a
let get2 = get1()
console.log(get2(30)) // 30 is value of b
