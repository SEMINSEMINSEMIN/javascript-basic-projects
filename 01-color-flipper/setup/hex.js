const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const $btn = document.querySelector("#btn");

$btn.addEventListener('click', e => {
    const red = 
    hex[Math.floor(Math.random() * hex.length)].toString() +
    hex[Math.floor(Math.random() * hex.length)].toString();

    const green = 
        hex[Math.floor(Math.random() * hex.length)].toString() +
        hex[Math.floor(Math.random() * hex.length)].toString();

    const blue = 
        hex[Math.floor(Math.random() * hex.length)].toString() +
        hex[Math.floor(Math.random() * hex.length)].toString();

    const hexCode = red + green + blue;
    console.log(hexCode);
})

