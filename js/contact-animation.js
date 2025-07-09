// Reveal .contact-section on scroll with animated fadeInUpBounce
function observeContactSection() {
  const section = document.querySelector('.contact-section');
  if (!section) return false;
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(section);
  return true;
}
document.addEventListener("DOMContentLoaded", () => {
  if (!observeContactSection()) {
    // In case the section is loaded later (dynamic content)
    const interval = setInterval(() => {
      if (observeContactSection()) clearInterval(interval);
    }, 100);
  }
});