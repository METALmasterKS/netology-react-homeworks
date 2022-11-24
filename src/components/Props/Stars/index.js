import React from "react";
import "./index.css"
import Star from "./Star";


const Stars = ({count}) => {
  if (count > 5 || count < 1) {
    return
  }

  let list = new Array(count).fill("")

  return (
    <ul className="card-body-stars u-clearfix">
      {list.map((_, i) => {
        return <li key={i}><Star/></li>
      })}
    </ul>
  )
}


export default Stars;
