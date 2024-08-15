// const accountId = 1234
// let myname = "Sushil CHaudhary"
// console.table([accountId,myname])

// //promise
// const promise  = new Promise(function(resolve,reject){
//     resolve("I am getting resolve")
// })

// async function get(){
//     const pro = await promise
//     return pro
// }
// console.log(get())

// const mypromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("I am resolve")
//     },2000)
// })

// mypromise.then(function(pro){
//     console.log(pro)
// })

// async function get2(){
// const data = await mypromise
// console.log(data)
// }
// get2()


const promise1  = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("I am from promise1")
    },3000)
})
const promise2  = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("I am from promise2")
    },1000)
})
const promise3  = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("I am from promise3")
    },2000)
})

Promise.any([promise1,promise2,promise3])
.then(function(pro){
    console.log(pro)
})
.catch(function(error){
    console.error(error)
    // console.log(error.errors) //array of error
})