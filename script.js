// Add simple fade in animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".container").style.transition = "opacity 1.2s";
    document.querySelector(".container").style.opacity = 1;
  }, 200);
});
