const nav = document.querySelector("nav");

window.addEventListener('scroll', function(){
    nav.classList.toggle('nav-active', window.scrollY > 0);
})
