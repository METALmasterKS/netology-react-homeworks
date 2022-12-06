import React from "react";

/**
 * Компонент правого верхнего виджета
 */
const Widget = ({img, title, descr}) => {
  return <>
    <img src={img} alt="widget"/>
    <h4>{title}</h4>
    <p>{descr}</p>
  </>
}

export default Widget;
