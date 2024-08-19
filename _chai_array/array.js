//deep copy means not sharing same reference 
// shallow copy means having same reference

// deep copy of array
const arr1 = [1,2,3,4,5]
const arr2 = JSON.parse(JSON.stringify(arr1))

// console.log(arr1 === arr2) //output is false
// arr2[0] = 11
// console.log(arr2)
// console.log(arr1)



// shallow copy
const array1 = [1,2,3,4,5]
const array2 = array1

// console.log(array1 === array2) //output is true
array2[0] = 11
console.log(array2)
console.log(array1)