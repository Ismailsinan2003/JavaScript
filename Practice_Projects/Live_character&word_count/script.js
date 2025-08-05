const textarea = document.getElementById('contentBox')
const statusLine= document.getElementById('statusLine')
const button = document.getElementById('submitBtn')

let text;
let text_words;
let textCount;
let text_word_count;

textarea.addEventListener('input', ()=>{
    text = textarea.value.trim()
    textCount=text.length

    text_words = text.split(" ").filter( (word) => word!=="")
    text_word_count=text_words.length

    if(textCount > 200 || text_word_count >50){
        statusLine.innerHTML="you are exceeding the limit"
        button.disabled=true
    }else{
         button.disabled =false
    }
    
    
   
    button.style.cursor="pointer"
}, false)

button.addEventListener('click', ()=>{
    
    statusLine.innerHTML=`${textCount} characters | ${text_word_count} words`


}, false)

// console.log(text)