const date  = new Date()

// console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleString())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.getDay())

// timeStamp
const time  = Date.now()
// console.log(time)
// console.log(date.getTime())

const newDate = new Date()
const get = newDate.toLocaleString('default',{
    weekday:"long",
    month:"long",
    year:"numeric",
    day:"numeric"
})
console.log(get)

console.log(newDate.toLocaleDateString())

