

# 📘 Sass & Scss - Holberton School Project

![Project Badge](https://img.shields.io/badge/Completion-100%25-brightgreen)  
**Curriculum**: C#23 - Web Stack Programming  
**Project Weight**: 1  
**Author**: Guillaume, CTO at Holberton School  
**Score**: 100%

---


![Sass](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYGH9nZSplzNbT7Zx9w-9dGKVyleSlaQNOA&s)

## 📄 Description

This project focuses on **Sass** and **SCSS**, two powerful CSS preprocessors that allow for better structure, logic, and reusability in stylesheets. It includes writing nested rules, variables, mixins, loops, imports, and debugging.

You will learn the differences between Sass and SCSS syntax, understand preprocessing, and apply best practices to make your CSS more maintainable and scalable.

---

## 📚 Resources

- [Sass Basics](https://sass-lang.com/guide)
- [Sass Flow Control Directives (@if, @for, @each, @while)](https://sass-lang.com/documentation/at-rules/control/)
- [Sass Reference](https://sass-lang.com/documentation/)

---

## 🎯 Learning Objectives

At the end of this project, you will be able to:

- Explain what **Sass** is and what it adds to CSS
- Distinguish between **Sass** and **SCSS** syntaxes
- Declare and use **variables**, **mixins**, **imports**, and **inheritance**
- Use **nested definitions** and **selectors**
- Apply **control structures** such as `@if`, `@for`, `@each`
- Organize styles efficiently using **partials** and **modular SCSS**

---

## 🛠️ Requirements

- Use only Sass 1.82.0 or higher
- All SCSS files start with a comment describing the task
- SCSS files must be properly structured and follow best practices
- No external libraries or frameworks

### 🧪 Environment

- Ubuntu 20.04 LTS
- Sass installed via npm:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  sudo npm install -g npm@10
  sudo npm install -g sass@^1.82.0
  sass --version  # Output: 1.82.0
  ```

---

## 📁 Directory Structure

```
sass_scss/
├── 0-debug_log.scss
├── 1-color_variable.scss
├── 2-color_variables.scss
├── 3-nested_tag.scss
├── 4-nested_class.scss
├── 5-nested_child.scss
├── 6-nested_hover.scss
├── 7-nested_deeper.scss
├── 8-mixin_margins.scss
├── 9-extend_list.scss
├── 10-colors.scss
├── 10-import_colors.scss
├── 11-photos.scss
├── 11-loop_photos.scss
├── 12-loop_header.scss
└── README.md
```

---

## ✅ Task Summary

| # | Task | Points | Status |
|--:|------|--------|--------|
| 0 | Print "Hello world" using `@debug` | 5/5 | ✅ |
| 1 | Use a color variable for `body` and `p` | 5/5 | ✅ |
| 2 | Use two color variables for multiple tags | 9/9 | ✅ |
| 3 | Use **nested rules** for body and p | 6/6 | ✅ |
| 4 | Use **nested class** styling | 6/6 | ✅ |
| 5 | Target **first-child** with nested rules | 6/6 | ✅ |
| 6 | Add `:hover` with nested declarations | 6/6 | ✅ |
| 7 | Use deep **nested levels** (body > h1 > .smaller) | 6/6 | ✅ |
| 8 | Create and use a **mixin** for margins | 6/6 | ✅ |
| 9 | Use **@extend** for reusing styles | 7/7 | ✅ |
|10 | Import color variables using `@import` | 6/6 | ✅ |
|11 | Use `@each` to generate image classes | 6/6 | ✅ |
|12 | Generate `h1` to `h5` using `@for` | 6/6 | ✅ |

🎉 **Total: 100% Complete**

---

## 🖼️ Preview Snippet (Example from Task 2)

```scss
/* Task 2 - Color variables */
$txt-color: #3D3D3D;
$bg-color: #6D6D6D;

body {
  color: $txt-color;
  background-color: $bg-color;
}

p {
  color: $txt-color;
}

h2 {
  background-color: $bg-color;
}
```

---

## 🙌 Acknowledgments

- Project designed by **Guillaume**, CTO at Holberton School  
- Based on curriculum: **[C#23] Web Stack Programming**

---

## 📌 Final Thoughts

This project reinforced my understanding of how Sass simplifies CSS by introducing features like variables, nesting, mixins, loops, and imports. Writing clean, DRY, and modular stylesheets is now more intuitive and scalable.

> 💡 Sass isn’t just about writing less CSS, it’s about writing **better** CSS.

---
