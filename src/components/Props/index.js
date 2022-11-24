import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Stars from "./Stars";
import ListingItems from "./ListingItems";

const Props = () => {
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/props/stars">Stars</Link>
        </li>
        <li>
          <Link to="/props/listing">Listing</Link>
        </li>
      </ul>
    </nav>
    <hr/>

    <Routes>
      <Route path="stars" element={<Stars count={3}/>}/>
      <Route path="listing" element={<ListingItems/>}/>
    </Routes>
  </>
}

export default Props;
