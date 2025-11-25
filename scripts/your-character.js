import { fetchData, addThing } from "./modules.mjs";
const nameSection = document.querySelector('#name');
const raceSection = document.querySelector('#race');
const classSection = document.querySelector('#class');
const visitsDiv = document.querySelector("#visitsDiv");

const params = new URLSearchParams(window.location.search);
const url = "https://www.dnd5eapi.co/api/2014/";
const mainUrl = "https://www.dnd5eapi.co";

const name = params.get('characterName');
addThing("h3", name, nameSection);

fetchData(`${url}races`)
    .then(data => {
        const raceIndex = params.get('race')
        const raceUrl = data.results.find(obj => obj.index === raceIndex).url;
        fetchData(`${mainUrl}${raceUrl}`)
            .then(data => {

                addThing("h3", data.name, raceSection);
                addThing("p", data.alignment, raceSection);
                addThing("p", data.size_description, raceSection);
                addThing("p", data.language_desc, raceSection);

            }).catch(error => console.error(error));

    }).catch(error => console.error(error));

fetchData(`${url}classes`)
    .then(data => {
        const classIndex = params.get('class')
        const classUrl = data.results.find(obj => obj.index === classIndex).url;
        fetchData(`${mainUrl}${classUrl}`)
            .then(data => {
                addThing("h3", `${data.subclasses[0].name} ${data.name}`, classSection);
                fetchData(`${mainUrl}${data.subclasses[0].url}`)
                    .then(data => {
                        addThing("p", data.desc, classSection);
                    })

            }).catch(error => console.error(error));

    }).catch(error => console.error(error));

let visits = localStorage.getItem("myVisits");
console.log(visits);

if (visits == null) {    
    visitsDiv.innerHTML = `<h3>This is your first character</h3>`
    visits = 0;
} else if (visits == 1) {
    visits = parseInt(visits);
    visitsDiv.innerHTML = `<h3>You have made 1 character before</h3>`
} else {
    visits = parseInt(visits)
    visitsDiv.innerHTML = `<h3>You have made ${visits} characters before</h3>`
}

visits++;

localStorage.setItem("myVisits", visits);