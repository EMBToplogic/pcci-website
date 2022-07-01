import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components

import Buttons from "./Buttons";

// CSS

import navStyles from "../styles/components/Navbar.module.css";

// Icons

import { Menu } from "react-feather";

// Images

import PCCI_Logo from "../public/images/img_pcci_logo.png";

const Navbar = ({ isLogin, isSignUp }) => {
  return (
    <div className={navStyles.navbar_container}>
      <div className={navStyles.navbar_img_container}>
        <Link href='/'>
          <a>
            <Image
              src={PCCI_Logo}
              layout='fill'
              objectFit='contain'
              alt='Philippine Chamber of Commerce and Industry Logo'
            />
          </a>
        </Link>
      </div>
      {!isLogin && (
        <ul className={navStyles.navbar_list}>
          <li className={navStyles.navbar_list_item}>
            <Link href='about-us'>
              <a>About Us</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='careers'>
              <a>Careers</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='membership'>
              <a>Membership</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='local-chambers'>
              <a>Local Chambers</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='advocacy'>
              <a>Advocacy</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='international-affairs'>
              <a>International Affairs</a>
            </Link>
          </li>
          <li className={navStyles.navbar_list_item}>
            <Link href='programs'>
              <a>Programs</a>
            </Link>
          </li>
        </ul>
      )}
      <div className={navStyles.navbar_btn_container}>
        <Buttons
          text={
            <Link href='login'>
              <a>Login</a>
            </Link>
          }
          type={!isLogin ? "secondary" : "primary"}
          customStyles={{ margin: "0px 5px" }}
        />
        <Buttons
          text={
            <Link href='sign-up'>
              <a>Sign-up</a>
            </Link>
          }
          type={!isSignUp ? "secondary" : "primary"}
          customStyles={{ margin: "0px 5px" }}
        />
        <Menu style={{ margin: "15px" }} />
      </div>
    </div>
  );
};

export default Navbar;
