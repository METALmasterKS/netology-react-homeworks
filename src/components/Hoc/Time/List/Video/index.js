import React from "react";
import { DateTimeAgo } from "../DateTime";

const Video = (props) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimeAgo date={props.date}/>
    </div>
  )
}

export default Video;
