import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Crud from "./Crud";
import Watches from "./Watches";


const LifecycleHttp = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/lifecycle/watches">Watches</Link>
        </li>
        <li>
          <Link to="/lifecycle/crud">CRUD</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="crud" element={<Crud/>}/>
      <Route path="watches" element={<Watches/>}/>
    </Routes>
  </>
}

export default LifecycleHttp;
