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
        displayElement(obj);
    }
}

document.querySelectorAll(".form-check-input").forEach(input => {
    input.addEventListener("click", async () => {
        let filtered;
        if (input.value == "option1") {
            filtered = await fetchData();
        }
        else {
            filtered = (await fetchData()).filter(x => x.nev == filters[input.value]);
        }
        displayElements(filtered);
    })
});

const filters = {
    "option2": "Névjegykártya",
    "option3": "Csomagolás design",
    "option4": "Szórólap",
    "option5": "Plakát",
    "option6": "Menükártya",
    "option7": "Meghívó" 
}

init();