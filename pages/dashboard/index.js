import React, { useState } from "react";
import Image from "next/image";

// Components

import Menu from "../../components/Menu";
import Meta from "../../components/Meta";
import DashboardNav from "../../components/dashboard/DashboardNav";
import Container from "../../components/dashboard/Container";

// CSS

import dashboardStyles from "../../styles/dashboard/Dashboard.module.css";

// Images

import SearchIcon from "../../public/icons/ic_search.png";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='Dashboard' />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <DashboardNav />
      <div className={dashboardStyles.dashboard_container}>
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
              <Image src={SearchIcon} objectFit='contain' alt='Search Icon' />
            </div>
          </div>
          <div className={dashboardStyles.table_container}>
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
