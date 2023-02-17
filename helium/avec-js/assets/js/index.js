// ---------------------------------------------------
// MOUSE EVENT
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
    console.log("x: " + e.x + " px - y: " + e.y + " px");

    console.log("pageX: " + e.pageX + " px - pageY: " + e.pageY + " px");
  });
});

// window.addEventListener("mousemove", (e) => {
//   mouse1.style.left = e.pageX + "px";
//   mouse1.style.top = e.pageY + "px";

//   mouse2.style.left = e.pageX + "px";
//   mouse2.style.top = e.pageY + "px";

//   mouse3.style.left = e.pageX + "px";
//   mouse3.style.top = e.pageY + "px";
// });

// window.addEventListener("click", (e) => {
//   console.log(e);
// });
