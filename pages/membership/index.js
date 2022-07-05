import React, { useState } from "react";
import Link from "next/link";

// Components

import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import Meta from "../../components/Meta";
import Buttons from "../../components/Buttons";

// CSS

import membershipStyles from "../../styles/membership/Membership.module.css";

const Membership = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Meta title='Membership' />
      <BackButton />
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      <div className='subpage_container'>
        <div className='subpage_inner_container'>
          <Header
            title='Membership'
            customButton={
              <Link href='/new-members'>
                <a>
                  <Buttons text={"2021 New Members"} type='primary' />
                </a>
              </Link>
            }
          />
          <div className='subpage_paragraph_container'>
            <h2>The PCCI Membership</h2>
            <div className='subpage_paragraph'>
              The PCCI is home to 1,901 members represented by private companies
              and enterprises, industry associations, local chambers of commerce
              and foundations operating in the Philippines. Majority of these
              member-companies are small and medium industries which are
              primarily the prime movers of the Philippine economy. They
              represent different areas of activities such as export and import,
              manufacturing & processing, distribution & logistics, among
              others.
            </div>
            <div className='subpage_paragraph'>
              The affairs and activities of the members in general, are being
              supervised and coordinated by the Membership Committee of the
              PCCI. Aside from organizing meetings and special events for
              members, the Committee also oversees the recruitment of new
              members and retention of active ones. The Committee is composed
              of:
            </div>
            <div className={membershipStyles.table_container}>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>Director</div>
                <div className={membershipStyles.row_name}>
                  <span>Ms. Alegria &quot;Bing&quot; S. Limjoco</span>
                </div>
              </div>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>Chairman</div>
                <div className={membershipStyles.row_name}>
                  <span>Mr. Antonio A. Lopa</span>
                </div>
              </div>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>
                  Co-Chair for Programs and Meetings, Recruitment and Retention
                </div>
                <div className={membershipStyles.row_name}>
                  <span>Ms. Socorro R. Bautista</span>
                </div>
              </div>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>
                  Co-Chair for Special Projects - Sustainable Development Goals
                </div>
                <div className={membershipStyles.row_name}>
                  <span>Mr. Joel Ryan Tugade</span>
                </div>
              </div>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>Members</div>
                <div className={membershipStyles.row_name}>
                  <span>Ms. Rebecca Bucad</span>
                  <span>Mr. Andy Manalac</span>
                  <span>Mr. Leonard Cincochan</span>
                  <span>Mr. Edward Ngo</span>
                </div>
              </div>
              <div className={membershipStyles.table_row}>
                <div className={membershipStyles.row_title}>
                  Secretariat In-Charge
                </div>
                <div className={membershipStyles.row_name}>
                  <span>Ms. Edith Suelto</span>
                  <span>edith.suelto@philippinechamber.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
