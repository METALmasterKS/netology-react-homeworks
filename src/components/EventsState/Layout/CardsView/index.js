import React from "react";


import ShopCard from "../ListView/ShopItem";

const CardsView = ({cards}) => {
  return <>
      {cards.map((card, i) => {
        return <ShopCard key={i} c={card}/>
      })}
    </>;
}

export default CardsView;
