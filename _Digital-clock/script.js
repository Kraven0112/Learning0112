let second = 0
let minute = 0
let hour = 0
let time = document.querySelector('.container')
let d = new Date()

setInterval(function(){
    d = new Date()
    second = d.getSeconds()
    minute = d.getMinutes()
    hour = d.getHours()

    if(second < 10){
        second = "0"+second
    }
    if(minute<10){
        minute = "0"+minute
    }
    if(hour < 10){
        hour = "0"+hour
    }
    time.innerHTML = `<h2>${hour}<span>hr</span>:${minute}<span>min</span>:${second}<span>sec</span></h2>`
},1000)