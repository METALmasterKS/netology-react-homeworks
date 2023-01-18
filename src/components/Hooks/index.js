import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import UseEffect from "./UseEffect";
import Fetch from "./Fetch";

const Hooks = () => {
  return <>
    <nav>
      <ul>
        <li>
          <NavLink to="/hooks/use-effect">Use Effect</NavLink>
        </li>
        <li>
          <NavLink to="/hooks/fetch">Fetch</NavLink>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="use-effect" element={<UseEffect/>}/>
      <Route path="fetch" element={<Fetch/>}/>
    </Routes>
  </>
}

export default Hooks;
