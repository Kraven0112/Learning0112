//block is area where compound statements are available to perform operation

//for var variable
// var c = 100
// {
//     let a =10
//     const b =20
//     var c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c) //output is 30
// }
// console.log(c)//output is 30


//for let variable
// let a = 200
// {
//     let a =10
//     const b =20
//     var c = 30
//     console.log(a) //output is 10
//     console.log(b)
//     console.log(c)
// }
// console.log(a) //output is 200


// for const variable
// const b = 300
// {
//     let a =10
//     const b =20
//     var c = 30
//     console.log(a)
//     console.log(b) //output is 20
//     console.log(c)
// }
// console.log(b) //output is 300


// let m = 200
// {
//     var m = 400
// }
// generate error we cannot declare block scoped variable again


//lexical scope in function
// let m = 200
// function get(){
//     // const m = 400
//     function get(){
//         // var m = 600
//         function get(){
//             console.log(m)
//         }
//         get()
//     }
//     get()
// }
// get()


// Block only
// let n = 200
// {
//     let n = 400
//     {
//         var n = 600
//         console.log(n) //generate error n is already declared
//     }
//     console.log(n)
// }
// console.log(n)


// let a  // we can do it
// a=200


// const a  // we cannot do it because of type const
// a = 400

// var a // we can do it
// a = 200

const heading = document.querySelector('#random span')
const milisecond = document.querySelector('#mls span')

function generateRandom(){
    const random = Math.random()
    heading.innerHTML = `${random}`
}
setInterval(()=>{
    generateRandom()
    const date = Date.now()
    milisecond.innerHTML = ` ${date}`
},1000)

