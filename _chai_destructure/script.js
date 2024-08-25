<<<<<<< HEAD
// destructure of object and array  in javascript

// array destructuring

const  numbers = [1,2,3,4,5,6,7,8]

const [num1,num2,...allNum] = numbers
// console.log(num1)//output - 1
// console.log(num2) //output - 2
// console.log(allNum) //rest array elements


const [number1,number2,...allNumber] = [...numbers]
// console.log(number1)//output - 1
// console.log(number2)//output - 2
// console.log(allNumber) //rest array elements

const{0:n0,1:n1,2:n2,...numAll} = {...numbers}
// console.log(n0,n1,n2)
// console.log(numAll)


// Object destructuring in javascript

const user = {
    uname:"Sushil Chaudhary",
    age:21,
    email:"sushilChaudhary2059@gmail.com",
    country:"Nepal"
}

// first-way
const{uname,age,email,country} = {...user}

// console.log(uname,age,email,country)

// second-way

const{uname:username,age:userage,email:useremail,country:usercountry} = {...user}
// console.log(username,userage,useremail,usercountry)


// generate number function in javascript

function getNum(num){
    let string = ''

    for(let i = 1; i<=num; i++){
        string += Math.floor(Math.random()*10)
    }

    return string
}

console.log(getNum(10))
=======
'use strict'
console.log("Coding Start")
console.log("--------------------------")

/*
Destructre in javascript
 */
const user={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    country:"Nepal"
}


const{firstName:username,lastName:usersurname,age:userage,country:usercountry} = user
// console.table([username,usersurname,userage,usercountry])


const  strNum = null
// console.log(typeof(strNum))
// console.log(typeof strNum)

let value = Number(strNum)
// console.log(value)
// console.log(typeof value)
// console.log(typeof(value))


const isBoolean = " "
console.log(Boolean(isBoolean))

console.log("--------------------------")
console.log("Coding end") 
>>>>>>> c6a16ead5a189b40a7034d4bc6e9fee6eac972a7
