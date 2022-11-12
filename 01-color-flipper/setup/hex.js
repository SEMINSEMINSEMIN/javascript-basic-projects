import getRandomNumber from "./getRandomNumber.js";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const $body = document.querySelector('body');
const $cont = document.querySelector('.container');
const $colorSpan = $cont.querySelector('.color');
const $btn = $cont.querySelector("#btn");

$btn.addEventListener('click', e => {
    const red = 
        hex[getRandomNumber(hex)].toString() +
        hex[getRandomNumber(hex)].toString();

    const green = 
        hex[getRandomNumber(hex)].toString() +
        hex[getRandomNumber(hex)].toString();

    const blue = 
        hex[getRandomNumber(hex)].toString() +
        hex[getRandomNumber(hex)].toString();

    const hexCode = '#' + red + green + blue;
    $colorSpan.textContent = hexCode;
    document.body.style.background = hexCode;
});

