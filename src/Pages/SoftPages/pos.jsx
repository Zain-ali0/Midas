import React from 'react';
import { PosImg1, PosImg2, PosImg3 } from '../../img';
import "../../styles/soft.scss";
import { motion } from "framer-motion";

const Pos = ({ t }) => {
    return (
        <div className='soft-container soft-pages'>
            <div className='soft-title'>
                <h3>Post System</h3>
                <p>{t("pos-title")}</p>
            </div>

            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("pos-title-p1")}</h2>
                    <p>{t("pos-desc-p1")}</p>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={PosImg1} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={PosImg2} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("pos-title-p2")}</h2>
                    <p>{t("pos-desc-p2")}</p>
                </motion.div>
            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("pos-title-p3")}</h2>
                    <p>{t("pos-desc-p3")}</p>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={PosImg3} alt='img' />
                    <div className="img-border"></div>
                </motion.div>

            </div>

        </div>
    )
}

export default Pos