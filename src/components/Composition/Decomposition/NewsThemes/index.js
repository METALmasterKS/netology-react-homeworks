import React from "react";

/**
 * Блок новостей
 */
const News = ({news}) => {
  return news.map((a, key) => <div key={key}>
    <img src={a.icon} alt="icon"/><span>{a.title}</span>
  </div>)
}

export default News;
