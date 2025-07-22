let cars=["BMW", "Pagani", "Mercedes"]
let bikes =["KTM", "Kawasaki", "triumph"]
let trucks=["AshokLeyland", "BharatBenz", "Eicher"]

// console.log(cars.push(bikes))
// console.log(cars)

// let vehicles=(cars.concat(bikes)).concat(trucks)
// console.log(vehicles)

let vehicles=[...cars, ...bikes, ...trucks]  ///spread operator
// console.log(vehicles)

let score1=80
let score2=90

// console.log(typeof score1)

// console.log(Array.from("score1"))
let a1=Array.of(score1, score2)

let a2=[80,90]

console.log(typeof(a1))
console.log(typeof(a2))


