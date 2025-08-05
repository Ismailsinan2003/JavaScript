const input = document.getElementById('username')
const Status = document.getElementById('status')
const button = document.getElementById('submitBtn')


let username_list = []

input.addEventListener('input', () => {
    if (input.value.length < 4) {
        Status.innerText = "more than 4 character"
        button.disabled = true
        return
    }

    if (username_list.includes(input.value)) {
        Status.innerText = "username taken"
        button.disabled = true
    } else {
        Status.innerHTML = "Available"
        button.disabled = false
    }

})

button.addEventListener('click', () => {
    username_list.push(input.value)

    input.value = ''
    Status.innerHTML = ''
    button.disabled = true
    console.log(username_list)

})

