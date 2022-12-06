import React from "react";

/**
 * Компонент помогающий реализовать блоки типа Погода, Посещаемое и т.п.
 */
const BottomCard = ({title, icon, children}) => {
  return <div>
    <h3>{title}</h3>
    {icon}
    <div>
      {children}
    </div>
  </div>
}

export default BottomCard;
