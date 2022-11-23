import { id } from "../app.js";

function random(data, obj, renderFun){
    id[0] = Math.floor(Math.random() * data.length + 1);
    renderFun(id, data, obj);
}

export default random;