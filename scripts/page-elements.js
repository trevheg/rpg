function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            const menuButton = document.querySelector("#menu-button");
            const aniNav = document.querySelector("nav")
            const navigation = document.querySelector("#nav-list");

            if (menuButton) {
                menuButton.addEventListener("click", () => {
                    aniNav.classList.toggle("open");
                    navigation.classList.toggle("open");
                    menuButton.classList.toggle("open");
                })                
            }


        })
        .catch(error => console.error("error loading header". error));
    
}
loadHeader();

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;

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


        })
        .catch(error => console.error("error loading footer". error));    
}

loadFooter();