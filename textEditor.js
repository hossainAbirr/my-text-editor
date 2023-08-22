function textEditorValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
};

function setInputValueStyle (inputId){
    const inputFieldValue = textEditorValue(inputId);
    
}; 
document.getElementById('btn-bold').addEventListener('click', function (){
    console.log('clicked')
    document.getElementById('text-area').classList.add('font-bold')
})

document.getElementById('btn-italic').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('italic')
})
document.getElementById('btn-underline').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('underline')
})

// text align 
document.getElementById('btn-left').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('text-left')
})
document.getElementById('btn-center').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('text-center')
})
document.getElementById('btn-right').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('text-right')
})
document.getElementById('btn-justify').addEventListener('click', function(){
    document.getElementById('text-area').classList.add('text-justify')
})


document.getElementById('text-size').addEventListener('mouseleave', function(event){

    const inputValue = event.target.value;
    const size = "text-["+inputValue+"px]";
    // console.log(className);
    document.getElementById('text-area').classList.add(size)
})

document.getElementById('text-colour').addEventListener('mouseleave', function(e){
    const inputValue = e.target.value;
    const color = "text-["+inputValue+"]";
    document.getElementById('text-area').classList.add(color)
})

