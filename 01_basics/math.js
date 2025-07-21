
// console.log(Math);

// console.log(Math.round(4.5));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.8));

let maxAge=65
let minAge=18

let randAge=Math.floor(Math.random()*(maxAge-minAge +1)+minAge)
// console.log(randAge);

// console.log(Math.floor((Math.random()*6)+1))

let max = 10;
let min = -10;
let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("Random Number between -10 and 10: " + randNum);

let minLength = 8;
let maxLength = 16;
let passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
console.log("Random Password Length: " + passwordLength);

