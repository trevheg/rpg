async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        } 
        const data =  await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

function addRow (table, q, a) {
    const row = document.createElement("tr");
    const first = document.createElement("td");
    const second = document.createElement("td");                        
    first.innerHTML = q;
    second.innerHTML = a;
    row.appendChild(first);
    row.appendChild(second);
    table.appendChild(row);
}

const addThing = (type, text, parent) => {
    const thing = document.createElement(type);
    thing.textContent = text;
    parent.appendChild(thing);
}


export {fetchData, addRow, addThing};