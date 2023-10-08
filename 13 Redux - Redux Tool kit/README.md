
# Redux
Redux is a predictable state container for JavaScript apps.
Redux is library for JavaScript Application. **Redux** is state management tool(library).

```javascript
    npm install redux react-redux
```
Other packages to install
```javascript
    npm install @reduxjs/toolkit

    npm install redux-devtools

    npm install redux-thunk

    npm install redux-logger

    npm install redux-saga
```

Redux Refference Links
- [Reux](https://redux.js.org/introduction/getting-started)
- [React Reux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

![redux-overveiw](https://user-images.githubusercontent.com/85479513/208836564-9b459e7c-2af5-4166-80cf-fa31a531a70a.png)

## Action
Action tells, What to do?

Actions are **Objects** that are used to send data to **Redux Store**. They 
typically have two properties
- Type
- Payload
**Payload** property that contains the Information that should be changed in app store.

```javascript
export const incrNumber= (item) => {
    return{
        type: "INCREMENT_NUMBER",
        payload: item
    }
}
```
```javascript
export const decNumber= (item) => {
    return{
        type: "DECREMENT_NUMBER",
        payload: item
    }
}
```

![getting-started-with-redux-1096x453](https://user-images.githubusercontent.com/85479513/208836609-6b77f31e-50a4-47f1-97f6-2faa0b437d1f.png)

## Reducer
Reducer tells, How to do?

- How to store data Reducers will tell us.
- Reducers are pure Functions that implement the action's behavious 
- (i) They take current application state
- (ii) Perform an Action
- (iii) Then Return new State

```javascript
const initialState = 10;

const changeNumber = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT_NUMBER":
            return state + 1;
        case "DECREMENT_NUMBER":
            return state - 1;
        default: 
            return state;
    }   
}
export default changeNumber;
```
**Combine Reducers**
```javascript
import { combineReducers } from "redux";
import changeNumber from "./incDec";

const rootReducer = combineReducers({
    changeNumber: changeNumber
})

export default rootReducer;
```

## Store
Object which holds the state of the Application. The current Redux application state live in an object called Store.

Functions associated with Store 
- createStore()
- dispatch(Action)
- getState()

```javascript
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools())

export default store;
```
```javascript
store.subscribe(()=> console.log("Store Changed"))
```
```javascript
store.subscribe(()=> console.log(store.getState()))
```
```javascript
store.dispatch(incrNumber())
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