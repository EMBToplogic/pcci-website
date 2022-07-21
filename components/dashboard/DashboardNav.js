import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// CSS

import dashboardStyles from "../../styles/dashboard/Dashboard.module.css";
import navStyles from "../../styles/components/Navbar.module.css";

// Images

import PCCI_Logo from "../../public/images/img_pcci_logo.png";
import SampleImage from "../../public/images/img_pcci_bldg.png";

// Icons

import { Bell, ChevronDown, Terminal, PieChart } from "react-feather";

const DropdownNotifs = ({ setIsNotifHovered, setIsNewNotifs }) => {
  const dropdownVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 20,
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

  const whileHover = {
    backgroundColor: "var(--secondary)",
    scale: 1.1,
    x: 0,
    borderRadius: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  };

  const customStyles = {
    zIndex: 32767,
    color: "var(--white)",
    fontSize: 12,
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
        onMouseEnter={() => setIsNotifHovered(true)}
        onMouseLeave={() => setIsNewNotifs(false)}
        style={customStyles}
      >
        <motion.li className={navStyles.dropdown_item}>
          You have no new notifications.
        </motion.li>
      </motion.ul>
    </>
  );
};

const Dropdown = ({
  setIsProfileHovered,
  isUserAdmin,
  isAdminPanel,
  setIsAdminPanel,
}) => {
  const dropdownVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 20,
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

  const whileHover = {
    backgroundColor: "var(--secondary)",
    scale: 1.1,
    x: 0,
    borderRadius: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  };

  const customStyles = {
    zIndex: 32767,
    color: "var(--white)",
    fontSize: 12,
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
        onMouseEnter={() => setIsProfileHovered(true)}
        style={customStyles}
      >
        <Link href={"./profile"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>View Profile</a>
          </motion.li>
        </Link>
        <Link href={"./settings"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Change my Subscription Settings</a>
          </motion.li>
        </Link>
        <Link href={"./email-settings"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Change my Email Address</a>
          </motion.li>
        </Link>
        <Link href={"./change-password"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Change Password</a>
          </motion.li>
        </Link>
        <div className='divider'>&nbsp;</div>
        <Link href={"./data-privacy"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Privacy Policy</a>
          </motion.li>
        </Link>
        <Link href={"./terms-of-use"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Privacy Policy</a>
          </motion.li>
        </Link>
        {isUserAdmin && (
          <>
            <div className='divider'>&nbsp;</div>
            <motion.li
              className={navStyles.dropdown_item}
              whileHover={whileHover}
              onClick={() => {
                setIsAdminPanel(!isAdminPanel);
              }}
            >
              {`${isAdminPanel ? "Exit" : "Go to"} Admin Panel`}
            </motion.li>
          </>
        )}
        <div className='divider'>&nbsp;</div>
        <Link href={"../"} replace>
          <motion.li
            className={navStyles.dropdown_item}
            whileHover={whileHover}
          >
            <a>Sign Out</a>
          </motion.li>
        </Link>
      </motion.ul>
    </>
  );
};

const DashboardNav = ({ props }) => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isNotifHovered, setIsNotifHovered] = useState(false);
  const [isNewNotifs, setIsNewNotifs] = useState(true);

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
    <motion.div
      className={`${dashboardStyles.dashboard_nav} ${
        props.isAdminPanel ? dashboardStyles.admin : ""
      }`}
    >
      <div className={dashboardStyles.dashboard_logo}>
        <Image src={PCCI_Logo} alt='PCCI Logo' objectFit='contain' />
      </div>
      <div className={dashboardStyles.dashboard_nav_profile}>
        <div
          className={`${dashboardStyles.dashboard_nav_buttons} ${
            props.isAdminPanel ? dashboardStyles.admin_sec : ""
          }`}
          onClick={() => {
            props.setIsAdminPanel(!props.isAdminPanel);
          }}
        >
          <AnimatePresence>
            {props.isAdminPanel && <Terminal />}
            {!props.isAdminPanel && <PieChart />}
          </AnimatePresence>
        </div>
        {props.isUserAdmin && (
          <div
            className={`${dashboardStyles.dashboard_nav_notif} ${
              props.isAdminPanel ? dashboardStyles.admin_sec : ""
            } ${isNewNotifs ? dashboardStyles.active : ""}`}
            onMouseEnter={() => {
              setIsNotifHovered(true);
            }}
            onMouseLeave={() => {
              setIsNotifHovered(false);
              setIsNewNotifs(false);
            }}
          >
            <Bell />
            <AnimatePresence>
              {isNotifHovered && (
                <DropdownNotifs
                  setIsNotifHovered={() => {
                    setIsNotifHovered;
                  }}
                  setIsNewNotifs={() => {
                    setIsNewNotifs;
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        )}

        <div
          className={`${dashboardStyles.dashboard_nav_user_info} ${
            props.isAdminPanel ? dashboardStyles.admin_sec : ""
          }`}
          onMouseEnter={() => {
            setIsProfileHovered(true);
          }}
          onMouseLeave={() => {
            setIsProfileHovered(false);
          }}
        >
          <div className={dashboardStyles.dashboard_nav_user_image}>
            <Image
              src={SampleImage}
              objectFit='none'
              layout='fill'
              alt='User Image'
            />
          </div>
          <div className={dashboardStyles.dashboard_nav_user_name}>
            <span>Bruma, Evan M.</span>
            <motion.div
              className={dashboardStyles.dropdown_caret_cont}
              variants={caretVariant}
              initial='initial'
              animate={isProfileHovered ? "animate" : "initial"}
            >
              <ChevronDown />
            </motion.div>
          </div>
          <AnimatePresence>
            {isProfileHovered && (
              <Dropdown
                setIsProfileHovered={() => {
                  setIsProfileHovered;
                }}
                isUserAdmin={props.isUserAdmin}
                isAdminPanel={props.isAdminPanel}
                setIsAdminPanel={props.setIsAdminPanel}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardNav;
