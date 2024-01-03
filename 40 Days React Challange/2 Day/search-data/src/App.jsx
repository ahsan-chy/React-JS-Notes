import { useState } from "react";

import { Input } from "antd";
import Products from "./components/Products";
import { usersData } from "./data/data";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div style={{ display: "grid", gap: "2rem", margin: "4rem" }}>
        <div style={{ width: "50%", margin: "auto" }}>
          <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>Search Product</h2>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search User"
          />
          ;
        </div>

        <div>
          <Products usersData={usersData} searchValue={searchValue} />
        </div>
      </div>
    </>
  );
}

export default App;
