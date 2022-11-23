import React from "react";
import ShopItem from "../CardsView/ShopCard";

const ListView = ({items}) => {
  return (
    <div>
      {items.map((item, i) => {
        return <ShopItem key={i} i={item}/>
      })}
    </div>
  );
}

export default ListView;
