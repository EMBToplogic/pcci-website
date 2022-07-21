import React, { useState } from "react";

// Components

import Modals from "./modals/Modals";

const AdminContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modals props={{ isModalOpen, setIsModalOpen }} />
      <div onClick={() => setIsModalOpen(true)}>
        Click here to access the modal
      </div>
    </>
  );
};

export default AdminContainer;
