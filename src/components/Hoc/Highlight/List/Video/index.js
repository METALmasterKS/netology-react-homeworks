import React from "react";
import withHighlight from "../Highlight";

const Video = (props) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

export default withHighlight(Video);
