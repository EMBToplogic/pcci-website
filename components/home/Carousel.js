import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Components

// CSS

import carouselStyles from "../../styles/components/home/Carousel.module.css";

// Icons

import { ArrowLeft, ArrowRight } from "react-feather";

// Images

import Image_1 from "../../public/images/test-images/img_hero.jpg";
import Image_2 from "../../public/images/test-images/img_hero_2.jpg";
import Image_3 from "../../public/images/test-images/img_hero_3.webp";
import Image_4 from "../../public/images/test-images/img_hero_4.webp";
import Image_5 from "../../public/images/test-images/img_hero_5.webp";

const carouselVariants = {
  fromLeft: {
    x: -20,
    opacity: 0,
  },
  fromRight: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  leftExit: {
    x: -20,
    opacity: 0,
  },
  rightExit: {
    x: 20,
    opacity: 0,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.2,
  },
};

const navVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.2,
  },
};

const activeIndicator = {
  initial: {
    width: "5px",
    opacity: 0.5,
    border: "none",
    backgroundColor: "transparent",
    border: "1px solid var(--white)",
  },
  animate: {
    width: "30px",
    borderRadius: "15px",
    backgroundColor: "var(--white)",
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};

const Carousel = () => {
  const [totalIndex, setTotalIndex] = useState(4);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [activeBanner, setActiveBanner] = useState(Image_1);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleBannerClick = (isNext) => {
    if (isNext) {
      if (bannerIndex === totalIndex) {
        setBannerIndex(0);
      } else {
        setBannerIndex(bannerIndex + 1);
      }
      setIsNextClicked(true);
    } else {
      if (bannerIndex === 0) {
        setBannerIndex(totalIndex);
      } else {
        setBannerIndex(bannerIndex - 1);
      }
      setIsNextClicked(false);
    }
  };

  useEffect(() => {
    switch (bannerIndex) {
      case 0: {
        setActiveBanner(Image_1);
        break;
      }
      case 1: {
        setActiveBanner(Image_2);
        break;
      }
      case 2: {
        setActiveBanner(Image_3);
        break;
      }
      case 3: {
        setActiveBanner(Image_4);
        break;
      }
      case 4: {
        setActiveBanner(Image_5);
        break;
      }
      default:
        return;
    }
  }, [bannerIndex]);

  return (
    <div className={carouselStyles.carousel_container}>
      <div className={carouselStyles.carousel_inner}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={carouselStyles.carousel_banner}
            key={bannerIndex}
            variants={carouselVariants}
            initial={isNextClicked ? "fromRight" : "fromLeft"}
            animate='animate'
            exit={isNextClicked ? "leftExit" : "rightExit"}
            transition='transition'
          >
            <Image src={activeBanner} layout='fill' objectFit='cover' />
          </motion.div>
        </AnimatePresence>
        <motion.div
          className={carouselStyles.carousel_nav_left}
          whileHover={navVariants.animate}
          variants={navVariants}
          initial='initial'
          onClick={() => handleBannerClick(false)}
        >
          <motion.div className={carouselStyles.carousel_left_ic_cont}>
            <ArrowLeft />
          </motion.div>
        </motion.div>
        <motion.div
          className={carouselStyles.carousel_nav_right}
          whileHover={navVariants.animate}
          variants={navVariants}
          initial='initial'
          onClick={() => handleBannerClick(true)}
        >
          <motion.div className={carouselStyles.carousel_left_ic_cont}>
            <ArrowRight />
          </motion.div>
        </motion.div>
      </div>
      <div className={carouselStyles.carousel_index}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={`${carouselStyles.carousel_indicator}`}
            variants={activeIndicator}
            initial='initial'
            animate={bannerIndex === 0 ? "animate" : "initial"}
            key={1}
          ></motion.div>
          <motion.div
            className={`${carouselStyles.carousel_indicator}`}
            variants={activeIndicator}
            initial='initial'
            animate={bannerIndex === 1 ? "animate" : "initial"}
            key={2}
          ></motion.div>
          <motion.div
            className={`${carouselStyles.carousel_indicator}`}
            variants={activeIndicator}
            initial='initial'
            animate={bannerIndex === 2 ? "animate" : "initial"}
            key={3}
          ></motion.div>
          <motion.div
            className={`${carouselStyles.carousel_indicator}`}
            variants={activeIndicator}
            initial='initial'
            animate={bannerIndex === 3 ? "animate" : "initial"}
            key={4}
          ></motion.div>
          <motion.div
            className={`${carouselStyles.carousel_indicator}`}
            variants={activeIndicator}
            initial='initial'
            animate={bannerIndex === 4 ? "animate" : "initial"}
            key={5}
          ></motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
