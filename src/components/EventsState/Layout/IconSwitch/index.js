import React from "react";

const IconSwitch = ({icon, onSwitch}) => {
  return <div style={{textAlign:"right", margin:"0 5%"}}><span style={{cursor:"pointer"}} className="material-icons" onClick={onSwitch}>{icon}</span></div>
}

export default IconSwitch
