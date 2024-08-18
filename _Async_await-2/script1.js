// Real api fetching in async function and using await in javascript.

const API_URL = "https://api.github.com/users/Kraven0112"

async function makeApiCall(){
try{
    const response  = await fetch(API_URL)
    console.log(response)
    
    const data = await response.json()
    console.log(data)
}catch(error){
    console.error(error.message)
}
}
makeApiCall()//.catch(function(error){console.log(error)})



const restAPi_Url = "https://restcountries.com/v3.1/all"

const promise = new Promise(function(resolve,reject){
    resolve(restAPi_Url)
    // reject("api rejected because of some reason")
})

promise.then(function(url){
    const response = fetch(url)
    return response
}).then(function(data){
    return data.json()
}).then(function(actuaData){
    for(let i=0; i<actuaData.length; i++){
        console.log(actuaData[i])
    }
}).catch(error=>console.log(error))