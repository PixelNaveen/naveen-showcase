// Wait for .card-section to be loaded, then attach Intersection Observer for animation
function observeCardSection() {
  const cardSection = document.querySelector('.card-section');
  if (!cardSection) return false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Trigger animation when at least half the section is visible
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    root: null,
    threshold: 0.5
  });

  observer.observe(cardSection);
  return true;
}

// Try to observe on DOMContentLoaded, and keep retrying if card-section is loaded late
document.addEventListener("DOMContentLoaded", () => {
  if (!observeCardSection()) {
    const interval = setInterval(() => {
      if (observeCardSection()) clearInterval(interval);
    }, 100);
  }
});