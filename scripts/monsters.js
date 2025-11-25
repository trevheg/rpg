const monstersDiv = document.querySelector("#monsters");
const url = "../finalproject/data/monsters.json";
import { addThing } from "./modules.mjs";

async function fetchData() {
    const response = await fetch (url);
    const data = await response.json();
    displayMonsters(data.monsters);
}

const displayMonsters = (monsters) => {
    monsters.forEach(monster => {
        const card = document.createElement("section");

        addThing("h3", monster.name, card);
        addThing("p", monster.description, card)

        const image = document.createElement("picture");
        
        const smallSource = document.createElement("source");
        smallSource.srcset = monster['small-image'];
        smallSource.media = "(max-width: 320px)";
        image.appendChild(smallSource);

        const bigSource = document.createElement("source");
        bigSource.srcset = monster['large-image'];
        image.appendChild(bigSource);

        const img = document.createElement("img");
        img.src = monster['large-image'];
        img.alt = monster.name;
        img.loading = "lazy";
        image.appendChild(img)

        card.appendChild(image);

        monstersDiv.appendChild(card);
    });
}

fetchData();