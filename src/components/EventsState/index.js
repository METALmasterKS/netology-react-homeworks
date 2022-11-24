import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./Portfolio";

const EventsState = () => {
  return <>
    <nav>
    <ul>
      <li>
        <Link to="/events-state/portfolio-filter">Portfolio with filter</Link>
      </li>
      <li>
        <Link to="/events-state/layouts">Layouts</Link>
      </li>
    </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="portfolio-filter" element={<Portfolio />}/>
      <Route path="layouts" element={<Layout />}/>
    </Routes>

  </>;
}

export default EventsState;
