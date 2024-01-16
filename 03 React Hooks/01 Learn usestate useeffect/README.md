In This project

1. Whats useState
2. State updates aren't immediate
3. Conditional rendering
4. Updating object state
5. 1 Object state instead of multiple smaller ones
6. Information can be derived from state / props
7. Primitives vs non-primitives
8. Initializing state with object
9. TypeScript mistakes
10. Not using custom hooks
11. Server & Client components
12. Stale closure
13. Fetching in useEffect

### 1. Whats useState

-

```javascript

```

### 2. [State updates aren't immediate](./app/UseStateBetter/page.jsx)

-

```javascript
const [data, setData] = useState(0);

const IncreaseCount = () => {
  setData((data) => data + 1);
  setData((data) => data + 1);
};
```

### 3. [Conditional rendering](./app/ConditionalRendering/page.jsx)

-

```javascript

```

### 4. [Updating object state](./components/UserData.jsx)

```javascript
const [user, setUser] = useState({
  name: "",
  email: "",
  age: 10,
  gender: "",
});
```

- First Approch but not recomended. This will only update first value. and every time it will show error.

`Uncaught TypeError: Cannot create property 'name' on string 's'`

```javascript
❌ setUser((user.name = e.target.value));
```

- Not Recomended way to update the object

```javascript
❌ setUser({ name: e.target.value });
```

- First Recomendation

```javascript
☑️  setUser({
      ...user,
      name: e.target.value,
    });
```

- Best Approch for update the specific value of object

```javascript
✅ setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
```

```javascript

```

### 5. [Object state instead of multiple smaller ones](./components/UpdateMultipleInputData.jsx)

- If you have multiple of data in object then you can update specific data. Without disturbing other values.

```javascript
✅ const onChange = (e) => {
  setUser((prev) => ({
    ...user,
    [e.target.name]: e.target.value,
  }));
};
```

### 6. Information can be derived from state / props

-

```javascript

```

### 7. Primitives vs non-primitives

-

```javascript

```

### 8. Initializing state with object

-

```javascript

```

### 9. TypeScript mistakes

-

```javascript

```

### 10. Not using custom hooks

-

```javascript

```

### 11. Server & Client components

-

```javascript

```

### 12. Stale closure

-

```javascript

```

### 13. Fetching in useEffect

-

```javascript

```
