# Search Data & Filter Data

- Using UseMemo Apply Search 
- Use Memo Filte Data
- 


- Using UseMemo Apply Search 

```javascript
  const filter = useMemo(() => {
    if (!searchValue) return usersData;

    return usersData?.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, usersData]);
```

- Using UseMemo also anotherway. But first one is prefered. ☝️⬆️ 

```jvascript
  const filterUserData = (data, searchValue) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Memoize the filtered data
  const filteredData = useMemo(
    () => filterUserData(usersData, searchValue),
    [usersData, searchValue]
  );

```