import React from "react";
import { PrismaClient } from "@prisma/client";

// Components

import Meta from "../../../components/Meta";
import ChaptersNav from "../../../components/chapters/ChaptersNav";
import ChaptersHero from "../../../components/chapters/ChaptersHero";
import ChaptersAbout from "../../../components/chapters/ChaptersAbout";
import ChaptersServices from "../../../components/chapters/ChaptersServices";
import BackButton from "../../../components/BackButton";

// CSS

import chaptersStyles from "../../../styles/chapters/Chapters.module.css";

const prisma = new PrismaClient();

const Chapters = ({ localChamberData }) => {
  return (
    <>
      <Meta
        title={`${localChamberData.title} | Philippine Chamber of Commerce and Industry`}
      />
      <BackButton isUseHistory={true} />
      <ChaptersNav />
      <div className={chaptersStyles.chapters_main_container}>
        <ChaptersHero title={localChamberData.title} />
        <ChaptersAbout args={localChamberData} />
        <ChaptersServices args={[localChamberData]} />
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
  const services = await prisma.Services.findMany({
    where: {
      parentLCId: localChamberData[0].id,
    },
  });

  localChamberData[0].services = JSON.parse(JSON.stringify(services));

  return {
    props: {
      localChamberData: localChamberData[0],
    },
  };
}

export default Chapters;
