let myArr=[0,1,2,3,4]


myArr.pop()  // removes the last element of the array
myArr.shift() // removes the first element of the array

myArr.push(5) // pushes the element to last of the array
myArr.unshift(5) // pushes the element to first of the array
// console.log(myArr)

let colors = ["red", "green", "blue", "yellow", "purple", "orange"];

let sliced=colors.slice(1,4)
// console.log(sliced)

let numbers = [10, 20, 30, 40, 50, 60];

let spliced=numbers.splice(2,2)
// console.log(numbers)

let animals = ["cat", "dog", "rabbit"];
animals.splice(2,0,"elephant","tiger")
console.log(animals)