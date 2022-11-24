import React from "react";

import "./index.css"

const ShopCard = ({i}) => {
  return (
    <card>
      <h3>{i.name}</h3>
      <center>{i.color}</center>
      <img alt={i.name} src={i.img}/>
      <div>
        <span className="price">${i.price}</span><span className="tocart">ADD TO CART</span>
      </div>
    </card>
  );
}

export default ShopCard;
