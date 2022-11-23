import React from "react";
import "./index.css"

const Toolbar = ({filters, selected, onSelectFilter}) => {



  return (
    <toolbar style={{margin: "10px"}}>
      {filters.map((f) => {
        return <span className={(selected === f) && "selected"} key={f} onClick={onSelectFilter}>
          {f}
        </span>
      })}
    </toolbar>
  );
}

export default Toolbar;
