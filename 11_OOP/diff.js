// Goal: is create person who can greet

// 1) using Object based approach

// const person1={
//     uname: "sinan",
//     age:22,
//     greet: function () {
//         console.log("hello, my name is", this.uname)
//     }
// }

// person1.greet()

// const person2={
//     uname: "saif",
//     age:16,
//     greet: function () {
//         console.log("hello, my name is", this.uname)
//     }

// }
// person2.greet()

// here we repeat the same structure and methods for more number it is tedious

// 2) OOP based Approach

class person {
    constructor(name, age){
        this.name=name
        this.age=age
    }

    greet(){
        console.log("hello, my name is",this.name)
    }
}

const person1=new person("sinan", 22)
person1.greet()
const person2 = new person ("saif",16)
person2.greet()

// by using this approach code is reusable and organized in one place