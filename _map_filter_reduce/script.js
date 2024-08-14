// // Decimal to binary
// const num = 12
// const binary = num.toString(2)

// // binary to decimal
// const decimal = parseInt(binary,2)

// console.log(num)
// console.log(binary)
// console.log(decimal)


// const number = [5,6,7,8,9]

// //double function
// function double(x){
//     return x*2
// }

// //triple function
// function triple(x){
//     return x*3
// }

// //evenNum function
// function evenNum(x){
//     if(x % 2 == 0){
//         return x
//     }
// }

// //oddNum function
// function oddNum(x){
//     if(x % 2 != 0){
//         return x
//     }
// }

// //smaller number
// function smaller(x){
//     if(x < 8.5){
//         return x
//     }
// }

// // greater number
// function greater(x){
//     if(x > 5){
//         return x
//     }
// }

// //double value
// const output1 = number.map(double)
// console.log(output1)

// // triple value
// const output2 = number.map(triple)
// console.log(output2)

// //evenNum
// const output3 = number.filter(evenNum)
// console.log(output3)

// // oddNum
// const output4 = number.filter(oddNum)
// console.log(output4)

// //smaller number
// const output5 = number.filter(smaller)
// console.log(output5)

// //greater number
// const output6 = number.filter(greater)
// console.log(output6)


// reduce method in javascript -> used to get all the value in single pattern

// const natural = [1,2,3,4,5,6,7,8,9,10]

// function sumof(x,y){
//     return x = x + y
// }

// const sum = natural.reduce(sumof)
// console.log(sum)

// unique number
// const zeroxNUm = [2,2,3,3,4,4,5,5]
// let uniArray = []
// zeroxNUm.reduce(function(acc,curr){
//     if(!uniArray.includes(curr)){
//         uniArray.push(curr)
//     }
// })
// console.log(uniArray)

const users = [
    {firstName:"Sushil",lastName:"Chaudhary",age:21},
    {firstName:"Rakesh",lastName:"Rana",age:45},
    {firstName:"Akhil",lastName:"Gowda",age:58},
    {firstName:"Akshay",lastName:"Saini",age:45},
    {firstName:"Anurag",lastName:"Singh",age:23},
]

const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
},{})

console.log(output)

const arr = [2,4,6,8,2,4,6,8];

const uniVal = arr.filter((el,ind) => arr.indexOf(el) === ind)
console.log(uniVal);