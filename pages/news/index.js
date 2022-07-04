import { API_ROUTE } from "../../config";
import React, { useState } from "react";
import Image from "next/image";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import NewsGridContainer from "../../components/NewsGridContainer";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

// CSS

import newsPageStyles from "../../styles/news/NewsPage.module.css";

// Images

import TheVoiceLogo from "../../public/images/the_voice.png";

const NewsPage = ({ news }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='News' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header
            title={
              <Image
                src={TheVoiceLogo}
                objectFit='contain'
                width='400'
                height='101'
                alt='The Voice Logo'
              />
            }
            style={{
              fontSize: "2em",
            }}
            customButton={
              "The Official Newsletter of The Philippine Chamber of Commerce and Industry"
            }
          />
          <div className={newsPageStyles.news_page_container}>
            {news.data.map((news, index) => {
              return (
                <NewsGridContainer news={news} key={news.announcementcode} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const news = await res.json();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news },
  };
};

export default NewsPage;
