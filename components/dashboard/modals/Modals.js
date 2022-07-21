import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ChamberDetails from "./forms/ChamberDetails";

// CSS

import modalStyles from "../../../styles/dashboard/Modals.module.css";

// Icons

import { X, Save } from "react-feather";

const modalContainerVariants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 10,
    opacity: 0,
  },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.6,
    delay: 0.6,
  },
};

const CloseButton = ({ setIsModalOpen }) => {
  return (
    <>
      <div
        className={modalStyles.footer_btn_secondary}
        onClick={() => setIsModalOpen(false)}
      >
        <div className={modalStyles.footer_btn_icon}>
          <X />
        </div>
        <span>Close</span>
      </div>
    </>
  );
};

const SubmitButton = ({ setIsModalOpen }) => {
  return (
    <>
      <div
        className={modalStyles.footer_btn_primary}
        onClick={() => setIsModalOpen(false)}
      >
        <div className={modalStyles.footer_btn_icon}>
          <Save />
        </div>
        <span>Submit</span>
      </div>
    </>
  );
};

const Modals = ({ props }) => {
  const [activeModal, setActiveModal] = useState(<ChamberDetails />);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {props.isModalOpen && (
          <motion.div
            className={modalStyles.modal_container}
            variants={modalContainerVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition='transition'
            key={props.isModalOpen}
          >
            <div className={modalStyles.modal_inner}>
              <div className={modalStyles.modal_title}>
                <span>This is a modal</span>
                <div
                  className={modalStyles.btn_close}
                  onClick={() => {
                    props.setIsModalOpen(!props.isModalOpen);
                  }}
                >
                  <X />
                </div>
              </div>
              <div className={modalStyles.modal_inner_form}>{activeModal}</div>
              <div className={modalStyles.modal_footer}>
                <CloseButton setIsModalOpen={props.setIsModalOpen} />
                <SubmitButton setIsModalOpen={props.setIsModalOpen} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modals;
