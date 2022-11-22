import increase from "./Component/increase.js"
import decrease from "./Component/decrease.js"
import reset from "./Component/reset.js";

const countNum = document.querySelector('#value');
const increaseBtn = document.querySelector('.btn.increase');
const decreaseBtn = document.querySelector('.btn.decrease');
const resetBtn = document.querySelector('.btn.reset');

increaseBtn.addEventListener('click', e => increase(countNum));
decreaseBtn.addEventListener('click', e => decrease(countNum));
resetBtn.addEventListener('click', e => reset(countNum));
