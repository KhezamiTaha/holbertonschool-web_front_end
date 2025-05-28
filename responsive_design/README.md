# 📱 Responsive Design Project

<img src="./images/Responsive.png" alt="responsive_design"  width="700px">

## 🎯 Description

This project focused on implementing **responsive web design** techniques to create a flexible, user-friendly experience across all device sizes—from mobile to desktop. Key concepts included **mobile-first design**, **media queries**, **responsive units**, and **pure CSS navigation toggles**.

We used starter HTML/CSS from a previous project and progressively enhanced it through several stages, refining layout, responsiveness, and mobile usability.

---

## 🧠 Learning Objectives

By the end of this project, I was able to explain and apply:

- The difference between **responsive** and **adaptive** design
- The **mobile-first** design strategy
- How to use **media queries**
- Key CSS units for responsiveness (%, `vw`, `vh`, `em`, `rem`)
- How to build a responsive layout using **flexbox**
- How to implement a **hamburger menu** using pure CSS

---

## 📁 Folder Structure

/project-root  
├── index.html  
├── css/  
└──   └── style.css (includes your custom framework)  
├── images/  
└──   └── header.jpg (and other image assets)  
└── README.md

---

## ✅ Completed Tasks

### 0. Fix the Hero Banner  
- Updated `background-position` and `background-size`  
- Adjusted `min-height` for proper display

### 1. Make the Container Flexible  
- Used `max-width` instead of fixed `width` for `.container`  
- Ensured layout adjusts on window resize

### 2. Fix Layout Issues  
- Implemented **mobile-first** media queries  
- Adapted grid and layout for tablets and phones  
- Hid the navbar menu on mobile temporarily

### 3. Generate Responsive Images  
- Created responsive `<img>` elements with `srcset` and `sizes`  
- Optimized images for varying breakpoints

### 4. Create Mobile Icon & Hide Menu  
- Used a hidden checkbox (`input[type=checkbox]`)  
- Toggled menu visibility using CSS selectors

### 5. Hamburger Icon with CSS  
- Styled hamburger lines using `::before`, `::after`  
- Created smooth transitions for open/close states

### 6. Add Menu Toggle Behavior  
- Controlled `max-height` and `overflow` for sliding nav  
- Animated hamburger icon into "X" on toggle  
- Improved mobile header behavior

### 7. Make Font Size Responsive  
- Used media queries to adjust `html { font-size }`  
- Scaled all `rem` units proportionally

### 8. Improve "Works" Section  
- Improved mobile layout and visibility of card text  
- Adjusted padding and color

### 9. Improve Footer  
- Made footer layout responsive  
- Adjusted spacing and alignment for small screens

### 10. Fix Top Header Background  
- Applied negative margin and padding to adjust hero position on the article page

---

## 🛠️ Technologies Used

- HTML5  
- CSS3 (Flexbox, Media Queries, Responsive Units)  
- Pure CSS Hamburger Menu (no JavaScript)

---

## 📚 Resources

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive)
- [Mobile First by LukeW](https://www.lukew.com/ff/entry.asp?933)
- [developerlife.com – Responsive Web](https://developerlife.com/2020/06/11/responsive-web-design/)

---

## 🚀 Final Result

The website is now fully responsive across screen sizes.  
It features a mobile-first layout, flexible containers, optimized images, and a fully functional hamburger menu—all using **only HTML and CSS**.

---

## 🏁 Next Steps

👉 **Accessibility** – ensuring the website is usable for all users, including those using assistive technologies.

