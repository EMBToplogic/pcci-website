import React from "react";
import { PrismaClient } from "@prisma/client";

// Components

import Meta from "../../../components/Meta";
import ChaptersNav from "../../../components/chapters/ChaptersNav";
import ChaptersHero from "../../../components/chapters/ChaptersHero";
import ChaptersAbout from "../../../components/chapters/ChaptersAbout";

// CSS

import chaptersStyles from "../../../styles/chapters/Chapters.module.css";

const prisma = new PrismaClient();

const Chapters = ({ localChamberData }) => {
  console.log(localChamberData);
  return (
    <>
      <Meta
        title={`${localChamberData.title} | Philippine Chamber of Commerce and Industry`}
      />
      <ChaptersNav />
      <div className={chaptersStyles.chapters_main_container}>
        <ChaptersHero title={localChamberData.title} />
        <ChaptersAbout args={localChamberData} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const localChamberData = await prisma.LocalChambers.findMany({
    where: {
      parentChapter: id,
    },
  });

  return {
    props: {
      localChamberData: localChamberData[0],
    },
  };
}

export default Chapters;
