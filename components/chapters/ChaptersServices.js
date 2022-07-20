import React from "react";

// Components

import Header from "../Header";

// CSS

import chaptersStyles from "../../styles/chapters/Chapters.module.css";

const ChaptersServices = ({ args }) => {
  return (
    <div className={chaptersStyles.chapters_services}>
      <Header
        title={"Services"}
        style={{
          color: "var(--white)",
        }}
        customButton={
          <span style={{ color: "var(--white)" }}>{args[0].servicesTitle}</span>
        }
      />
      <div
        className='subpage_paragraph'
        style={{
          color: "var(--white)",
        }}
      >
        {args.servicesDesc}
        <div className={chaptersStyles.chapter_services_tbl}>
          {args[0].services.map((service) => {
            return (
              <React.Fragment key={service.id}>
                <div className={chaptersStyles.chapter_services_container}>
                  <div className={chaptersStyles.chapter_services_title}>
                    {service.title}
                  </div>
                  <div>{service.description}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChaptersServices;
