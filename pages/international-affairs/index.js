import React, { useState } from "react";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";

const InternationalAffairs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='International Affairs' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header title='International Affairs' />
          <div className='subpage_paragraph_container'>
            <div className='subpage_paragraph'>
              The Philippine Chamber of Commerce and Industry (PCCI) continues
              to play a major role in assisting its members cope with major
              developments in the global trade arena.
            </div>
            <div className='subpage_paragraph'>
              To date, PCCI has signed over 200 co-operation agreements with
              national chambers of commerce and international agencies. These
              agreements, which call for trade, investment, technological
              linkages and exchanges of trade delegations and business leads,
              among others, have enabled the PCCI to actively push for the
              interests of the Philippine business sector vis-à-vis other
              economies.
            </div>
            <div className='subpage_paragraph'>
              To implement the provisions of the agreements, the PCCI has
              established 54 business councils covering Asia-Pacific, Americas,
              Europe, Middle East and African regions. These business councils
              meet with their respective counterparts, through the Joint
              Business Council (JBC) meetings, to talk about specific economic
              agenda as well as issues that hinder efficient market access such
              as food labeling, customs rules and regulations.
            </div>
            <div className='subpage_paragraph'>
              PCCI business councils also send major business missions abroad,
              not only to traditional trading partners but also to emerging
              markets as well, providing more market prospects for its members.
              Efforts are also on-going to link with other major economic and
              development councils around the world.
            </div>
            <div className='subpage_paragraph'>
              The Chamber also organizes business forums, networking sessions,
              site visits and related activities for inbound delegations
              organized by its partner CCIs providing its members and attached
              organizations the setting to discuss potential joint ventures with
              foreign companies.
            </div>
            <div className='subpage_paragraph'>
              The PCCI also plays an active role in major international business
              organizations like the Association of South East Asian Nations –
              Business Advisory Council (ASEAN-BAC), International Chambers of
              Commerce (ICC) and the Confederation of Asia-Pacific Chambers of
              Commerce and Industry (CACCI). Participation in these
              organizations further strengthens the PCCI's international
              linkages and provides venues to engage its foreign partners in
              tackling trade and investment cooperation issues.
            </div>
            <div className='subpage_paragraph'>
              Serving as the PCCI’s primary coordinating group with the
              international community, the International Affairs Committee is
              headed by the following officers:
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternationalAffairs;
