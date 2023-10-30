# useMemo

The **`useMemo`** hook is a part of React's hooks API and is used for optimizing the performance of your components by memoizing the result of expensive calculations or data transformations. It's particularly useful when you have a component that needs to recompute a value on each render, but the computation is costly in terms of CPU or memory usage.


![useMemo](https://github.com/ahsan-chy/Shortcuts-for-window/assets/85479513/b9b1bdac-0d4e-4273-b0c1-9e73f71e3e0c)



### Example 1:

Suppose you have a component that fetches a list of users from an API when it mounts. Here's how you might write it using useEffect:

```javascript
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
```



Now, let's convert this to a useMemo version:

To optimize this code using useMemo, we can memoize the users state and the loading state. Since the data fetching logic is still done using useEffect, we'll focus on optimizing the rendering part:


```javascript
import React, { useState, useEffect, useMemo } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const userList = useMemo(() => (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  ), [users]);

  return (
    <div>
      <h1>User List</h1>
      {loading ? <p>Loading...</p> : userList}
    </div>
  );
}

export default UserList;
```

### Example 2

Here is scenario where I am fetching data from database on everytime when category change from dropdown. I have used useEffect to perform this operation. 

```javascript
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);


  useEffect(() => {
    const getSubCategoryOptions = async () => {
      const options = await loadSubCategoryOptions(
        activeCompany?.id,
        inputData?.category
      );
      setSubCategoryOptions(options);
    };
    getSubCategoryOptions();

  }, [inputData.category]);
```


Now convert it into **useMemo** code. 

```javascript
  const subCategoryOption = useMemo(() => {
    const fetchOptions = async () => {
      const options = await loadSubCategoryOptions(
        activeCompany?.id,
        inputData?.category
      );
      return options;
    };

    return fetchOptions();

  }, [inputData?.category]);
```
Here i have used a function `fetchoptions` which will store and return value of options. Then by calling useMemo variable i can get all options list. 






