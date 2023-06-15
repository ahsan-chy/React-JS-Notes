# useRef Hook

- ref 
- useRef
- forwardRef


## useRef

The useRef Hook allows you to **persist values** between renders. It can be used to **store a mutable value** that does not cause a re-render when updated.

It can be used in various cases where you need to interact with **DOM elements**, manage values that don't trigger re-renders, or store references to other objects. 

#### useRef(initialValue) | Parameters 

```javascript
const ref = useRef(initialValue)
```

```javascript
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...
```

#### Return 
useRef returns an object with a single property:

![useRef](https://lh5.googleusercontent.com/8HDHXNu36iOcTygBWFh391Ic-hRHZYyBfN9tR3JiJpwgn-5YqJeb90ZA4RZ2AiYIC0iDC4mLvHDk6P6Kay_IJJkcaA3SGpX2PJG9YNuV9vJ8Qlthy1FamIViwSLtafDWwV20IOGy8GHMg15tHbl6J32z5qQvnpJD8YSQfMcS1mgRz4K69_7pRVCqpQ)

### Here are some possible use cases for useRef:

- Create Mutable State which will not re-render the component 
- Accessing DOM elements 
- Storing previous values
- 
- 


## Create Mutable State which will not re-render the component

To create a mutable state that doesn't trigger component re-renders, you can use the useRef hook.

The component doesn't re-render when the mutable state changes because **`useRef`** doesn't trigger re-renders like **`useState`** does.


```javascript
import React, { useState, useEffect, useRef } from "react";

const UserForm = () => {
  const [myData, setMyData] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  return (
    <div className="App">
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>Number only {countRef.current} time re-Render</p>  {/*  On First Run it will add two - redender 2 times  */}
    </div>
  );
};

export default UserForm;
```

We can change **`countRef.current`** as many time as we want without component re-render.

## Accessing DOM elements 

**`useRef`** can be used to create a reference to a DOM element and access its properties or methods. This is useful for scenarios such as focusing an input field, scrolling to an element, or manipulating the DOM directly. You can mutate the **`ref.current`** property.

```javascript
import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default MyComponent;
```

## Storing previous values

**`useRef`** can store values that need to be preserved between re-renders but don't trigger re-renders themselves. You can compare the **current & previous values** to perform actions or calculations based on the change.

```javascript
import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
    const [name, setName] = useState('');
  const previousNameRef = useRef('');

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  return (
    <div>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Current Value: {name}</h2>
      <h3>Previous Value: {previousNameRef.current}</h3>
    </div>
  );
};

export default MyComponent;
```



<br/>


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




## Handle Multiple and MultiTypes of Inputs using useRef

You can Set condition - If Input is not selected or Empty then focus will move on it.

```javascript
    if (!selectedCategory) {
      categoryRef?.current?.focus();
    } else if (isPlaceEmpty) {
      placeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      placeRef.current.style.scrollMargin = '70px';
      // placeRef.current.style.paddingTop = '20px';
      // placeRef.current.style.marginTop = '80px';
    } else if (!displayName) {
      displayNameRef?.current?.focus();
    }
```


```javascript
import React, { useRef } from 'react';

const UserForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    const refs = [nameRef, emailRef, passwordRef];

    for (let ref of refs) {
      if (ref.current && !ref.current.value) {
        ref.current.focus();
        break;
      }
    }
  };

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.style.borderColor = 'red';
    }
  };

  return (
    <div className='App'>
      <input type='text' placeholder='Name' ref={nameRef} onFocus={() => handleFocus(nameRef)} />
      <input type='email' placeholder='Email' ref={emailRef} onFocus={() => handleFocus(emailRef)} />
      <input type='password' placeholder='Password' ref={passwordRef} onFocus={() => handleFocus(passwordRef)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
```


```javascript

import React, { useRef } from 'react';

const UserForm = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const checkboxRef = useRef(null);
  const selectRef = useRef(null);
  const radioRef = useRef(null);

  const handleSubmit = () => {
    const refs = [nameRef, emailRef, checkboxRef, selectRef, radioRef];

    for (let ref of refs) {
      if (ref.current) {
        const elementType = ref.current.type;
        let value;
        if (elementType === 'checkbox') {
          value = ref.current.checked;
        } else if (elementType === 'select-one') {
          value = ref.current.value;
        } else {
          value = ref.current.value.trim();
        }

        if (!value) {
          ref.current.focus();
          break;
        }
      }
    }
  };

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.style.borderColor = 'red';
    }
  };

  return (
    <div className='App'>
      <input type='text' placeholder='Name' ref={nameRef} onFocus={() => handleFocus(nameRef)} />
      <input type='email' placeholder='Email' ref={emailRef} onFocus={() => handleFocus(emailRef)} />
      <input type='checkbox' ref={checkboxRef} onFocus={() => handleFocus(checkboxRef)} />
      <select ref={selectRef} onFocus={() => handleFocus(selectRef)}>
        <option value=''>Select an option</option>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </select>
      <input type='radio' name='radioGroup' ref={radioRef} onFocus={() => handleFocus(radioRef)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
```