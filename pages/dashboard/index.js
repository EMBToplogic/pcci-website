import React, { useState } from "react";

// Components

import Menu from "../../components/Menu";
import Meta from "../../components/Meta";
import DashboardNav from "../../components/dashboard/DashboardNav";

// CSS

import dashboardStyles from "../../styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='Dashboard' />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <DashboardNav />
      <div className={dashboardStyles.dashboard_container}></div>
    </>
  );
};

export default Dashboard;
