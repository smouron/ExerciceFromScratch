// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.getElementById("navbar");
const imgImprovise = document.querySelector("#imgImprovise");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
// Récupération de la hauteur maximum du document : document.body.offsetHeight ou document.querySelector("body").clientHeigh

// Vérifier si l'élément POPUP existe
let testPopup = !!document.getElementById("popup");
let playOne = true;

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Hauteur de la navbar
  if (window.scrollY > 30) {
    // console.log("On descend");
    navbar.style.height = "40px";
  } else {
    // console.log("On monte");
    navbar.style.height = "90px";
  }

  // On cache ou on affiche l'image imgImprovise
  if (scrollValue > 0.38) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.width = "100%";
    imgImprovise.style.transform = "translateX(0px)";
  } else {
    imgImprovise.style.opacity = 0;
    imgImprovise.style.width = "60%";
    imgImprovise.style.transform = "translateX(-200px)";
  }

  // Affichage du PopUp en bas de la page
  if (scrollValue > 0.9 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
  } else {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
  }
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    playOne = false;
  });
});
