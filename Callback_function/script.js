// // call-back function
// function my(){
//     return "Hello !! My name is Sushil Chaudhary. I am from Nepal. I want to be a developer."
// }

// function get(func){
//     return func()
// }
// const output  = get(my)
// console.log(output)

//example of callback function
function myclick(){
    let num = 0
    document.querySelector('#click').addEventListener('click',function xyz(){
        console.log("Button clicked",++num)
    })
}
myclick()

//example of callback function 
const resolveBtn =   document.querySelector('.resolve')
const rejectBtn =   document.querySelector('.reject')

const promise = new Promise((resolve,reject)=>{
    resolveBtn.addEventListener('click',()=>{
        resolve("I got resolved.")
    })
    rejectBtn.addEventListener('click',()=>{
        reject("I got rejected.")
    })
}).then((output)=>{console.log(output)})
.catch((error)=>{console.log(error)})