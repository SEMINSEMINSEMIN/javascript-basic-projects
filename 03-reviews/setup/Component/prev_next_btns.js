let id = 1;

function prevOrNext(e, data, obj){
    const styles = e.currentTarget.classList;
    if (styles.contains("next-btn")){
        id++;
    } else {
        id--;
    }
    if (id > data.length){
        id = 1;
    } else if (id === 0){
        id = data.length;
    }
    const targetData = data.filter(e => e["id"] === id)[0];

    obj["img"].setAttribute("src", targetData["img"]);
    obj["name"].textContent = targetData["name"];
    obj["job"].textContent = targetData["job"];
    obj["text"].textContent = targetData["text"];
}

export default prevOrNext;