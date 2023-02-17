// alert("Démarrage du script !");
console.log("Démarrage du script !");
const body = document.querySelector("body");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
let colorR = 0;
let colorG = 0;
let colorB = 0;
let color = `rgb(${colorR},${colorG}, ${colorB})`;
let delay = 1000;
let changeColor = "";

console.log(delay);
function changeColorAuto() {
  colorR = Math.floor(Math.random() * 255);
  colorG = Math.floor(Math.random() * 255);
  colorB = Math.floor(Math.random() * 255);
  color = `rgb(${colorR},${colorG}, ${colorB})`;

  affichage();
  document.body.style.background = color;
}

h4.addEventListener("click", () => {
  if (h4.textContent === "START") {
    h4.textContent = "STOP";
    changeColor = setInterval(changeColorAuto, delay);
  } else {
    h4.textContent = "START";
    clearInterval(changeColor);
  }
});

h3.addEventListener("click", () => {
  delay = Math.floor(Math.random() * 1000 + 800);
  affichage();
  console.log(delay);
});

function affichage() {
  h3.textContent = color + " - " + (delay / 1000).toFixed(3) + " s";
  return;
}
