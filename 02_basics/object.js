let home_Country= Symbol ("india")

let userInfo={
    name:"sinan",
    age:18,
    [home_Country]:"India", /// [sumbol(home_country)]:"inida "   declaring without defining
    city:"dubai",
    email:"sinan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","wednesday"]
}

// console.log(userInfo["name"])
// console.log(userInfo.email)
// console.log(typeof(userInfo[home_Country]))

userInfo.email="sinan@amazon.com"
// Object.freeze(userInfo)
userInfo.email="sinan@icloud.com"
// console.log(userInfo)

userInfo.greeting=function(){
    console.log("hello JS user")
}

userInfo.greetingTwo=function(){
    console.log(`hello, ${this.name}`)
}


console.log(userInfo.greeting())
console.log(userInfo.greetingTwo())