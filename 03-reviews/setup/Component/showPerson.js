function showPerson(id, data, obj){
    const targetData = data.filter(e => e["id"] === id[0])[0];
    obj["img"].setAttribute("src", targetData["img"]);
    obj["name"].textContent = targetData["name"];
    obj["job"].textContent = targetData["job"];
    obj["text"].textContent = targetData["text"];
}

export default showPerson;