// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const body = document.querySelector("body");
const sideBar = document.getElementById("side-bar");
const btn = document.getElementById("btn");
let mouseX = 0;

// Récupération de la position de la souris sur l'axe horizontal
window.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
});

body.addEventListener("click", () => {
  console.log("body Ok.");
  if (mouseX > 230) {
    console.log("mouseX: " + mouseX);
    sideBar.classList.remove("side-bar-clicked");
  }
});
-btn.addEventListener("click", () => {
  console.log("btn Ok.");
  sideBar.classList.toggle("side-bar-clicked");
});
