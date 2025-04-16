const api = "https://reeldev.hu/api/nyomda/referenciak";
const container = document.querySelector("#element-container");

async function fetchData() {
    return await (await fetch(api)).json();
}

function JSONtoObject(json) {
    return new Element(json.nev, json.megrendelo, json.meret, json.szinek, json.darabszam, json.papirminoseg, json.kivetelezes, json.tema, json.kep);
}

function displayElement(el) {
    container.innerHTML += el.toHTML();
}

async function init() {
    displayElements(await fetchData());
}

function displayElements(elements) {
    container.innerHTML = "";
    for (let el of elements) {
        const obj = JSONtoObject(el);
        console.log(obj)
        displayElement(obj);
    }
}

document.querySelectorAll(".form-check-input").forEach(input => {
    input.addEventListener("click", async () => {
        const filtered = (await fetchData()).filter(x => x.nev == filters[input.value]);
        displayElements(filtered);
    })
});

const filters = {
    "option1": "Névjegykártya",
    "option2": "Csomagolás",
    "option3": "Címke",
    "option4": "Prospektus",
    "option5": "Flyer",
    "option6": "Egyéb" 
}

init();