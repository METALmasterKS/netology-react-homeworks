import React from "react";
import withHighlight from "../Highlight";

const Article = (props) => {
  return (
    <div className="item item-article">
      <h3><a href="src/components/Hoc/Time/List/Article/index#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

export default withHighlight(Article);
