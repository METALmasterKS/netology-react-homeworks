import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./index.css";

import Drift from "./Drift";
import Home from "./Home";
import TimeAttack from "./TimeAttack";
import Forza from "./Forza";

const Menu = () => {
  return <div className="router">
    <div className="menu">
      <NavLink className="menu__item" to="">Главная</NavLink>
      <NavLink className="menu__item" to="/router/menu/drift">Дрифт-такси</NavLink>
      <NavLink className="menu__item" to="/router/menu/timeattack">Time Attack</NavLink>
      <NavLink className="menu__item" to="/router/menu/forza">Forza Karting</NavLink>
    </div>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="drift" element={<Drift/>}/>
      <Route path="timeattack" element={<TimeAttack/>}/>
      <Route path="forza" element={<Forza/>}/>
    </Routes>
  </div>
}
export default Menu;
