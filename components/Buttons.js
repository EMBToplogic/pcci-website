import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// CSS

import buttonStyles from "../styles/components/Buttons.module.css";

const Buttons = ({ ...props }) => {
  if (props.linkTo) {
    if (props.type === "primary") {
      return (
        <Link href={props.linkTo} replace>
          <a>
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
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={props.linkTo} replace>
          <a>
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
          </a>
        </Link>
      );
    }
  } else {
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
  }
};

export default Buttons;
