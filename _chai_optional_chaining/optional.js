// optional chaining ?.

const object1 = {
    userName:"Sushil Chaudhary",
    userAge:21,
    userCountry:"Nepal",
    userEmail:"choudhary@gmail.com",
    current:{
        country:"India",
        city:"Bangalore",
        state:"Karnataka"
    },
    hobbies:"playing football, system security"
}

// console.log(object1?.userName)
// console.log(object1?.current?.country)
// console.log(object1?.hobbies)

const object2 = {
    userall:{
        user1:{
            userName:{
                name:"Sushil Chauhdary"
            }
        }
    }
}

// console.log(object2?.userall?.user1?.userName?.name)

