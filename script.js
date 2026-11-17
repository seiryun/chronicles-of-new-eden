
const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('video').forEach(v=>{v.muted=true;v.playsInline=true;});
