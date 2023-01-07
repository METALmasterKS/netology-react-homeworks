import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UseEffect from "./UseEffect";
import Fetch from "./Fetch";

const Hooks = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/hooks/use-effect">Use Effect</Link>
        </li>
        <li>
          <Link to="/hooks/fetch">Fetch</Link>
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
