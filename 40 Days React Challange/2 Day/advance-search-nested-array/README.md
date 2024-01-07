# Search In React JS

- Simple Search
- Amir Search
- Ali Search
- Shazam Search

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


