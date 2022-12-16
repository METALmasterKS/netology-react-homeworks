import React from "react";

const Clocks = ({id, name, time, delHandle}) => {
  return <div style={{display: "inline-block", margin: "10px"}}>
    <b>{name}</b>&nbsp;
    <sup onClick={(e) => delHandle(id, e)}>
      ❌
    </sup>
    <h4>{time}</h4>

  </div>;
}

export default Clocks;
