import React from "react";
import { motion } from "framer-motion";

// CSS

import buttonStyles from "../styles/components/Buttons.module.css";

const Buttons = ({ ...props }) => {
  if (props.type === "primary") {
    return (
      <motion.div
        className={buttonStyles.button_primary}
        onClick={props.onClick ? () => props.onClick() : null}
        style={props.customStyles}
        whileHover={{
          backgroundColor: "var(--primary)",
        }}
      >
        {props.text}
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={buttonStyles.button_secondary}
        onClick={props.onClick ? () => props.onClick() : null}
        style={props.customStyles}
        whileHover={{
          backgroundColor: "var(--primary)",
        }}
      >
        {props.text}
      </motion.div>
    );
  }
};

export default Buttons;
