const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const count = document.getElementById('count')

let counter = 0
decrease.disabled=true

increase.addEventListener('click', () => {
    counter += 1
    count.innerHTML = `${counter}`
    console.log(count)
    decrease.disabled=false
})

decrease.addEventListener('click', () => {
    counter-=1
    count.innerHTML=`${counter}`
    if(counter===0){
        decrease.disabled=true
    }

})

reset.addEventListener('click', () => {
    counter = 0
    count.innerHTML = `${counter}`
    decrease.disabled =true

})

