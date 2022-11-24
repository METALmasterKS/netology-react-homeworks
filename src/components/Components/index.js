import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import ShopItemFunc from "./ShopItemFunc";
import ShopItemClass from "./ShopItemClass";
import Calendar from "./Calendar";
import Layout from "./Layout";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const now = new Date(2017, 2, 8);

const Components = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/components/func">Functional component</Link>
        </li>
        <li>
          <Link to="/components/class">Class component</Link>
        </li>
        <li>
          <Link to="/components/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="func" element={<Layout><ShopItemFunc item={item}/></Layout>}/>
      <Route path="class" element={<Layout><ShopItemClass item={item}/></Layout>}/>
      <Route path="calendar" element={<Calendar date={now}/>}/>
    </Routes>
  </>
}

export default Components;
