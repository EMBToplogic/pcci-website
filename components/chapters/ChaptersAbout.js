import React from "react";

// Components

import Header from "../Header";

// CSS

import chaptersStyles from "../../styles/chapters/Chapters.module.css";

const ChaptersAbout = ({ args }) => {
  console.log(args);
  return (
    <div className={chaptersStyles.chapters_about}>
      <Header title={"About Us"} />
      <div className='subpage_paragraph'>
        <h2>{args.aboutTitle}</h2>
        <div className='subpage_paragraph_alt'>{args.aboutDesc}</div>
      </div>
    </div>
  );
};

export default ChaptersAbout;
