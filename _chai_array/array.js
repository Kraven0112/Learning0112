// //deep copy means not sharing same reference 
// // shallow copy means having same reference

// // deep copy of array
// const arr1 = [1,2,3,4,5]
// const arr2 = JSON.parse(JSON.stringify(arr1))

// // console.log(arr1 === arr2) //output is false
// // arr2[0] = 11
// // console.log(arr2)
// // console.log(arr1)



// // shallow copy
// const array1 = [1,2,3,4,5]
// const array2 = array1

// // console.log(array1 === array2) //output is true
// array2[0] = 11
// console.log(array2)
// console.log(array1)

const number1 = [1,2,3,4,5,6,7,8,9,10]

//join() method 
const number2  = number1.join('')

// console.log(number1)
// console.log(number2)

// slice() method doesnot manipulate original array
// but splice() method manipulates original array

const numbers = [1,2,3,4,5,6]

// slice() method
const afterSlice = numbers.slice(1,3)
// console.log(afterSlice)
// console.log(numbers)

// splice() method
const afterSplice = numbers.splice(1,3)
// console.log(afterSplice)
// console.log(numbers)


// primitive data-type values are stored in stack 
// but non-primitive data-type values are stored in heap

const evenNum = [2,4,6,8]
const oddNum  = [1,3,5,7]

const allNum = evenNum.concat(oddNum)
// console.log(allNum)

const allNum2 = [...evenNum,...oddNum]
// console.log(allNum2)

const another_array = [1,2,3,[4,5,6],7,[8,9,10]]

// console.log(another_array.flat())

// console.log(Array.isArray("Sushil"))
// console.log(Array.from("Sushil"))
// console.log(Array.from({name:"Sushil"})) //empty array
// console.log(Array.from(Object.keys({name:"Sushil"})))
// console.log(Array.from(Object.values({name:"Sushil"})))

// const hundred = 100
// console.log(hundred.toFixed(3))

const score1 = 100
const score2 = 200
const score3 = 300
const string = "Sushil"


// Array.from() methods creates new array from an iterable object
// Array.of() methods creates new array from set of elements
// console.log(Array.from(string))
// console.log(Array.of(score1,score2,score3))
