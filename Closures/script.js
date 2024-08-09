// function get(){
//     let message ="I am developer"
//     function get(){
//         console.log(message)
//     }
//     return get()
// }
// const output = get()
// console.log(output)

// function x(){
//     let a = 10
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

// function get(argument){
//     let m = argument()
//     console.log(m)
// }
// get(function(){
//     return "I am a developer."
// })

//we can do it it is valid code in javascript
function getInfo(){
    let myName = "Sushil Chaudhary"
    function getMyName(){
         console.log(myName)
    }
    return getMyName
}
getInfo()()

//we can do it. It is valid in javascript
// function getDetail(){
//     let detail = 100

//      function getMyDetail(){
//         console.log(detail)
//     }

//     detail =10
//     return getMyDetail

// }
// const z = getDetail()
// // console.log(z)
// z()

//We can do it also in javascript in closure


// function sum (x){
//     return function final(y){
//         return x+y
//     }
// }

// const sum1 = sum(10)
// const sum2 = sum(20)

// console.log(sum1(10))
// console.log(sum2(10))

const body = document.querySelector('body')

//function to change font size --- using closure
function fontSize(size){
    return function getSize(){
        body.style.fontSize =`${size}px`
    }
}

const size12 = fontSize(12)
const size14 = fontSize(14)
const size16 = fontSize(16)

document.querySelector('.size-12').onclick = size12
document.querySelector('.size-14').onclick = size14
document.querySelector('.size-16').onclick = size16


//closure in javascript
function sum(a){
    return function sum(b){
        return function sum(c){
            return function sum(d){
                return function sum(e){
                    return a+b+c+d+e
                }
            }
        }
    }
}

const sum1 = sum(20)
const sum2 = sum1(20)
const sum3 = sum2(20)
const sum4 = sum3(20)
const sum5 = sum4(20)

console.log(sum5)
