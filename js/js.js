const baner = document.querySelector('.baner');
const form = document.querySelector('form');
const input = document.querySelector('input')


window.addEventListener('load',function(){
    setTimeout(()=>{
        baner.style.top = '-100vh'
    },2000)
})


form.addEventListener('submit' , event =>{
    event.preventDefault();
    console.log(input.value);
})