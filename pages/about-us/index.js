import React, { useState } from "react";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

// CSS

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='About Us' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header title='About Us' />
          <div className='subpage_paragraph_container'>
            <div className='subpage_paragraph'>
              The Philippine Chamber of Commerce and Industry (PCCI) is a
              non-stock, non-profit, non-government business organization
              comprised of small, medium, and large enterprises, local chambers
              and industry associations representing various sectors of
              business, all working together to foster a healthier Philippine
              economy and improve the viability of business in the community.
            </div>
            <div className='subpage_paragraph'>
              PCCI is the result of a merger in July 1, 1978 of Chamber of
              Commerce of the Philippines, established in July 19, 1903 and the
              Philippine Chamber of Industry, established in March 4, 1950. PCCI
              is recognized as the “sole official representative and voice of
              entire private business community” by virtue of Letter of
              Instruction No. 780 signed by then President Ferdinand Marcos.
            </div>
            <Header
              title='Vission and Mission'
              style={{
                fontSize: "2em",
              }}
              noBorder={true}
            />

            <h2>Vision</h2>

            <div className='subpage_paragraph'>
              PCCI is the voice of Philippine business recognized by government
              and international institutions. As a proactive catalyst of
              development, PCCI promotes and supports the drive for globally
              competitive Philippine enterprises in partnership with government,
              local chambers, and other business organizations.
            </div>

            <h2>Mission</h2>

            <div className='subpage_paragraph'>
              The main responsibility of PCCI is to provide focused advocacy for
              business growth and sustainable development by providing business
              services for the advancement of grassroots entrepreneurship,
              chamber development, international trade relations, business
              innovation and excellence, and operating efficiency. These will be
              achieved through a professional organization working in close
              cooperation with various stakeholders in public and private
              sectors. ​
            </div>

            <Header
              title='Organizational Thrusts'
              style={{
                fontSize: "2em",
              }}
              noBorder={true}
            />
            <div className='subpage_paragraph'>
              To operationalize its MISSION and VISION, PCCI adopts the
              following strategic thrusts:
            </div>

            <ul className='ul_secondary'>
              <li>
                Steadfast support for the promotion and growth of micro, small
                and medium enterprises nationwide;
              </li>
              <li>
                Pioneer policy reform initiatives to improve the business
                climate and sustain socio-economic development;
              </li>
              <li>
                Spearhead national and international networking through business
                matching, trade missions, and information sharing;
              </li>
              <li>
                Support capability building for local chambers and industry
                associations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
