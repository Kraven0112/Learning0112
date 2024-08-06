// debugger
// function getX(){
//     return 10
// }

// console.log(window.getX())
// console.log(this.getX())
// console.log(getX())


// console.log(num) //output is undefined

// var num =20

// console.log(a) //cannot access a before initialization
// console.log(b)//cannot access b before initialization

// const a =10
// let b = 20

// console.log(this) //represents global object which is window

// const arr1 = [1,2,3,4,5]
// const arr2 =[6,7,8,9,10]
// const output = arr1.concat(arr2)
// console.log(output) //output is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myName = "Sushil"
// console.log(myName.concat(" Chaudhary")) 
// //output is Sushil Chaudhary

const parent = document.querySelector('.container')
const product = document.querySelector('.myproduct')

const audio = new Audio('Bura_Haal.mp3')

//Event Bubbling-1

parent.addEventListener('mouseup',(event)=>{
    event.stopPropagation()
    event.currentTarget.childNodes[1].addEventListener('click',(event)=>{
        audio.play()
        event.stopPropagation()
    })
    event.currentTarget.childNodes[3].addEventListener('click',()=>{
        event.stopPropagation()
        audio.pause()
    })
})

//Event Bubbling-2


product.addEventListener('mouseup',(event)=>{
    event.stopPropagation()
    event.currentTarget.childNodes[1].addEventListener('click',(event)=>{
        window.location.href="http://www.youtube.com"
    })

    event.currentTarget.childNodes[3].addEventListener('click',(event)=>{
        window.location.href="http://www.facebook.com"
    })

    event.currentTarget.childNodes[5].addEventListener('click',(event)=>{
        window.location.href="http://www.instagram.com"
    })

})

//splice() method -- effect in original array
const fruits = ["Apple","Banana","Orange","Dates","Grapes"]
console.log(fruits.splice(1,2)) //index 1 and 2 are included
console.log(fruits)


//slice() method --does not effect in original array
const animal = ["Cat","Dog","Horse","Lion","Tiger"]
console.log(animal.slice(1,3)) //index 1 and 2 are included and index 3 is excluded
console.log(animal)
