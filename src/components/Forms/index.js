import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Hex2rgb from "./Hex2rgb";
import Steps from "./Steps";


const Props = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/forms/hex2rgb">HEX2RGB</Link>
        </li>
        <li>
          <Link to="/forms/steps">Steps</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="hex2rgb" element={<Hex2rgb />}/>
      <Route path="steps" element={<Steps />}/>
    </Routes>
  </>
}

export default Props;
