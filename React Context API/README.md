
# Context Api 

In React, the Context API is a feature that allows you to share data across the component tree without explicitly passing it down as props. It provides a way to pass data through the component tree without having to manually pass props at each level.


### createContext
Create a new context using the createContext function:

```javascript
import React, {createContext} from "react";

const AuthContext = React.createContext();
```


### Provider
**`Wrap the desired part`** of the component tree with the Provider component, and provide the data through the value prop:

```javascript
<AuthContext.Provider value={/* your data */}>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/NewsItems" element={<NewsItems />} />
    <Route path="/Checkout/:id" element={<Checkout />} />
    <Route path="/OrderDetails" element={<OrderDetails />} />
</Routes>
</AuthContext.Provider>
```
The Object which you will put in **`Value = {{}}`**, will be accessable anywhere on website.


### useContext
The **`useContext`** hook is a React hook that allows you to access context values from your component.

It accepts a **context object** created using the **`createContext`** function and returns the current value of that context.

```javascript
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'

 const {user, token, saveAuth} = useContext(AuthContext)
```