# sass_scss

here we will learn the sass and how to simplify the process of writing css code

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General

- What Sass means
- How to write Sass & Scss file
- What is the difference between Sass and Scss
- What is the Sass preprocessing
- How to declare a variable
- How to use nested definition
- How to import a Sass file
- How to use mixins
- How to declare extend/inheritance styles
- How to manipulate operators

## Requirements

### General

- Allowed editors: vi, vim, emacs
- All your files will be executed on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
- All your files should end with a new line
- All your Scss files should have a comment at the beginning (i.e. syntax above)
- All your files should start by a comment describing the task
- A README.md file, at the root of the folder of the project, is mandatory
- The length of your files will be tested using wc

## Tasks:

### 0. Always debugging!

**Mandatory**  
Write a Sass file that prints "Hello world" in the debug output.

---

### 1. Color variable

**Mandatory**  
Write a Sass file that assigns the text color `#3D3D3D` to the HTML tags `body` and `p`.

- You must use a Sass variable.

---

### 2. Colors

**Mandatory**  
Write a Sass file that assigns:

- The text color `#3D3D3D` to the HTML tags `body` and `p`.
- The background color `#6D6D6D` to the HTML tags `body` and `h2`.
- You must use 2 Sass variables.

---

### 3. Nested tag

**Mandatory**  
Write a Sass file that assigns:

- No margin or padding in `body` tags.
- Margin of `10px` to all `p` tags inside `body` tags.
- You must use nested declarations.

---

### 4. Nested class

**Mandatory**  
Write a Sass file that assigns:

- Text color `#3D3D3D` to elements inside `body` tags.
- Text color `#FF0000` to any elements of class `.red` inside `body` tags.
- You must use nested declarations.

---

### 5. Nested child

**Mandatory**  
Write a Sass file that assigns:

- Text color `#3D3D3D` to elements inside `body` tags.
- Text color `#FF0000` to any elements of class `.red` that are the first children of the `body`.
- You must use nested declarations.

---

### 6. Nested hover

**Mandatory**  
Write a Sass file that assigns:

- Text color `#FF0000` to `button` tags.
- When the user hovers over `button` tags, the text color should change to `#00FF00`.
- You must use nested declarations.

---

### 7. Nested and nested again

**Mandatory**  
Write a Sass file that assigns:

- Font size `14px` to all `body` tags.
- Font size `16px` to all `h1` tags inside `body` tags.
- Font size `12px` to `h1` tags of class `.smaller` inside `body` tags.
- You must use nested declarations.

---

### 8. Margin mixin

**Mandatory**  
Write a Sass file that assigns:

- Margin left and right of `10px` to `body` tags.
- Margin left and right of `15px` to `div` tags.
- You must use a mixin.

---

### 9. Extended

**Mandatory**  
Write a Sass file that assigns:

- Font size `12px` to all tags of class `.info`.
- Text color `#00FF00` to all tags of class `.success` and extend the style of the class `.info`.
- Text color `#FF0000` to all tags of class `.warning` and extend the style of the class `.info`.

---

### 10. Import colors

**Mandatory**  
Write a Sass file that assigns:

- Text color `$red` from `10-colors.scss` to the class `.red`.
- Text color `$green` from `10-colors.scss` to the class `.green`.
- Text color `$blue` from `10-colors.scss` to the class `.blue`.
- You must use `@import`.

---

### 11. For each

**Mandatory**  
Write a Sass file that creates a class for each name in the list `$list-names` and assigns the background image based on the name (example below):

- You must use `@import`.
- You must use `@each` statement.

---

### 12. Loop Headers

**Mandatory**  
Write a Sass file that creates `H*` tags, where `*` is the size of the font used.

- `h1` must have a font size equal to `1px`, `h2` must have a font size equal to `2px`, etc.
- You must create `H*` tags from `1` to `5`.
- You must use `@for` statement.
