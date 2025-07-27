// let mynum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let a=mynum.forEach( (num) =>{
//     if(num > 5){
//     return num   //// forEach is specially designed for performing action it doesnot return anything
//     }
// })
// console.log(a)

// let b= mynum.filter( (num)=>{
//     if(num>5){
//         return num
//     }
// })
// console.log(b)

// let b=mynum.filter( (num) => (num > 5))
// console.log(b)

let mynum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sort_num=mynum
                .map( (num) => (num *10))
                .map( (num) => (num +1))
                .filter( (num) => (num >40) )     //// Method chaining
console.log(sort_num)