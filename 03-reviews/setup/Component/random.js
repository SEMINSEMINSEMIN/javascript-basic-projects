import { id } from "../app.js";

function random(data, obj){
    id[0] = Math.floor(Math.random() * data.length + 1);
    const targetData = data.filter(e => e["id"] === id[0])[0];
    obj["img"].setAttribute("src", targetData["img"]);
    obj["name"].textContent = targetData["name"];
    obj["job"].textContent = targetData["job"];
    obj["text"].textContent = targetData["text"];
}

export default random;