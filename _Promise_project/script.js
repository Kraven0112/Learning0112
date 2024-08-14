// details
const cartId = document.querySelector("#cart-id")
const payment = document.querySelector("#payment")
const summaryDetail = document.querySelector("#summary")
const userWallet = document.querySelector("#wallet")

// buttons
const order = document.querySelector('#order')

const cartOfThings = ["Shoes", "Clothes", "Laptops"]

makeOrder(cartOfThings)
  .then(function (orderId) {
    return orderId
  })
  .then(function (orderId) {
    cartId.innerHTML = `Ordered cart-Id : ${orderId}`
    console.log(orderId)
    return showOrderSummary(cartOfThings)
  })
  .then(function (summary) {
    summaryDetail.innerHTML = summary
    console.log(summary)
    return proceedPayment(summary)
  })
  .then(function (payProof) {
    payment.innerHTML = payProof
    console.log(payProof)
    return updateWallet(payProof)
  })
  .then(function (walletInfo) {
    userWallet.innerHTML = walletInfo
    console.log(walletInfo)
  })
  .catch(function (error) {
    console.log(error.message)
  })

//makeOrder
function makeOrder(cartOfThings) {
  const promise = new Promise(function (resolve, reject) {
    if (!validation(cartOfThings)) {
      reject("Cart is not valid")
    }

    const cartId = "Cart-0112"
    if (cartId) {
    order.addEventListener('click',function(){
        resolve(cartId)
    })
    }
  })
  return promise
}

//validation function
function validation(cartOfThings) {
  return cartOfThings
}

//showOrderSummary
function showOrderSummary(cartOfThings) {
    return new Promise(function (resolve, reject) {
    resolve("Your order is successfull")
    })
  }
  

// proceed to payment
function proceedPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment is successfull")
  })
}

//update wallet
function updateWallet() {
  return new Promise(function (resolve, reject) {
    resolve("Your wallet is updated")
  })
}
