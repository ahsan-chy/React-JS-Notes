# React Interview Questions

![React Interview Questions](https://github.com/ahsan-chy/ahsan-chy/assets/85479513/b4ae222b-8116-4238-bd73-01a78354df68)

Basic Concepts

### 1. Current version of React - Node - NPM?

- React 18
- Node 20
- NPM 10.4.0

### 2. What is React JS & Why we use React?

### 3. DOM - Virtual DOM - Shadow Dom - Reconcilation

- **DOM**
  DOM stands for **Document Object Model**. It is the most important part of the web as it divides into modules and executes the code.
  ![DOM](https://www.guru99.com/images/JavaScript/javascript8_1.png)

- **Virtual DOM**
  But react uses virtual DOM which is an exact copy of real DOM. **Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM. Once it finds the difference, then DOM updates only the part that has changed recently and everything remains the same.**

_virtual dom_

- The virtual DOM (VDOM) is a programming concept where an
  ideal, or “virtual”, representation of a UI is kept in memory
  and synced with the “real” DOM by a library such as ReactDOM.
  This process is called _reconciliation._

A virtual DOM is a lightweight JavaScript object which is the copy of the real DOM.

#### This Virtual DOM works in three simple steps-

- Whenever any underlying data changes, the entire Ul is
  re-rendered in Virtual DOM representation
- Then the difference between the previous DOM representation
  and the new one is calculated
- Once the calculations are done, the real DOM will be updated with only
  the things that have actually changed

![DOM Virtual Dom](https://media.geeksforgeeks.org/wp-content/uploads/20211008140246/DOM.JPG)

- **Shadow Dom**

  - It's a separate and isolated DOM for an element. It's used to keep the markup structure, style, and behavior hidden and separated from other code on the page so that different parts do not clash and the code can be kept nice and clean.

  - shadow DOM lets you encapsulate parts of an app to keep them separate from global styles that target the regular DOM tree.

- **Reconcilation**
  Reconciliation is React's way of diffing the virtual DOM tree with the updated virtual DOM to determine the most efficient way to update the real DOM. This process allows React to apply only the necessary changes to the DOM, avoiding the costly operation of updating the entire DOM tree.

### 4. Diffing Algorithm - React Fiber

### 5. SPA(Single Page Application)

### 6. How you set your React Project (Folder Structure, Best Practices)

### 7. JSX

- JSX is a **syntax extension** for JavaScript used in React to write HTML-like code within JavaScript

### 8. `<React Fregment>`

-

### 9. Strict Mode in React

-

### 10. Define Component?

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components,

### what is element in react js

### 11. Define Prop?

    - Prop Types
    - Children Props
    - Default Props

### 12. What is State?

- State is a built-in React object that is used to contain data or information about the component.

### 13. Use State is synchronous or asynchronous

- Asyncronous

```javascript
const [count, setCount] = useState(0);

setCount(count + 20);
setCount((count) => count + 20);

console.log(count);
```

### 14. useState setState types

```javascript
const [count, setCount] = useState(0);
```

- Two types
  1. constant
  2. function

### 15. Muteable & ImMuteable

- **Muteable** Mutable objects are those whose state can be changed after creation.

- **ImMuteable** Immutable objects are those whose state cannot be changed after creation.

### 16. Hooks? (One liner Answer)

- Hooks are functions that allow you to use React state and lifecycle features in functional components. They enable you to reuse stateful logic without changing your component hierarchy.

- They provide a more concise and flexible way to manage complexity compared to traditional lifecycle methods in class components.

### 17. Pure Components

- Pure components are also stateless components. Where when you pass same props it will return same output/results. React have **`React.PureComponent`**.
- This actually increase performance of app.

### 18. Higher Order Component(HOC)

- Higher order components are actually function. Where we pass a component as input and it return another componet as output.

### 19. Controlled & Uncontrolled Components

[Detail Video]()

- **Controlled components** are form elements whose values are controlled by React using state. Like input fields.

- **Uncontrolled component** is like traditional HTML
  form inputs that you will not be able to handle the
  value by yourself but the DOM will take care of
  handling the value of the input and save it then you
  can get this value using **`React Ref`** and for
  example, print it inside alert when submitting or
  play with this value as you want.

```javascript
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const handleSubmitButton = () => {
    alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </div>
  );
}
```

### 20. Statefull components and Stateless components

- **Statefull Component**: A component that is managing state and have capacity to rerender.

- **Stateless Component**: Stateless components, by contrast, have no state. They are handle by props.

- [Detail Video](https://www.youtube.com/shorts/AWmm1gHBJic?feature=share)

### 21. Prop Drilling & Prop Uplifting

### 22. Can Browser read JSX ? How Browser React JSX code? `Babel`

- Browser can't read JSX directly.

- This is because they are built to only read regular JavaScript objects and JSX is not a regular JavaScript object.

- For a web browser to read a JSX file, the file needs to be transpiled or converted into a regular JavaScript object. For this, we use **Babel**.

### 23. Explain Babel

![Babel-JS](https://github.com/ahsan-chy/ahsan-chy/assets/85479513/d1dbf9a1-8623-4872-8c9b-d4eb8713963e)

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

### 24. Explain webpack, parcel and some of its features.

### 25. How Rerendering work in React?

### 26. Events in React? How to handle Event in React?

    - (onChnage, onClick, onHover....)

### 27. Synthetic events.

- Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.

- The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.

- [Detail video](https://www.youtube.com/shorts/cqF0V8TpsJU?feature=share)

### 28. differences between functional & class components?

### 29. Form-Handing & Validation techniques?

### 30. limitations of React?

## What are Hooks in React:

- Hooks are functions that allow you to use React state and lifecycle features in functional components. They enable you to reuse stateful logic without changing your component hierarchy.
- They provide a more concise and flexible way to manage complexity compared to traditional lifecycle methods in class components.

### 31. Different Hooks name

React Hooks

- useState
- useEffect
- useRef
- useReducer
- useLayoutEffect
- useMemo
- useCallback
- useId
- useImpertiveHandle
- useContext
- useTransition

### 32. Lifecycle Method

Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

- **Mounting** – Birth of your component
- **Update** – Growth of your component
- **Unmount** – Death of your component

### 33. Memoization

### 34. Can we return setData inside a component?

### 35. Multiple useEffects in a same component?

Yes, you can have multiple useEffect hooks in the same component. Each useEffect hook can serve a different purpose and handle different side effects independently. Here's an example of a component with multiple useEffect hooks:

```javascript
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  // useEffect for logging data changes
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]); // Run whenever 'data' changes

  // useEffect for performing cleanup
  useEffect(() => {
    return () => {
      console.log("Component unmounted or data cleared");
    };
  }, []); // Run once on component mount or when component unmounts

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default MyComponent;
```

### 36. Custom Hooks

- useIsMobile Hook
-

### 37. differences b/w useMemo() and useCallback() in React

- useCallback actually save the function
- useMemo store the result

### 38. useReducer Hook

## Medium Topics:

### 39. How to prevent re-renders in React?

### 40. How do you fetch multiple APIs in a single time.

### 41. What are the security measures which should be considered during development?

### 42. How to Optimize the performance of React App?

### 43. How page performance increase in React?

Performance optimization techniques explain.

1. Code Splitting
2. Lazy Loading
3. Memoization
4. Use Production Build
5. Reduce Bundle Size
6. Optimize Images and Assets:
7. Minimize Renders:
8. Optimize State Management:

### 44. How Reduce Bundle Size in React?

1. Code Splitting:
2. Tree Shaking - (Shadcn)
3. Optimize Dependencies:
4. Bundle Analysis:
5. Dynamic Imports:
6. Optimize Images and Assets:
7. Minify and Compress - (Minification)
8. Remove Dead Code:
9. Optimize Webpack Configuration

### 45. What is the application of lazy loading?

### 46. Suspense

### 47. What is the benefit of error boundaries?

### 48. CORS - How CORS work? - Should we handle it from frontend?

    - CORS, CSP, and XSS explain.

### 49. Long polling

### 50. State management in React

- Context API
- Redux & Redux Tool Kit (RTK)
- Mobx
- Zustand

### 51. Redux and Context API difference

#### In a React using Context API, should we use two context?

#### Can we create two stores in React Redux

- User / Customer
- Admin

#### What is purpose of provider in Redux/Context api

### 52. How **REDUX** work? - Explain redux architecture.

### 53. Persist in Redux

### 54. Protected Routes

### 55. Infinity Scrolling

- Intersection observer
- Pagination

### 56. Crawlers, indexing a page and what are the ways?

### 57. If I write **await** then how program will execute?

- When i put await in any function. This specific part become synchronous.
-

### 58. Asynchronous operations with async/await and Promises?

### 59. How to pass data b/w sibling components using React router?

- useParam
- useLocation

To pass data between sibling components using React Router, you can use one of the following methods:

1. **URL Parameters**: You can pass data through the URL as parameters and access them in the sibling components using the `useParams` hook from `react-router-dom`.

    Example:
    ```jsx
    // Component 1
    import { Link } from 'react-router-dom';

    const Component1 = () => {
      return (
        <Link to="/component2?data=hello">Go to Component 2</Link>
      );
    };

    // Component 2
    import { useParams } from 'react-router-dom';

    const Component2 = () => {
      const { data } = useParams();
      return <div>{data}</div>;
    };
    ```

2. **Location State**: You can pass data through the location state when navigating between routes and access it in the sibling components.

    Example:
    ```jsx
    // Component 1
    import { Link } from 'react-router-dom';

    const Component1 = () => {
      return (
        <Link
          to={{
            pathname: '/component2',
            state: { data: 'hello' }
          }}
        >
          Go to Component 2
        </Link>
      );
    };

    // Component 2
    import { useLocation } from 'react-router-dom';

    const Component2 = () => {
      const { state } = useLocation();
      return <div>{state.data}</div>;
    };
    ```

Choose the method that best fits your use case and application structure. Both methods allow passing data between sibling components efficiently using React Router.

### 60. How authentication works with JWT?

### 61. Interceptors in Axios

- Jab bhe request ay gi ya jay gi to ya, interceptor say guzar kr process ho gi. It is like middleware.

- Interceptors allow you to modify the request or response before it is sent or received by the server.
- Interceptors are useful because they allow developers to add custom functionality to requests and responses without modifying the actual code that makes the request.
