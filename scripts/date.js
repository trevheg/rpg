// get elements from the DOM
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const myDateOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
};


// get a date object
const today = new Date();

// put the current year in the web page
currentYear.innerHTML = today.getFullYear();

// put the last modified date in the page
lastModified.innerHTML = (Date(document.lastModified));
// lastModified.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US", myDateOptions); // This one gives a simplified date


