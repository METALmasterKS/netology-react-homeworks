import React from "react";

const Card = ({img, title, descr, children}) => {
  return <div className="card" style={{width: "18rem"}}>
    {img && <img src={img} className="card-img-top" alt=""/>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descr}</p>
        {children}
      </div>
  </div>;
}

export default Card;
