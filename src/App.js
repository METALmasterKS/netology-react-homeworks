import React from "react";

import "./index.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Components from "./components/Components";
import EventsState from "./components/EventsState";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/events-state">EventsState</Link></li>
        </ul>

        <hr/>

        <Routes>
          <Route exact path="/"/>
          <Route path="/components/*" element={<Components/>}/>
          <Route path="/events-state/*" element={<EventsState/>}/>
        </Routes>
      </nav>
    </BrowserRouter>
  );
}

export default App;
