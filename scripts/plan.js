// Putting the hex codes for the colors in the document automatically
document.querySelector("#first-color-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--first-color"));
document.querySelector("#first-color-light-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--first-color-light"));
document.querySelector("#second-color-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--second-color"));
document.querySelector("#second-color-light-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--second-color-light"));
document.querySelector("#third-color-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--third-color"));
document.querySelector("#third-color-light-code").textContent = (getComputedStyle(document.documentElement).getPropertyValue("--third-color-light"));