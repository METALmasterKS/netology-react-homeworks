import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Time from "./Time";
import Highlight from "./Highlight";


const Hoc = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/hoc/time">Time</Link>
        </li>
        <li>
          <Link to="/hoc/highlight">Highlight</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="time" element={<Time />}/>
      <Route path="highlight" element={<Highlight />}/>
    </Routes>
  </>
}

export default Hoc;
