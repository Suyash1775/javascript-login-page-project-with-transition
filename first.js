let signUpbtn=document.querySelector(".signUpbtn");
let signInbtn=document.querySelector(".signInbtn");
let namefuild=document.querySelector(".namefuild");
let tital =document.querySelector(".tital");
let underline=document.querySelector(".underline");
let text= document.querySelector('.text');

signInbtn.addEventListener('click',()=>{
    namefuild.style.maxHeight='0';
    tital.innerHTML='sign In';
    text.innerHTML='forgot password';
    signUpbtn.classList.add('disable');
    signInbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)'
    })
signUpbtn.addEventListener('click',()=>{
    namefuild.style.maxHeight='60px';
    tital.innerHTML='sign Up';
    text.innerHTML='Password Suggestions';
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)'
    })