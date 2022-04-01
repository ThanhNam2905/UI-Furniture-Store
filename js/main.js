let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let btnClose = document.querySelector('.btn-close i');
let shoppingCartBtn = document.querySelector('#shopping-cart-btn');
let shoppingCart = document.querySelector('.shopping-cart');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let closeBtnFormLogin = document.querySelector('.close-form-login');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

// Menu Navbar
menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    btnClose.style.display = 'block';
}
btnClose.onclick = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    btnClose.style.display = 'none';
}

// Shopping Cart
shoppingCartBtn.onclick = () => {
    shoppingCart.classList.toggle('active');
    btnClose.style.display = 'block';
}

// Login Form
loginBtn.onclick = () => {
    loginForm.classList.add('active');
}
closeBtnFormLogin.onclick = () => {
    loginForm.classList.remove('active');
}

// Search Form
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
}

// Slide Home
let slides = document.querySelectorAll(".home .slide-container .slide");
let index = 0;
console.log(slides.length);

function Next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length; 
    slides[index].classList.add('active');
}
function Prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}