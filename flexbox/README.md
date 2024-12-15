# flexbox

here we will learn how to use flexbox in css

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What is Flexbox?
- How to convert float positioning to a flex display
- How to horizontally and vertically align elements using Flexbox
- The difference between the main and cross axes
- Properties that work on flex elements vs flex container
- Shorthands for flex
- How to create a new page with flex in mind

## Requirements

- All your files should end with a new line
- A README.md file, at the root of the folder of the project is mandatory
- You are not allowed to install, import or use external libraries. This website must be build with only HTML/CSS. No NodeJS, React, VueJS, Bootstrap, etc.

## Tasks

### 0. Add Display Flex

- Use the starter HTML and CSS files from this task to task 10.
- Add `display: flex;` to the `.row` class.
- Remove the `row::after` declaration.
- Remove `float: left` inside `[class*='col-']`.
- Flex items will be created for all children of `.row`.

### 1. Add New Classes on Sections

- Add the following classes to the outermost `section` tag in each respective section:
  - Services: `section-services`
  - Works: `section-works`
  - About: `section-about-us`
  - Latest News: `section-latest-news`
  - Testimonial: `section-testimonial`
  - Contact: `section-contact`

### 2. Reverse Order Latest News Cards

- In your CSS file, add `flex-direction: row-reverse;` to the `.row` class inside `.section-latest-news` to reverse the order of the Latest News cards.

### 3. Simplify Services List

- Remove the second `ul` in the Services section and place the 3 `li` elements under the first `ul`.
- Add `flex-wrap: wrap;` to the `.row` class inside `.section-services`.

### 4. Playing Around with the Spacing Between Flex Service Items

- In `.col-1-3`, change the width to `calc((100% / 3) - 2rem)`.
- In `.col-1-2`, change the width to `calc((100% / 2) - 2rem)`.
- Remove padding from `[class*='col-']`.
- Set `margin: 1rem;` for `[class*='col-']`.
- Change `ul.row` margin to `-1rem`.

### 5. Flexify the Header

- Wrap the `div` with class `header-logo` and `nav` with class `navbar-menu` inside a `div` with the class `header-container`.
- In the CSS, add `display: flex;` and `justify-content: space-between;` to `.header-container`.
- Remove old header and navbar styles related to `header-logo` and `navbar-menu`.

### 6. Flexify the Navbar

- In `nav` selector, add `display: flex;`.
- Move margin declarations from `.nav .nav-item` to `.nav-item + .nav-item`.
- Change `nav-item-margin` value to `0 0 0 2rem`.

### 7. Align Center Logo and Navbar

- In `.header-container` class selector, add `align-items: center;` to center the logo and navbar.

### 8. Simplify the Hero Banner

- In `.section-hero`, use `display: flex;` and `flex-direction: column;` on `.section-inner`.
- Set `align-items: flex-start;` and `justify-content: center;` for better alignment.
- Set `min-height: 50vh;`.

### 9. Better Alignment About Us

- In `.section-about-us`, for all classes that start with `col-`, set `align-self: center;`.

### 10. Creating an Article by Fixing Issues and Updating Hero Styles

- In `10-styles.css`, create a `hero-homepage` class and move styles from `.section-hero` into it.
- For `.section-hero`, add `position: relative;` and `margin-top: -8.5rem;`.
- Add `padding: 10rem 4rem;` to `.section-body`.
- Set `color: white;` and `text-transform: uppercase;` to `.section-category`.

### 11. Update the New Hero Banner

- Update the Hero section in `11-article.html` to reflect the changes needed for the new hero banner.

### 12. The Structure of the Main Article

In this task, you will create a basic article structure. The main article section will consist of a post container with an article, an aside section, and separate divs for meta information and share buttons.

### 13. The Meta List Inside the Aside Section

For this task, you will create a meta list inside the aside section of the article. This list will include information such as the author, post date, and tags related to the post.

### 14. Add the Share Social Icons

In this task, you will add social share icons inside the article’s aside section. These icons will link to social media platforms like Facebook, Twitter, and LinkedIn.
