import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Components

import Buttons from "./Buttons";
import { MenuItems } from "./MenuItems";

// CSS

import navStyles from "../styles/components/Navbar.module.css";

// Images

import PCCI_Logo from "../public/images/img_pcci_logo.png";

// Icons

import { ChevronDown, ChevronLeft } from "react-feather";

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

const Dropdown = ({ dropdownFilter, setHoveredNav }) => {
  const filteredMenu = MenuItems.filter((filteredItem) => {
    if (filteredItem.parent === dropdownFilter) {
      return filteredItem;
    }
  });

  const dropdownVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: 10,
      opacity: 0,
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
      delay: 0.6,
    },
  };

  return (
    <>
      <motion.ul
        className={navStyles.dropdown_menu}
        variants={dropdownVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        onMouseEnter={() => setHoveredNav(dropdownFilter)}
      >
        {filteredMenu.map((menuItem, index) => {
          return (
            <React.Fragment key={menuItem.path}>
              <Link href={menuItem.path} replace>
                <motion.div
                  className={navStyles.dropdown_item}
                  whileHover={{
                    backgroundColor: "var(--secondary)",
                    scale: 1.1,
                    x: 0,
                    borderRadius: 10,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 0.3,
                    },
                  }}
                >
                  <a>{menuItem.title}</a>
                </motion.div>
              </Link>
            </React.Fragment>
          );
        })}
      </motion.ul>
    </>
  );
};

const Navbar = ({ props, isSignUp }) => {
  const [hoveredNav, setHoveredNav] = useState("");
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const caretVariant = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 180,
      color: "var(--primary)",
    },
  };

  return (
    <div className={navStyles.navbar_container}>
      <div className={navStyles.navbar_img_container}>
        <Link href='/' replace>
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
      <AnimatePresence>
        <motion.ul
          className={navStyles.navbar_list}
          initial={{
            opacity: 0,
            x: -50,
            pointerEvents: "auto",
          }}
          animate={{
            opacity: !isNavbarExpanded ? 1 : 0,
            x: !isNavbarExpanded ? 0 : -50,
            pointerEvents: isNavbarExpanded ? "none" : "auto",
          }}
          exit={{
            opacity: 0,
            x: -50,
            pointerEvents: "auto",
          }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.6,
          }}
          key={navStyles.navbar_list}
        >
          <li className={navStyles.navbar_list_item}>
            <Link href='../../../' replace>
              <a className={navStyles.dropdown_link}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li
            className={navStyles.navbar_list_item}
            onMouseEnter={() => {
              setHoveredNav("about");
            }}
            onMouseLeave={() => {
              setHoveredNav("");
            }}
          >
            <Link href='../../about-us' replace={true}>
              <a className={navStyles.dropdown_link}>
                <span>About Us</span>
                <motion.div
                  className={navStyles.dropdown_caret_cont}
                  variants={caretVariant}
                  initial='initial'
                  animate={hoveredNav === "about" ? "animate" : "initial"}
                >
                  <ChevronDown />
                </motion.div>
              </a>
            </Link>
            <AnimatePresence>
              {hoveredNav === "about" && (
                <Dropdown
                  dropdownFilter={"about"}
                  setHoveredNav={setHoveredNav}
                />
              )}
            </AnimatePresence>
          </li>
          <li
            className={navStyles.navbar_list_item}
            onMouseEnter={() => {
              setHoveredNav("advocacy");
            }}
            onMouseLeave={() => {
              setHoveredNav("");
            }}
          >
            <Link href='../../advocacy' replace>
              <a className={navStyles.dropdown_link}>
                <span>Advocacy</span>
                <motion.div
                  className={navStyles.dropdown_caret_cont}
                  variants={caretVariant}
                  initial='initial'
                  animate={hoveredNav === "advocacy" ? "animate" : "initial"}
                >
                  <ChevronDown />
                </motion.div>
              </a>
            </Link>
            <AnimatePresence>
              {hoveredNav === "advocacy" && (
                <Dropdown
                  dropdownFilter={"advocacy"}
                  setHoveredNav={setHoveredNav}
                />
              )}
            </AnimatePresence>
          </li>

          <li
            className={navStyles.navbar_list_item}
            onMouseEnter={() => {
              setHoveredNav("international-affairs");
            }}
            onMouseLeave={() => {
              setHoveredNav("");
            }}
          >
            <Link href='../../international-affairs' replace>
              <a className={navStyles.dropdown_link}>
                <span>International Affairs</span>
                <motion.div
                  className={navStyles.dropdown_caret_cont}
                  variants={caretVariant}
                  initial='initial'
                  animate={
                    hoveredNav === "international-affairs"
                      ? "animate"
                      : "initial"
                  }
                >
                  <ChevronDown />
                </motion.div>
              </a>
            </Link>
            <AnimatePresence>
              {hoveredNav === "international-affairs" && (
                <Dropdown
                  dropdownFilter={"international-affairs"}
                  setHoveredNav={setHoveredNav}
                />
              )}
            </AnimatePresence>
          </li>
          <li
            className={navStyles.navbar_list_item}
            onMouseEnter={() => {
              setHoveredNav("membership");
            }}
            onMouseLeave={() => {
              setHoveredNav("");
            }}
          >
            <Link href='../../membership' replace>
              <a className={navStyles.dropdown_link}>
                <span>Membership</span>
                <motion.div
                  className={navStyles.dropdown_caret_cont}
                  variants={caretVariant}
                  initial='initial'
                  animate={hoveredNav === "membership" ? "animate" : "initial"}
                >
                  <ChevronDown />
                </motion.div>
              </a>
            </Link>
            <AnimatePresence>
              {hoveredNav === "membership" && (
                <Dropdown
                  dropdownFilter={"membership"}
                  setHoveredNav={setHoveredNav}
                />
              )}
            </AnimatePresence>
          </li>
          <li
            className={navStyles.navbar_list_item}
            onMouseEnter={() => {
              setHoveredNav("programs-and-services");
            }}
            onMouseLeave={() => {
              setHoveredNav("");
            }}
          >
            <Link href='../../programs-and-services' replace>
              <a className={navStyles.dropdown_link}>
                <span>Programs & Services</span>
                <motion.div
                  className={navStyles.dropdown_caret_cont}
                  variants={caretVariant}
                  initial='initial'
                  animate={
                    hoveredNav === "programs-and-services"
                      ? "animate"
                      : "initial"
                  }
                >
                  <ChevronDown />
                </motion.div>
              </a>
            </Link>
            <AnimatePresence>
              {hoveredNav === "programs-and-services" && (
                <Dropdown
                  dropdownFilter={"programs-and-services"}
                  setHoveredNav={setHoveredNav}
                />
              )}
            </AnimatePresence>
          </li>
        </motion.ul>
        <motion.div
          className={navStyles.navbar_expand_container}
          onClick={() => {
            setIsNavbarExpanded(!isNavbarExpanded);
          }}
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: isNavbarExpanded ? 180 : 0,
            color: isNavbarExpanded ? "var(--primary) !important" : "#fff",
          }}
          key={navStyles.navbar_expand_container}
        >
          <ChevronLeft />
        </motion.div>
        <motion.div
          className={navStyles.navbar_btn_container}
          initial={{
            opacity: 0,
            width: 0,
            x: 100,
            pointerEvents: "none",
          }}
          animate={{
            opacity: isNavbarExpanded ? 1 : 0,
            width: isNavbarExpanded ? "auto" : 0,
            x: isNavbarExpanded ? 1 : 0,
            pointerEvents: isNavbarExpanded ? "auto" : "none",
          }}
          exit={{
            opacity: 0,
            width: 0,
            x: 100,
            pointerEvents: "none",
          }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.6,
          }}
        >
          <Link href='../../login' replace>
            <a>
              <Buttons
                text='Login'
                type='secondary'
                customStyles={{ margin: "0px 5px" }}
              />
            </a>
          </Link>
          <Link href='../../sign-up' replace>
            <a>
              <Buttons
                text='Sign-up'
                type='secondary'
                customStyles={{ margin: "0px 5px" }}
              />
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className={navStyles.navbar_menu_icon_cont}
        onClick={() => {
          props.setIsMenuOpen(!props.isMenuOpen);
        }}
      >
        <MenuBtn isMenuOpen={props.isMenuOpen} />
      </motion.div>
    </div>
  );
};

export default Navbar;
