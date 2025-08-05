const input=document.getElementById('taskInput')
const button = document.getElementById('addTaskBtn')



input.addEventListener('input', ()=>{
    
    
})

button.addEventListener('click', ()=>{
    task =input.value
    const li =document.createElement('li')
    li.innerHTML=`${task}`
    document.querySelector('#taskList').append(li)

    input.value=''
})