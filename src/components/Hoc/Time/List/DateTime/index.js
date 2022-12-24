import React from "react";
import withAgoDate from "./withAgoDate";


const DateTime = (props) => {
  return (
    <p className="date">{props.date}</p>
  )
}

const DateTimeAgo = withAgoDate(DateTime);

export {DateTimeAgo};
export default DateTime;
