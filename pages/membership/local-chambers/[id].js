import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

// Components

import Navbar from "../../../components/Navbar";
import Menu from "../../../components/Menu";
import Header from "../../../components/Header";
import BackButton from "../../../components/BackButton";
import Meta from "../../../components/Meta";
import Maps from "../../../components/Maps";

// CSS

import localChambersStyles from "../../../styles/membership/LocalChambers.module.css";

// Images

import Location from "../../../public/icons/ic_address_sm.png";

const prisma = new PrismaClient();

const AreaPresidentContainer = ({ areaPresident }) => {
  return (
    <div className={localChambersStyles.area_president_container}>
      <h2 className={localChambersStyles.president_title}>{areaPresident}</h2>
      <div>Area Vice President</div>
    </div>
  );
};

const ChambersContainer = ({ data, setActiveLocation }) => {
  return (
    <div className={localChambersStyles.chambers_container}>
      <div className={localChambersStyles.chambers_title_container}>
        <h4 className={localChambersStyles.chambers_title}>
          <span className={localChambersStyles.title_icon_container}>
            <Image src={Location} alt='Location Icon' />
          </span>
          {data.title}
        </h4>
        <div className={localChambersStyles.chambers_governor}>
          {data.governor}
        </div>
        <div className={localChambersStyles.chambers_governor_sub}>
          Regional Governor
        </div>
      </div>
      <div className={localChambersStyles.chapters_container}>
        {data.chapters.map((chapter) => {
          console.log(chapter);
          return (
            <div
              className={localChambersStyles.chapter_links}
              key={chapter.id}
              onMouseEnter={() => {
                setActiveLocation(chapter.chapterName);
              }}
            >
              <Link href={`/chapters/${chapter.chapterUrl}`} replace>
                <a>{chapter.chapterName}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Chambers = ({ initialChambers, regions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState(
    "Philippine Chamber of Commerce and Industry"
  );

  return (
    <>
      <Meta title={regions.title} />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container' style={{ overflow: "hidden" }}>
          <Header
            title={regions.title}
            customButton={
              <AreaPresidentContainer areaPresident={regions.areaPresident} />
            }
          />
          <div className={localChambersStyles.chambers_main}>
            {initialChambers.map((data) => {
              return (
                <ChambersContainer
                  data={data}
                  key={data.id}
                  setActiveLocation={setActiveLocation}
                />
              );
            })}
          </div>
        </div>
        <div
          className='subpage_inner_container'
          style={{ padding: "3%", marginLeft: "10px", width: "50%" }}
        >
          <Maps activeLocation={activeLocation} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const regions = await prisma.region.findUnique({
    where: {
      regionName: id,
    },
  });
  const chamber = await prisma.chambers.findMany({
    where: {
      parentRegion: regions.regionName,
    },
    include: {
      chapters: true,
    },
  });

  return {
    props: {
      initialChambers: chamber,
      regions: regions,
    },
  };
}

export default Chambers;
