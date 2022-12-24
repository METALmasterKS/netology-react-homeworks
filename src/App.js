import React from "react";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Components from "./components/Components";
import EventsState from "./components/EventsState";
import Props from "./components/Props";
import Forms from "./components/Forms";
import Composition from "./components/Composition";
import LifecycleHttp from "./components/LifecycleHttp";
import Hoc from "./components/Hoc";

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
          <li><Link to="/composition">Composition</Link></li>
          <li><Link to="/lifecycle">Lifecycle</Link></li>
          <li><Link to="/hoc">Hoc</Link></li>
        </ul>
      </nav>
      <hr/>

      <Routes>
        <Route exact path="/"/>
        <Route path="/components/*" element={<Components/>}/>
        <Route path="/events-state/*" element={<EventsState/>}/>
        <Route path="/props/*" element={<Props/>}/>
        <Route path="/forms/*" element={<Forms/>}/>
        <Route path="/composition/*" element={<Composition/>}/>
        <Route path="/lifecycle/*" element={<LifecycleHttp/>}/>
        <Route path="/hoc/*" element={<Hoc/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
