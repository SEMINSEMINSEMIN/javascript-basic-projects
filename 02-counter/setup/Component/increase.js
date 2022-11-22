function increase(target){
    const increasedNum = parseInt(target.textContent, 10) + 1;
    target.textContent = increasedNum.toString();
}

export default increase