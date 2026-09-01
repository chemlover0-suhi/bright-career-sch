
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear());
