import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Components

import AdvocacyData from "../../components/advocacy/AdvocacyData.json";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

// CSS

import advocacyStyles from "../../styles/advocacy/Advocacy.module.css";

const AdvocacySubpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeData, setActiveData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      if (!id) return null;

      const filteredData = AdvocacyData.filter((filteredItem, index) => {
        if (filteredItem.id === id) {
          return filteredItem.data;
        }
      });

      setActiveData(filteredData);
    }
  }, [router.isReady, router]);

  return (
    <>
      <Meta title={`${activeData ? activeData[0].name : "Advocacy"}`} />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      {activeData && (
        <div className='subpage_container'>
          <div className='subpage_inner_container'>
            <Header
              title={activeData[0].name}
              style={{
                fontSize: "3em",
              }}
            />
            <div className='subpage_paragraph'>
              {activeData[0].data.description}
            </div>
            <div className={advocacyStyles.staff_container}>
              {activeData[0].data.staff.map((staff, index) => {
                return (
                  <div
                    className={advocacyStyles.staff_item}
                    key={`${staff.name}_${staff.title}_${index}`}
                  >
                    <div>
                      <h2>{staff.name}</h2>
                      <div></div>
                      <div>{staff.company}</div>
                      <div>{staff.desc}</div>
                    </div>
                    <div className={advocacyStyles.staff_title}>
                      <h3>{staff.title}</h3>
                      {staff.subcateg && <div>{staff.subcateg}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvocacySubpage;
