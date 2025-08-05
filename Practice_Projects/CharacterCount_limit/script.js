const textarea = document.getElementById('messageBox')
const counter = document.getElementById('charCount')
const button = document.getElementById('submitBtn')



textarea.addEventListener('input', () => {

    const charc = textarea.value
    const count = charc.length

    if(count==0){
        button.disabled = true
    }else{
        button.disabled = false
    }

    
    if(count > 100){
        counter.style.color ="red"
        button.disabled = true
    }else{
        counter.style.color ="white"
    }
    
    
    counter.innerHTML = `${count} / 100`

})