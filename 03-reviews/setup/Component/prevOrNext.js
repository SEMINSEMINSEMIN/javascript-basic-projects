import { id } from "../app.js";

function prevOrNext(e, data, obj){
    const styles = e.currentTarget.classList;
    if (styles.contains("next-btn")){
        id[0] = id[0] + 1;
    } else {
        id[0] = id[0] - 1;
    }
    if (id[0] > data.length){
        id[0] = 1;
    } else if (id[0] === 0){
        id[0] = data.length;
    }

    const targetData = data.filter(e => e["id"] === id[0])[0];

    obj["img"].setAttribute("src", targetData["img"]);
    obj["name"].textContent = targetData["name"];
    obj["job"].textContent = targetData["job"];
    obj["text"].textContent = targetData["text"];
}

export default prevOrNext;