import BackendSearch from "./components/BackendSearch";
import SearchOffices from "./components/SearchOffices";

const App = () => {
  return (
    <div style={{ display: "flex", padding: "2rem", justifyContent: "space-between" }}>
      <SearchOffices />

      <BackendSearch />
    </div>
  );
};

export default App;
