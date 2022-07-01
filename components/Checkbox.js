import React, { useState } from "react";
import {
  animated,
  useSpring,
  config,
  useChain,
  useSpringRef,
} from "@react-spring/web";

// CSS

import checkboxStyles from "../styles/components/Checkbox.module.css";

const Checkbox = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#6D7EFF" : "transparent",
    borderColor: isChecked ? "#6D7EFF" : "#fff",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <>
      <label
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        <input
          type='checkbox'
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <animated.svg
          className={`${checkboxStyles.checkbox} ${
            isChecked ? checkboxStyles.checkbox_active : ""
          }`}
          aria-hidden='true'
          viewBox='0 0 15 11'
          fill='none'
          style={checkboxAnimationStyle}
        >
          <animated.path
            d='M15.455,9l-6.5,6.5L6,12.545'
            transform='translate(-2.879 -6.879)'
            fill='none'
            stroke={isChecked ? "#fff" : "none"}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </animated.svg>
        {title}
      </label>
    </>
  );
};

export default Checkbox;
