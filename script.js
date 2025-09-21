// Typing effect
const roles = [
  "B.Tech CSE (AI) Student",
  "Web Developer",
  "AI Enthusiast"
];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) typeEffect();
  // fade-in typing element
  const typingEl = document.querySelector(".typing");
  setTimeout(() => typingEl.classList.add("visible"), 300);
});

// Nav toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  for (let r of reveals) {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      r.classList.add("visible");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
