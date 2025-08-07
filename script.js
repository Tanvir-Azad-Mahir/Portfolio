// Fade-in animation for the whole container
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  container.style.opacity = 0;
  container.style.transform = "translateY(30px)";
  container.style.transition = "opacity 1s ease, transform 1s ease";

  setTimeout(() => {
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 200);
});

// Add hover animation to social icons
document.querySelectorAll(".socials a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.2s ease";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});

// Dark mode toggle idea (Optional)
const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙";
toggleButton.className = "dark-toggle";
toggleButton.setAttribute("aria-label", "Toggle dark mode");
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleButton.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
