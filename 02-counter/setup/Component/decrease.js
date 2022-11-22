function decrease(target){
    const decreasedNum = parseInt(target.textContent, 10) - 1;
    target.textContent = decreasedNum.toString();
}

export default decrease