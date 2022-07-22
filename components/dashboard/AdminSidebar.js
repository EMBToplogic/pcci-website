import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// CSS

import adminStyles from "../../styles/components/Admin.module.css";

// Images

import Logo from "../../public/images/pcci_dashboard_logo.png";

// Icons

import { Home } from "react-feather";

const AdminSidebar = ({ isAdminPanel }) => {
  const adminSidebarVariants = {
    initial: {
      width: "0px",
    },
    animate: {
      width: "300px",
    },
    exit: {
      width: "0px",
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  };
  return (
    <>
      <motion.div
        className={adminStyles.sidebar_container}
        variants={adminSidebarVariants}
        initial='initial'
        animate={isAdminPanel ? "animate" : null}
        exit='exit'
        transition={adminSidebarVariants.transition}
        key={isAdminPanel}
      >
        <motion.div className={adminStyles.sidebar_image_cont}>
          <Image src={Logo} alt='dashboard logo' />
        </motion.div>
        <motion.ul className={adminStyles.sidebar_list}>
          <motion.li className={adminStyles.sidebar_list_item}>
            <Home />
            <span className={adminStyles.sidebar_list_title}>Home</span>
          </motion.li>
          <motion.li className={adminStyles.sidebar_list_item}>
            <Home />
            <span className={adminStyles.sidebar_list_title}>
              Subscribed Members
            </span>
          </motion.li>
          <motion.li className={adminStyles.sidebar_list_item}>
            <Home />
            <span className={adminStyles.sidebar_list_title}>Chambers</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default AdminSidebar;
