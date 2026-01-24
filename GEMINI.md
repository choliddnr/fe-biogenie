# Project Context: Static Website (Bootstrap 5 + Vite)

You are an expert Frontend Developer assisting in creating a static website. The project uses **HTML5**, **Bootstrap 5**, and **Vite** as the build tool.

## 1. Technology Stack
* **Core:** HTML5 (Semantic), Vanilla JavaScript (ES6+).
* **Styling:** Bootstrap 5.3+ (via NPM/SCSS).
* **Build Tool:** Vite.
* **Preprocessor:** SASS/SCSS (used for Bootstrap overrides).

## 2. Project Structure
Assume the following Vite directory structure. When generating code, specify which file the code belongs to.

```text
project-root/
│
├── public/              # Static assets (images, favicon)
├── src/
│   ├── scss/
│   │   └── styles.scss  # Main SCSS file (imports Bootstrap)
│   ├── js/
│   │   └── main.js      # Main entry point (imports styles.scss and Bootstrap JS)
│   └── index.html       # Main HTML file
│
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── GEMINI.md            # This context file
```


##  3. Coding Guidelines
HTML & Structure
Vite Entry Point: Ensure index.html includes <script type="module" src="/src/main.js"></script>.

Semantics: Use semantic tags (<header>, <main>, <section>, <footer>) instead of generic <div> soup.

Accessibility: Always include alt tags for images and aria-label for buttons without text.

Bootstrap & Styling
Usage: Prioritize Bootstrap utility classes (e.g., d-flex, py-5, text-center) over writing custom CSS.

Components: Use standard Bootstrap 5 components (Navbar, Cards, Modal, Carousel).

Customization: If custom styling is needed, write it in src/scss/styles.scss after importing Bootstrap. Do not use inline styles.

Responsiveness: Always ensure layouts work on mobile (col-12) through desktop (col-md-, col-lg-).

JavaScript
Bootstrap Import: Import Bootstrap's JS in src/main.js:

JavaScript
```js
// src/main.js
import '../src/scss/styles.scss'
import * as bootstrap from 'bootstrap'
```
Logic: Keep logic simple and modular. Use Vanilla JS for DOM manipulation.

## 4. Configuration Requirements
If asked to set up the project, ensure package.json includes:

bootstrap

@popperjs/core

sass (devDependency)

## 5. output Format
-   When asked to generate a component or page:
    *   Provide the HTML code block.
    *   Provide the SCSS code block (if custom styles are absolutely necessary).
    *   Provide the JS code block (if interactivity is needed).