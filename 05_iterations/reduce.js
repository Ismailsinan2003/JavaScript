// const mynums=[1, 2, 3, 4]


// let newnum=mynums.reduce( function(acc, curval){
//     return acc+curval
// }, 0)

// console.log(newnum)


const shoppingCart=[
    {
        item:"polo-Tshirt",
        price:599
    },
    {
        item:"sweatshirt",
        price:1299
    },
    {
        item:"trouser",
        price:1599
    },
    {
        item:"sweater",
        price:1799
    },
]

// let total_product=shoppingCart.map( (product) => product.price)
// // console.log(total_product)

let total_cost=shoppingCart.reduce( (acc,item) =>{
    return acc + item.price
},0)

console.log(`the total cost of all the product is ${total_cost}`)
