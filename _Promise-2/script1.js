const things = ["Shoes","Clothes","Mobiles","Laptops","Electronic"]

const promise = makeOrder(things)

promise.then(function(orderId){
    console.log(orderId)
})

function makeOrder(things){
    const promise = new Promise(function(resolve,reject){
        if(!validation(things)){
            const error = new Error("Invalid request")
            reject(error)
        }

        const orderId = things
        if(orderId){
            resolve(orderId)
        }
    })
    return promise
}

function validation(things){
    return things
}