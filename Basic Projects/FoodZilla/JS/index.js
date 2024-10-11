var typed = new Typed('.strings', {
    // stringsElement:"#wrapper",
    strings: ['Feeling Hungry?', 'Maybe Desi Chole Bhature?','Maybe Spicy Paneer Tikka?','Maybe Chilli Chowmein?'],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    showCursor:false
    });
const menuContainer = document.querySelector('#offer');
const menu = document.querySelector('#offer-btn');
const nextBtn = document.querySelector('#next-btn');
const backBtn = document.querySelector('#back-btn');
const items = document.querySelectorAll('.offer');
let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
    scrollPosition += 500   ;
    menu.style.transform = `translateX(-${scrollPosition}px)`;
    if (scrollPosition >= (items.length) * 150) {
        nextBtn.disabled = true;
    }
    backBtn.disabled = false;
});
backBtn.addEventListener('click', () => {
    scrollPosition -= 500 ;
    menu.style.transform = `translateX(-${scrollPosition}px)`;
    if (scrollPosition <= 0) {
        backBtn.disabled = true;
    }
    nextBtn.disabled = false;
});

const momosButton = document.getElementById('momos');
const pizzaButton = document.getElementById('pizza');
const burgerButton = document.getElementById('burger');
const drinksButton = document.getElementById('drinks');
const vegButton = document.getElementById('veg');
const nonVegButton = document.getElementById('non-veg');
const meals = document.getElementById('meals');
const clearButton = document.getElementById('clear');
const placeDivs = document.querySelectorAll('.place');

momosButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.momos').forEach(div => div.style.display = 'block');
});

pizzaButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.pizza').forEach(div => div.style.display = 'block');
});

burgerButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.burger').forEach(div => div.style.display = 'block');
});

drinksButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.drinks').forEach(div => div.style.display = 'block');
});

vegButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.veg').forEach(div => div.style.display = 'block');
});

nonVegButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.non-veg').forEach(div => div.style.display = 'block');
});
meals.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'none');
    document.querySelectorAll('.meals').forEach(div => div.style.display = 'block');
});

clearButton.addEventListener('click', () => {
    placeDivs.forEach(div => div.style.display = 'block');
});