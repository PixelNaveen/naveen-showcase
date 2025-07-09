
    // Scroll animation for skills section
    document.addEventListener("DOMContentLoaded", function () {
      const skillsSection = document.querySelector(".skills-section");
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              skillsSection.classList.add("visible");
              observer.unobserve(skillsSection); // Stop observing after animation
            }
          });
        },
        { threshold: 0.1 }
      );
      if (skillsSection) observer.observe(skillsSection);
    });
 