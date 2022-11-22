import increase from "./Component/increase.js"

const countNum = document.querySelector('#value');
const increaseBtn = document.querySelector('.btn.increase');
const decreaseBtn = document.querySelector('.btn.decrease');
const resetBtn = document.querySelector('.btn.reset');

increaseBtn.addEventListener('click', e => increase(countNum));
