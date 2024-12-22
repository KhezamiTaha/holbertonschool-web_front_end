# Responsive Design

## By: David Dias, Senior Software Engineer at HomeX

### Manual QA review must be done (request it when you are done with the project)

---

## Description

This project introduces the fundamental concepts and implementation strategies for creating responsive web designs. By the end of this project, you will understand how to design and build responsive websites that adapt seamlessly to various screen sizes and devices.

---

## Concepts Covered

- Mobile-first design
- Media queries
- Responsive web design best practices
- Differences between responsive and adaptive design
- Flexible CSS units
- Techniques to create mobile-friendly layouts

---

## Resources

- **The building blocks of responsive design** - [Progressive web apps | MDN](https://developer.mozilla.org/)
- **A pragmatic guide to designing and building responsive web applications** - [developerlife.com](https://developerlife.com/)
- **Understanding mobile-first, adaptive, and responsive design** - [LukeW | Mobile First](https://www.lukew.com/)
- **Media Queries** - [Inspirational collection](https://mediaqueri.es/)
- **Responsive Design Newsletter**

---

## Learning Objectives

At the end of this project, you will be able to explain:

- What mobile-first design is
- How to use media queries effectively
- Recommended sizes for responsive design
- Steps to make a website responsive
- The differences between responsive and adaptive design
- CSS units for flexibility (%, em, rem, vw, vh)

---

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`
- A `README.md` file is mandatory at the root of the project directory
- HTML and CSS must render correctly on Chrome 78 or higher
- Follow the wireframe provided for the mobile version of the Techium project

---

## Starter Files

### Provided Files

- **HTML Starter File:** `00-index.html`
- **CSS Starter File:** `00-styles.css`
- **Assets:** [Images Archive](#)

---

## Tasks

### Task 0: Fix the Hero Banner

- Update hero section with specific CSS properties to correct background rendering.
- **Files:** `01-index.html`, `01-styles.css`

### Task 1: Make the Container Flexible

- Replace `width` with `max-width` in `.container` to ensure responsive resizing.
- **Files:** `02-index.html`, `02-styles.css`

### Task 2: Fix Layout Issues

- Add media queries for various breakpoints:
  - Desktop: `max-width: 992px`
  - Tablet: `max-width: 767px`
  - Mobile: `max-width: 480px`
- Temporarily hide the navbar for smaller screens.
- **Files:** `02-1-index.html`, `02-1-styles.css`

### Task 3: Generate Images with Responsive Breakpoints

- Use tools to generate responsive image sizes and update `<img>` tags with `srcset`.
- **Files:** `03-index.html`, `03-styles.css`

### Task 4: Create the Mobile Icon and Hide the Menu

- Implement a pure CSS solution for a collapsible navigation menu.
- **Files:** `04-index.html`, `04-styles.css`

### Task 5: Hamburger Icon

- Design a hamburger menu icon using only CSS.
- **Files:** `05-index.html`, `05-styles.css`

### Task 6: Add Menu Behavior

- Add behavior to toggle the menu visibility based on the `menu-btn` checkbox state.
- **Files:** `06-index.html`, `06-styles.css`

### Task 7: Make Font Sizes Responsive

- Use REM units and media queries to adjust font sizes for different screen sizes.
- **Files:** `07-index.html`, `07-styles.css`

### Task 8: Improve the "Works" Section

- Adjust layout and text properties for smaller screens.
- **Files:** `08-index.html`, `08-styles.css`

### Task 9: Improve the "Footer" Section

- Center-align elements and add padding for a cleaner layout on smaller screens.
- **Files:** `09-index.html`, `09-styles.css`

### Task 10: Fix the Top Header Background

- Adjust the margin and padding for the `section-hero` inside the `article-page` class.
- **Files:** `10-index.html`, `10-styles.css`

---

## Project Directory Structure

```
responsive_design/
├── 00-index.html
├── 00-styles.css
├── 01-index.html
├── 01-styles.css
├── 02-index.html
├── 02-styles.css
├── 02-1-index.html
├── 02-1-styles.css
├── 03-index.html
├── 03-styles.css
├── 04-index.html
├── 04-styles.css
├── 05-index.html
├── 05-styles.css
├── 06-index.html
├── 06-styles.css
├── 07-index.html
├── 07-styles.css
├── 08-index.html
├── 08-styles.css
├── 09-index.html
├── 09-styles.css
├── 10-index.html
├── 10-styles.css
└── images/
```

---

## Final Notes

- Ensure all tasks meet the design and functionality expectations.
- Test the project thoroughly using Chrome DevTools.
- Submit for manual QA review when complete.
