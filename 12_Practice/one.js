// Resolve After Delay
// Write a function delay(ms) that returns a Promise which resolves after ms milliseconds.

// delay(2000).then(() => console.log("Resolved after 2 seconds"));


// function delay(ms){
//     return new Promise(function(resolve, reject){
//         setTimeout( ()=>{
//             resolve()
//         }, ms)
//     })

    
// }

// delay(2000).then( ()=>{
//     console.log("resolved after two second")
// })

// ===============>>>>>>>>>>>>>>>

// Simple Resolve/Reject
// Create a function checkNumber(num) that returns a Promise.

// Resolve with "Even" if the number is even.

// Reject with "Odd" if it’s odd.

// function checkNumber(num){
//     return new Promise( function (resolve, reject){
//         if(num%2==0){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }
// checkNumber(20).then( ()=>{
//     console.log("the number is a even number")
// }).catch( ()=>{
//     console.log("the number is odd")
// })


// ===================>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise Chain Basics
// Make a Promise that resolves with a number. Then chain .then() handlers to:

// Double the number.

// Add 5.

// Log the result.

// function number(num){
//    return new Promise( function (resolve, reject){
//         resolve(num)
//     })
// }

// number(5).then( (num)=>{
//     let doubled = num+num
//     console.log(doubled)
//     return doubled
    
// }).then( (doubled)=>{
//     let added=doubled+5
//     return added
// }).then( (added)=>{
//     console.log(added)
// })

// ============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Convert Callback to Promise
// Write a function readFilePromise(filename) that mimics reading a file with a callback but instead returns a Promise. (You can fake it using setTimeout).


// function readFilePromise(filename){
//     return new Promise(function (resolve, reject){
//         setTimeout( ()=>{
//             if(filename){
//                 resolve(`File ${filename} has been read`)
//             }else{
//                 reject("Error:no files provided")
//             }
//         },2000)
//     })
// }

// readFilePromise("").then( (message)=>{
//     console.log(message)
// }).catch( (error=>{
//     console.log(error)
// }))



// ====================>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Fetch Simulation
// Create a function fakeFetch(url) that returns a Promise.

// If url === "google", resolve with "Google data".

// Else reject with "404 Not Found".

// function fakeFetch(url){
//     return new Promise(function(resolve, reject){
//         if(url === "google"){
//             resolve(`resolved with '${url} data'`)
//         }
//         else{
//             reject('404 not found')
//         }
//     })
// }

// fakeFetch("google").then( (message)=>{
//     console.log(message)
// })

// ================>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.all Practice
// Create three Promises that resolve after different times (1s, 2s, 3s) with values "A", "B", "C". Use Promise.all to log all values together.


// let promiseOne= new Promise( function (resolve, reject){
//     setTimeout( ()=>{
//         resolve("A")
//     },1000)
// })

// let promiseTwo= new Promise( function(resolve, reject){
//     setTimeout( ()=>{
//         resolve("B")
//     },2000)
// })

// let promiseThree= new Promise(function(resolve, reject){
//     setTimeout( ()=>{
//         resolve("C")
//     },3000)
// })

// Promise.all([promiseOne, promiseTwo, promiseThree]).then( (message)=>{
//     console.log(message)
// })


// ==================>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.race Practice
// Create two Promises: one resolves after 1 second with "First", the other after 2 seconds with "Second". Use Promise.race to log whichever finishes first.

    
// let promiseone= new Promise( function(resolve, reject){
//     setTimeout( ()=>{
//         resolve("first")
//     },1000)
// })

// let promiseTwo= new Promise( function(resolve, reject){
//     setTimeout( ()=>{
//         resolve("second")
//     },2000)
// })

// Promise.race([promiseone, promiseTwo]).then( (message)=>{
//     console.log(message)
// })


// =============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Error Handling
// Write a function loginUser(username, password) that:

// Resolves "Login Successful" if username = "admin" and password = "1234".

// Rejects "Invalid Credentials" otherwise.
// Then test with .then() and .catch().


// function loginUser(username, password){
//     return new Promise( function(resolve, reject){
//         if(username=="Admin" && password =="1234"){
//             resolve("login successful")
//         }else{
//             reject("Invalid Credentials")
//         }
//     })
// }

// loginUser("Admin", "1234").then( (message)=>{
//     console.log(message)
// }).catch( (error)=>{
//     console.log(error)
// })

// ===============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Retry Logic with Promises
// Simulate a network request that fails randomly (50% chance reject, 50% chance resolve).
// Write a function fetchWithRetry(retries) that tries up to retries times before rejecting.

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let value = Math.floor(Math.random() * 2); // 0 or 1
        if (value === 1) {
            resolve("Request accepted ✅");
        } else {
            reject("Network request rejected ❌");
        }
    }, 1000); // simulate network delay
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

