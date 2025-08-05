const input =document.getElementById('password')
const checkbox = document.getElementById('togglePassword')

checkbox.disabled = true

input.addEventListener('input', (e)=>{
    if( !input.value.trim() == ""){
        
        checkbox.disabled = false
    }
    else{
        checkbox.disabled = true
    }
})

checkbox.addEventListener('click', ()=>{
    input.type=checkbox.checked ? "text" : "password"
    
})
