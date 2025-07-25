// function tea(){
//     console.log("it's Tea Time")
// }
// tea()

// (function tea(){
//     console.log("it's Tea Time")
// })()

let result=(function addtwo(num1,num2){
    return num1+num2

})(4,5)
console.log(result);

((username)=>{
    console.log (`hello ${username}, welcome to dubai`)
})("sinan")