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