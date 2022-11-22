function increase(target){
    const increasedNum = parseInt(target.textContent, 10) + 1;
    if (increasedNum > 0){
        target.style.color = "green";
    } else if (increasedNum < 0){
        target.style.color = "red";
    } else {
        target.style.color = "black";
    }
    target.textContent = increasedNum.toString();
}

export default increase