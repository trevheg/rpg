const menuButton = document.querySelector("#menu-button");
const aniNav = document.querySelector("nav")
const navigation = document.querySelector("#nav-list");

menuButton.addEventListener("click", () => {
    aniNav.classList.toggle("open");
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})