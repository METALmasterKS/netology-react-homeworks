import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ShopItemFunc from "./components/ShopItemFunc";
import ShopItemClass from "./components/ShopItemClass";
import Calendar from "./components/Calendar";
import Layout from "./components/Layout";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// const now = new Date(2017, 2, 8);
const now = new Date();

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/func">Functional component</Link>
          </li>
          <li>
            <Link to="/class">Class component</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>

        <hr/>

        <Routes>
          <Route exact path="/"/>
          <Route path="/func" element={<Layout><ShopItemFunc item={item}/></Layout>}/>
          <Route path="/class" element={<Layout><ShopItemClass item={item}/></Layout>}/>
          <Route path="/calendar" element={<Calendar date={now}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
