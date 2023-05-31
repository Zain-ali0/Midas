import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../styles/servies.scss";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const servies = ({ t }) => {
  return (
    <div className='serivrs-container' id="Servies">
      <h3 className="title-servies">
        {t("servies-title")}
      </h3>
      <div className="servies-boxes">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="box box1">
          <div className="box-title">
            <p>{t("box-title-1")}</p>
            <AiOutlineArrowRight />
          </div>
          <div className="box-content">
            {t("box-1")}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="box box2">
          <div className="box-title">
            <p>{t("box-title-2")}</p>
            <AiOutlineArrowRight />
          </div>
          <div className="box-content">
            {t("box-2")}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="box box3">
          <div className="box-title">
            <p>{t("box-title-3")}</p>
            <Link to='/software'><AiOutlineArrowRight /></Link>
          </div>
          <div className="box-content">
            {t("box-3")}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2 }}
          className="box box4">
          <div className="box-title">
            <p>{t("box-title-4")}</p>
            <AiOutlineArrowRight />
          </div>
          <div className="box-content">
            {t("box-4")}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.4 }}
          className="box box5">
          <div className="box-title">
            <p>{t("box-title-5")}</p>
            <AiOutlineArrowRight />
          </div>
          <div className="box-content">
            {t("box-5")}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default servies