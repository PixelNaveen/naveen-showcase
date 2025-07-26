# 🚀 Naveen Showcase Portfolio

Welcome to the Naveen Showcase repository! This is a modern, responsive, and feature-rich portfolio website designed to display my skills, projects, and experience as a web developer.

---

## 📂 Project Structure

The project is organized for scalability and clarity, with dedicated folders for styles, scripts, content, images, and documentation.


**Folder Overview:**

- `.idea/` — IDE-specific settings (can be ignored for deployment)
- `css/` — Modular CSS files for each section of the site (cards, navbar, skills, etc.)
- `docs/` — Documentation and downloadable resume
- `img/` — Images used in the site, such as profile pictures or project screenshots
- `include/` — HTML partials for reusable sections (navbar, footer, about, etc.)
- `js/` — JavaScript files for interactivity and dynamic content
- `index.html` — Main entry point of the portfolio

---

## ✨ Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Component-Based Structure:** HTML partials for easy maintenance and DRY code.
- **Dynamic Includes:** JavaScript-powered HTML includes for navbar, footer, and main sections.
- **Project Cards:** Clean, modular design for showcasing projects.
- **Downloadable Resume:** PDF download in `/docs/My_Resume.pdf`.
- **Contact Form:** Static or extendable for backend integration.
- **SEO Optimized:** Semantic HTML and proper metadata.

---

## 🛠️ Technologies Used

| Language    | Purpose                          | Percentage |
|-------------|----------------------------------|------------|
| HTML        | Structure, Content               | 70.2%      |
| CSS         | Styling, Animations, Layout      | 27.3%      |
| JavaScript  | Interactivity, Dynamic Includes  | 2.5%       |

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PixelNaveen/naveen-showcase.git
cd naveen-showcase
```

### 2. Open in Browser

Just open `index.html` in your favorite browser.  
No build tools or server required — this is a 100% static site!

---

## 📁 Detailed Directory Layout

```
naveen-showcase/
│
├── .idea/                   # IDE config (ignore for deployment)
├── css/                     # CSS modules
│   ├── cards.css
│   ├── contact.css
│   ├── footer.css
│   ├── header.css
│   ├── navbar.css
│   ├── projects.css
│   ├── skills.css
│   └── style.css
│
├── docs/                    # Documentation and assets
│   └── resume.pdf
│
├── img/                     # Images and graphics
│   └── my_image.jpg
│
├── include/                 # HTML partials (include via JS)
│   ├── about.html
│   ├── contact.html
│   ├── footer.html
│   ├── navbar.html
│   ├── projects.html
│   └── skills.html
│
├── js/                      # JavaScript files
│   └── include.js
│
└── index.html               # Main homepage
```

---

## 🧩 How Dynamic Includes Work

The site uses `js/include.js` to dynamically insert reusable HTML components (like navbar, footer, about section) into your main `index.html`. This keeps your markup DRY and easy to maintain.

**Example:**
```html
<!-- In index.html -->
<div include-html="include/navbar.html"></div>
```
The `include.js` script automatically replaces this with the content of `navbar.html`.

---

## 🌟 Customization Guide

- **Add your projects:** Edit `include/projects.html` to add or update project cards.
- **Update skills:** Modify `include/skills.html` to reflect your expertise.
- **Profile image:** Replace `img/my_image.jpg` with your own picture.
- **Resume:** Swap in your own PDF in `docs/resume.pdf`.
- **Styling:** Adjust or extend CSS in the `css/` folder.

---

## 🎨 Design Philosophy

- **Simplicity:** Clean, uncluttered layouts
- **Modularity:** Reusable HTML/CSS components
- **Accessibility:** Semantic markup and alt text for images
- **Performance:** Minimal JS, optimized images, fast loads



---

## 🤝 Contributing

1. Fork this repo and clone it.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push to your fork and submit a Pull Request.

All contributions, feedback, and suggestions are welcome!

---

## 📬 Contact

**Naveen**
- GitHub: [@PixelNaveen](https://github.com/PixelNaveen)
- Email: naveen.thedev@gmail.com
- [Portfolio Live Link](#) <!-- Add your deployed portfolio link here -->

For questions, suggestions, or collaboration, please use the contact form on the site or reach out directly!

---

## 📸 Screenshots

Include screenshots of your homepage, projects section, and contact form for a visual reference (optional).

---

## 🙏 Acknowledgments

- Inspiration from open-source portfolios and web developer communities
- Icons and images from [Unsplash](https://unsplash.com/) and [FontAwesome](https://fontawesome.com/)

---

Happy coding!
