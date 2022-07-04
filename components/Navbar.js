import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Components

import Buttons from "./Buttons";

// CSS

import navStyles from "../styles/components/Navbar.module.css";

// Images

import PCCI_Logo from "../public/images/img_pcci_logo.png";

const MenuBtn = ({ isMenuOpen }) => {
  const strokeOneVariants = {
    initial: {
      y: 0,
      rotate: 0,
      border: "1px solid var(--white)",
    },
    animate: {
      y: 8,
      rotate: 45,
      border: "1px solid var(--primary)",
    },
  };

  const strokeTwoVariants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: -25,
      opacity: 0,
      pointerEvents: "none",
    },
  };

  const strokeThreeVariants = {
    initial: {
      y: 0,
      rotate: 0,
      border: "1px solid var(--white)",
    },
    animate: {
      y: -4,
      rotate: -45,
      border: "1px solid var(--primary)",
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div className={navStyles.navbar_menu_icon_main}>
          <motion.span
            variants={strokeOneVariants}
            initial='initial'
            animate={isMenuOpen ? "animate" : "initial"}
            transition='transition'
          ></motion.span>
          <motion.span
            variants={strokeTwoVariants}
            initial='initial'
            animate={isMenuOpen ? "animate" : "initial"}
            transition='transition'
          ></motion.span>
          <motion.span
            variants={strokeThreeVariants}
            initial='initial'
            animate={isMenuOpen ? "animate" : "initial"}
            transition='transition'
          ></motion.span>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const Navbar = ({ props, isLogin, isSignUp }) => {
  return (
    <div className={navStyles.navbar_container}>
      <div className={navStyles.navbar_img_container}>
        <Link href='/'>
          <a>
            <Image
              src={PCCI_Logo}
              layout='fill'
              objectFit='contain'
              alt='Philippine Chamber of Commerce and Industry Logo'
            />
          </a>
        </Link>
      </div>
      {!isLogin && (
        <ul className={navStyles.navbar_list}>
          <li className={navStyles.navbar_list_item}>
            <Link href='about-us'>
              <a>About Us</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='careers'>
              <a>Careers</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='membership'>
              <a>Membership</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='local-chambers'>
              <a>Local Chambers</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='advocacy'>
              <a>Advocacy</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='international-affairs'>
              <a>International Affairs</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='programs'>
              <a>Programs</a>
            </Link>
          </li>
        </ul>
      )}
      <div className={navStyles.navbar_btn_container}>
        <Link href='login'>
          <a>
            <Buttons
              text='Login'
              type={!isLogin ? "secondary" : "primary"}
              customStyles={{ margin: "0px 5px" }}
            />
          </a>
        </Link>
        <Buttons
          text={
            <Link href='sign-up'>
              <a>Sign-up</a>
            </Link>
          }
          type={!isSignUp ? "secondary" : "primary"}
          customStyles={{ margin: "0px 5px" }}
        />
        <motion.div
          className={navStyles.navbar_menu_icon_cont}
          onClick={() => {
            props.setIsMenuOpen(!props.isMenuOpen);
          }}
        >
          <MenuBtn isMenuOpen={props.isMenuOpen} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
