import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Players from "./components/Players";

function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <h1>Problem Solving with React JS</h1>
      {count ? <Players key="Pakistan" name="Pakistan" /> : <Players key="India" name="India" />}
      <div className="card">
        <button onClick={() => setCount((count) => !count)}>Change Player</button>
      </div>
    </>
  );
}

export default App;
