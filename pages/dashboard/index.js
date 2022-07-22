import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Components

import Menu from "../../components/Menu";
import Meta from "../../components/Meta";
import DashboardNav from "../../components/dashboard/DashboardNav";
import Container from "../../components/dashboard/Container";
import AdminContainer from "../../components/dashboard/AdminContainer";
import AdminSidebar from "../../components/dashboard/AdminSidebar";

// CSS

import dashboardStyles from "../../styles/dashboard/Dashboard.module.css";

// Images

import SearchIcon from "../../public/icons/ic_search.png";

const dashboardVariants = {
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 10,
    opacity: 0,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.6,
    delay: 0.6,
  },
};

const Dashboard = () => {
  const [isUserAdmin, setIsUserAdmin] = useState(true);
  const [isAdminPanel, setIsAdminPanel] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Meta title='Dashboard' />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <DashboardNav props={{ isAdminPanel, setIsAdminPanel, isUserAdmin }} />
      <AnimatePresence exitBeforeEnter>
        {!isAdminPanel && (
          <>
            <motion.div
              className={dashboardStyles.dashboard_container}
              key={isAdminPanel}
              variants={dashboardVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition='transition'
            >
              <div className={dashboardStyles.dashboard_inner}>
                <div className='input_group w-100'>
                  <input
                    type='text'
                    name='name'
                    required
                    placeholder='Search Company Name'
                    className={dashboardStyles.input_dashboard_lg}
                  />
                  <div className={dashboardStyles.input_group_icon}>
                    <Image
                      src={SearchIcon}
                      objectFit='contain'
                      alt='Search Icon'
                    />
                  </div>
                </div>
                <div className={dashboardStyles.table_container}>
                  <Container />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {isAdminPanel && (
          <>
            <AdminSidebar
              isAdminPanel={isAdminPanel}
              key={`adminSidebar_${isAdminPanel}`}
            />
            <AdminContainer key={`adminContainer_${isAdminPanel}`} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
