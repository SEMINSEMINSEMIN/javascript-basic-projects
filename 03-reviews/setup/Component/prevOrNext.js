import { id } from "../app.js";

function prevOrNext(e, data, obj, renderFun){
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

    renderFun(id, data, obj);
}

export default prevOrNext;