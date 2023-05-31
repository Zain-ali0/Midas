import React from 'react';
import "../styles/soft.scss";
import { SoftImg1, SoftImg2, SoftImg3 } from '../img';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const SoftWareProject = ({ t }) => {

    return (
        <div className='soft-container'>

            <div
                className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>POS system</h2>
                    <p>{t("soft-desc1")}</p>
                    <Link to="/pos">{t("soft-btn")}</Link>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img
                        src={SoftImg1} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
            </div>
            <div
                className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img src={SoftImg2} alt='img' />
                    <div className="img-border"></div>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>E-commerce app</h2>
                    <p>{t("soft-desc2")}</p>
                    <Link to="/ecommerce">{t("soft-btn")}</Link>
                </motion.div>
            </div>
            <div className="project">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="content">
                    <h2>Midas clinic</h2>
                    <p>{t("soft-desc3")}</p>
                    <Link to='/clinic'>{t("soft-btn")}</Link>
                </motion.div>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="img">
                    <img
                        src={SoftImg3} alt='img' />
                    <div className="img-border"></div>
                </motion.div>

            </div>

        </div>
    )
}

export default SoftWareProject