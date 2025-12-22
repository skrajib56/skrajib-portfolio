const header = document.getElementById("mainHeader");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.add("header-active");
    });
});

const certCards = document.querySelectorAll(".cert-card");

certCards.forEach(card => {
    card.addEventListener("click", () => {
        const imgPath = card.getAttribute("data-img");
        modal.style.display = "flex";
        modalImg.src = imgPath;
    });
});

const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

document.querySelector(".contact-form").addEventListener("submit", e => {
  alert("Thank you! I will get back to you soon.");
});

const slider = document.querySelector(".cert-slider");

function slideLeft() {
  slider.scrollBy({
    left: -260,
    behavior: "smooth"
  });
}

function slideRight() {
  slider.scrollBy({
    left: 260,
    behavior: "smooth"
  });
}



