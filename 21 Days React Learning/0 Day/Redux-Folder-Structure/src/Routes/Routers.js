import { Routes, Route} from "react-router-dom";
import React from 'react'
import { About, Home } from "../pages";

const Routers = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  )
}

export default Routers

