// "use strict"
// function get(){
//     console.log(this)
// }
// get()


function getMessage(username){
    if(!username){
        return "Please enter username"
    }
    return `${username} just logged in`
}

const result =getMessage("Sushil")
// console.log(result)

//we cannot access property of inner function outside of inner function.

function one(){
    const username = "Sushil"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    two()
    // console.log(website)
}
one()

function getThis(){
    // console.log(this) //givs global object
}
// getThis()

// console.log(this) // in node it gives empty object
// IIFE function helps us to avoid pollluting the global namespace


// (function(){
//     var num = 10
    
//     function get(){
//         console.log("I am private")
//     }
//     get()
//     const obj ={
//         getback:function(){
//             return num
//         }
//     }
//     console.log(obj.getback())
// })()

