const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar-mobile");
const hamburgerButton = document.querySelector('.navbar-extra');

window.addEventListener('scroll', function(){
    nav.classList.toggle('nav-active', window.scrollY > 0);
})

// Menu
hamburgerButton.addEventListener('click', function(){
    navbar.classList.toggle('navbar-reveal');
});
// Menu

// Slider
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000);

