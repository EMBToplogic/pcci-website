import React, { useState } from "react";

// Components

import Modals from "./modals/Modals";

// CSS

import modalStyles from "../../styles/dashboard/Modals.module.css";

const AdminContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Modals props={{ isModalOpen, setIsModalOpen }} />
      <div onClick={() => setIsModalOpen(true)}></div>
    </>
  );
};

export default AdminContainer;
