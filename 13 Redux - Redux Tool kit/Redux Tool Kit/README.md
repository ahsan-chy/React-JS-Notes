
# Redux Tool kit
Redux is a predictable state container for JavaScript apps.
Redux is library for JavaScript Application. **Redux** is state management tool(library).

```javascript
    npm install @reduxjs/toolkit react-redux
```

Redux Refference Links
- [Reux](https://redux.js.org/introduction/getting-started)
- [React Reux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

- [Redux in Next JS](https://redux.js.org/usage/nextjs) ⬇️

![redux-overveiw](https://user-images.githubusercontent.com/85479513/208836564-9b459e7c-2af5-4166-80cf-fa31a531a70a.png)

![REdux tool kit](https://res.cloudinary.com/practicaldev/image/fetch/s--jNvv6EyP--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mziq95fvwx3tt74icr2r.png)


Table of content
- Store
- Provider
- userSlice
- useSelector
- useDispatch
- useAsyncThunk
- useStore

***


### Store

```javascript
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice'

export const store = configureStore({
  reducer: {
    user : userReducer
  },
})
```


### createSlice - userSlice

[Redux useSlice](https://redux-toolkit.js.org/tutorials/quick-start)

```javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    token: "" 
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    email: (state, action) => {
      state.email = action.payload;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
  },
})

export const { email, token } = authSlice.actions   // Action Creator

export default authSlice.reducer
```




**Index.js**

Wrape the **APP** component with provider and pass the store to it.
```javascript
import store from "./store";
import { Provider } from 'react-redux';

<Provider store={store}>
      <App />
</Provider>
```

![getting-started-with-redux-1096x453](https://user-images.githubusercontent.com/85479513/208836609-6b77f31e-50a4-47f1-97f6-2faa0b437d1f.png)


### useSelector

`useSelector` is a hook provided by the React-Redux library that allows you to extract data from the Redux store and subscribe to changes in that data.

Method 1
```javascript
import React from 'react';
import { useSelector } from 'react-redux';

function MyComponent() {
  const counter = useSelector(state => state.counter); // Method 1
  const email = useSelector(state => state.auth.email);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}
```
Method 2
```javascript
let { user } = useSelector((state) => ({ ...state }));
```

```javascript
let {cart, user, totalAmountR}  = useSelector((state) => ({ ...state }));
```

### useDispatch

```javascript


```



### useAsyncThunk

```javascript


```







## Reduc Tool kit with NEXT JS

Issues I faced

- `app-index.js:32 Warning: Extra attributes from the server: cz-shortcut-listen`

  - **Solution**: [Stackoverflow Solution](https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c)

  - Remove Extentions like Grammerly, colorzila.

- `Uncaught Error: invariant expected app router to be mounted at useRouter`

  - Can't wrapp the ReduxProvider in `Layout.js` file. use `ReduxProvider` in page.js file. <sup>Prefered</sup>
  - [Stackoverflow Link](https://stackoverflow.com/questions/74515807/uncaught-error-invariant-expected-app-router-to-be-mounted)

- `Error: The slice reducer for key "ChangeColor" returned undefined during initialization.`

- `Error: This function is not supported in React Server Components. Please only use this export in a Client Component`

### Refrence link to visit more about setup Redux tool kit

- [Medium Redux Tool kit Article](https://redux.js.org/usage/nextjs)
- [Redux Toolkit Setup with Next.js](https://medium.com/@xavierdev16/step-by-step-tutorial-how-to-configure-redux-tool-kit-in-next-js-13-app-3595460d11e5)

## [Steps to setup Redux in NEXT JS](https://redux.js.org/usage/nextjs)

```javascript
/app
  layout.jsx
  page.jsx
  StoreProvider.jsx
/lib
  store.js
  /slices or /features
    /todos
      todosSlice.js
    /counters
      countersSlice.js
    /auth
      authSlice.js
```

- Step 1 - Create Folder `lib` inside it create folder `slices` or `features`.
  ...
- In `lib` folder create file `store.js`.

- Inside app folder, create Provider file with name of `StoreProvider.js` or `ReduxProvider.js`.

Below is the given example of code.

- Step 2 - Create Slice

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: " Todo آج کا ",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // return state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

- Step 3 - Create Store

```javascript
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blog/blogSlice";
import todoSlice from "./slices/todos/todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
  blog: blogSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
```

- Step 4 - Create Provider

```javascript
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
    console.log("storeRef", storeRef.current);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
```

- Step 5 - Wrapre `layout.js` with Provider

```diff
"use client";

import StoreProvider from "@/app/StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
!        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```
