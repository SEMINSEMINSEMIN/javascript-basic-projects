const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const $body = document.querySelector('body');
const $cont = document.querySelector('.container');
const $colorSpan = $cont.querySelector('.color');
const $btn = $cont.querySelector("#btn");

$btn.addEventListener('click', e => {
    const colorChosen = colors[Math.floor(Math.random() * colors.length)];
    $colorSpan.textContent = colorChosen;
    $body.style.background = colorChosen;
});