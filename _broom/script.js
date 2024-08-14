const users = [
    {firstName:"Sushil",lastName:"Chaudhary",age:21},
    {firstName:"Akhilesh",lastName:"Tripathi",age:45},
    {firstName:"Karan",lastName:"Saini",age:31},
    {firstName:"Virat",lastName:"Singht",age:24},
    {firstName:"Kiran",lastName:"Thapa",age:19}
]

const output = users.filter(x => x.age < 30).map(x=>`${x.firstName} ${x.lastName}`)
console.log(output)

const output1 = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(`${curr.firstName} ${curr.lastName}`)
    }
    return acc
},[])
console.log(output1)


const number = [2,3,4,5,6,7,8]
function get(x){
    return x.toString(2)
}
const result = number.map(get)
console.log(result)

const binary = ['10', '11', '100', '101', '110', '111', '1000']
function bi(x){
    return parseInt(x,2)
}
const result2 = binary.map(bi)
console.log(result2)


// unique number
const gigjag = [2,3,2,3,4,5,4,5,6,7,6,7]
console.log(gigjag)
let khali = []
for(let i = 0;i <gigjag.length; i++){
    if(!khali.includes(gigjag[i])){
        khali.push(gigjag[i])
    }
}

console.log(khali)

// map method
let myunique = []
const result3 = gigjag.map(function(x){
    if(!myunique.includes(x)){
        myunique.push(x)
    }
})
console.log(myunique)

// reduce methos
const result4 = gigjag.reduce(function(acc,curr){
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},[])
console.log(result4)


const decimal = 12
const decimaltobinary = decimal.toString(2)
const binarytodecimal = parseInt(decimaltobinary,2)

console.log(decimal)
console.log(decimaltobinary)
console.log(binarytodecimal)
