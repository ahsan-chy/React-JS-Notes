
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

![redux-overveiw](https://user-images.githubusercontent.com/85479513/208836564-9b459e7c-2af5-4166-80cf-fa31a531a70a.png)

![REdux tool kit](https://res.cloudinary.com/practicaldev/image/fetch/s--jNvv6EyP--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mziq95fvwx3tt74icr2r.png)


Table of content
- Store
- userSlice
- useSelector
- useDispatch



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

