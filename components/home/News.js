import React from "react";
import Link from "next/link";

// Components

import Header from "../Header";
import Buttons from "../Buttons";
import NewsGridContainer from "../NewsGridContainer";

// CSS

import newsStyles from "../../styles/components/home/News.module.css";

const News = ({ news }) => {
  return (
    <div
      className={newsStyles.news_main}
      style={{
        height: "100%",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Header
        title={"News"}
        customButton={
          <Link href='news'>
            <a>
              <Buttons text='View All Articles' type='primary' />
            </a>
          </Link>
        }
      />
      <div className={newsStyles.news_inner}>
        {news.map((news, index) => {
          return <NewsGridContainer news={news} key={news} />;
        })}
      </div>
    </div>
  );
};

export default News;
