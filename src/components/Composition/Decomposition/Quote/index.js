import React from "react";

/**
 * Компонент отображения котировки
 */
const Banner = ({quote}) => {
  return <div>
    <span>{quote.name}</span>
    <span>{quote.exchange}</span>
    <span>{quote.value}</span>
    <span>{quote.change}</span>
  </div>
}

export default Banner;
