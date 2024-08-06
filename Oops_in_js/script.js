//Encapsulation in javascript using function
// function getFullDetail(fullname,age,address){
//     const mechanic ={
//         name:fullname,
//         age:age,
//         address:address,
//         getYourDetail(){
//             console.log( `Hello My name is ${this.name}. I am ${this.age} years old. I am from ${this.address}`)
//         }   
//     }
//     return mechanic
// }

// const mechanic1 = getFullDetail("Sushil Chaudhary",21,"Nepal")
// const mechanic2 = getFullDetail("Manoj Shah",21,"Nepal")

// console.log(mechanic1.getYourDetail === mechanic2.getYourDetail) // output is false because for each object function is creating separate memory location

// console.log(mechanic1.getYourDetail() === mechanic2.getYourDetail()) // output is true because function is returning same reference.


//Abstraction and polymorphism using function


// function getFullDetail(){
//     return `Hello My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am from ${this.address}`
// }


// function createUser1(firstName,lastName,age,address){
//     const user={
//         firstName:firstName,
//         lastName:lastName,
//         age:age,
//         address:address,
//         getFullDetail
//     }
//     return user
// }
// const userMe= createUser1("Sushil","chaudhary",21,"Nepal")

// const userYo = createUser1("Rakesh","Shah",21,"Nepal")

// console.log(userMe.getFullDetail === userYo.getFullDetail) // output is true because function is creating same memory loaction.


//Inheritance using function

// function MakeUser1(firstName,lastName,age,address){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//     this.address=address
// }

// MakeUser1.prototype.getDetail=function(){
//     return`${this.firstName} ${this.lastName} ${this.age} ${this.address}`
// }

// const me = new MakeUser1("Sushil","Chaudhary",21,"Nepal")
// const you = new MakeUser1("Mahesh","Shah",23,"Nepal")

// console.log(me.getDetail())
// console.log(you.getDetail())
// console.log(you.getDetail === me.getDetail) //ouput is true because function is creating same memory location


function myEmp(name,salary,age){
    const user={
        name:name,
        salary:salary,
        age:age,
        getEmpDetail : myEmp.common.getEmpDetail
    }
    return user
}

myEmp.common={
    getEmpDetail(){
    return `Name:${this.name}  Salary:${this.salary}  age:${this.age}`
}
}

const emp1 = myEmp("Mahesh Khatiwada",50000,26)
const emp2 = myEmp("Sanima",35000,23)

console.log(emp1.getEmpDetail() === emp2.getEmpDetail())