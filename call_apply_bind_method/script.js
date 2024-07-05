const name1={
    firstName:"Sushil",
    lastName:"Chaudhary"
}
 let printFullName = function(city,country){
    console.log(this.firstName+" "+this.lastName + " "+ city + " "+country)
}
//function borrowing using call and apply
printFullName.call(name1,"Mahendranager","Nepal")
printFullName.apply(name1,["Mahendranager","Nepal"])

const name2={
    firstName:"Anurag",
    lastName:"Singh"
}

//function borrowing call and apply
printFullName.call(name2,"Delhi","INdia")
printFullName.apply(name2,["Delhi","India"])


//bind method
const bindFunction = printFullName.bind(name1,"Mahendranagar","Nepal")

//print function
console.log(bindFunction) 

//print all the value after binding the function or invoked function
bindFunction() 