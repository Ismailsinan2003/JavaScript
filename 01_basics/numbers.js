let price = 39.8765;
// console.log(price.toFixed(2));   


let num = 1234567.89;
console.log(num.toLocaleString('en-us'));
console.log(num.toLocaleString('hi-in'));
console.log(num.toLocaleString('en-eg'));

let nums = 123.456;
console.log(num.toPrecision(4));  // "123.5"
console.log(num.toPrecision(2));  // "1.2e+2"


let num1 = 255;
console.log(num.toString());      // "255"
console.log(num.toString(2));     // "11111111"  (binary)
console.log(num.toString(16));    // "ff"        (hexadecimal)
