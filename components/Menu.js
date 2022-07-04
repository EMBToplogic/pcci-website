import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// CSS

import menuStyles from "../styles/components/Menu.module.css";

const Menu = ({ props }) => {
  const menuVariants = {
    initial: {
      opacity: 0,
      bottom: "100%",
    },
    animate: {
      opacity: 1,
      bottom: "0%",
    },
    exit: {
      opacity: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
        delay: 0.6,
      },
      bottom: "-100%",
    },
  };

  const menuInnerVariants = {
    initial: {
      opacity: 0,
      y: -90,
    },
    animate: {
      opacity: 1,
      y: -0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -500,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
        delay: 0,
      },
    },
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {props.isMenuOpen && (
          <>
            <motion.div
              className={menuStyles.menu_container}
              onClick={() => {
                props.setIsMenuOpen(!props.isMenuOpen);
              }}
              variants={menuVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition='transition'
            ></motion.div>
            <motion.div
              className={menuStyles.menu_inner}
              variants={menuInnerVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>About</h1>
                </li>
                <li className={menuStyles.menu_list_item}>History</li>
                <li className={menuStyles.menu_list_item}>
                  What can PCCI do for you
                </li>
                <li className={menuStyles.menu_list_item}>
                  Board of Directors
                </li>
                <li className={menuStyles.menu_list_item}>Secretariat</li>
                <li className={menuStyles.menu_list_item}>Contact Us</li>
              </motion.ul>
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>Advocacy</h1>
                </li>
                <li className={menuStyles.menu_list_item}>
                  Agriculture and Fishery
                </li>
                <li className={menuStyles.menu_list_item}>
                  Banking and Capital Formation
                </li>
                <li className={menuStyles.menu_list_item}>
                  Corporate Governance
                </li>
                <li className={menuStyles.menu_list_item}>Energy and Power</li>
                <li className={menuStyles.menu_list_item}>
                  Industry and Trade
                </li>
                <li className={menuStyles.menu_list_item}>Infrastructure</li>
                <li className={menuStyles.menu_list_item}>
                  Innovation and Science and Technology
                </li>
                <li className={menuStyles.menu_list_item}>
                  Intellectual Property
                </li>
                <li className={menuStyles.menu_list_item}>
                  Legislation and Taxation
                </li>
                <li className={menuStyles.menu_list_item}>
                  Mining and Mineral Resources
                </li>
                <li className={menuStyles.menu_list_item}>
                  Sustainable Development Goals
                </li>
                <li className={menuStyles.menu_list_item}>
                  Transport Logistics
                </li>
                <li className={menuStyles.menu_list_item}>
                  Urban Housing Development
                </li>
                <li className={menuStyles.menu_list_item}>Youth</li>
                <li className={menuStyles.menu_list_item}>
                  PCCI Innovation Center
                </li>
              </motion.ul>
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>International Affairs</h1>
                </li>
                <li className={menuStyles.menu_list_item}>Business Councils</li>
                <li className={menuStyles.menu_list_item}>Africa</li>
                <li className={menuStyles.menu_list_item}>America</li>
                <li className={menuStyles.menu_list_item}>Asia</li>
                <li className={menuStyles.menu_list_item}>Europe</li>
                <li className={menuStyles.menu_list_item}>Middle East</li>
                <li className={menuStyles.menu_list_item}>Oceania</li>
                <li className={menuStyles.menu_list_item}>ICC</li>
                <li className={menuStyles.menu_list_item}>ASEAN</li>
                <li className={menuStyles.menu_list_item}>CACCI</li>
              </motion.ul>
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>Membership</h1>
                </li>
                <li className={menuStyles.menu_list_item}>Local Chambers</li>
                <li className={menuStyles.menu_list_item}>2021 New Members</li>
                <li className={menuStyles.menu_list_item}>Charter Members</li>
                <li className={menuStyles.menu_list_item}>Life Members</li>
                <li className={menuStyles.menu_list_item}>
                  Regular/Direct Members
                </li>
                <li className={menuStyles.menu_list_item}>
                  Association Members
                </li>
                <li className={menuStyles.menu_list_item}>Affiliate Members</li>
                <li className={menuStyles.menu_list_item}>How to Join</li>
              </motion.ul>
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>Programs and Services</h1>
                </li>
                <li className={menuStyles.menu_list_item}>
                  Alternative Dispute Resolution
                </li>
                <li className={menuStyles.menu_list_item}>
                  APEC Business Travel Card
                </li>
                <li className={menuStyles.menu_list_item}>
                  FICCI Business Offers
                </li>
                <li className={menuStyles.menu_list_item}>
                  Business Opportunities
                </li>
                <li className={menuStyles.menu_list_item}>
                  Certificate of Origin
                </li>
                <li className={menuStyles.menu_list_item}>
                  Corporate Social Responsibility
                </li>
                <li className={menuStyles.menu_list_item}>
                  Market Encounter Goes to Manila
                </li>
                <li className={menuStyles.menu_list_item}>Trade Fairs</li>
                <li className={menuStyles.menu_list_item}>
                  Trainings and Seminars
                </li>
              </motion.ul>
              <motion.ul className={menuStyles.menu_list}>
                <li className={menuStyles.menu_list_item}>
                  <h1>Philippine Business Conference & Expo</h1>
                </li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
