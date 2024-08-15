// shopping cart
const things = ["shoes","clothes","Laptops"]

makeOrder(things)
.then(function(orderId){
    return orderId
})
.then(function(orderId){
    console.log(orderId)
    return orderSuccess()
})
.then(function(orderSummary){
    console.log(orderSummary)
    return makePayment()
})
.then(function(paymentDetail){
    console.log(paymentDetail)
    return updateWallet()
})
.then(function(walletInfo){
    console.log(walletInfo)
})
.catch(function(error){
    console.log(error)
})

// makeOrder function
function makeOrder(things){
    return new Promise(function(resolve,reject){

        const orderId = "sus0112"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },2000)
        }
    })
}

// orderSuccess function
function orderSuccess(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Ordered successfully.")
        },2000)
    })
}

// makePayment function
function makePayment(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Payment successfull.")
        },2000)
    })
}

// updateWallet function
function updateWallet(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Your wallet is updated successfully.")
        },2000)
    })
}
