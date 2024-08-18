"use strict"
//global object
console.log(this)

//in function scope
function f1(){
    // the value of this will be undefined when we use strict mode
    console.log(this)
}
f1() //undefined
window.f1() //window object


const object = {
    a:10,
    x:function(){
        console.log(this) //indicates that object
    }
}
object.x()

const object2 = {
    b : 20,
    x:function(){
        const y = ()=>{
            console.log(this)
        }
        y()
    }
}

object2.x()

const object3 = {
    myname : "Sushil",
    printName:()=>{
        console.log(this) //window object
    }
}
object3.printName()
