// Wait for .header-section to be loaded, then attach Intersection Observer
function observeHeaderSection() {
  const headerSection = document.querySelector('.header-section');
  if (!headerSection) return false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.5
  });

  observer.observe(headerSection);
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!observeHeaderSection()) {
    const interval = setInterval(() => {
      if (observeHeaderSection()) clearInterval(interval);
    }, 100);
  }
});
