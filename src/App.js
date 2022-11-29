import React from "react";

import "./index.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Components from "./components/Components";
import EventsState from "./components/EventsState";
import Props from "./components/Props";
import Forms from "./components/Forms";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/events-state">EventsState</Link></li>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/forms">Forms</Link></li>
        </ul>
      </nav>
      <hr/>

      <Routes>
        <Route exact path="/"/>
        <Route path="/components/*" element={<Components/>}/>
        <Route path="/events-state/*" element={<EventsState/>}/>
        <Route path="/props/*" element={<Props/>}/>
        <Route path="/forms/*" element={<Forms/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
