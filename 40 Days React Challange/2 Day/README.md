# Day 2 - Search in React JS

- **[Search - Live Search](./search-data/README.md)**
  - Using UseMemo Apply Search 
  - Use Memo Filte Data
- [Advance Search](./advance-search-nested-array/README.md)
  - Find data from nested of arrays. 
  - 


## Basic Search 🔎

### Search Data & Filter Data

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


## Advance Search 🔍

### Search In React JS

- Simple Search
- Amir Search
- Ali Search
- Shazam Search

[Backend Search](#backend-search)

### Amir Search

> Here in this Search We are using the companyOffices array where I am getting the required data and storing that in a array like this.

```diff
[
    {
        office: officeName,
        floor: floorName,
        area: areaName
    }
]
```

```javascript
const filteredOffices = useMemo(() => {
  if (!search) return companyOffices;
  const filteredArray = [];

  companyOffices?.forEach((office) => {
    if (office.name.toLowerCase().includes(search.toLowerCase())) {
      filteredArray.push({
        officeName: office.name,
      });
    }

    office?.floors?.forEach((floor) => {
      if (floor.name.toLowerCase().includes(search.toLowerCase())) {
        filteredArray.push({
          officeName: office.name,
          floorName: floor.name,
        });
      }

      floor?.areas?.forEach((area) => {
        if (area.name.toLowerCase().includes(search.toLowerCase())) {
          filteredArray.push({
            officeName: office.name,
            floorName: floor.name,
            areaName: area.name,
          });
        }
      });
    });
  });

  return filteredArray;
}, [companyOffices, search]);
```

### Ali Search

> Here in this function I am using the array and filter the required data. If data is present in any of the array or child of array then it will return the all siblings of data.

- **using state**, Set the data in a State in last

```javascript

```

- **Using UseMemo** - Return the data Array

```javascript
const [search, setSearch] = useState("");

const aliFilteredOffices = useMemo(() => {
  if (!search) return companyOffices;
  const filteredData = [];

  companyOffices?.forEach((office) => {
    if (office.name.toLowerCase().includes(search.toLowerCase())) {
      filteredData.push(office);
      return;
    }

    const tempOffice = { ...office, floors: [] };
    office?.floors?.forEach((floor) => {
      if (floor.name.toLowerCase().includes(search.toLowerCase())) {
        tempOffice.floors.push(floor);
        return;
      }

      const tempFloor = { ...floor, areas: [] };
      floor?.areas?.forEach((area) => {
        if (area.name.toLowerCase().includes(search.toLowerCase())) tempFloor.areas.push(area);
      });
      if (tempFloor.areas.length) tempOffice.floors.push(tempFloor);
    });
    if (tempOffice.floors.length) filteredData.push(tempOffice);
  });

  return filteredData;
}, [companyOffices, search]);
```

### Shazam Search

> In this function, this is returning the required data and elemenate the siblings of data. Also, it is not returning the child data, if that is not present in given keyword(search) state.

```javascript
const [search, setSearch] = useState("");

const filteredOffices = useMemo(() => {
  if (!search) return companyOffices;
  const filteredData = [];

  companyOffices?.forEach((office) => {
    const officeData = JSON.parse(JSON.stringify(office));

    if (officeData?.floors?.length) {
      const floors = [];

      officeData?.floors?.forEach((floor) => {
        const floorData = JSON.parse(JSON.stringify(floor));

        if (floorData?.areas?.length) {
          const areasData = [];

          floorData.areas.forEach((area) => {
            if (area?.name?.toLowerCase().includes(search.toLowerCase())) {
              areasData.push(area);
            }
          });

          floorData.areas = areasData;
        }

        if (
          floorData?.name?.toLowerCase().includes(search.toLowerCase()) ||
          floorData?.areas?.length
        ) {
          floors.push(floorData);
        }
      });

      officeData.floors = floors;
    }

    if (
      officeData?.name?.toLowerCase().includes(search?.toLowerCase()) ||
      officeData?.floors?.length
    ) {
      filteredData.push(officeData);
    }
  });

  return filteredData;
}, [companyOffices, search]);
```

## Backend Search

- Backend Server setup and write frunction to send specific data.

```javascript
server.get("/users", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) =>
    data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)));

  res.json(search(usersData).splice(0, 10));
});
```

- Fetch Users Data and use It

```javascript
const [query, setQuery] = useState("");
const [users, setUsers] = useState([]);

useEffect(() => {
  const fetchUsers = async () => {
    const result = await axios.get(`http://localhost:4000/users?q=${query}`);
    setUsers(result.data);
  };

  if (query.length >= 0) fetchUsers();
}, [query]);
```

