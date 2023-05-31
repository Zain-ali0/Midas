import React from 'react';
import { ClinicImg1, ClinicImg2, ClinicImg3 } from '../../img';
import { motion } from "framer-motion";

const clinic = ({ t }) => {
    return (
        <div className='soft-container soft-pages'>
            <div className='soft-container'>
                <div className='soft-title'>
                    <h3>Pos System</h3>
                    <p>{t("clinic-title")}</p>
                </div>

                <div
                    className="project">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="content">
                        <h2>{t("clinic-title1")}</h2>
                        <p>{t("clinic-desc1")}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="img">
                        <img src={ClinicImg1} alt='img' />
                        <div className="img-border"></div>
                    </motion.div>
                </div>
                <div className="project">
                    <div className="img">
                        <motion.img
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                            src={ClinicImg2} alt='img' />
                        <div className="img-border"></div>
                    </div>
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="content">
                        <h2>{t("clinic-title2")}</h2>
                        <p>{t("clinic-desc2")}</p>
                    </motion.div>
                </div>
                <div className="project">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="content">
                        <h2>{t("clinic-title3")}</h2>
                        <p>{t("clinic-desc3")}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                        className="img">
                        <img src={ClinicImg3} alt='img' />
                        <div className="img-border"></div>
                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default clinic