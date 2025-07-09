// Wait for .skills-section to be loaded, then attach Intersection Observer
function observeSkillsSection() {
  const skillsSection = document.querySelector('.skills-section');
  if (!skillsSection) return false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Trigger when the section is near the middle of the viewport
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.5 // 50% of the section is visible (middle of screen)
  });

  observer.observe(skillsSection);
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  // Try immediately, then poll every 100ms until found
  if (!observeSkillsSection()) {
    const interval = setInterval(() => {
      if (observeSkillsSection()) clearInterval(interval);
    }, 100);
  }
});
