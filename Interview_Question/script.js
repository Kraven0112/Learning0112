// const m = [1,2,3,4,5]
// console.log(Array.isArray(m))

// var number = 0
// function get(){
//     number++
//     console.log(number) //output is 1
//     number++ + ++number
//     // output is 3 because number++ = 1 and ++number= 2
//     console.log(number)
// }
// get()


// console.log(22/true+1)
// console.log(2/0+2)


// console.log(x)
// var x = 20
// console.log(x)

// const a = "Sushil"

// for(let i = 0; i<a.length; i++){
//     let num = a.charCodeAt(i)
//     console.log(num)
// }



// function get(){
//     var n = 0
//     return function get2(){
//         n++
//         console.log(n)
//     }
// }
// let output = get()
// output()//output ==>
// output() //output ==>
// output()//output ==>


// console.log(NaN !== NaN) //output is true
// console.log(NaN != NaN) //output is true
// console.log(undefined === undefined)// output is true

// const number = [0,1,2,3,4,5]
// let newArray = []
//  let result = number.filter((element,index,arr)=>{
//     // return newArray.push(number[index]*2)
//     return newArray.push(element*2)
// })
// console.log(newArray)
// // console.log(result)

// let x = 10
// function myget(){
//     return function getting(){
//         console.log(x) //output --> undefined 
//     }
//     var x = 30
// }
// myget()()

//Closure in javascript
// function mult(x){
//     return function mult(y){
//         return function mult(z){
//             return function mult(a){
//                return x*y*z*a
//             }
//         }
//     }
// }
// const output = mult(10)(20)(30)(40)
// console.log(output)