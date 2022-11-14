import React from "react";
import "./main.css"

const Index = ( {children}) => {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {children}
      </div>
    </div>
  )
}

export default Index;
