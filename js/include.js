function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => {
      console.log('Error loading', file, error);
    });
}

// Correct path to navbar.html inside /include
loadHTML('#navigation', 'include/navbar.html');
loadHTML('#about', 'include/about.html');
loadHTML('#skills', 'include/skills.html');
loadHTML('#projects', 'include/projects.html');
loadHTML('#contact', 'include/contact.html');
loadHTML('#footer', 'include/footer.html');



