import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Decomposition from "./Decomposition";
import Cards from "./Cards";


const Composition = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/composition/cards">Cards</Link>
        </li>
        <li>
          <Link to="/composition/de">Decomposition</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="cards" element={<Cards/>}/>
      <Route path="de" element={<Decomposition/>}/>
    </Routes>
  </>
}

export default Composition;
