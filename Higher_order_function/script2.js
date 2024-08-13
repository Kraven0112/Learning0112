const clientName = ['Lucky','Bharat','Laxman','Birat','Kaushal']
const animal = ['Cat','Dog','Goat','Buffalo','Cow']

//creating prototype capitalForm function without using this keyword
Array.prototype.capitalForm= function(nameg){
    const output = []
    for(let i=0; i<nameg.length; i++){
        output.push(nameg[i].toUpperCase())
    }
    return output
}
// console.log(clientName.capitalForm(clientName))
// console.log(animal.capitalForm(animal))

//creating prototype capitalForm function using this keyword

Array.prototype.capitalForm = function(){
    const output = []
    for(let i=0; i<this.length; i++){
        output.push(this[i].toUpperCase())
    }
    return output
}

// console.log(clientName.capitalForm())
// console.log(animal.capitalForm())


//creating prototype smallForm function without using this keyword 

Array.prototype.smallForm = function(param1){
    const output = []
    for(let i=0; i<param1.length; i++){
        output.push(param1[i].toLowerCase())
    }
    return output
}

// console.log(clientName.smallForm(clientName))
// console.log(animal.smallForm(animal))

// creating prototype smallForm function using this keyword

Array.prototype.smallForm=function(){
    const output = []
    for(let i=0; i<this.length; i++){
        output.push(this[i].toLowerCase())
    }
    return output
}

// console.log(clientName.smallForm())
// console.log(animal.smallForm())


const evenNum = [2,4,6,8,10]
const oddNum = [1,3,5,7,9]
const number = [1,2,3,4,5,6,7,8,9,10]
// creating prototype sumOfAll function without using this keyword
Array.prototype.sumOfAll = function(param1){
    let output = 0
    for(let i = 0; i<param1.length; i++){
        output = output+param1[i]
    }
    return output
}

// console.log(evenNum.sumOfAll(evenNum))
// console.log(oddNum.sumOfAll(oddNum))
// console.log(number.sumOfAll(number))

// creating prototype sumOfAll function using this keyword
Array.prototype.sumOfAll = function(){
    let output = 0
    for(let i=0; i<this.length; i++){
        output = output+this[i]
    }
    return output
}
// console.log(evenNum.sumOfAll())
// console.log(oddNum.sumOfAll())
// console.log(number.sumOfAll())


//// creating prototype multiplyOfAll function without using this keyword
Array.prototype.multiplyOfAll = function(param1){
    let product = 1
    for(let i=0; i<param1.length; i++){
        product*= param1[i]
    }
    return product
}

console.log(evenNum.multiplyOfAll(evenNum))
console.log(oddNum.multiplyOfAll(oddNum))
console.log(number.multiplyOfAll(number))