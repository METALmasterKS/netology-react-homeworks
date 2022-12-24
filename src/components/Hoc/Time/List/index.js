import React  from "react";

import Video from "./Video";


const List = (props) => {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
};

export default List;

