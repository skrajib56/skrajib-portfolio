const themeToggle = document.getElementById("themeToggle");

/* Load theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

/* Toggle theme */
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});

/* Certificate slider */
const slider = document.querySelector(".cert-slider");

function slideLeft() {
  slider.scrollBy({ left: -260, behavior: "smooth" });
}

function slideRight() {
  slider.scrollBy({ left: 260, behavior: "smooth" });
}
