import React from "react";
import Item from "./Item";

const Listing = ({items}) => {
  return <div className="item-list">
    {items.map((item) => {
      return <div className="item" key={item.listing_id}><Item item={item}/></div>
    })}
  </div>
}

export default Listing
