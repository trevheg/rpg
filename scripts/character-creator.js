import { fetchData } from "./modules.mjs";
const raceSelect = document.querySelector("#race");
const classSelect = document.querySelector("#class");
const url = "https://www.dnd5eapi.co/api/2014/";
const mainUrl = "https://www.dnd5eapi.co";

fetchData(`${url}races`)
    .then(data => {
        data.results.forEach(race => {
            const raceName = document.createElement("option");
            raceName.value = race.index;
            raceName.textContent = race.name;
            raceSelect.appendChild(raceName)
        })
    }).catch(error => console.error(error));

fetchData(`${url}classes`)
    .then(data => {
        data.results.forEach(race => {
            const name = document.createElement("option");
            name.value = race.index;
            name.textContent = race.name;
            classSelect.appendChild(name)
        })
    }).catch(error => console.error(error));


