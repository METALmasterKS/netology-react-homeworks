import React from "react";
import "./index.css"

const ShopItem = ({c}) => {
  return <item>
    <img alt={c.name} src={c.img}/><h3>{c.name}</h3><span>{c.color}</span><span>${c.price}</span><span>ADD TO CART</span>
  </item>;
}

export default ShopItem;
