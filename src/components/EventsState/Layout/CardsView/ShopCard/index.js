import React from "react";

import "./index.css"

const ShopCard = ({i}) => {
  return (
    <card>
      <h3>{i.name}</h3>
      <center>{i.color}</center>
      <img alt={i.name} src={i.img}/>
      <div>
        <price>${i.price}</price><tocart>ADD TO CART</tocart>
      </div>
    </card>
  );
}

export default ShopCard;
