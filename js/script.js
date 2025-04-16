const api = "https://reeldev.hu/api/nyomda/referenciak";
const container = document.querySelector("#element-container");

async function fetchData() {
    return await (await fetch(api)).json();
}

async function JSONtoObject(json) {
    return new Element(json.nev, json.megrendelo, json.meret, json.szinek, json.darabszam, json.papirminoseg, json.kivetelezes, json.tema, json.kep);
}

function displayElement(el) {
    container.innerHTML += el.toHTML();
}

async function init() {
    for (let el of await fetchData()) {
        const obj = JSONtoObject(el);
        displayElement(obj);
    }
}

init();