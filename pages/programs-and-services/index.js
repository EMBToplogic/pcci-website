import React, { useState } from "react";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

const ProgramsAndServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='Programs and Services' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header title='Programs and Services' />
          <div className='subpage_paragraph_container'>
            <div className='subpage_paragraph'>
              PCCI offers advocacy seminars to its members to keep them abreast
              of the latest information on key issues affecting business, and to
              draw valuable inputs and feedback that would be needed for the
              formulation of PCCI positions and advocacy papers. Likewise, the
              Chamber also provides in-house trainings, through the Philippine
              Chamber Development Institute (PhilCDI), that enhance the
              capabilities of local chambers and industry associations and
              provide them better and up-to-date services thereby making micro,
              small and medium enterprises globally competitive. ​
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsAndServices;
