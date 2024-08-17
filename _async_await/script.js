//async function in javascript

// const promise = new Promise(function (resolve, reject) {
//   resolve("promise is resolved.")
//     // reject("promise is rejected.")
// })

// async function getPromise() {
//   return promise
// }

// const proData = getPromise()
// proData
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.error(error)
//   })

// example of async and await in javascript
// const p1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("p1 is resolved")
//     },5000)
// })

// const p2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("p2 is resolved")
//     },10000)
// })

// const p3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("p3 is resolved")
//     },15000)
// })

// // async function with await keyword
// async function mygetway(){
//     console.log("I am from first")

//     const promise = await p1
//     console.log("Hello javascript")
//     console.log(promise)

//     const promise2 = await p2
//     console.log("Hello world")
//     console.log(promise2)

//     const promise3 = await p3
//     console.log("Hello groot")
//     console.log(promise3)
// }
// mygetway()

//normal function
// function mygetway1(){
//     p1.then(pro => console.log(pro))
//     console.log("promise")
// }
// mygetway1()

// Real world example of async and await in javascript.
//fetch returns response in javascript

const api_url = "https://restcountries.com/v3.1/all"

async function getFetch() {
  try {
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(response)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
getFetch()
