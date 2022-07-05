import React, { useState } from "react";
import Link from "next/link";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

const Advocacy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='Advocacy' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header title='Advocacy' />
          <div className='subpage_paragraph_container'>
            <div className='subpage_paragraph'>
              PCCI works closely with key government and legislative bodies in
              the formulation, development, implementation, and evaluation of
              government plans, policies, and programs through the PCCI Sectoral
              Committees. Membership in these committees, however, is a
              privilege granted only to PCCI members. It keeps everyone abreast
              with the issues besetting one’s industry or sector. Here, one gets
              a chance to directly influence the decision-making process within
              the context and realities of Philippine business and politics. ​
            </div>
            <div className='subpage_paragraph'>
              <ul className='ul_links'>
                <Link
                  href={{
                    pathname: "/advocacy/agriculture-and-fishery",
                  }}
                >
                  <li className='ul_links_item'>
                    <a>Agriculture and Fishery</a>
                  </li>
                </Link>
                <Link href='/advocacy/banking-and-capital-formation'>
                  <li className='ul_links_item'>
                    <a>Banking and Capital Formation</a>
                  </li>
                </Link>
                <Link href='/advocacy/corporate-governance'>
                  <li className='ul_links_item'>
                    <a>Corporate Governance</a>
                  </li>
                </Link>
                <Link href='/advocacy/energy-and-power'>
                  <li className='ul_links_item'>
                    <a>Energy and Power</a>
                  </li>
                </Link>
                <Link href='/advocacy/industry-and-trade'>
                  <li className='ul_links_item'>
                    <a>Industry and Trade</a>
                  </li>
                </Link>
                <Link href='/advocacy/infrastructure'>
                  <li className='ul_links_item'>
                    <a>Infrastructure</a>
                  </li>
                </Link>
                <Link href='/advocacy/innovation-and-science-and-technology'>
                  <li className='ul_links_item'>
                    <a>Innovation and Science and Technology</a>
                  </li>
                </Link>
                <Link href='/advocacy/intellectual-property'>
                  <li className='ul_links_item'>
                    <a>Intellectual Property</a>
                  </li>
                </Link>
                <Link href='/advocacy/legislation-and-taxation'>
                  <li className='ul_links_item'>
                    <a>Legislation and Taxation</a>
                  </li>
                </Link>
                <Link href='/advocacy/mining-and-mineral-resources'>
                  <li className='ul_links_item'>
                    <a>Mining and Mineral Resources</a>
                  </li>
                </Link>
                <Link href='/advocacy/sustainable-development-goals'>
                  <li className='ul_links_item'>
                    <a>Sustainable Development Goals</a>
                  </li>
                </Link>
                <Link href='/advocacy/transport-logistics'>
                  <li className='ul_links_item'>
                    <a>Transport Logistics</a>
                  </li>
                </Link>
                <Link href='/advocacy/urban-housing-development'>
                  <li className='ul_links_item'>
                    <a>Urban Housing Development</a>
                  </li>
                </Link>
                <Link href='/advocacy/youth'>
                  <li className='ul_links_item'>
                    <a>Youth</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advocacy;
