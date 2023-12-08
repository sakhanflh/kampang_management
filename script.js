const nav = document.querySelector("nav");

window.addEventListener('scroll', function(){
    nav.classList.toggle('nav-active', window.scrollY > 0);
})

// Slider
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000);

