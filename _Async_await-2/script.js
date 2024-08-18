// constume promsie to ahow to work of await and async function in javascript.

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p1 is resolved.")
        // reject("p1 url is invalid.")
    },6000)
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p2 is resolved.")
        // reject("p2 url is invalid.")
    },4000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p3 is resolved.")
        // reject("p3 url is invalid.")
    },2000)
})

// regular function 
// function getApi(){
//     console.log("Starting")

//     const promsie1 =  p1
//     console.log(promsie1)

//     const promsie2 =  p2
//     console.log(promsie2)

//     const promsie3 =  p3
//     console.log(promsie3)


//     console.log("Ending")
// }
// getApi()


//async function to settle promise in javascript.
async function getAPi1(){
    console.log("Starting")

    const promsie1 = await  p1
    console.log(promsie1)

    const promsie2 = await p2
    console.log(promsie2)

    const promsie3 =  await p3
    console.log(promsie3)

    console.log("Ending")
}

// getAPi1()