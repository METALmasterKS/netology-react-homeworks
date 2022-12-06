import React from "react";

/**
 * Тематика новостей
 */
const NewsThemes = ({themes}) => {
  return themes.map((theme) => <span>{theme}</span>)
}

export default NewsThemes;
