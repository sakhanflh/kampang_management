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

//Business Story

const ruebe = document.querySelector('.ruebe');
const goldchick = document.querySelector('.goldchick');
const cireng = document.querySelector('.cireng');
const trash = document.querySelector('.trash');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 1000 ){
        ruebe.classList.add('ruebe-active');
        goldchick.classList.add('goldchick-active');
        cireng.classList.add('cireng-active');
        trash.classList.add('trash-active');
    } else {
        ruebe.classList.remove('ruebe-active');
        goldchick.classList.remove('goldchick-active');
        cireng.classList.remove('cireng-active');
        trash.classList.remove('trash-active');
    }
});

//galery
const bandung1 = document.querySelector('.bandung-img-1');
const bandung2 = document.querySelector('.bandung-img-2');
const bandung3 = document.querySelector('.bandung-img-3');
const bandung4 = document.querySelector('.bandung-img-4');
const bandung5 = document.querySelector('.bandung-img-5');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 2200){
        bandung1.classList.add('bandung-img-1-active');
        bandung2.classList.add('bandung-img-2-active');
        bandung3.classList.add('bandung-img-3-active');
        bandung4.classList.add('bandung-img-4-active');
        bandung5.classList.add('bandung-img-5-active');
    } else {
        bandung1.classList.remove('bandung-img-1-active');
        bandung2.classList.remove('bandung-img-2-active');
        bandung3.classList.remove('bandung-img-3-active');
        bandung4.classList.remove('bandung-img-4-active');
        bandung5.classList.remove('bandung-img-5-active');
    }
});