const header=document.getElementById('header'), menu=document.getElementById('menuButton'), nav=document.getElementById('nav');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24),{passive:true});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'CLOSE ✕':'MENU ☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='MENU ☰'}));
