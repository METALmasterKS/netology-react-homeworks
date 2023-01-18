import React from "react"
import { NavLink, Route, Routes } from "react-router-dom";

import Menu from "./Menu";
import Crud from "./Crud";

const Router = () => {

  return <>
    <nav>
      <ul>
        <li>
          <NavLink to="/router/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/router/crud">CRUD</NavLink>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="menu/*" element={<Menu/>}/>
      <Route path="crud/*" element={<Crud/>}/>
    </Routes>
  </>
}

export default Router;
