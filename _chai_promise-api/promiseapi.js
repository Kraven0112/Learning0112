// promise api in javascript
const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("I am from promise1.")
        reject("promise1 is failed.")
    },4000)
})

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("I am from promise2.")
        reject("promise2 is failed.")
    },2000)
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("I am from promise3.")
        reject("promise3 is falied.")
    },3000)
})


Promise.any([promise1,promise2,promise3])
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.error(error)
    // console.log(error.errors) //array of errors
})

// Promise.all() =>If all promises are resolved then it settles all promises as resolved. And if one of the promises gets rejected it will settle all promises as rejected. 

//Promise.allSettled() => It settles all promises resolved even promise is rejected.

// Promise.race() => Settles promise when it is  resolved as well reject promise if it is falied. It gives single promise as an output.

// Promise.any() => It is known as promise resolve seeker. If one of the promises is rejected it ignores that promise and move forward to settle resolved promise. If all promises are rejected it give aggregate errors, means array of errors. It also gives single promise if promise gets resolved.