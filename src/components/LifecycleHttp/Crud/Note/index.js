import React from "react";

const Note = ({id, content, delHandle}) => {
  return <div style={{display: "inline-block", margin: "10px", position:"relative"}}>
    <div>{content}</div>
    <span style={{position:"absolute", right:"-5px", top:"-5px"}} onClick={(e) => delHandle(id, e)}>
      ❌
    </span>
  </div>;
}

export default Note;
