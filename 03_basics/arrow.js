const user={
    user_name:"sinan",
    price:400,

    WelcomeMessage:function(){
        console.log(`${this.user_name}, welcome to website`)
        console.log(this);
        

    }
}

// console.log(user.user_name);
// user.WelcomeMessage()
// user.user_name="saif"
// user.WelcomeMessage()
// console.log(this);

// let chai=function (){
//     // let username="sinan"
//     console.log(this)
// }
// chai()

// let chai = () => {
//     let user_name="sinan"
//     console.log(this.user_name)
// }
// chai()

// const addtwo=(num1, num2)=>{ /// this is explicit return when you are using curly braces you must use return keyword
//     return num1+num2
// }
// console.log(addtwo(5,3))

// const addtwo=(num1,num2) => num1+num2  /// implicit return:i'll assume you dont have to write the return keyword
// console.log(addtwo(5,3))

const addtwo=(num1,num2)=>(num1+num2)

console.log(addtwo(2,4))