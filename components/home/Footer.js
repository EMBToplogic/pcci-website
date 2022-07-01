import React from "react";
import Image from "next/image";
import Link from "next/link";

// CSS

import footerStyles from "../../styles/components/home/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footer_main}>
      <div className={footerStyles.footer_col}>
        <Image
          src={"/../public/images/img_pcci_logo.png"}
          layout='fill'
          objectFit='contain'
          alt='Philippine Chamber of Commerce and Industry Logo'
        />
      </div>
      <div className={footerStyles.footer_col}>
        <h1 className='footer_title'>Links</h1>
        <ul className={footerStyles.footer_list}>
          <li className={footerStyles.footer_list_item}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/careers'>
              <a>Careers</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/membership'>
              <a>Membership</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/local-chambers'>
              <a>Local Chambers</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/advocacy'>
              <a>Advocacy</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/international-affairs'>
              <a>International Affairs</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/programs'>
              <a>Programs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={footerStyles.footer_col}>
        <h1 className='footer_title'>&nbsp;</h1>
        <ul className={footerStyles.footer_list}>
          <li className={footerStyles.footer_list_item}>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/chamber-news'>
              <a>Chamber News</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/position-chambers'>
              <a>Position Chambers</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/press-releases'>
              <a>Press Releases</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/e-newsletters'>
              <a>E-Newsletters</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/news'>
              <a>News Archives</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='/publications'>
              <a>Publications</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={footerStyles.footer_col}>
        <h1 className='footer_title'>Social</h1>
        <ul className={footerStyles.footer_list}>
          <li className={footerStyles.footer_list_item}>
            <Link href='https://www.facebook.com/pcciofficial/'>
              <a>Facebook</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='https://twitter.com/phil_chamber'>
              <a>Twitter</a>
            </Link>
          </li>
          <li className={footerStyles.footer_list_item}>
            <Link href='https://www.instagram.com/phil_chamber/'>
              <a>Instagram</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={footerStyles.footer_col}>
        © Copyright 2017 Philippine Chamber of Commerce & Industry. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
