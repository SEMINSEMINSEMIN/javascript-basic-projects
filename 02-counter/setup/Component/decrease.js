function decrease(target){
    const decreasedNum = parseInt(target.textContent, 10) - 1;
    if (decreasedNum > 0){
        target.style.color = "green";
    } else if (decreasedNum < 0){
        target.style.color = "red";
    } else {
        target.style.color = "black";
    }
    target.textContent = decreasedNum;
}

export default decrease