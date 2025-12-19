const header = document.getElementById("mainHeader");
const navLinks = document.querySelectorAll("nav a");

// On scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});

// On nav click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.add("header-active");
    });
});
// Modal functionality for certificates
const certCards = document.querySelectorAll(".cert-card");

certCards.forEach(card => {
    card.addEventListener("click", () => {
        const imgPath = card.getAttribute("data-img");
        modal.style.display = "flex";
        modalImg.src = imgPath;
    });
});

