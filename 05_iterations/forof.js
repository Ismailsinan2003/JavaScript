// for of

// ["",""]
// [{}, {}, {}]

// let myarr=[1, 2, 3, 4]

// for (const i of myarr) {
//     // console.log(i)
// }

// const greetings="hello world"
// for (const greet of greetings) {
//     if(greet==" "){
//         continue
//     }
//     console.log(greet)

// }

// maps is a dataset



// let map=new Map()
// map.set('name', 'sinan')
// map.set('age', '22')
// map.set('name', 'ismail')
// // console.log(map)

// for (const [i,j] of map) {   //destructure of array
//     console.log(i, j)
// }


let a={
    name:"sinan",
    age:22,
    name:"ismail"
}
// console.log(a)

for (const i of a) {
    console.log(i)
}