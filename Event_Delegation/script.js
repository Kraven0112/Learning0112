const parent = document.querySelector('#parent')

parent.addEventListener('click',(event)=>{
    console.log(event.target.id)
if(event.target.tagName == 'LI'){ 
    window.location.href = "/"+event.target.id}
})