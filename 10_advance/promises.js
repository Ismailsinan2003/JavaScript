// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function (){
//         console.log("task completed")
//         resolve()
//     },1000)
// })

// promiseOne.then(function() {
//     console.log("promise consumed")
// })


// new Promise( function(resolve, reject) {
//     setTimeout(function () {
//         console.log("task 2 completed")
//         resolve()
//     },1000)
// }).then(function () {
//     console.log("task resolved")
// })

// const promiseThree= new Promise( function (resolve, reject) {
//     setTimeout(function (){
//         resolve({username:"sinan", email:"sinan@example.com"})
//     },1000)
// })

// promiseThree.then(function (info){
//         console.log(info)
// })


// const promiseFour=new Promise(function (resolve, reject){
//     setTimeout(function () {
//         let error = true
//         if(!error){
//             resolve({username:"sinan", age:22})
//         }else{
//             reject("something went wrong")
//         }

//     }, 1000)
// })

// promiseFour
// .then( (info)=>{
//     console.log(info)
//     return info.username
// })
// .then( (username)=>{
//     console.log(username)
// })
// .catch( (error)=>{
//     console.log(error)
// })
// .finally( ()=>{
//     console.log("the promise is either resolved or rejected")
// })

// const promiseFive=new Promise(function (resolve, reject){
//     setTimeout(function (){
//         let error =true
//         if(!error){
//            resolve({username:"sinan", city:"dubai"}) 
//         }else{
//             reject("oops something went wrong")
//         }
//     },1000)
// })

// async function consumePrimiseFive(){
//     try {
//         const response=await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePrimiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log("E:", error)
//     }

// }
// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) =>{
    return response.json()
}).then( (data)=>{
    console.log(data)
}).catch( (error)=>{
    console.log(error, "oops something went wrong")
}).finally( ()=>{
    console.log("the fetch is either resolved or failed")
})

