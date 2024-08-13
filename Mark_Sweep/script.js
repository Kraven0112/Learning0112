//first way to closure function
// function f1(x){
//     return function f2(y){
//         console.log(x*y)
//     }
// }
// f1(12)(12)

// // second way to closure
// function fun1(x){
//     return function fun2(y){
//         console.log(x*y)
//     }
// }
// const mult1 = fun1(12)
// const mult2 = mult1(12)



function myfunc(myname){
    this.myname = myname
}

myfunc.prototype.greet=function(){
    console.log(`Hi My name is ${this.myname}`)
}

const user1 = new myfunc("Sushil chaudhary")
user1.greet()

console.dir(myfunc)