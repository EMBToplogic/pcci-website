import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PrismaClient } from "@prisma/client";

// Components

import Navbar from "../../../components/Navbar";
import Menu from "../../../components/Menu";
import Header from "../../../components/Header";
import BackButton from "../../../components/BackButton";
import Meta from "../../../components/Meta";

// CSS

import membershipStyles from "../../../styles/membership/Membership.module.css";

// Images

import NLuzon from "../../../public/images/maps/north-luzon.png";
import SLuzon from "../../../public/images/maps/south-luzon.png";
import Visayas from "../../../public/images/maps/visayas.png";
import NCR from "../../../public/images/maps/ncr.png";
import Mindanao from "../../../public/images/maps/mindanao.png";

const prisma = new PrismaClient();

const LocalChambers = ({ initialRegions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(NLuzon);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (region) => {
    setIsHovered(true);
    switch (region) {
      case "north-luzon":
        setActiveImage(NLuzon);
        break;
      case "south-luzon":
        setActiveImage(SLuzon);
        break;
      case "visayas":
        setActiveImage(Visayas);
        break;
      case "ncr":
        setActiveImage(NCR);
        break;
      default:
        setActiveImage(Mindanao);
    }
  };

  const mapVariants = {
    initial: {
      opacity: 0.5,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0.5,
      scale: 0.8,
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  };
  return (
    <>
      <Meta title='Local Chambers' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header title='Local Chambers' />
          <div className='subpage_paragraph_container'>
            <h2>PCCI Cares: A series of local chamber best practices</h2>
            <div className='subpage_paragraph'>
              The COVID 19 pandemic has affected the operations of many business
              service organizations like chambers of commerce and industry.
              However, the situation has also brought the bayanihan spirit of
              the chambers, mobilizing resources to help their respective
              communities and serving as the voice of business.
            </div>
            <div className='subpage_paragraph'>
              In recognition of the efforts of our local chamber network, the
              Philippine Chamber of Commerce and Industry is coming out with a
              series showcasing the bayanihan spirit of the business community
              and the advocacies initiated by the chambers in their community.
            </div>
            <h2>Local Chambers</h2>
            <div className='subpage_paragraph'>
              PCCI’s strength is founded on its huge network of 123 local
              chambers nationwide. These local chambers provide support in terms
              of advocacy for policy reforms, business services and networking
              to help build PCCI’s competitive advantage. More importantly,
              local chambers provide feed-back- up to the national chamber in
              terms of the real situation on the ground and the needs of
              business people in the various areas which are critical in PCCI’s
              efforts to forward the interest of the business community
              nationwide.
            </div>
            <div className='subpage_paragraph'>
              PCCI local chamber network is led by five (5) Area Vice President
              and seventeen (19) regional governors.
            </div>
            <div className={membershipStyles.local_chambers_table_container}>
              <div className={membershipStyles.local_chambers_table}>
                {initialRegions.map((region, index) => {
                  return (
                    <Link
                      href={`/membership/local-chambers/[id]`}
                      as={`/membership/local-chambers/${region.regionName}`}
                      replace
                      key={region.id}
                    >
                      <a>
                        <div
                          className={membershipStyles.local_chambers_btn}
                          onMouseEnter={() => {
                            handleHover(`${region.regionName}`);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        >
                          {region.title}
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
              <div className={membershipStyles.local_chambers_map}>
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    className={membershipStyles.map_container}
                    variants={mapVariants}
                    initial='initial'
                    animate={isHovered ? "animate" : "initial"}
                    exit='exit'
                    transition='transition'
                    key={activeImage}
                  >
                    <Image
                      src={activeImage}
                      objectFit='cover'
                      alt={activeImage}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const regions = await prisma.region.findMany();

  console.log(regions);
  return {
    props: {
      initialRegions: regions,
    },
  };
}

export default LocalChambers;
