// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter effect for your bio text
document.addEventListener('DOMContentLoaded', () => {
  const bioElement = document.querySelector('.bio');
  const bioText = "Creative Full-Stack Developer. Passionate about building modern web apps and solving real-world problems.";
  
  let i = 0;
  const speed = 30; // Typing speed

  function typeWriter() {
    if (i < bioText.length) {
      bioElement.textContent += bioText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Clear default text and start effect
  bioElement.textContent = '';
  typeWriter();
});

// Scroll reveal animation (simple)
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}

// Initial styles
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease-out';
});

// Run on scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
