import React from 'react';
import { AppImg1, AppImg2, AppImg3 } from "../../img";
import { motion } from "framer-motion";

const ecommerce = ({ t }) => {
    return (
        <div className='soft-container soft-pages'>
            <div className='soft-title'>
                <h3>E-commerce app</h3>
                <p>{t("app-title")}</p>

            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("app-title1")}</h2>
                    <p>{t("app-desc1")}</p>
                    <h2>{t("app-title1-2")}</h2>
                    <p>{t("app-desc1-2")}</p>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={AppImg1} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={AppImg2} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("app-title2")}</h2>
                    <p>{t("app-desc2")}</p>
                </motion.div>
            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>{t("app-title3")}</h2>
                    <p>{t("app-desc3")}</p>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={AppImg3} alt='img' />
                    <div className="img-border"></div>
                </motion.div>

            </div>

        </div>
    )
}

export default ecommerce