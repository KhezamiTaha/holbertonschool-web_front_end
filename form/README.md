# form

In this project we will learn how to build html5 forms and more related to that

## Learning objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to create an HTML5 form
- How to choose the right input type
- How to constrain a form field with regular expressions
- How to style inputs for invalid, valid, and required fields
- How to build a a comment form
- How to build a simple search form
- How to create usable and accessible forms

## Requirements

- All your files should end with a new line
- A README.md file, at the root of the folder of the project is mandatory
- You are not allowed to install, import or use external libraries. This website must be build with only HTML/CSS. No NodeJS, React, VueJS, Bootstrap, etc.
- HTML and CSS have been rendered on Chrome 78 or more.

## Tasks:

### 0. basic comment structure

**mandatory**
To ensure we start on the same foot, use these files:
In your 01-article.html file
•- Sibling to the <div class="post">, create a new <section> with the class post-comments

- Inside the section create an header
  - In the <header> create a heading level 2 with class section-title and text: Leave a comment
  - under the level 2 heading create a paragraph with text: All fields are required.
- Create a form siblings to the header - Action: # - Method: post
  In your 01-styles.css file
  After the Tag list styles, create a new comment
  /**_ FORM _**/
  /_ Comment section
  ============================= _/
- Target post-comments class
  - Property: width, Value: 80%
  - Property: margin, Value: 10rem 0 0 auto
  - Property: padding-left, Value: 7rem
- Target the section-title class inside the post-comments class
  - Property: font-variant, Value: small-caps
- Add a new comment section
  /_ Basic form
  ============================= _/
- Target all form - Property: display, Value: flex - Property: flex-direction, Value: column - Property: padding, Value: 1rem 0 - Property: margin, Value: 0
  Final rendering

### 1. more comment basic structure

**mandatory**
From 01-article.html, create 02-article.html

- In the form in the comment section - Create a first fieldset with a legend that has the text Your personal information and the class visually-hidden - In the fieldset create a first div with the classes form-group and col-1-2 - Sibling to the first div, create a second div with the classes form-group and col-1-2 - Sibling to the 2 divs create a third div with the classes form-group and col-2-3 - Sibling to the first fieldset, create a second fieldset with a legend that has the text Your comment and the class visually-hidden - In the second fieldset create a first div with the classes form-group and col-2-3 - Sibling to the first div create a second div with the classes form-group and col-2-3 - Sibling to the 2 divs create a third div with the class form-group
  From 01-styles.css, create 02-styles.css
- Target all fieldset and set the following rules - flex display - direction of flex is column - justify the content at flex-start - no border - 0 0 2rem padding
  Final rendering (same as previously because <legend> tags are hidden by default)

### 2. create labels and input container

**mandatory**
From 02-article.html, create 03-article.html and in the form which is in the comment section:

- In the first fieldset
  - In the first div (which has classes form-group and col-1-2)
    - Create a label
    - For: your-first-name
    - Text: First Name
    - Sibling to the label, create a <div> with the class form-field
    - Create a span inside the div with the class form-field-container
  - In the second div (which has classes form-group and col-1-2)
    - Create a label
    - For: your-last-name
    - Text: Last Name
    - Sibling to the label, create a <div> with the class form-field
    - Create a span inside the div with the class form-field-container
  - In the third div (which has classes form-group and col-2-3)
    - Create a label
    - For: your-email
    - Text: Email
    - Sibling to the label, create a <div> with the class form-field
    - Create a span inside the div with the class form-field-container
- In the second fieldset - In the first div (which has classes form-group and col-2-3) - Create a label - For: your-title - Text: Title - Sibling to the label, create a <div> with the class form-field - Create a span inside the div with the class form-field-container - In the second div (which has classes form-group and col-2-3) - Create a label - For: your-comment - Text: Comment - Sibling to the label, create a <div> with the class form-field - Create a span inside the div with the class form-field-container - In the third div (which has class form-group) - Create a <button> with the classes button and button-primary - Text: Post my comment
  From 02-styles.css, create 03-styles.css:
- Target all label - cursor should be pointer - display as block element - don’t wrap white space - size of font should be 1.4rem - set padding to 0 0 .5rem
  Final rendering
  Final rendering with button in hover

### 3. create the inputs

**mandatory**

From 03-article.html, create 04-article.html:

- In the first fieldset
  - In the first span of form-field-container class, create an input
    - Type: text
    - Name: your-first-name
    - Id: your-first-name
    - Placeholder: e.g. Mike
    - Pattern: [A-Za-zÀ-ž\s]{3,} (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the input valid)
    - Max length: 35
    - Autocomplete is on
    - Access Key: f
    - Required: true
  - In the second span of form-field-container class, create an input
    - Type: text
    - Name: your-last-name
      - Id: your-last-name
    - Placeholder: e.g. Smith
    - Pattern: [A-Za-zÀ-ž\s]{3,} (we want to allow all characters with and without accents and spaces. We want to have at least 3 characters to make the input valid)
    - Max length: 40
    - Autocomplete is on
    - Access Key: l
    - Required: true
  - In the third span of form-field-container class, create an input
    - Type: email
    - Name: your-email
    - Id: your-email
    - Placeholder: e.g. youremail@gmail.com
    - Pattern: [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$ (we want to ensure the correct format of the email)
    - Max length: 55
    - Autocomplete is on
    - Access Key: e
    - Required: true
- In the second fieldset - In the first span of form-field-container class, create an input - Type: text - Name: your-title - Id: your-title - Placeholder: e.g. I loved that article - Pattern: [A-Za-zÀ-ž\s]{4,} (we want to allow all characters with and without accents and spaces. We want to have at least 4 characters to make the input valid) - Max length: 75 - Autocomplete is on - Access Key: t - Required: true - In the second span of form-field-container class, create a textarea - Name: your-comment - Id: your-comment - Placeholder: Write your comment here - Minimum length: 10 - Access Key: c - Required: true - Columns: 30 - Rows: 6
  From 03-styles.css, create 04-styles.css, after the label selector:
- Target in one selector all input type text, all input type email, all textarea
  - Property: position, Value: relative
  - Property: width, Value: 100%
  - Property: padding, Value: 1.2rem
  - Property: line-height, Value: 1
- Property: border, Value: .1rem solid point to the variable color-black
- Property: background-color, Value: point to the variable color-white
- Property: box-shadow, Value: none
- Property: outline, Value: 0
- Target in one selector all input type text, all input type email
- Property: padding-right, Value: 3rem
- Target in one selector the focus state of all input type text, the focus state of all input type email, the focus state of all textarea - Property: border, Value: .1rem solid point to the variable color-grey - Property: background-color, Value: point to the color-light-grey - Now target the placeholder, it can be tricky so I will give you the code to add to your stylesheet:
  ::placeholder {
  font-style: italic;
  font-size: var(--font-size-small);
  }
  Final rendering
  Final rendering when “Last name” field is focus

### 4. add help messages

**mandatory**
From 04-article.html, create 05-article.html:

- In each span with form-field-container class that contains an input - After the input add an empty <i> with the class form-field-icon
- In the first fieldset
  - Inside the first div with form-field class, right after the closing span tag, add a paragraph
    - Class: form-help
    - Text: First name should be at least 3 characters and only contains letters
  - Inside the second div with form-field class, right after the closing spantag, add a paragraph
    - Class: form-help
    - Text: Last name should be at least 3 characters and only contains letters
  - Nothing is added in the third form-field
- In the second fieldset - Inside the first div with form-field class, right after the closing span tag, add a paragraph - Class: form-help - Text: Title should be at least 4 characters and only contains letters - Inside the second div with form-field class, right after the closing span tag, add a paragraph - Class: form-help - Text: Comment should be at least 10 characters
  From 04-styles.css, create 05-styles.css:
- Add a new separation
  /_ Form group
  ============================= _/
- Target form-group class - Property: padding, Value: 1rem - Property: margin, Value: 0 - Property: background-color, Value: point to the variable color-white
- Target the focus-within state of form-group class - Property: background-color, Value: point to the color-light-grey (if it was not done in the previous task) - Property: transition, Value: .3s
- Add a new separation
  /_ Form field
  ============================= _/
- Target form-field-container class - Property: position, Value: relative
- Target form-field-icon class - Property: font-style, Value: normal
- Add a new separation
  /_ Form help
  ============================= _/
- Target form-help class inside form-group class - Property: margin, Value: 0 - Property: line-height, Value: 1.3 - Property: letter-spacing, Value: .019rem - Property: color, Value: point to the variable color-dark-grey - Property: font-size, Value: point to the variable font-size-small - Property: max-height, Value: 0 - Property: transition, Value: .3s - Property: overflow, Value: hidden
- Target form-help class when form-group class has a focus-within state - Property: max-height, Value: 20rem - Property: margin, Value: .4rem 0 0
  Final rendering when “Last name” is focused

### 5. add pure HTML / CSS error handling

### 6. add the search form
