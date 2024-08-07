//module.js file for module concept

console.log("I am from module.js file")

const animals =["Cat","Dog","Cow","Buffalo","Goat"]

const userData={
    userName:"Sushil Chaudhary",
    age:21,
    country:"Nepal",
    continent:"Asia",
    nowIn:"",
    get getdetail(){
        return `My name is ${this.userName}. I am ${this.age}. I am from ${this.country} which is situated in ${this.continent}. `
    },
    set presetAddress(address){
        if(typeof address !== 'string'){
            throw new Error("address must be string")
        }
        return this.nowIn = address
    }
}

function getFullName(firstName,lastName){
    return `My name is ${firstName} ${lastName}.`
}



export{animals,userData,getFullName}

console.log("I am also from module.js file")

console.log('1'+true)
console.log(undefined + 1)
console.log(null + 1)
console.log(typeof(Number("12345")))
console.log(typeof(String(12345)))
console.log(typeof(Boolean(0)))
console.log(typeof(animals))
console.log(typeof(getFullName))
console.log(typeof(undefined))
console.log(typeof(null))
//true because of value equality checking not type equality
console.log(undefined == null)

//false because of value equality and type equality checking
console.log(null === undefined)


//eval method is used to solve string type mathematical expression and gives output a number
const x = 10
const calculation = eval("x*2+5")
console.log(calculation)