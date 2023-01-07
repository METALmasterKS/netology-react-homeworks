import React from "react";

const List = ({list, handleClick}) => {

  return <div style={{float:"left", width:"300px"}}>
    {list instanceof Array ? list.map((n, i) => {
      return <div
        key={n.id}
        id={n.id}
        content={n.content}
        onClick={(evt) => handleClick(n.id, evt)}
      >{n.name}</div>
    }):""}
  </div>
}

export default List;
