import React from "react";
import Image from "next/image";

// CSS

import containerStyles from "../../styles/dashboard/Container.module.css";

// Icons

import RecentSearch from "../../public/icons/ic_recent_search.png";
import Email from "../../public/icons/ic_email_sm.png";
import Address from "../../public/icons/ic_address_sm.png";

// Data

const sampleRecentData = [
  {
    date: "June 15, 2022",
    data: [
      {
        companyname: "Abenson Inc. Philippines",
        isPinned: true,
        email: "info@abenson.com",
        address:
          "7th floor Waltermart North Edsa Munoz, 8001 North Edsa, Barangay Veterans Village Quezon City; National Capital Region; Postal Code: 1100",
      },
      {
        companyname: "Wilcon Depot Inc.",
        isPinned: true,
        email: "investor_relations@wilcon.com.ph",
        address:
          "No. 90 E. Rodriguez Jr. Avenue, Ugong Norte, 6th Floor, Quezon City, MM 1110",
      },
    ],
  },
  {
    date: "June 14, 2022",
    data: [
      {
        companyname: "Ayala Corporation",
        isPinned: true,
        email: "acquery@ayala.com.ph",
        address:
          "34/F, Tower One and Exchange Plaza, Ayala Triangle, Ayala Avenue, Makati City",
      },
    ],
  },
];

const SearchesContainer = () => {
  return (
    <div className={containerStyles.search_container}>
      {sampleRecentData.map((searchData, index) => {
        return (
          <React.Fragment key={index}>
            <div className={containerStyles.search_date}>
              <span className={containerStyles.search_date_icon}>
                <Image src={RecentSearch} alt='Recent Search Icon' />
              </span>
              {searchData.date}
            </div>
            <div className={containerStyles.search_company}>
              {searchData.data.map((companydetails, index) => {
                return (
                  <div
                    className={containerStyles.company_details}
                    key={`company_${index}`}
                  >
                    <div className={containerStyles.company_name}>
                      {companydetails.companyname}
                    </div>
                    <div className={containerStyles.company_sub_detail}>
                      <span className={containerStyles.search_date_icon}>
                        <Image src={Email} alt='Email Icon' />
                      </span>
                      {companydetails.email}
                    </div>
                    <div className={containerStyles.company_sub_detail}>
                      <span className={containerStyles.search_date_icon}>
                        <Image src={Address} alt='Address Icon' />
                      </span>
                      {companydetails.address}
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Container = () => {
  return (
    <div className={containerStyles.container_main}>
      <div className={containerStyles.header_container}>
        <div className={containerStyles.header}>Recent Searches</div>
        <div className={`${containerStyles.subheader} link`}>Clear All</div>
      </div>
      <div className={containerStyles.container_inner}>
        <SearchesContainer />
      </div>
    </div>
  );
};

export default Container;
