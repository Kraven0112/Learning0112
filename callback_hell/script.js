let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')
let p4 = document.querySelector('#p4')
let p5 = document.querySelector('#p5')
function callbackhell(){
    setTimeout(()=>{
        p1.innerHTML="I am from first callback function."
        setTimeout(()=>{
            p2.innerHTML="I am from second callback function."
            setTimeout(()=>{
                p3.innerHTML="I am from third callback function."
                setTimeout(()=>{
                    p4.innerHTML="I am from fourth callback function."
                    setTimeout(()=>{
                        p5.innerHTML = "Callback hell is some kind of issue which make code unreadable and ummaintainable."
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
callbackhell()