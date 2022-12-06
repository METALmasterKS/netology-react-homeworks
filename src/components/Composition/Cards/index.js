import React from "react";

import Card from "./Card";

const Cards = () => {
  return <div className="conntainer m-5">
    <div className="row">
      <div className="col">
        <Card
          img={"https://randomwordgenerator.com/img/picture-generator/57e6d4424c53a814f1dc8460962e33791c3ad6e04e507440762a7cd5934ec3_640.jpg"}
          title={"Card title"}
          descr={"Some quick example text to build on the card title and make up the bulk of the card's content."}>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
      </div>
      <div className="col ml-auto">
        <Card
          title={"Card title"}
          descr={"Some quick example text to build on the card title and make up the bulk of the card's content."}>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
      </div>
    </div>
  </div>
}

export default Cards;
