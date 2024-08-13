const cart = ["pant","kurta"]

const promise = createOrder(cart)

promise.then(function(orderId){
    console.log(orderId)
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder
        // validation-cart
        // orderId
        if(!validateCart(cart)){
            const error = new Error("Cart is not vlaid")
            reject(error)
        }


        const orderId = "@0112abcsush"
        if(orderId){
            resolve(orderId)
        }
    })
    return pr
}

function validateCart(cart){
    return true
}