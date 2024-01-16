import { useMemo, useState } from "react";
import { companyOffices } from "../data/companyOffices";

function SearchOffices() {
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

  return (
    <>
      <div>
        {/* {console.log("offices", companyOffices)} */}
        {console.log("filteredOffices", filteredOffices)}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Office"
          />
        </div>

        <div>
          <h3>Offices Data is here</h3>

          {/* //+ Display all list of offices and their nested data */}
          <div>
            <ul>
              {filteredOffices?.map((office, index) => (
                <li key={index}>
                  {office.name}
                  <ul>
                    {office?.floors?.map((floor, index) => (
                      <li key={index}>
                        {floor.name}
                        <ul>
                          {floor?.areas?.map((area, index) => (
                            <li key={index}>{area.name}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchOffices;
