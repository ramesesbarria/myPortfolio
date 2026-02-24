// SCROLL FADE-IN
// This watches each .fade-in element and adds the .visible class
// when it enters the viewport — that triggers the CSS animation.

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));