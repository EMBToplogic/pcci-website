import React, { useEffect, useState } from "react";
import Image from "next/image";

// Components

import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";

// CSS

import loginStyles from "../../styles/Login.module.css";

// Images

import PCCI_Bldg from "../../public/images/img_pcci_bldg.png";

// Icons

import Email from "../../public/icons/ic_email.png";
import Show from "../../public/icons/ic_pass_shown.png";
import Hide from "../../public/icons/ic_pass_hidden.png";
import Buttons from "../../components/Buttons";
import Checkbox from "../../components/Checkbox";

const Login = () => {
  const [passImage, setPassImage] = useState(Show);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  useEffect(() => {
    if (isPasswordShown) {
      setPassImage(Hide);
    } else {
      setPassImage(Show);
    }
  }, [isPasswordShown]);
  return (
    <>
      <Navbar isLogin={true} />
      <Meta title='Login' />
      <div className={loginStyles.login_container}>
        <div className={loginStyles.form_container}>
          <h1 className={loginStyles.form_head}>Welcome</h1>
          <form style={{ width: "100%" }}>
            <div className='input_group'>
              <label>Email Address</label>
              <input type='text' name='name' required />
              <div className='input_group_icon'>
                <Image src={Email} layout='fill' objectFit='contain' />
              </div>
            </div>
            <div className='input_group'>
              <label>Password</label>
              <input
                type={isPasswordShown ? "text" : "password"}
                name='name'
                required
              />
              <div className='input_group_icon'>
                <Image
                  src={passImage}
                  layout='fill'
                  objectFit='contain'
                  onClick={() => {
                    setIsPasswordShown(!isPasswordShown);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className={loginStyles.form_button_group}>
              <Buttons
                text='Sign-Up'
                type='secondary'
                customStyles={{
                  width: "50%",
                  height: 60,
                }}
              />
              <Buttons
                text='Login'
                type='primary'
                customStyles={{
                  width: "50%",
                  height: 60,
                }}
              />
            </div>
            <Checkbox title={"Remember Me"} />
          </form>
        </div>
        <div className={loginStyles.image_container}>
          <div className={loginStyles.image_overlay}></div>
          <Image
            src={PCCI_Bldg}
            layout='fill'
            objectFit='cover'
            className={loginStyles.image_main}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
