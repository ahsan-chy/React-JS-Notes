
# React Js 

## React Installation:

![Vite and npx](https://res.cloudinary.com/practicaldev/image/fetch/s--os9DYPO5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d3hgg1jny2imxei9lsto.jpg)

**NPX**
```javascript
npx create-react-app myapp
```


**Vite JS**

[vite Installation](https://vitejs.dev/guide/)

- With NPM:
```javascript
npm create vite@latest
```
- With YARN:
```javascript
yarn create vite
```

Run React App

```javascript
npm start
```

```javascript
npm run dev
```

**Change port No** and run at your own selected port 

#### [Vite: How to change the PORT of your Development server](https://bobbyhadz.com/blog/vite-change-development-server-port)


```javascript
"scripts": {
  "dev": "vite --port 3030",
},
```

```javascript

```


#### Setup .env

Use following files in your project. 
- .env
- .env.example
- .env.development

Example 
```javascript
VITE_MAP_API_KEY=your_api_key
REACT_APP_APP_ID=1:392369386835:web:bb2b69c82486be6cc69da6
REACT_APP_MEASUREMENT_ID=G-T6T4J7HSNY
REACT_APP_TYPESENSE_PORT=443
REACT_APP_TYPESENSE_PROTOCOL=https
REACT_APP_HOTJAR_ID=
REACT_APP_HOTJAR_SNIPPET_VERSION=
```

Import and Use 

```diff
  const { isLoaded } = useLoadScript({
!    id: import.meta.env.VITE_MAP_API_KEY,
!    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });
```








## Day 1 - React JS Introduction

The React.js framework is an **open-source JavaScript Library** 
developed by Facebook. It’s used for building **interactive user interfaces** 
and web applications quickly and efficiently with significantly less 
code than you would with vanilla JavaScript. 
[React Intro](https://blog.hubspot.com/website/react-js#:~:text=The%20React.,you%20would%20with%20vanilla%20JavaScript.)


### React is Use for
- React is use to built UI of applications
- React is use to make highly dynamic and responsive web applications.
- Encourage to built single-page application (SPA)
- Without using maximum code you can build efficient applications.


### [Main Features of React](https://www.geeksforgeeks.org/what-are-the-features-of-reactjs/) 
- JSX (JavaScript Syntax Extension)
- Virtual DOM
- One-way data binding
- Performance
- Extensions
- Conditional statements
- Components
- Simplicity

### Virtual DOM
DOM stands for **Document Object Model**. It is the most important 
part of the web as it divides into modules and executes the code. 
Usually, JavaScript Frameworks updates the whole DOM at once, 
which makes the web application slow. But react uses virtual DOM 
which is an exact copy of real DOM. Whenever there is a 
modification in the web application, the whole virtual DOM 
is updated first and finds the difference between real DOM and 
Virtual DOM. Once it finds the difference, then DOM updates only 
the part that has changed recently and everything remains the same. 

*virtual dom*
- The virtual DOM (VDOM) is a programming concept where an
ideal, or “virtual”, representation of a UI is kept in memory
and synced with the “real” DOM by a library such as ReactDOM. 
This process is called *reconciliation.*

 A virtual DOM is a lightweight JavaScript object which is the copy of the real DOM.
#### This Virtual DOM works in three simple steps-
 - Whenever any underlying data changes, the entire Ul is
    re-rendered in Virtual DOM representation
 - Then the difference between the previous DOM representation 
      and the new one is calculated
 - Once the calculations are done, the real DOM will be updated with only 
       the things that have actually changed



![DOM Virtual Dom](https://media.geeksforgeeks.org/wp-content/uploads/20211008140246/DOM.JPG)


### React Life Cycle Method

Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

- **Mounting** – Birth of your component
- **Update** – Growth of your component
- **Unmount** – Death of your component

## Day 2 - React State | Props | Prop Drilling |  

## Props 
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

```javascript
const myElement = <Car brand="Ford" />;
```
Props are also how you pass data from one component to another, as parameters.
```javascript
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}
```

## State
What Is 'State' in ReactJS? The state is **a built-in React object 
that is used to contain data or information about the component.** 
A component's state can change over time; whenever it changes, 
the component re-renders.

The **`state`** object is where you store property values that belongs to the component.

When the **`state`** object changes, the component re-renders.


```javascript
import { useState } from "react";
 
const Counter = () => {
  const [count, setCounter] = useState(0);
 
  return (
    <>
      <button onClick={() => setCounter(count + 1)}> Increment by 1 </button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter(count - 1)}> Decrement by 1 </button>
      <h2>{count}</h2>
    </>
  );
};
 
export default Counter;
```

### Difference between Props & States

![Props and States](https://user-images.githubusercontent.com/85479513/208073641-4ab18ec8-f429-4cc0-8b95-21a7cf8a9f23.png)

## Named Export | Default Export 
Three **different export** styles
```javascript
export foo;
export default foo;
export = foo;
```
The three matching **import styles**
```javascript
import {foo} from 'blah';
import foo from 'blah';
import * as foo from 'blah';
```
### Named Export: (export)

**Exports**
```javascript
// exports from ./MyComponent.js file
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

**imports**
```javascript
// importing a single named export
import { MyComponent } from "./MyComponent";

// importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";

//Import all at once
import * as MainComponents from "./MyComponent";
```
### Default Export: (export default)

**export**
```javascript
const MyComponent = () => {}
export default MyComponent;
```
**Import**
```javascript
import MyDefaultComponent from "./MyDefaultExport";
```

.


## Controlled and uncontrolled components

### Controlled Components
The **controlled component** is a way that you can handle the form 
input value using the `state` and to change the input value there 
is only one way to change it is using `setState` or `useState` if you 
are using React Hooks and you can change this state using one of 
the events like onChange and when the user starts writing any 
character `setState` or `useState` will be called and update 
the state of this input then it will add the new value inside the input.

```javascript
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmitButton = () => {
    alert(inputValue);
  };
  return (
    <div className="App">
      <input value={inputValue} onChange={handleInputChange} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
    </div>
  );
}
```

### Uncontrolled Components
The uncontrolled component is like traditional HTML 
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


### You can use the controlled component when you create
- **Form validation** so you always need to know the value of the input when typing to check if it’s a valid character or not!

- **Disable the submit button** unless all fields have valid data

- If you have a specific format like the credit card input
But if you don’t need any of that and think that the uncontrolled will be simpler for you, go for it.



## Statefull components and stateless components

[Statefull & Stateless Components Video](https://www.youtube.com/watch?v=qyUUxJhYp5Y)

## Statefull Components
A stateful component is a component that holds some state. 

**When would you use a stateful component?**

- When building element that accepts user input or element that is interactive on page
- When dependent on state for rendering, such as, fetching data before rendering
- When dependent on any data that cannot be passed down as props


## Stateless Components
Stateless components, by contrast, have no state. Note 
that both types of components can use props.

**When would you use a stateless component??**
- When you just need to present the props
- When you don’t need a state, or any internal variables
- When creating element does not need to be interactive
- When you want reusable code



# React Hooks

- useState Hook
- useEffect Hook
- useRef Hook
- useMemo Hook
- useReducer Hook
- useContext Hook
- useLayloutEffect Hook
- useCallback Hook


## useState Hook
The useState Hook useState is a Hook that lets you  add React state to function components. after a state is changed, the page is rerendered, refecting the state change.


You can't put useState in any **if - loop - function**. useState 
must be use at the top level. 

```javascript
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```


![useStatehook](https://res.cloudinary.com/practicaldev/image/fetch/s--QPfiaqg9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/1ZLbKgc/use-State-Hook.png)

### Reference Links
- [Web Dev Simplify](https://youtu.be/O6P86uwfdR0?list=TLPQMDEwMTIwMjNpK47U2W9bIA)
- []()
## useEffect Hook
useEffect Hook **allows you to perform side effects in your components.** 
Some examples of side effects are: fetching data, directly updating 
the DOM, and timers. useEffect accepts two arguments. The second 
argument is optional.

```javascript
// Every rerender
useEffect(() => {
	console.log("I run everytime this component rerenders")
});

// onMount
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);

// Condition based 
useEffect(() => {
	console.log("I run everytime my condition is changed")
}, [condition]);

// Condition based with "clean up"
useEffect(() => {
	console.log("I run everytime my condition is changed")
	
	return () => {
    	console.log("Use this return as a 'clean up tool' (this runs before the actual code)")
    }
}, [condition]);
```


![the useEffect Hook](https://res.cloudinary.com/practicaldev/image/fetch/s--LyvPoa-c--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/1f7GSHb/use-Effect-hook.png)

![Dependencies](https://ihatetomatoes.net/wp-content/uploads/2020/05/02-react-hook-useEffect.png)

![useEffect Hook](https://dmitripavlutin.com/d0532a1ba251b6730f64aff0a02b0925/callback-cleanup-2.svg)


### video Links
- [web Dev Simplify](https://youtu.be/0ZJgIjIuY7U)
- [Sonny Cleaver Programming](https://www.youtube.com/watch?v=UVhIMwHDS7k&t=814s)
- [Coder Dost](https://www.youtube.com/watch?v=SvU2I2ZhaVI)

- [useEffect 1 mint](https://youtu.be/QlrNjef6Myg)

### Cleanup Function in useEffect Hook
React's useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects.

[Cleanup Function](https://youtu.be/gr_HOt8JYyM)
```javascript 
useEffect(() => {
	//your code goes here
    return () => {
      //your cleanup code codes here
    };
  },[]);
```
.

[Hello React, Goodbye useEffect. Detailed useEffect Hook topic](https://dev.to/imbios/hello-react-goodbye-useeffect-i-hope-4mf1)




## useRef Hook

- ref 
- useRef
- forwardRef




## Ref - useRef

#### [React useRef Doc](https://beta.reactjs.org/reference/react/useRef)

- [Thapa Technical Video on useRef Hook](https://youtu.be/qv2YPOnDwvA?list=TLPQMzEwMTIwMjOBgsIePxDPQg)
- [Code Dost 30s](https://youtu.be/nPlTUGPK25I)

useRef is use to make directly change in DOM. 




.
## Forward Ref

#### [React Forward Ref Doc](https://beta.reactjs.org/reference/react/forwardRef)

**Ref Forwarding** is a technique for automatically passing a **ref** through a component to a one of its childeren.

Reference Video Links:
- [Code Evolution](https://youtu.be/RLWniwmfdq4?list=TLPQMzEwMTIwMjOBgsIePxDPQg)
- [Code Step By Step](https://youtu.be/xdywAqqHKio)


#### Step 1:
Create Ref in Parent Component. 
```javascript
import React, { useRef } from 'react'

let inputRef = useRef(null)
```

.

#### Step 2:
Attach the Ref to child component
```javascript
<User ref={inputRef} />
```

.

#### Step3:
Forward this Ref to Child Component
```javascript
import React,{forwardRef} from 'react'

const User = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(User)

```

.


#### Step 4:
Define Click handler.
```javascript
 const updateInput = () => {
        inputRef.current.value = "100"
        inputRef.current.style.color = "red";
        inputRef.current.focus()
    }
```
```javascript
<button onClick={updateInput}>Update Input Box</button>
```


### Amir Code **createElement** 

React Create Element - React Without JSX

![createElement](https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2Faaa8c816-a957-48f2-b704-313df6d63889.png&w=750&q=75)

```diff
!React.createElement(type,{props},children); 
```

[Detail Article](https://www.knowledgehut.com/blog/web-development/react-create-element)

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Pure React</title>
  </head>
  <body id="root"></body>
  <script>
    const App = () => {
      const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    //   React.useEffect(() => {
        /*
         <div> <hq>hello</h1> </div>
         React.createElement('div', null, React.createElement('h1', null, 'hello') )

        */
        setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    //   }, []);
      return React.createElement("h1", null, `Hello React! it's ${time}`);
    };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App), root);
  </script>
</html>
```