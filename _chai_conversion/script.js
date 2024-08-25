// conversion in javascript
// boolean to number
// false => 0 and true => 1
let boolean = false
let number = Number(boolean)
let number1 = parseInt(boolean)

// string to number
const strNum = "12345"
const number2 = parseInt(strNum)
const number3 = Number(strNum)
// console.table([typeof number,number,typeof number1,number2,typeof number2,number3,typeof number3])

// number,boolean to string
const num1 = 2006
const boolean1 = true

const strNUm1 = num1.toString()
const booleanString1 = boolean1.toString()
const strNum2 = String(num1)
const booleanString2 = String(boolean1)
console.table([typeof strNUm1,typeof booleanString1,typeof strNum2,typeof booleanString2])

console.log(parseInt(true)) //output is NaN