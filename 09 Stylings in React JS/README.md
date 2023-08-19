# Styling & Methods in React JS & Next JS

Different Libraries
- Custom CSS
    - Module CSS
- Tailwind CSS
- Bootstrap
    - React Bootstrap
    - React-Strap 
- Material UI
- Ant D
- Styled Components 
- Emotion
- SASS - LASS - StyleS - SCSS
- 
- 
- 
- 
- 

#![CSS](https://miro.medium.com/v2/resize:fit:2000/1*OjnZjw20cnBWVs4E_a3u4A.png)


## Custom CSS - Global css



Some time We face conflicts with same class name on different files. It some time take same class.


### Module CSS

**`Modular CSS`**, also known as CSS Modules, is a methodology for writing and organizing CSS styles in a way that encapsulates them within individual components. It aims to solve some of the challenges associated with traditional global CSS, such **as class name clashes**, specificity issues, and difficulty in maintaining large codebases.


For using two classes on same div you can use [Clsx](https://www.npmjs.com/package/clsx) Which help to use two classes in same div in module css. 


- Let's create a React component named Button that will use a CSS module for styling.

```javascript
// components/Button.js
import React from 'react';
import styles from './Button.module.css'; // Import the CSS module

function Button() {
  return (
    <button className={styles.button}>
      Click me
    </button>
  );
}

export default Button;
```

Create a CSS Module:
```javascript
/* components/Button.module.css */
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

```





