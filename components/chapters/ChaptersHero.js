import React from "react";

// CSS

import chaptersStyles from "../../styles/chapters/Chapters.module.css";

const ChaptersHero = ({ title }) => {
  console.log(title);
  return <div className={chaptersStyles.chapters_hero}>{title}</div>;
};

export default ChaptersHero;
