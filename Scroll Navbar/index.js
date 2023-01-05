// Créer un événément au scroll
const nav = document.querySelector("nav");
let scrollOld = 0;

window.addEventListener("scroll", (e) => {
  scrollNew = window.scrollY;

  if (window.scrollY > scrollOld && window.scrollY > 100) {
    console.log("On descend");
    nav.style.top = "-60px";
    nav.style.opacity = 0;
  } else {
    console.log("On monte");
    nav.style.top = 0;
    nav.style.opacity = 1;
  }
  scrollOld = window.scrollY;
});

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
