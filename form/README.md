# 📝 Forms Project

This project is part of the **[C#23] Specialization - Web Stack Programming 2024** curriculum. It demonstrates how to build accessible, responsive, and validated HTML forms using pure HTML and CSS.

![Forms](https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_04_How-to-Create-HTML-Forms.jpg)



---
---

## 📁 Repository

**GitHub Repo**: `holbertonschool-web_front_end`  
**Directory**: `form`

---

## 📄 Files

| HTML File        | CSS File         | Description |
|------------------|------------------|-------------|
| 01-article.html  | 01-styles.css    | Basic structure with a comment section and form |
| 02-article.html  | 02-styles.css    | Fieldset structure for form grouping |
| 03-article.html  | 03-styles.css    | Labels and input containers |
| 04-article.html  | 04-styles.css    | Input elements and textareas with validation attributes |
| 05-article.html  | 05-styles.css    | Help messages and focus styling |
| 06-article.html  | 06-styles.css    | HTML/CSS-based validation icons and color feedback |
| 07-article.html  | 07-styles.css    | Accessible search form in the navigation bar |

---

## ✅ Features

- ✅ Fully responsive form layout using Flexbox
- ✅ Semantic HTML structure with accessible fieldsets and legends
- ✅ Custom styled labels, inputs, and textareas
- ✅ Input validation using HTML attributes and regex patterns
- ✅ Visual feedback for valid/invalid fields with custom icons
- ✅ Help messages on focus using `:focus-within`
- ✅ Search form with animated focus behavior

---

### Articles & Guides

- [An Extensive Guide To Web Form Usability — Smashing Magazine](https://www.smashingmagazine.com/2009/07/web-form-usability/)
- [Forms - UX Movement](https://uxmovement.com/forms/)
- [Placeholders in Form Fields are Harmful (Video)](https://www.nngroup.com/videos/placeholders-in-form-fields/)
- [The Anatomy of Accessible Forms: Best Practices | Deque](https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/)
- [Pure CSS Custom Error Messaging for Default Form Elements – Sarah Holley Design](https://sarahholleydesign.com/blog/css-error-messaging)

### MDN Documentation

- [HTML forms - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [form - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [fieldset - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
- [legend - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
- [label - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [input - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [tabindex - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [accesskey - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)
- [button - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [select - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
---


## 🧪 Validation Patterns Used

- **Names**: `[A-Za-zÀ-ž\\s]{3,}` (Minimum 3 letters, accents allowed)
- **Email**: `[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$`
- **Title**: `[A-Za-zÀ-ž\\s]{4,}` (Minimum 4 characters)
- **Comment**: Minimum 10 characters via `minlength`

---

## 🎨 CSS Highlights

- Structured and commented for maintainability
- Uses CSS variables for theme consistency
- Custom selectors for validation state (`:valid`, `:invalid`)
- Transitions for smooth UI interactions
- Form-specific layout with `.form-group`, `.form-field`, and `.form-help`

---

## 🔍 Accessibility

- Uses `aria-label` on search input
- `legend` elements are visually hidden but present for screen readers
- Button and form elements use accessible labels and placeholders
- Icons provide feedback beyond color (✔ / ✘)

---

## 💡 Final Score: **99.48%**

Great job! All required features implemented successfully.

---

## 🧭 Navigation

- Project by: [David Dias, Senior Software Engineer at HomeX]
- Last updated: `2025-05-15`
