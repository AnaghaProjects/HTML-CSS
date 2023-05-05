const navToggle = document.querySelector(".nav-toggle"),
nav = document.querySelector(".nav"),
navOverlay = document.querySelector(".nav-overlay"),
cloaseNav = document.querySelector(".close");

navToggle.addEventListener("click", () => {
    navShow();
});

cloaseNav.addEventListener("click", () => {
    hideNav();
});

// hide nav after clicked outside of nav
navOverlay.addEventListener("click", () => {
    hideNav();
})

const navShow = () => {
    navOverlay.style.transition = "all 0.5s ease";
    navOverlay.classList.add("open");
    nav.style.transition = "all 0.5s ease 0.3s";
    nav.classList.add("open");
}

const hideNav = () => {
    navOverlay.style.transition = "all 0.5s ease 0.3s";
    navOverlay.classList.remove("open");
    nav.style.transition = "all 0.5s ease";
    nav.classList.remove("open");
}