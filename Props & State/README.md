# States & Props

## Props 

#### 1️⃣ What are Props?
Props (short for "properties") are an object in React that you can pass as an argument to a component. They can be anything from strings, numbers, or arrays, to more complex data structures and functions.

🚀In React, props are a way to pass data from one component to another. They are like function **arguments** in JavaScript and attributes in HTML. Props are always passed as an object, and each property in the object represents a piece of data that can be accessed by the component.


Here's how you can use props in React:

#### 1. Defining Props:
2️⃣ How to pass Props between components
To pass Props between components, you can add them as attributes to the child component in the parent component's render method. 

```javascript
<MyComponent name="John" age={25} />
```

#### 2. Accessing Props:


```javascript
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
```
In this example, `props.name` and `props.age` are used to access the values passed as props.


#### 3. Using Props:

Once you have access to the props inside a component, you can use them to render dynamic content or customize the component's behavior. For example:

```javascript
function MyComponent(props) {
  if (props.age >= 18) {
    return <p>{props.name} is an adult.</p>;
  } else {
    return <p>{props.name} is a child.</p>;
  }
}
```
Props are **read-only**, meaning that a component cannot modify its props directly. They are passed from the parent component and are used to configure the child component's behavior or appearance. If you need to modify the data, you can use state within the component or pass callback functions as props to update the data in the parent component.

In this article, we'll explore 5️⃣ key concepts you need to know about Props in React to take your component-building skills to the next level.


### Prop Destructuring


Passing props using Destructuring
```javascript
const [count, setCount] = useState(0)
const [name, setName] = useState('Abc');
const [email, setEmail] = useState('Xyz@gmail.com');
const [phone, setPhone] = useState('030002312312');
const [company, setCompany] = useState('Enable Hours');
```

.

#### Passing Props Method 1
```diff
! <Child name={name} email={email} phone={phone} company={company}/>
```
#### Passing Props Method 2
```diff
! <Child {...{ name, email, phone, company, dob:"76576" }}/>
```

```javascript
const Child = (props) => {
  const { name, email, phone, company, dob } = props;
  return (
    <>
      <p>Name: <b>{name}</b></p>
      <p>Email: <b>{email}</b></p>
      <p>Phone: <b>{phone}</b></p>
      <p>Company: <b>{company}</b></p>
      <p>Dob: <b>{dob}</b></p>
    </>
  );
};
```

Destructure Props

#### Access Props
```diff
  ! const { name, email, phone, company, dob } = props;
```

```diff
import React from 'react';

! function MyComponent({ name, age }) {
  // Access name and age directly 
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default MyComponent;
```
In this example, instead of using **`props.name`** and props.age to access the props, we destructure the `name` and `age` directly within the function signature of the **`MyComponent`**. This way, we can use the extracted props directly within the component without the need to reference props explicitly.


#### 3️⃣ Default Props
Default Props are a convenient way to define default values for Props in case they are not passed down from the parent component. You can set default Props by defining a defaultProps property on the child component.


```javascript
import React from 'react';

function MyComponent(props) {
  // ...
}

MyComponent.defaultProps = {
  name: 'John',
  age: 25
};

export default MyComponent;
```
It is an object that contains the default values for the props name and age. If the `name` or `age` props are not provided when using the `MyComponent`, the default values will be used instead.


```javascript
<MyComponent />
```
Alternatively, if you provide specific values for the props, they will override the default values:

```javascript
<MyComponent name="Alice" age={30} />
```



#### 4️⃣ Prop Types
Prop Types help you validate Props passed down to the child component. You can define the expected data types for Props and whether they are required. This helps to catch bugs and improve the reliability of your code.

#### 5️⃣ Props Drilling and Context API
Props drilling is a common issue in React where you must pass Props through multiple levels of components. The Context API is a solution that allows you to pass Props to child components without manually passing them down through all the parent components.


### Children Prop
In React, the children prop is a special prop that is automatically passed to every component. It can be used to render the content included between the opening and closing tags when invoking a component. 

For example, the following code creates a component called **MyComponent** and renders the text "Hello, world!" inside of it:

```javascript
const MyComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
```

When this component is invoked with the following code:
```javascript
<MyComponent>
  <h1>Hello, world!</h1>
</MyComponent>

```

The **`children prop`** will be set to the **`h1`** element, and the **`MyComponent`** component will render the following output:

```javascript
<div>
  <h1>Hello, world!</h1>
</div>
```
The children prop can be used to render any kind of React element, including other components, text, images, and more. It is a powerful tool that can be used to create complex and flexible UIs.


