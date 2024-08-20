// if-else statement

const balance  = 1500
// if(balance < 1000){
//     console.log("Balance is less than 1000 ")
// }else if(balance < 600){
//     console.log("Balance is less than 600")
// }else if(balance < 550){
//     console.log("Balance is less than 550")
// }else{
//     console.log("Balance is greater than 450")
// }

// ternary operator in javascrit

const num = 5
// num > 10 ? console.log("greater") : console.log("less")

// falsy value => false,0,-0,Bigint 0n, "", null, undefined , NaN
// truthy value => " ","0", [], {}, function(){}


// Nullish Coalescing operator for null and undefined
let animal
animal = null ?? 10 ?? 100

// console.log(animal)


const arr = [1,2,3,4,5]
const obj = {
    username:"Sushil",
    userage:21,
    usercountry : "Nepal"
}

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

for (let i = 1; i <10; i++) {
    // console.log(`Outer loop is : ${i}`)
    for (let j = 1; j < 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`)
        
    }
    
}

for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log("Deteced 5")
        break
    }
    console.log(index)
    
}